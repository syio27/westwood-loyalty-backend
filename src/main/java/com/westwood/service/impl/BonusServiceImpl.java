package com.westwood.service.impl;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusType;
import com.westwood.domain.BonusTypeEnum;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import com.westwood.event.BonusGrantedEvent;
import com.westwood.repository.BonusTypeRepository;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.service.BonusService;
import com.westwood.service.EventSourcingService;
import com.westwood.util.mapper.BonusMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.UUID;
import java.util.List;

@Service
@Transactional
public class BonusServiceImpl implements BonusService {

    private final BonusEventRepository bonusEventRepository;
    private final BonusTypeRepository bonusTypeRepository;
    private final PaymentTransactionRepository paymentRepository;
    private final ClientRepository clientRepository;
    private final EventSourcingService eventSourcingService;
    private final BonusMapper bonusMapper;

    public BonusServiceImpl(BonusEventRepository bonusEventRepository,
                           BonusTypeRepository bonusTypeRepository,
                           PaymentTransactionRepository paymentRepository,
                           ClientRepository clientRepository,
                           EventSourcingService eventSourcingService,
                           BonusMapper bonusMapper) {
        this.bonusEventRepository = bonusEventRepository;
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
    public BonusBalanceDto getClientBonusBalance(UUID clientId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        List<BonusEvent> events = bonusEventRepository.findByClientIdOrderByCreatedAtAsc(client.getId()); // Use internal ID
        String clientName = client.getName() + " " + client.getSurname();

        return bonusMapper.calculateBalanceDto(client.getUuid(), clientName, events); // Use UUID for DTO
    }

    @Override
    @Transactional(readOnly = true)
    public List<com.westwood.common.dto.BonusEventDto> getClientBonusHistory(UUID clientId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        List<BonusEvent> events = bonusEventRepository.findByClientIdOrderByCreatedAtDesc(client.getId()); // Use internal ID
        return bonusMapper.toDtoList(events);
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
}

