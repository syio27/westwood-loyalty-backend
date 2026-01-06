package com.westwood.service;

import com.westwood.common.dto.CreatePaymentRequest;
import com.westwood.common.dto.PaymentTransactionDto;
import com.westwood.domain.Client;
import com.westwood.domain.ClientType;
import com.westwood.domain.User;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.UserRepository;
import com.westwood.service.impl.PaymentServiceImpl;
import com.westwood.util.mapper.PaymentMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PaymentServiceTest {

    @Mock
    private PaymentTransactionRepository paymentRepository;

    @Mock
    private ClientRepository clientRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private PaymentMapper paymentMapper;

    @Mock
    private EventSourcingService eventSourcingService;

    @Mock
    private BonusService bonusService;

    @InjectMocks
    private PaymentServiceImpl paymentService;

    private Client client;
    private User user;
    private CreatePaymentRequest request;
    private UUID clientUuid;

    @BeforeEach
    void setUp() {
        clientUuid = UUID.randomUUID();
        client = new Client();
        client.setId(1L);
        client.setUuid(clientUuid);
        client.setName("John");
        client.setSurname("Doe");
        client.setClientType(ClientType.INDIVIDUAL);

        user = new User();
        user.setId(1L);
        user.setUsername("testuser");

        request = new CreatePaymentRequest();
        request.setClientId(clientUuid);
        request.setAmount(new BigDecimal("100000"));
        request.setNotes("Test payment");
    }

    @Test
    void testCreatePayment() {
        when(clientRepository.findByUuid(clientUuid)).thenReturn(Optional.of(client));
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(paymentRepository.save(any())).thenAnswer(invocation -> invocation.getArgument(0));
        when(paymentMapper.toDto(any())).thenReturn(new PaymentTransactionDto());

        PaymentTransactionDto result = paymentService.createPayment(request, 1L);

        assertNotNull(result);
        verify(paymentRepository, times(1)).save(any());
        verify(eventSourcingService, times(1)).appendPaymentCreatedEvent(any());
        verify(bonusService, times(1)).grantBonus(any(), eq(1L), any()); // Internal method still uses Long
    }
}

