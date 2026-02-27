package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

/**
 * KPI report for a single bonus type or all bonuses (period [from, to]).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BonusTypeReportDto {

    private Long bonusTypeId;
    private String bonusTypeName;
    private String periodFrom;
    private String periodTo;

    private long transactionCount;
    private long transactionCountWithoutBonus;
    private BigDecimal avgCheckWithBonus;
    private BigDecimal avgCheckWithoutBonus;
    /** Total amount granted in period. */
    private BigDecimal totalGranted;
    /** Number of grant events in period (for analytics). */
    private long grantCount;
    /** Total amount still active (not used, not expired, not revoked). */
    private BigDecimal inCirculation;
    /** Amount that expired in period (unused portion of grants whose expiresAt fell in period). */
    private BigDecimal burnedAmount;
    /** Number of grants that expired in period (for analytics). */
    private long expiredGrantCount;
    /** Total amount used (consumed) in period. */
    private BigDecimal spentAmount;
    /** Number of consumption (use) events in period (for analytics). */
    private long consumptionCount;
    private BigDecimal redemptionRatePercent;
    private BigDecimal effectiveDiscountPercent;
    private BigDecimal burnRatePercent;
    private BigDecimal aovUpliftPercent;
    private BigDecimal incrementalRevenuePercent;

    /** For WELCOME / BIRTHDAY: % of clients who received this bonus type and then spent it. */
    private BigDecimal retentionRatePercent;

    /** For REFERRAL only: % of referred clients who made first purchase. */
    private BigDecimal conversionRatePercent;
    /** For REFERRAL only: cost to acquire one client (total referral bonuses / converted count). */
    private BigDecimal cac;

    /** Per-month breakdown for bar chart (month label, avg with bonus, avg without). */
    private List<MonthlyReportPointDto> monthlyData;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MonthlyReportPointDto {
        private String month;
        private String yearMonth;
        private BigDecimal avgCheckWithBonus;
        private BigDecimal avgCheckWithoutBonus;
        private long transactionCountWithBonus;
        private long transactionCountWithoutBonus;
        /** Total revenue for the month (sum of completed payment amounts). */
        private BigDecimal revenue;
    }
}
