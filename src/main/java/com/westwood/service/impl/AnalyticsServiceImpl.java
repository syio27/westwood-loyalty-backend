package com.westwood.service.impl;

import com.westwood.common.dto.*;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.service.AnalyticsService;
import com.westwood.service.BonusService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@Transactional
public class AnalyticsServiceImpl implements AnalyticsService {

    private final ClientRepository clientRepository;
    private final PaymentTransactionRepository paymentRepository;
    private final BonusService bonusService;
    private final BonusEventRepository bonusEventRepository;

    public AnalyticsServiceImpl(ClientRepository clientRepository,
                               PaymentTransactionRepository paymentRepository,
                               BonusService bonusService,
                               BonusEventRepository bonusEventRepository) {
        this.clientRepository = clientRepository;
        this.paymentRepository = paymentRepository;
        this.bonusService = bonusService;
        this.bonusEventRepository = bonusEventRepository;
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
                    dto.setClientName(com.westwood.util.ClientUtils.getFullName(client));
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
        dto.setClientName(com.westwood.util.ClientUtils.getFullName(client));
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

    @Override
    @Transactional(readOnly = true)
    public RevenueAnalyticsDto getMonthlyRevenue() {
        LocalDate now = LocalDate.now();
        LocalDateTime startOfCurrentMonth = LocalDateTime.of(now.withDayOfMonth(1), LocalTime.MIN);
        LocalDateTime endOfCurrentMonth = LocalDateTime.of(now, LocalTime.MAX);

        LocalDate previousMonth = now.minusMonths(1);
        LocalDateTime startOfPreviousMonth = LocalDateTime.of(previousMonth.withDayOfMonth(1), LocalTime.MIN);
        LocalDateTime endOfPreviousMonth = LocalDateTime.of(previousMonth.withDayOfMonth(previousMonth.lengthOfMonth()), LocalTime.MAX);

        BigDecimal currentRevenue = paymentRepository.calculateTotalRevenueByDateRange(startOfCurrentMonth, endOfCurrentMonth);
        if (currentRevenue == null) currentRevenue = BigDecimal.ZERO;

        BigDecimal previousRevenue = paymentRepository.calculateTotalRevenueByDateRange(startOfPreviousMonth, endOfPreviousMonth);
        if (previousRevenue == null) previousRevenue = BigDecimal.ZERO;

        BigDecimal changePercentage = calculatePercentageChange(currentRevenue, previousRevenue);

        return new RevenueAnalyticsDto(currentRevenue, changePercentage, "MONTHLY");
    }

    @Override
    @Transactional(readOnly = true)
    public RevenueAnalyticsDto getDailyRevenue() {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfToday = LocalDateTime.of(today, LocalTime.MIN);
        LocalDateTime endOfToday = LocalDateTime.of(today, LocalTime.MAX);

        LocalDate yesterday = today.minusDays(1);
        LocalDateTime startOfYesterday = LocalDateTime.of(yesterday, LocalTime.MIN);
        LocalDateTime endOfYesterday = LocalDateTime.of(yesterday, LocalTime.MAX);

        BigDecimal currentRevenue = paymentRepository.calculateTotalRevenueByDateRange(startOfToday, endOfToday);
        if (currentRevenue == null) currentRevenue = BigDecimal.ZERO;

        BigDecimal previousRevenue = paymentRepository.calculateTotalRevenueByDateRange(startOfYesterday, endOfYesterday);
        if (previousRevenue == null) previousRevenue = BigDecimal.ZERO;

        BigDecimal changePercentage = calculatePercentageChange(currentRevenue, previousRevenue);

        return new RevenueAnalyticsDto(currentRevenue, changePercentage, "DAILY");
    }

    @Override
    @Transactional(readOnly = true)
    public TransactionCountAnalyticsDto getDailyTransactionCount() {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfToday = LocalDateTime.of(today, LocalTime.MIN);
        LocalDateTime endOfToday = LocalDateTime.of(today, LocalTime.MAX);

        LocalDate yesterday = today.minusDays(1);
        LocalDateTime startOfYesterday = LocalDateTime.of(yesterday, LocalTime.MIN);
        LocalDateTime endOfYesterday = LocalDateTime.of(yesterday, LocalTime.MAX);

        Long currentCount = paymentRepository.countTransactionsByDateRange(startOfToday, endOfToday);
        if (currentCount == null) currentCount = 0L;

        Long previousCount = paymentRepository.countTransactionsByDateRange(startOfYesterday, endOfYesterday);
        if (previousCount == null) previousCount = 0L;

        Long changeAbsolute = currentCount - previousCount;

        return new TransactionCountAnalyticsDto(currentCount, changeAbsolute, "DAILY");
    }

    @Override
    @Transactional(readOnly = true)
    public ClientCountAnalyticsDto getNewClientsCount(String period) {
        LocalDate now = LocalDate.now();
        LocalDateTime startOfCurrentPeriod;
        LocalDateTime endOfCurrentPeriod;
        LocalDateTime startOfPreviousPeriod;
        LocalDateTime endOfPreviousPeriod;

        if ("MONTHLY".equalsIgnoreCase(period)) {
            startOfCurrentPeriod = LocalDateTime.of(now.withDayOfMonth(1), LocalTime.MIN);
            endOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MAX);

            LocalDate previousMonth = now.minusMonths(1);
            startOfPreviousPeriod = LocalDateTime.of(previousMonth.withDayOfMonth(1), LocalTime.MIN);
            endOfPreviousPeriod = LocalDateTime.of(previousMonth.withDayOfMonth(previousMonth.lengthOfMonth()), LocalTime.MAX);
        } else { // DAILY
            startOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MIN);
            endOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MAX);

            LocalDate yesterday = now.minusDays(1);
            startOfPreviousPeriod = LocalDateTime.of(yesterday, LocalTime.MIN);
            endOfPreviousPeriod = LocalDateTime.of(yesterday, LocalTime.MAX);
        }

        Long currentCount = clientRepository.countNewClientsByDateRange(startOfCurrentPeriod, endOfCurrentPeriod);
        if (currentCount == null) currentCount = 0L;

        Long previousCount = clientRepository.countNewClientsByDateRange(startOfPreviousPeriod, endOfPreviousPeriod);
        if (previousCount == null) previousCount = 0L;

        Long changeAbsolute = currentCount - previousCount;

        return new ClientCountAnalyticsDto(currentCount, changeAbsolute, "NEW", period.toUpperCase());
    }

    @Override
    @Transactional(readOnly = true)
    public AverageCheckAnalyticsDto getAverageCheck(String period) {
        LocalDate now = LocalDate.now();
        LocalDateTime startOfCurrentPeriod;
        LocalDateTime endOfCurrentPeriod;
        LocalDateTime startOfPreviousPeriod;
        LocalDateTime endOfPreviousPeriod;

        if ("MONTHLY".equalsIgnoreCase(period)) {
            startOfCurrentPeriod = LocalDateTime.of(now.withDayOfMonth(1), LocalTime.MIN);
            endOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MAX);

            LocalDate previousMonth = now.minusMonths(1);
            startOfPreviousPeriod = LocalDateTime.of(previousMonth.withDayOfMonth(1), LocalTime.MIN);
            endOfPreviousPeriod = LocalDateTime.of(previousMonth.withDayOfMonth(previousMonth.lengthOfMonth()), LocalTime.MAX);
        } else { // DAILY
            startOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MIN);
            endOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MAX);

            LocalDate yesterday = now.minusDays(1);
            startOfPreviousPeriod = LocalDateTime.of(yesterday, LocalTime.MIN);
            endOfPreviousPeriod = LocalDateTime.of(yesterday, LocalTime.MAX);
        }

        BigDecimal currentAverage = paymentRepository.calculateAverageAmountByDateRange(startOfCurrentPeriod, endOfCurrentPeriod);
        if (currentAverage == null) currentAverage = BigDecimal.ZERO;

        BigDecimal previousAverage = paymentRepository.calculateAverageAmountByDateRange(startOfPreviousPeriod, endOfPreviousPeriod);
        if (previousAverage == null) previousAverage = BigDecimal.ZERO;

        BigDecimal changePercentage = calculatePercentageChange(currentAverage, previousAverage);

        return new AverageCheckAnalyticsDto(currentAverage, changePercentage, period.toUpperCase());
    }

    @Override
    @Transactional(readOnly = true)
    public BonusAccruedAnalyticsDto getBonusesAccrued(String period) {
        LocalDate now = LocalDate.now();
        LocalDateTime startOfCurrentPeriod;
        LocalDateTime endOfCurrentPeriod;
        LocalDateTime startOfPreviousPeriod;
        LocalDateTime endOfPreviousPeriod;

        if ("MONTHLY".equalsIgnoreCase(period)) {
            startOfCurrentPeriod = LocalDateTime.of(now.withDayOfMonth(1), LocalTime.MIN);
            endOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MAX);

            LocalDate previousMonth = now.minusMonths(1);
            startOfPreviousPeriod = LocalDateTime.of(previousMonth.withDayOfMonth(1), LocalTime.MIN);
            endOfPreviousPeriod = LocalDateTime.of(previousMonth.withDayOfMonth(previousMonth.lengthOfMonth()), LocalTime.MAX);
        } else { // DAILY
            startOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MIN);
            endOfCurrentPeriod = LocalDateTime.of(now, LocalTime.MAX);

            LocalDate yesterday = now.minusDays(1);
            startOfPreviousPeriod = LocalDateTime.of(yesterday, LocalTime.MIN);
            endOfPreviousPeriod = LocalDateTime.of(yesterday, LocalTime.MAX);
        }

        BigDecimal currentAmount = bonusEventRepository.sumBonusesGrantedByDateRange(startOfCurrentPeriod, endOfCurrentPeriod);
        if (currentAmount == null) currentAmount = BigDecimal.ZERO;

        BigDecimal previousAmount = bonusEventRepository.sumBonusesGrantedByDateRange(startOfPreviousPeriod, endOfPreviousPeriod);
        if (previousAmount == null) previousAmount = BigDecimal.ZERO;

        BigDecimal changePercentage = calculatePercentageChange(currentAmount, previousAmount);

        return new BonusAccruedAnalyticsDto(currentAmount, changePercentage, period.toUpperCase());
    }

    @Override
    @Transactional(readOnly = true)
    public ReturnsAnalyticsDto getDailyRefundsCount() {
        LocalDate today = LocalDate.now();
        LocalDateTime startOfToday = LocalDateTime.of(today, LocalTime.MIN);
        LocalDateTime endOfToday = LocalDateTime.of(today, LocalTime.MAX);

        LocalDate yesterday = today.minusDays(1);
        LocalDateTime startOfYesterday = LocalDateTime.of(yesterday, LocalTime.MIN);
        LocalDateTime endOfYesterday = LocalDateTime.of(yesterday, LocalTime.MAX);

        Long currentCount = paymentRepository.countReturnsByDateRange(startOfToday, endOfToday);
        if (currentCount == null) currentCount = 0L;

        Long previousCount = paymentRepository.countReturnsByDateRange(startOfYesterday, endOfYesterday);
        if (previousCount == null) previousCount = 0L;

        Long changeAbsolute = currentCount - previousCount;

        return new ReturnsAnalyticsDto(currentCount, changeAbsolute, "DAILY");
    }

    @Override
    @Transactional(readOnly = true)
    public ClientCountAnalyticsDto getActiveClientsCount() {
        LocalDate now = LocalDate.now();
        LocalDateTime startOfCurrentMonth = LocalDateTime.of(now.withDayOfMonth(1), LocalTime.MIN);
        LocalDateTime endOfCurrentMonth = LocalDateTime.of(now, LocalTime.MAX);

        LocalDate previousMonth = now.minusMonths(1);
        LocalDateTime startOfPreviousMonth = LocalDateTime.of(previousMonth.withDayOfMonth(1), LocalTime.MIN);
        LocalDateTime endOfPreviousMonth = LocalDateTime.of(previousMonth.withDayOfMonth(previousMonth.lengthOfMonth()), LocalTime.MAX);

        Long currentCount = clientRepository.countActiveClientsByDateRange(startOfCurrentMonth, endOfCurrentMonth);
        if (currentCount == null) currentCount = 0L;

        Long previousCount = clientRepository.countActiveClientsByDateRange(startOfPreviousMonth, endOfPreviousMonth);
        if (previousCount == null) previousCount = 0L;

        Long changeAbsolute = currentCount - previousCount;

        return new ClientCountAnalyticsDto(currentCount, changeAbsolute, "ACTIVE", "MONTHLY");
    }

    @Override
    @Transactional(readOnly = true)
    public MonthlyRevenueChartDto getMonthlyRevenueChart(Integer year, Integer month) {
        LocalDate now = LocalDate.now();
        
        // Use current month if not specified
        if (year == null || month == null) {
            year = now.getYear();
            month = now.getMonthValue();
        }
        
        YearMonth yearMonth = YearMonth.of(year, month);
        LocalDate startOfMonth = yearMonth.atDay(1);
        LocalDate endOfMonth = yearMonth.atEndOfMonth();
        
        // Determine the last day to include (current day if current month, or last day of month)
        int lastDay;
        if (year.equals(now.getYear()) && month.equals(now.getMonthValue())) {
            lastDay = now.getDayOfMonth();
        } else {
            lastDay = endOfMonth.getDayOfMonth();
        }
        
        LocalDateTime startDateTime = LocalDateTime.of(startOfMonth, LocalTime.MIN);
        LocalDateTime endDateTime = LocalDateTime.of(
            yearMonth.atDay(lastDay), LocalTime.MAX).plusDays(1); // Add 1 day to make it exclusive
        
        // Get revenue and transaction data grouped by day
        List<Object[]> revenueData = paymentRepository.getDailyRevenueAndTransactionsByMonth(startDateTime, endDateTime);
        
        // Get bonus data grouped by day
        List<Object[]> bonusData = bonusEventRepository.getDailyBonusAmountsByMonth(startDateTime, endDateTime);
        
        // Create maps for quick lookup
        Map<Integer, DailyRevenueDataDto> dayDataMap = new HashMap<>();
        
        // Initialize all days from 1 to lastDay with zero values
        for (int day = 1; day <= lastDay; day++) {
            dayDataMap.put(day, new DailyRevenueDataDto(
                day,
                BigDecimal.ZERO,
                0L,
                BigDecimal.ZERO,
                BigDecimal.ZERO
            ));
        }
        
        // Fill in revenue and transaction data
        for (Object[] row : revenueData) {
            if (row.length >= 3 && row[0] != null) {
                Integer day = ((Number) row[0]).intValue();
                BigDecimal revenue = row[1] != null ? 
                    (row[1] instanceof BigDecimal ? (BigDecimal) row[1] : new BigDecimal(row[1].toString())) : 
                    BigDecimal.ZERO;
                Long transactionCount = row[2] != null ? ((Number) row[2]).longValue() : 0L;
                
                DailyRevenueDataDto existing = dayDataMap.get(day);
                if (existing != null) {
                    existing.setRevenue(revenue);
                    existing.setTransactionCount(transactionCount);
                }
            }
        }
        
        // Fill in bonus data
        for (Object[] row : bonusData) {
            if (row.length >= 3 && row[0] != null) {
                Integer day = ((Number) row[0]).intValue();
                BigDecimal grantedAmount = row[1] != null ? 
                    (row[1] instanceof BigDecimal ? (BigDecimal) row[1] : new BigDecimal(row[1].toString())) : 
                    BigDecimal.ZERO;
                BigDecimal usedAmount = row[2] != null ? 
                    (row[2] instanceof BigDecimal ? (BigDecimal) row[2] : new BigDecimal(row[2].toString())) : 
                    BigDecimal.ZERO;
                
                DailyRevenueDataDto existing = dayDataMap.get(day);
                if (existing != null) {
                    existing.setBonusesGranted(grantedAmount);
                    existing.setBonusesUsed(usedAmount);
                }
            }
        }
        
        // Convert map to sorted list
        List<DailyRevenueDataDto> dailyData = IntStream.rangeClosed(1, lastDay)
            .mapToObj(dayDataMap::get)
            .collect(Collectors.toList());
        
        return new MonthlyRevenueChartDto(year, month, dailyData);
    }

    @Override
    @Transactional(readOnly = true)
    public OverallTotalsDto getOverallTotals() {
        Long totalPayments = paymentRepository.countAllCompletedTransactions();
        if (totalPayments == null) totalPayments = 0L;

        BigDecimal totalRevenue = paymentRepository.calculateTotalRevenueAllTime();
        if (totalRevenue == null) totalRevenue = BigDecimal.ZERO;

        BigDecimal totalBonusesGranted = bonusEventRepository.sumAllBonusesGrantedAmount();
        if (totalBonusesGranted == null) totalBonusesGranted = BigDecimal.ZERO;

        Long totalClients = clientRepository.countAllClients();
        if (totalClients == null) totalClients = 0L;

        return new OverallTotalsDto(totalPayments, totalRevenue, totalBonusesGranted, totalClients);
    }

    @Override
    @Transactional(readOnly = true)
    public ClientTotalsDto getClientTotals(UUID clientId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        Long internalClientId = client.getId();

        // Get payment statistics
        Long totalPayments = paymentRepository.countCompletedTransactionsByClientId(internalClientId);
        if (totalPayments == null) totalPayments = 0L;

        BigDecimal totalRevenue = paymentRepository.calculateTotalRevenueByClientId(internalClientId);
        if (totalRevenue == null) totalRevenue = BigDecimal.ZERO;

        // Get bonus statistics
        BigDecimal totalBonusesGranted = bonusEventRepository.sumBonusesGrantedByClientId(internalClientId);
        if (totalBonusesGranted == null) totalBonusesGranted = BigDecimal.ZERO;

        BigDecimal totalBonusesUsed = bonusEventRepository.sumBonusesUsedByClientId(internalClientId);
        if (totalBonusesUsed == null) totalBonusesUsed = BigDecimal.ZERO;

        return new ClientTotalsDto(totalPayments, totalRevenue, totalBonusesGranted, totalBonusesUsed);
    }

    private BigDecimal calculatePercentageChange(BigDecimal current, BigDecimal previous) {
        if (previous == null || previous.compareTo(BigDecimal.ZERO) == 0) {
            return current.compareTo(BigDecimal.ZERO) > 0 ? BigDecimal.valueOf(100) : BigDecimal.ZERO;
        }
        return current.subtract(previous)
                .divide(previous, 4, RoundingMode.HALF_UP)
                .multiply(BigDecimal.valueOf(100))
                .setScale(2, RoundingMode.HALF_UP);
    }
}

