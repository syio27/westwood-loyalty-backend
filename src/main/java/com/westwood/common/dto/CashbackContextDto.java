package com.westwood.common.dto;

import com.westwood.domain.CashbackType;
import com.westwood.domain.EligibilityType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CashbackContextDto {
    private boolean active;
    private String programName;
    private CashbackType cashbackType;
    private BigDecimal baseRate;
    private BigDecimal pointsSpendThreshold;
    private BigDecimal minSpendAmount;
    private Integer redeemLimitPercent;
    private Integer bonusLifespanDays;
    private EligibilityType eligibilityType;
    private TierInfoDto currentTier;
    private BigDecimal effectiveRate;
    private BigDecimal clientTotalSpend;
}
