package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Stats for the reward program configuration page.
 * Avg reward cost = (Total value of redeemed rewards / Total customer spend) × 100 over last 30 days.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RewardConfigStatsDto {

    /** Number of currently active (enabled) reward types. */
    private int activeRewardsCount;

    /**
     * Average reward cost as percentage (last 30 days).
     * Formula: (total redeemed bonuses / total customer spend) × 100.
     * Null if no spend in period (cannot compute).
     */
    private Double avgRewardCostPercent30Days;

    /**
     * Typical expiration in days (from first active type that has expiration &gt; 0).
     * Null if no active type has expiration.
     */
    private Integer expirationDays;
}
