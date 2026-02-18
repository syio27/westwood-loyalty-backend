package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;

/**
 * Response DTO for the KPI Analytics dashboard-metrics endpoint.
 * All monetary values are decimal numbers.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class KpiDashboardDto {

    private PeriodDto period;
    private RevenueMetricsDto revenue;
    private UpliftMetricsDto uplift;
    private RetentionMetricsDto retention;
    private EfficiencyMetricsDto efficiency;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PeriodDto {
        private Instant from;
        private Instant to;
    }

    /** Profitability metrics */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RevenueMetricsDto {
        private BigDecimal totalRevenue;
        private BigDecimal incrementalRevenue;
        private BigDecimal incrementalRevenuePercentage;
    }

    /** Behavior metrics (AOV uplift) */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UpliftMetricsDto {
        private BigDecimal aovUplift;
        private BigDecimal avgCheckWithBonus;
        private BigDecimal avgCheckRegular;
    }

    /** Loyalty health */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RetentionMetricsDto {
        private BigDecimal retentionRate;
        private long returningClientsCount;
        private long totalActiveClients;
    }

    /** Program efficiency */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class EfficiencyMetricsDto {
        private BigDecimal redemptionRate;
        private BigDecimal effectiveDiscount;
        private BigDecimal burnRate;
        private BigDecimal burnedAmount;
    }
}
