package com.westwood.service;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.domain.Client;
import com.westwood.domain.ClientType;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.UserRepository;
import com.westwood.service.EventSourcingService;
import com.westwood.service.impl.BonusServiceImpl;
import com.westwood.util.mapper.BonusMapper;
import com.westwood.util.mapper.PaymentMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BonusServiceTest {

    @Mock
    private BonusEventRepository bonusEventRepository;

    @Mock
    private PaymentTransactionRepository paymentRepository;

    @Mock
    private ClientRepository clientRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private EventSourcingService eventSourcingService;

    @Mock
    private BonusMapper bonusMapper;

    @Mock
    private PaymentMapper paymentMapper;

    @InjectMocks
    private BonusServiceImpl bonusService;

    private Client client;
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
    }

    @Test
    void testGetClientBonusBalance() {
        when(clientRepository.findByUuid(clientUuid)).thenReturn(Optional.of(client));
        when(bonusEventRepository.findByClientIdOrderByCreatedAtAsc(1L)).thenReturn(new ArrayList<>());
        when(bonusMapper.calculateBalanceDto(any(), any(), any())).thenReturn(
                new BonusBalanceDto(clientUuid, "John Doe", BigDecimal.ZERO, BigDecimal.ZERO, BigDecimal.ZERO)
        );

        BonusBalanceDto result = bonusService.getClientBonusBalance(clientUuid);

        assertNotNull(result);
        assertEquals(clientUuid, result.getClientId());
    }
}

