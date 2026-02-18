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
    private BigDecimal totalGranted;
    private BigDecimal inCirculation;
    private BigDecimal burnedAmount;
    private BigDecimal spentAmount;
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
