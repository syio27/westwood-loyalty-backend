package com.westwood.service.impl;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.BonusEventDto;
import com.westwood.common.dto.BonusExpiringItemDto;
import com.westwood.common.dto.BonusesExpiringSoonDto;
import com.westwood.common.dto.ClientBonusExpiringDto;
import com.westwood.common.dto.ExpiryGroupDto;
import com.westwood.common.dto.PagedBonusHistoryResponse;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusExpiryNotification;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusType;
import com.westwood.domain.BonusTypeEnum;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import com.westwood.event.BonusGrantedEvent;
import com.westwood.repository.BonusTypeRepository;
import com.westwood.domain.BonusConsumption;
import com.westwood.domain.ManualBonusRevoke;
import com.westwood.domain.User;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.BonusConsumptionRepository;
import com.westwood.repository.BonusExpiryNotificationRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.ManualBonusRevokeRepository;
import com.westwood.repository.MessageRecordRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.UserRepository;
import com.westwood.service.BonusService;
import com.westwood.service.EventSourcingService;
import com.westwood.util.mapper.BonusMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import com.westwood.domain.BonusRevoked;

@Service
@Transactional
public class BonusServiceImpl implements BonusService {

    private final BonusEventRepository bonusEventRepository;
    private final BonusConsumptionRepository bonusConsumptionRepository;
    private final BonusExpiryNotificationRepository bonusExpiryNotificationRepository;
    private final ManualBonusRevokeRepository manualBonusRevokeRepository;
    private final MessageRecordRepository messageRecordRepository;
    private final UserRepository userRepository;
    private final BonusTypeRepository bonusTypeRepository;
    private final PaymentTransactionRepository paymentRepository;
    private final ClientRepository clientRepository;
    private final EventSourcingService eventSourcingService;
    private final BonusMapper bonusMapper;

    public BonusServiceImpl(BonusEventRepository bonusEventRepository,
                           BonusConsumptionRepository bonusConsumptionRepository,
                           BonusExpiryNotificationRepository bonusExpiryNotificationRepository,
                           ManualBonusRevokeRepository manualBonusRevokeRepository,
                           MessageRecordRepository messageRecordRepository,
                           UserRepository userRepository,
                           BonusTypeRepository bonusTypeRepository,
                           PaymentTransactionRepository paymentRepository,
                           ClientRepository clientRepository,
                           EventSourcingService eventSourcingService,
                           BonusMapper bonusMapper) {
        this.bonusEventRepository = bonusEventRepository;
        this.bonusConsumptionRepository = bonusConsumptionRepository;
        this.bonusExpiryNotificationRepository = bonusExpiryNotificationRepository;
        this.manualBonusRevokeRepository = manualBonusRevokeRepository;
        this.messageRecordRepository = messageRecordRepository;
        this.userRepository = userRepository;
        this.bonusTypeRepository = bonusTypeRepository;
        this.paymentRepository = paymentRepository;
        this.clientRepository = clientRepository;
        this.eventSourcingService = eventSourcingService;
        this.bonusMapper = bonusMapper;
    }

    /**
     * Grants cashback bonus for a payment using the BASIC_CASHBACK bonus type.
     * Note: This method is primarily used internally. For new payments, EventBonusService.processPaymentBonuses() is preferred.
     */
    @Override
    public void grantBonus(Long paymentId, Long clientId, BigDecimal paymentAmount) {
        // Try to use new BonusType system first
        BonusType cashbackBonus = bonusTypeRepository.findByTypeAndEnabledTrue(BonusTypeEnum.BASIC_CASHBACK)
                .orElse(null);

        if (cashbackBonus != null && cashbackBonus.getBonusPercentage() != null) {
            BigDecimal bonusAmount = paymentAmount.multiply(cashbackBonus.getBonusPercentage())
                    .divide(BigDecimal.valueOf(100), 2, java.math.RoundingMode.HALF_UP);

            PaymentTransaction payment = paymentRepository.findById(paymentId)
                    .orElseThrow(() -> new ResourceNotFoundException("Payment with id '" + paymentId + "' not found"));

            BonusGranted bonusGranted = new BonusGranted();
            bonusGranted.setClient(payment.getClient());
            bonusGranted.setEventId(UUID.randomUUID());
            bonusGranted.setBonusAmount(bonusAmount);
            bonusGranted.setPaymentTransaction(payment);
            bonusGranted.setBonusPercentage(cashbackBonus.getBonusPercentage());
            bonusGranted.setPaymentAmount(paymentAmount);
            bonusGranted.setBonusType(cashbackBonus);
            bonusGranted.setGrantReason("CASHBACK");

            // Calculate expiration date if expirationDays is set
            if (cashbackBonus.getExpirationDays() != null && cashbackBonus.getExpirationDays() > 0) {
                java.time.LocalDateTime expiresAt = java.time.LocalDateTime.now().plusDays(cashbackBonus.getExpirationDays());
                bonusGranted.setExpiresAt(expiresAt);
            }

            BonusGranted savedBonus = bonusEventRepository.save(bonusGranted);

            // Create and append BonusGranted event
            BonusGrantedEvent event = new BonusGrantedEvent(
                    savedBonus.getId(),
                    payment.getTxId(),
                    paymentId,
                    clientId,
                    bonusAmount,
                    cashbackBonus.getBonusPercentage(),
                    paymentAmount
            );
            eventSourcingService.appendBonusGrantedEvent(event);
            return;
        }

        // If no BASIC_CASHBACK bonus type is configured, throw an exception
        throw new ResourceNotFoundException("No active BASIC_CASHBACK bonus type found. Please configure a cashback bonus type.");
    }

    @Override
    @Transactional(readOnly = true)
    public BonusesExpiringSoonDto getBonusesExpiringSoon() {
        LocalDateTime now = LocalDateTime.now();
        LocalDate nowDate = now.toLocalDate();
        LocalDateTime maxExpiry = now.plusDays(7);
        List<BonusGranted> grants = bonusEventRepository.findGrantsExpiringBetween(now, maxExpiry);

        BigDecimal totalAmount = BigDecimal.ZERO;
        Map<Client, List<BonusExpiringItemDto>> byClient = new LinkedHashMap<>();

        for (BonusGranted grant : grants) {
            BigDecimal consumed = bonusConsumptionRepository.sumAmountByBonusGrantedId(grant.getId());
            if (consumed == null) consumed = BigDecimal.ZERO;
            BigDecimal remaining = grant.getBonusAmount().subtract(consumed);
            if (remaining.compareTo(BigDecimal.ZERO) <= 0) continue;

            LocalDate expDate = grant.getExpiresAt().toLocalDate();
            long daysLeft = ChronoUnit.DAYS.between(nowDate, expDate);
            String grantReason = grant.getGrantReason() != null ? grant.getGrantReason() : "";

            BonusExpiringItemDto item = new BonusExpiringItemDto(
                    grant.getId(),
                    remaining,
                    grant.getBonusAmount(),
                    grant.getExpiresAt(),
                    daysLeft,
                    grantReason
            );

            byClient.computeIfAbsent(grant.getClient(), k -> new ArrayList<>()).add(item);
            totalAmount = totalAmount.add(remaining);
        }

        List<ClientBonusExpiringDto> clients = byClient.entrySet().stream()
                .map(e -> {
                    Client c = e.getKey();
                    List<BonusExpiringItemDto> items = e.getValue().stream()
                            .sorted(Comparator.comparing(BonusExpiringItemDto::getExpiresAt))
                            .collect(Collectors.toList());
                    // Group by expiry date (FIFO: soonest first)
                    Map<LocalDate, List<BonusExpiringItemDto>> byDate = items.stream()
                            .collect(Collectors.groupingBy(it -> it.getExpiresAt().toLocalDate(), LinkedHashMap::new, Collectors.toList()));
                    List<ExpiryGroupDto> expiryGroups = new ArrayList<>();
                    List<BonusExpiryNotification> notified = bonusExpiryNotificationRepository.findByClientId(c.getId());
                    Map<LocalDate, LocalDateTime> notifiedByDate = notified.stream()
                            .collect(Collectors.toMap(BonusExpiryNotification::getExpiryDate, BonusExpiryNotification::getNotifiedAt, (a, b) -> a));

                    for (Map.Entry<LocalDate, List<BonusExpiringItemDto>> entry : byDate.entrySet()) {
                        LocalDate expDate = entry.getKey();
                        List<BonusExpiringItemDto> groupItems = entry.getValue();
                        BigDecimal groupTotal = groupItems.stream()
                                .map(BonusExpiringItemDto::getRemainingAmount)
                                .reduce(BigDecimal.ZERO, BigDecimal::add);
                        long groupDaysLeft = ChronoUnit.DAYS.between(nowDate, expDate);
                        LocalDateTime notifiedAt = notifiedByDate.get(expDate);
                        expiryGroups.add(new ExpiryGroupDto(expDate, groupDaysLeft, groupTotal, notifiedAt, groupItems));
                    }

                    return new ClientBonusExpiringDto(
                            c.getUuid(),
                            com.westwood.util.ClientUtils.getFullName(c),
                            c.getPhone(),
                            expiryGroups
                    );
                })
                .collect(Collectors.toList());

        return new BonusesExpiringSoonDto(clients.size(), totalAmount, clients);
    }

    @Override
    @Transactional
    public void recordBonusExpiryNotified(UUID clientId, LocalDate expiryDate, Long messageRecordId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        if (bonusExpiryNotificationRepository.findByClientIdAndExpiryDate(client.getId(), expiryDate).isPresent()) {
            return; // already recorded
        }
        BonusExpiryNotification n = new BonusExpiryNotification();
        n.setClient(client);
        n.setExpiryDate(expiryDate);
        n.setNotifiedAt(LocalDateTime.now());
        n.setMessageRecord(messageRecordId != null ? messageRecordRepository.getReferenceById(messageRecordId) : null);
        bonusExpiryNotificationRepository.save(n);
    }

    @Override
    @Transactional(readOnly = true)
    public BonusBalanceDto getClientBonusBalance(UUID clientId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        java.time.LocalDateTime now = java.time.LocalDateTime.now();
        List<BonusGranted> nonRevokedGrants = bonusEventRepository.findNonRevokedGrantsByClientIdOrderByCreatedAtAsc(client.getId());

        BigDecimal totalAccumulated = BigDecimal.ZERO;
        BigDecimal totalUsed = BigDecimal.ZERO;
        BigDecimal currentBalance = BigDecimal.ZERO;

        for (BonusGranted grant : nonRevokedGrants) {
            BigDecimal consumed = bonusConsumptionRepository.sumAmountByBonusGrantedId(grant.getId());
            if (consumed == null) {
                consumed = BigDecimal.ZERO;
            }
            BigDecimal remaining = grant.getBonusAmount().subtract(consumed);
            totalAccumulated = totalAccumulated.add(grant.getBonusAmount());
            totalUsed = totalUsed.add(consumed);
            
            // Only count remaining for non-expired grants
            // A bonus is considered expired if expiresAt is not null AND expiresAt <= now
            boolean isExpired = grant.getExpiresAt() != null && !grant.getExpiresAt().isAfter(now);
            if (!isExpired && remaining.compareTo(BigDecimal.ZERO) > 0) {
                currentBalance = currentBalance.add(remaining);
            }
        }

        String clientName = com.westwood.util.ClientUtils.getFullName(client);
        return new BonusBalanceDto(client.getUuid(), clientName, totalAccumulated, totalUsed, currentBalance.max(BigDecimal.ZERO));
    }

    @Override
    @Transactional(readOnly = true)
    public PagedBonusHistoryResponse getClientBonusHistory(UUID clientId, Integer page, Integer size) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        List<BonusEvent> allEvents = bonusEventRepository.findByClientIdOrderByCreatedAtDesc(client.getId());

        Set<Long> revokedGrantIds = allEvents.stream()
                .filter(e -> e instanceof BonusRevoked)
                .map(e -> (BonusRevoked) e)
                .filter(r -> r.getOriginalBonusGranted() != null)
                .map(r -> r.getOriginalBonusGranted().getId())
                .collect(Collectors.toSet());

        List<BonusEvent> filteredEvents = allEvents.stream()
                .filter(e -> {
                    if (e instanceof BonusGranted) {
                        return !revokedGrantIds.contains(e.getId());
                    }
                    return true;
                })
                .collect(Collectors.toList());

        List<ManualBonusRevoke> manualRevokes = manualBonusRevokeRepository.findByClientIdOrderByCreatedAtDesc(client.getId());

        List<Object> combined = new ArrayList<>();
        combined.addAll(filteredEvents);
        combined.addAll(manualRevokes);
        combined.sort(Comparator.comparing(o -> o instanceof BonusEvent
                        ? ((BonusEvent) o).getCreatedAt()
                        : ((ManualBonusRevoke) o).getCreatedAt(),
                Comparator.reverseOrder()));

        int pageNum = page != null ? page : 0;
        int pageSize = size != null ? size : 10;
        int start = pageNum * pageSize;
        int end = Math.min(start + pageSize, combined.size());

        List<BonusEventDto> content = new ArrayList<>();
        for (int i = start; i < end && i < combined.size(); i++) {
            Object item = combined.get(i);
            if (item instanceof BonusGranted) {
                BonusGranted grant = (BonusGranted) item;
                BigDecimal consumed = bonusConsumptionRepository.sumAmountByBonusGrantedId(grant.getId());
                content.add(bonusMapper.toDto(grant, consumed));
            } else if (item instanceof BonusEvent) {
                content.add(bonusMapper.toDto((BonusEvent) item));
            } else {
                content.add(bonusMapper.toManualRevokeDto((ManualBonusRevoke) item));
            }
        }

        long totalElements = combined.size();
        int totalPages = (int) Math.ceil((double) totalElements / pageSize);

        return new PagedBonusHistoryResponse(
            content,
            pageNum,
            pageSize,
            totalElements,
            totalPages,
            pageNum == 0,
            pageNum >= totalPages - 1
        );
    }

    @Override
    public void recalculateBonusBalance(UUID clientId) {
        // Validate client exists
        clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        // This would replay events to recalculate balance
        // For now, the balance is calculated on-the-fly from events
        // This method can be extended for more complex recalculation logic
        // Client is loaded to ensure it exists, but recalculation happens via event replay if needed
    }

    @Override
    @Transactional
    public BonusBalanceDto manualGrantBonus(UUID clientId, com.westwood.common.dto.ManualBonusGrantRequest request) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        // Create manual bonus grant
        BonusGranted bonusGranted = new BonusGranted();
        bonusGranted.setClient(client);
        bonusGranted.setEventId(UUID.randomUUID());
        bonusGranted.setBonusAmount(request.getAmount());
        bonusGranted.setPaymentTransaction(null); // No payment associated
        bonusGranted.setBonusPercentage(null); // No percentage
        bonusGranted.setPaymentAmount(null); // No payment amount
        bonusGranted.setBonusType(null); // No bonus type
        bonusGranted.setGrantReason("MANUAL: " + (request.getReason() != null ? request.getReason() : "Ручное начисление"));
        bonusGranted.setExpiresAt(null); // Manual bonuses don't expire

        bonusEventRepository.save(bonusGranted);

        // Return updated balance
        return getClientBonusBalance(clientId);
    }

    @Override
    @Transactional
    public BonusBalanceDto manualRevokeBonus(UUID clientId, com.westwood.common.dto.ManualBonusRevokeRequest request, Long revokedByUserId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        BonusBalanceDto currentBalance = getClientBonusBalance(clientId);
        if (request.getAmount().compareTo(currentBalance.getCurrentBalance()) > 0) {
            throw new IllegalArgumentException("Cannot revoke more than current balance. Current balance: " + currentBalance.getCurrentBalance());
        }

        User revokedBy = userRepository.findById(revokedByUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + revokedByUserId + "' not found"));

        ManualBonusRevoke manualRevoke = new ManualBonusRevoke();
        manualRevoke.setClient(client);
        manualRevoke.setAmount(request.getAmount());
        manualRevoke.setReason(request.getReason());
        manualRevoke.setRevokedBy(revokedBy);
        manualBonusRevokeRepository.save(manualRevoke);

        LocalDateTime now = LocalDateTime.now();
        List<BonusGranted> availableGrants = bonusEventRepository.findAvailableGrantsByClientIdOrderByCreatedAtAsc(client.getId(), now);
        BigDecimal toAllocate = request.getAmount();

        for (BonusGranted grant : availableGrants) {
            if (toAllocate.compareTo(BigDecimal.ZERO) <= 0) {
                break;
            }
            BigDecimal consumed = bonusConsumptionRepository.sumAmountByBonusGrantedId(grant.getId());
            if (consumed == null) {
                consumed = BigDecimal.ZERO;
            }
            BigDecimal remaining = grant.getBonusAmount().subtract(consumed);
            if (remaining.compareTo(BigDecimal.ZERO) <= 0) {
                continue;
            }
            BigDecimal take = remaining.min(toAllocate);
            BonusConsumption consumption = new BonusConsumption();
            consumption.setBonusGranted(grant);
            consumption.setAmount(take);
            consumption.setConsumptionType(BonusConsumption.ConsumptionType.MANUAL_REVOKE);
            consumption.setPaymentTransaction(null);
            consumption.setManualRevoke(manualRevoke);
            bonusConsumptionRepository.save(consumption);
            toAllocate = toAllocate.subtract(take);
        }

        return getClientBonusBalance(clientId);
    }
}

