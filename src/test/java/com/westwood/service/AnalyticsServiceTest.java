package com.westwood.service;

import com.westwood.common.dto.ClientValueDto;
import com.westwood.domain.Client;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.service.impl.AnalyticsServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AnalyticsServiceTest {

    @Mock
    private ClientRepository clientRepository;

    @Mock
    private PaymentTransactionRepository paymentRepository;

    @Mock
    private BonusService bonusService;

    @InjectMocks
    private AnalyticsServiceImpl analyticsService;

    @Test
    void testGetClientValueRankings() {
        UUID clientUuid = UUID.randomUUID();
        List<Client> clients = new ArrayList<>();
        Client client = new Client();
        client.setId(1L);
        client.setUuid(clientUuid);
        client.setName("John");
        client.setSurname("Doe");
        clients.add(client);

        when(clientRepository.findAll()).thenReturn(clients);
        when(paymentRepository.findByClientIdOrderByCreatedAtDesc(1L)).thenReturn(new ArrayList<>());
        when(bonusService.getClientBonusBalance(clientUuid)).thenReturn(
                new com.westwood.common.dto.BonusBalanceDto(clientUuid, "John Doe", 
                        java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO, java.math.BigDecimal.ZERO)
        );

        List<ClientValueDto> rankings = analyticsService.getClientValueRankings();

        assertNotNull(rankings);
        assertEquals(1, rankings.size());
    }
}

