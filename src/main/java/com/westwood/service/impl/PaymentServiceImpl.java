package com.westwood.service.impl;

import com.westwood.common.dto.CreatePaymentRequest;
import com.westwood.common.dto.PaymentTransactionDto;
import com.westwood.common.dto.RefundPaymentRequest;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusRevoked;
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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
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
}

