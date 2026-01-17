package com.westwood.service.impl;

import com.westwood.common.dto.*;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusRevoked;
import com.westwood.domain.BonusUsed;
import com.westwood.domain.Client;
import com.westwood.domain.ClientType;
import com.westwood.domain.PaymentTransaction;
import com.westwood.domain.User;
import com.westwood.event.BonusRevokedEvent;
import com.westwood.event.PaymentCreatedEvent;
import com.westwood.event.PaymentRefundedEvent;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.UserRepository;
import com.westwood.service.EventBonusService;
import com.westwood.service.EventSourcingService;
import com.westwood.service.PaymentService;
import com.westwood.service.TransactionIdentifierService;
import com.westwood.util.mapper.PaymentMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    private final PaymentTransactionRepository paymentRepository;
    private final ClientRepository clientRepository;
    private final UserRepository userRepository;
    private final PaymentMapper paymentMapper;
    private final EventSourcingService eventSourcingService;
    private final EventBonusService eventBonusService;
    private final BonusEventRepository bonusEventRepository;
    private final TransactionIdentifierService transactionIdentifierService;

    public PaymentServiceImpl(PaymentTransactionRepository paymentRepository,
                              ClientRepository clientRepository,
                              UserRepository userRepository,
                              PaymentMapper paymentMapper,
                              EventSourcingService eventSourcingService,
                              EventBonusService eventBonusService,
                              BonusEventRepository bonusEventRepository,
                              TransactionIdentifierService transactionIdentifierService) {
        this.paymentRepository = paymentRepository;
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
        this.paymentMapper = paymentMapper;
        this.eventSourcingService = eventSourcingService;
        this.eventBonusService = eventBonusService;
        this.bonusEventRepository = bonusEventRepository;
        this.transactionIdentifierService = transactionIdentifierService;
    }

    @Override
    public PaymentTransactionDto createPayment(CreatePaymentRequest request, Long enteredByUserId) {
        Client client = clientRepository.findByUuid(request.getClientId())
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + request.getClientId() + "' not found"));

        User enteredBy = userRepository.findById(enteredByUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + enteredByUserId + "' not found"));

        // Generate unique transaction identifier
        String transactionIdentifier = transactionIdentifierService.generateNextTransactionIdentifier();
        int yearSuffix = transactionIdentifierService.parseTransactionIdentifier(transactionIdentifier);
        
        PaymentTransaction payment = new PaymentTransaction();
        payment.setClient(client);
        payment.setEnteredBy(enteredBy);
        payment.setAmount(request.getAmount());
        payment.setNotes(request.getNotes());
        payment.setStatus(PaymentTransaction.PaymentStatus.COMPLETED);
        payment.setTransactionYear(yearSuffix);
        payment.setTransactionNumber(0L); // Not used anymore, set to 0
        payment.setTxId(transactionIdentifier);

        PaymentTransaction savedPayment = paymentRepository.save(payment);

        // Create and append PaymentCreated event
        PaymentCreatedEvent event = new PaymentCreatedEvent(
                transactionIdentifier,
                savedPayment.getId(),
                client.getId(),
                enteredByUserId,
                request.getAmount(),
                request.getNotes()
        );
        eventSourcingService.appendPaymentCreatedEvent(event);

        // Process all applicable bonuses (cashback, milestones, etc.)
        if (client.getClientType() == ClientType.INDIVIDUAL) {
            eventBonusService.processPaymentBonuses(transactionIdentifier, client.getUuid(), request.getAmount());
        }

        return paymentMapper.toDto(savedPayment);
    }

    @Override
    @Transactional(readOnly = true)
    public PaymentTransactionDto getPaymentByTxId(String txId) {
        PaymentTransaction payment = paymentRepository.findByTxId(txId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment with txId '" + txId + "' not found"));
        return paymentMapper.toDto(payment);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentTransactionDto> getPaymentsByClientId(UUID clientId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        Long internalClientId = client.getId(); // Convert to internal ID
        return paymentRepository.findByClientIdOrderByCreatedAtDesc(internalClientId).stream()
                .map(paymentMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentTransactionDto> getPaymentsByClientIdAndTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        Long internalClientId = client.getId(); // Convert to internal ID
        return paymentRepository.findByClientIdAndTimeRange(internalClientId, fromDate, toDate).stream()
                .map(paymentMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public BigDecimal calculateTotalByClientAndTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        Long internalClientId = client.getId(); // Convert to internal ID
        BigDecimal total = paymentRepository.calculateTotalByClientAndTimeRange(internalClientId, fromDate, toDate);
        return total != null ? total : BigDecimal.ZERO;
    }

    @Override
    public PaymentTransactionDto refundPayment(String txId, RefundPaymentRequest request, Long enteredByUserId) {
        PaymentTransaction originalPayment = paymentRepository.findByTxId(txId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment with txId '" + txId + "' not found"));

        // Check if payment is already refunded (check status or if a refund transaction already exists)
        if (originalPayment.getStatus() == PaymentTransaction.PaymentStatus.REFUNDED) {
            throw new IllegalStateException("Payment with txId '" + txId + "' is already refunded");
        }
        
        List<PaymentTransaction> existingRefunds = paymentRepository.findRefundsByPaymentTxId(txId);
        if (!existingRefunds.isEmpty()) {
            throw new IllegalStateException("Payment with txId '" + txId + "' is already refunded");
        }

        // Check if payment is completed (can only refund completed payments)
        if (originalPayment.getStatus() != PaymentTransaction.PaymentStatus.COMPLETED) {
            throw new IllegalStateException("Only completed payments can be refunded. Current status: " + originalPayment.getStatus());
        }

        User enteredBy = userRepository.findById(enteredByUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + enteredByUserId + "' not found"));

        // Generate unique transaction identifier for refund
        String refundIdentifier = transactionIdentifierService.generateNextTransactionIdentifier();
        int yearSuffix = transactionIdentifierService.parseTransactionIdentifier(refundIdentifier);
        
        // Create a new refund transaction with negative amount
        PaymentTransaction refundTransaction = new PaymentTransaction();
        refundTransaction.setClient(originalPayment.getClient());
        refundTransaction.setEnteredBy(enteredBy);
        refundTransaction.setAmount(originalPayment.getAmount().negate()); // Negative amount for refund
        String refundNotes = request.getNotes() != null ? request.getNotes() : "Payment refunded";
        refundTransaction.setNotes("Refund for payment " + originalPayment.getTxId() + ": " + refundNotes);
        refundTransaction.setStatus(PaymentTransaction.PaymentStatus.REFUND);
        refundTransaction.setRefundedPayment(originalPayment); // Link to original payment
        refundTransaction.setTransactionYear(yearSuffix);
        refundTransaction.setTransactionNumber(0L); // Not used anymore, set to 0
        refundTransaction.setTxId(refundIdentifier);

        PaymentTransaction savedRefund = paymentRepository.save(refundTransaction);

        // Mark the original payment as REFUNDED
        originalPayment.setStatus(PaymentTransaction.PaymentStatus.REFUNDED);
        paymentRepository.save(originalPayment);

        // Create and append PaymentRefunded event
        PaymentRefundedEvent refundEvent = new PaymentRefundedEvent(
                refundIdentifier,
                originalPayment.getTxId(),
                savedRefund.getId(),
                originalPayment.getId(),
                originalPayment.getClient().getId(),
                enteredByUserId,
                originalPayment.getAmount().negate(),
                refundNotes
        );
        eventSourcingService.appendPaymentRefundedEvent(refundEvent);

        // Find all bonuses granted for the original payment and revoke them
        List<BonusGranted> grantedBonuses = bonusEventRepository.findBonusGrantedByPaymentTxId(originalPayment.getTxId());
        
        for (BonusGranted grantedBonus : grantedBonuses) {
            BonusRevoked revokedBonus = new BonusRevoked();
            revokedBonus.setClient(grantedBonus.getClient());
            revokedBonus.setEventId(UUID.randomUUID());
            revokedBonus.setBonusAmount(grantedBonus.getBonusAmount());
            revokedBonus.setPaymentTransaction(savedRefund); // Link to refund transaction
            revokedBonus.setOriginalBonusGranted(grantedBonus);
            revokedBonus.setRevokeReason("PAYMENT_REFUND");

            BonusRevoked savedRevoked = bonusEventRepository.save(revokedBonus);

            // Create and append BonusRevoked event
            BonusRevokedEvent event = new BonusRevokedEvent(
                    savedRevoked.getId(),
                    refundIdentifier,
                    savedRefund.getId(),
                    grantedBonus.getClient().getId(),
                    grantedBonus.getId(),
                    grantedBonus.getBonusAmount(),
                    "PAYMENT_REFUND"
            );
            eventSourcingService.appendBonusRevokedEvent(event);
        }

        return paymentMapper.toDto(savedRefund);
    }

    @Override
    @Transactional(readOnly = true)
    public PagedPaymentSearchResponse searchPayments(PaymentSearchRequest request) {
        // Prepare date range for period filter
        LocalDateTime periodFrom = null;
        LocalDateTime periodTo = null;
        if (request.getPeriodFrom() != null) {
            periodFrom = LocalDateTime.of(request.getPeriodFrom(), LocalTime.MIN);
        }
        if (request.getPeriodTo() != null) {
            periodTo = LocalDateTime.of(request.getPeriodTo(), LocalTime.MAX);
        }

        // Normalize empty strings to null
        String paymentId = (request.getPaymentId() != null && request.getPaymentId().trim().isEmpty()) ? null : request.getPaymentId();
        String clientName = (request.getClientName() != null && request.getClientName().trim().isEmpty()) ? null : request.getClientName();
        String phone = (request.getPhone() != null && request.getPhone().trim().isEmpty()) ? null : request.getPhone();
        
        // Normalize payment type: null or empty means "ALL"
        String paymentType = (request.getPaymentType() != null && !request.getPaymentType().trim().isEmpty()) 
            ? request.getPaymentType() : "ALL";

        // Prepare sorting
        Sort sort = prepareSort(request.getSortBy(), request.getSortDirection());
        Pageable pageable = PageRequest.of(
            request.getPage() != null ? request.getPage() : 0,
            request.getSize() != null ? request.getSize() : 10,
            sort
        );

        // Execute search
        Page<PaymentTransaction> paymentPage = paymentRepository.searchPaymentsWithFilters(
            paymentId,
            clientName,
            phone,
            periodFrom,
            periodTo,
            paymentType,
            pageable
        );

        // Convert to DTOs
        List<PaymentSearchResultDto> content = paymentPage.getContent().stream()
            .map(this::toSearchResultDto)
            .collect(Collectors.toList());

        return new PagedPaymentSearchResponse(
            content,
            paymentPage.getNumber(),
            paymentPage.getSize(),
            paymentPage.getTotalElements(),
            paymentPage.getTotalPages(),
            paymentPage.isFirst(),
            paymentPage.isLast()
        );
    }

    private PaymentSearchResultDto toSearchResultDto(PaymentTransaction payment) {
        // Initialize lazy relationships
        Client client = payment.getClient();
        if (client == null) {
            throw new IllegalStateException("Payment transaction " + payment.getTxId() + " has no associated client");
        }
        
        User enteredBy = payment.getEnteredBy();
        
        // Get refunded payment txId if exists
        String refundedPaymentTxId = null;
        if (payment.getRefundedPayment() != null) {
            refundedPaymentTxId = payment.getRefundedPayment().getTxId();
        }
        
        // Calculate bonus granted for this payment
        BigDecimal bonusGranted = BigDecimal.ZERO;
        List<BonusGranted> grantedBonuses = bonusEventRepository.findBonusGrantedByPaymentTxId(payment.getTxId());
        if (grantedBonuses.isEmpty()) {
            // Fallback: try by payment ID
            grantedBonuses = bonusEventRepository.findBonusGrantedByPaymentId(payment.getId());
        }
        // Get all revoked bonus IDs for this client to check if bonuses were revoked
        List<BonusEvent> revokedEvents = bonusEventRepository
            .findByClientIdAndEventTypeOrderByCreatedAtDesc(client.getId(), BonusRevoked.class);
        Set<Long> revokedBonusIds = revokedEvents.stream()
            .filter(event -> event instanceof BonusRevoked)
            .map(event -> (BonusRevoked) event)
            .map(revoked -> revoked.getOriginalBonusGranted() != null ? revoked.getOriginalBonusGranted().getId() : null)
            .filter(Objects::nonNull)
            .collect(Collectors.toSet());
        
        for (BonusGranted granted : grantedBonuses) {
            // Only count bonuses that were not revoked
            if (!revokedBonusIds.contains(granted.getId())) {
                bonusGranted = bonusGranted.add(granted.getBonusAmount());
            }
        }
        
        // Calculate bonus used for this payment
        BigDecimal bonusUsed = BigDecimal.ZERO;
        List<BonusUsed> usedBonuses = bonusEventRepository.findBonusUsedByPaymentTxId(payment.getTxId());
        if (usedBonuses.isEmpty()) {
            // Fallback: try by payment ID
            usedBonuses = bonusEventRepository.findBonusUsedByPaymentId(payment.getId());
        }
        for (BonusUsed used : usedBonuses) {
            bonusUsed = bonusUsed.add(used.getBonusAmount());
        }
        
        // Get refund reason if payment is refunded
        String refundReason = null;
        if (payment.getStatus() == PaymentTransaction.PaymentStatus.REFUNDED) {
            // Find the refund transaction that references this payment
            List<PaymentTransaction> refundTransactions = paymentRepository.findRefundsByPaymentTxId(payment.getTxId());
            if (!refundTransactions.isEmpty()) {
                PaymentTransaction refundTransaction = refundTransactions.get(0);
                // Extract refund reason from notes (format: "Refund for payment ...: <reason>")
                String notes = refundTransaction.getNotes();
                if (notes != null && notes.contains(":")) {
                    int colonIndex = notes.lastIndexOf(":");
                    if (colonIndex < notes.length() - 1) {
                        refundReason = notes.substring(colonIndex + 1).trim();
                    }
                } else if (notes != null && !notes.isEmpty()) {
                    refundReason = notes;
                }
            }
        }
        
        return new PaymentSearchResultDto(
            payment.getTxId(),
            client.getUuid(),
            client.getName() + " " + client.getSurname(),
            client.getPhone(),
            client.getEmail(),
            payment.getAmount(),
            payment.getStatus(),
            null, // paymentMethod - пока не реализовано, можно добавить в будущем
            enteredBy != null ? enteredBy.getUsername() : null,
            payment.getCreatedAt(),
            refundedPaymentTxId,
            bonusGranted,
            bonusUsed,
            refundReason
        );
    }

    private Sort prepareSort(String sortBy, String sortDirection) {
        if (sortBy == null || sortBy.isEmpty()) {
            sortBy = "date"; // Default sort
        }
        
        Sort.Direction direction = "ASC".equalsIgnoreCase(sortDirection) ? 
            Sort.Direction.ASC : Sort.Direction.DESC;
        
        // Map sort field names to actual entity fields
        switch (sortBy.toLowerCase()) {
            case "amount":
                return Sort.by(direction, "amount");
            case "clientname":
                return Sort.by(direction, "client.name", "client.surname");
            case "date":
            default:
                return Sort.by(direction, "createdAt");
        }
    }

    @Override
    @Transactional
    public PaymentTransactionDto createDraftPayment(CreateDraftPaymentRequest request, Long enteredByUserId) {
        Client client = clientRepository.findByUuid(request.getClientId())
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + request.getClientId() + "' not found"));

        User enteredBy = userRepository.findById(enteredByUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + enteredByUserId + "' not found"));

        // Generate unique transaction identifier
        String transactionIdentifier = transactionIdentifierService.generateNextTransactionIdentifier();
        int yearSuffix = transactionIdentifierService.parseTransactionIdentifier(transactionIdentifier);

        // Create draft payment with PENDING status and zero amount
        PaymentTransaction payment = new PaymentTransaction();
        payment.setClient(client);
        payment.setEnteredBy(enteredBy);
        payment.setAmount(BigDecimal.ZERO); // Will be updated later
        payment.setNotes(null); // Can be updated later
        payment.setStatus(PaymentTransaction.PaymentStatus.PENDING);
        payment.setTransactionYear(yearSuffix);
        payment.setTransactionNumber(0L);
        payment.setTxId(transactionIdentifier);

        PaymentTransaction savedPayment = paymentRepository.save(payment);

        // Do NOT create PaymentCreated event or process bonuses for draft payments
        // This will be done when the payment is completed

        return paymentMapper.toDto(savedPayment);
    }

    @Override
    @Transactional
    public PaymentTransactionDto completePayment(String txId, CompletePaymentRequest request, Long enteredByUserId) {
        PaymentTransaction payment = paymentRepository.findByTxId(txId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment with txId '" + txId + "' not found"));

        // Only allow completing PENDING payments
        if (payment.getStatus() != PaymentTransaction.PaymentStatus.PENDING) {
            throw new IllegalStateException("Cannot complete payment with status: " + payment.getStatus() + ". Only PENDING payments can be completed.");
        }

        Client client = payment.getClient();
        BigDecimal originalAmount = request.getOriginalAmount();
        BigDecimal bonusAmountUsed = request.getBonusAmountUsed() != null ? request.getBonusAmountUsed() : BigDecimal.ZERO;

        // Validate bonus amount doesn't exceed original amount
        if (bonusAmountUsed.compareTo(originalAmount) > 0) {
            throw new IllegalArgumentException("Bonus amount (" + bonusAmountUsed + 
                ") cannot exceed original payment amount (" + originalAmount + ")");
        }

        // Validate client has enough bonus balance if using bonuses
        if (bonusAmountUsed.compareTo(BigDecimal.ZERO) > 0) {
            BigDecimal clientBonusBalance = calculateClientBonusBalance(client.getId());
            if (clientBonusBalance.compareTo(bonusAmountUsed) < 0) {
                throw new IllegalArgumentException("Insufficient bonus balance. Available: " + clientBonusBalance + 
                    ", Requested: " + bonusAmountUsed);
            }
        }

        // Calculate final amount (to be paid)
        BigDecimal finalAmount = originalAmount.subtract(bonusAmountUsed);

        // Update payment with final data
        payment.setAmount(finalAmount); // К оплате (10000)
        payment.setNotes(request.getNotes());
        payment.setStatus(PaymentTransaction.PaymentStatus.COMPLETED);
        PaymentTransaction savedPayment = paymentRepository.save(payment);

        // Create BonusUsed event if bonuses were used
        if (bonusAmountUsed.compareTo(BigDecimal.ZERO) > 0) {
            BonusUsed bonusUsed = new BonusUsed();
            bonusUsed.setClient(client);
            bonusUsed.setEventId(UUID.randomUUID());
            bonusUsed.setBonusAmount(bonusAmountUsed);
            bonusUsed.setPaymentTransaction(savedPayment);
            bonusUsed.setOriginalPaymentAmount(originalAmount);
            bonusUsed.setFinalPaymentAmount(finalAmount);

            bonusEventRepository.save(bonusUsed);
        }

        // Create and append PaymentCreated event
        PaymentCreatedEvent event = new PaymentCreatedEvent(
                savedPayment.getTxId(),
                savedPayment.getId(),
                client.getId(),
                enteredByUserId,
                originalAmount, // Use original amount (12000)
                savedPayment.getNotes()
        );
        eventSourcingService.appendPaymentCreatedEvent(event);

        // Process all applicable bonuses (cashback, milestones, etc.)
        // Only grant bonuses if no bonuses were used (bonus usage prevents bonus accrual)
        if (bonusAmountUsed.compareTo(BigDecimal.ZERO) == 0 && client.getClientType() == ClientType.INDIVIDUAL) {
            eventBonusService.processPaymentBonuses(savedPayment.getTxId(), client.getUuid(), originalAmount);
        }

        return paymentMapper.toDto(savedPayment);
    }

    private BigDecimal calculateClientBonusBalance(Long clientId) {
        List<BonusEvent> events = bonusEventRepository.findByClientIdOrderByCreatedAtAsc(clientId);
        BigDecimal balance = BigDecimal.ZERO;
        for (BonusEvent event : events) {
            if (event instanceof BonusGranted) {
                // Check if this granted bonus was revoked
                boolean isRevoked = events.stream()
                    .filter(e -> e instanceof BonusRevoked)
                    .map(e -> (BonusRevoked) e)
                    .anyMatch(r -> r.getOriginalBonusGranted() != null && 
                        r.getOriginalBonusGranted().getId().equals(event.getId()));
                if (!isRevoked) {
                    balance = balance.add(event.getBonusAmount());
                }
            } else if (event instanceof BonusUsed) {
                balance = balance.subtract(event.getBonusAmount());
            }
        }
        return balance;
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentSearchResultDto> getTransactionsByUserId(UUID userId) {
        User user = userRepository.findByUuid(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + userId + "' not found"));
        
        List<PaymentTransaction> transactions = paymentRepository.findByEnteredByIdOrderByCreatedAtDesc(user.getId());
        
        return transactions.stream()
                .filter(tx -> tx.getStatus() != PaymentTransaction.PaymentStatus.REFUND) // Exclude internal refund transactions
                .map(this::toSearchResultDto)
                .collect(Collectors.toList());
    }
}

