package com.westwood.service.impl;

import com.westwood.common.dto.CreatePaymentRequest;
import com.westwood.common.dto.PaymentTransactionDto;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.Client;
import com.westwood.domain.ClientType;
import com.westwood.domain.PaymentTransaction;
import com.westwood.domain.User;
import com.westwood.event.PaymentCreatedEvent;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.UserRepository;
import com.westwood.service.EventBonusService;
import com.westwood.service.EventSourcingService;
import com.westwood.service.PaymentService;
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

    public PaymentServiceImpl(PaymentTransactionRepository paymentRepository,
                              ClientRepository clientRepository,
                              UserRepository userRepository,
                              PaymentMapper paymentMapper,
                              EventSourcingService eventSourcingService,
                              EventBonusService eventBonusService) {
        this.paymentRepository = paymentRepository;
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
        this.paymentMapper = paymentMapper;
        this.eventSourcingService = eventSourcingService;
        this.eventBonusService = eventBonusService;
    }

    @Override
    public PaymentTransactionDto createPayment(CreatePaymentRequest request, Long enteredByUserId) {
        Client client = clientRepository.findByUuid(request.getClientId())
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + request.getClientId() + "' not found"));

        User enteredBy = userRepository.findById(enteredByUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + enteredByUserId + "' not found"));

        PaymentTransaction payment = new PaymentTransaction();
        payment.setClient(client);
        payment.setEnteredBy(enteredBy);
        payment.setAmount(request.getAmount());
        payment.setNotes(request.getNotes());
        payment.setStatus(PaymentTransaction.PaymentStatus.COMPLETED);

        PaymentTransaction savedPayment = paymentRepository.save(payment);

        // Create and append PaymentCreated event
        PaymentCreatedEvent event = new PaymentCreatedEvent(
                savedPayment.getId(),
                client.getId(),
                enteredByUserId,
                request.getAmount(),
                request.getNotes()
        );
        eventSourcingService.appendPaymentCreatedEvent(event);

        // Process all applicable bonuses (cashback, milestones, etc.)
        if (client.getClientType() == ClientType.INDIVIDUAL) {
            eventBonusService.processPaymentBonuses(savedPayment.getId(), client.getUuid(), request.getAmount());
        }

        return paymentMapper.toDto(savedPayment);
    }

    @Override
    @Transactional(readOnly = true)
    public PaymentTransactionDto getPaymentById(Long id) {
        PaymentTransaction payment = paymentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Payment with id '" + id + "' not found"));
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
}

