package com.westwood.service;

import com.westwood.common.dto.*;
import com.westwood.common.dto.BonusesInCirculationDto;
import com.westwood.common.dto.SalesByLoyaltyDto;

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

    ClientCountAnalyticsDto getNewClientsCount(String period); // "DAILY" or "MONTHLY"

    AverageCheckAnalyticsDto getAverageCheck(String period); // "DAILY" or "MONTHLY"

    BonusAccruedAnalyticsDto getBonusesAccrued(String period); // "DAILY" or "MONTHLY"

    ReturnsAnalyticsDto getDailyRefundsCount();

    ClientCountAnalyticsDto getActiveClientsCount();

    MonthlyRevenueChartDto getMonthlyRevenueChart(Integer year, Integer month);

    OverallTotalsDto getOverallTotals();

    ClientTotalsDto getClientTotals(UUID clientId);

    /** Top 10 customers by total spent (COMPLETED payments), sorted by totalSpent DESC. */
    List<TopCustomerDto> getTopCustomers();

    /** Total amount of bonuses in circulation (active, usable by clients). */
    BonusesInCirculationDto getBonusesInCirculation();

    /** All-time split of sales: payments with bonus used (loyalty) vs without (non-loyalty). */
    SalesByLoyaltyDto getSalesByLoyalty();
}

