package com.westwood.service;

import com.westwood.common.dto.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface AnalyticsService {

    List<ClientValueDto> getClientValueRankings();

    ClientValueDto getClientValue(UUID clientId);

    BigDecimal getClientSpendingByTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate);

    // Dashboard analytics endpoints
    RevenueAnalyticsDto getMonthlyRevenue();

    RevenueAnalyticsDto getDailyRevenue();

    TransactionCountAnalyticsDto getDailyTransactionCount();

    ClientCountAnalyticsDto getNewClientsCount();

    AverageCheckAnalyticsDto getAverageCheck(String period); // "DAILY" or "MONTHLY"

    BonusAccruedAnalyticsDto getBonusesAccrued(String period); // "DAILY" or "MONTHLY"

    ReturnsAnalyticsDto getDailyRefundsCount();

    ClientCountAnalyticsDto getActiveClientsCount();

    MonthlyRevenueChartDto getMonthlyRevenueChart(Integer year, Integer month);

    OverallTotalsDto getOverallTotals();
}

