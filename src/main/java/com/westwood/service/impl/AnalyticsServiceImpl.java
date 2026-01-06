package com.westwood.service.impl;

import com.westwood.common.dto.ClientValueDto;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.service.AnalyticsService;
import com.westwood.service.BonusService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class AnalyticsServiceImpl implements AnalyticsService {

    private final ClientRepository clientRepository;
    private final PaymentTransactionRepository paymentRepository;
    private final BonusService bonusService;

    public AnalyticsServiceImpl(ClientRepository clientRepository,
                               PaymentTransactionRepository paymentRepository,
                               BonusService bonusService) {
        this.clientRepository = clientRepository;
        this.paymentRepository = paymentRepository;
        this.bonusService = bonusService;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClientValueDto> getClientValueRankings() {
        List<Client> clients = clientRepository.findAll();

        return clients.stream()
                .map(client -> {
                    List<PaymentTransaction> payments = paymentRepository.findByClientIdOrderByCreatedAtDesc(client.getId());
                    BigDecimal totalSpent = payments.stream()
                            .map(PaymentTransaction::getAmount)
                            .reduce(BigDecimal.ZERO, BigDecimal::add);

                    BigDecimal avgTransaction = payments.isEmpty() ? BigDecimal.ZERO :
                            totalSpent.divide(BigDecimal.valueOf(payments.size()), 2, RoundingMode.HALF_UP);

                    LocalDateTime lastTransaction = payments.isEmpty() ? null :
                            payments.get(0).getCreatedAt();

                    BigDecimal bonusBalance = bonusService.getClientBonusBalance(client.getUuid()).getCurrentBalance();

                    ClientValueDto dto = new ClientValueDto();
                    dto.setClientId(client.getUuid()); // Use UUID for external
                    dto.setClientName(client.getName() + " " + client.getSurname());
                    dto.setPhone(client.getPhone());
                    dto.setTotalSpent(totalSpent);
                    dto.setTransactionCount((long) payments.size());
                    dto.setAverageTransactionAmount(avgTransaction);
                    dto.setLastTransactionDate(lastTransaction);
                    dto.setBonusBalance(bonusBalance);

                    return dto;
                })
                .sorted(Comparator.comparing(ClientValueDto::getTotalSpent).reversed())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ClientValueDto getClientValue(UUID clientId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        Long internalClientId = client.getId(); // Convert to internal ID
        List<PaymentTransaction> payments = paymentRepository.findByClientIdOrderByCreatedAtDesc(internalClientId);
        BigDecimal totalSpent = payments.stream()
                .map(PaymentTransaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal avgTransaction = payments.isEmpty() ? BigDecimal.ZERO :
                totalSpent.divide(BigDecimal.valueOf(payments.size()), 2, RoundingMode.HALF_UP);

        LocalDateTime lastTransaction = payments.isEmpty() ? null :
                payments.get(0).getCreatedAt();

        BigDecimal bonusBalance = bonusService.getClientBonusBalance(clientId).getCurrentBalance();

        ClientValueDto dto = new ClientValueDto();
        dto.setClientId(client.getUuid()); // Use UUID for external
        dto.setClientName(client.getName() + " " + client.getSurname());
        dto.setPhone(client.getPhone());
        dto.setTotalSpent(totalSpent);
        dto.setTransactionCount((long) payments.size());
        dto.setAverageTransactionAmount(avgTransaction);
        dto.setLastTransactionDate(lastTransaction);
        dto.setBonusBalance(bonusBalance);

        return dto;
    }

    @Override
    @Transactional(readOnly = true)
    public BigDecimal getClientSpendingByTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        Long internalClientId = client.getId(); // Convert to internal ID
        return paymentRepository.calculateTotalByClientAndTimeRange(internalClientId, fromDate, toDate);
    }
}

