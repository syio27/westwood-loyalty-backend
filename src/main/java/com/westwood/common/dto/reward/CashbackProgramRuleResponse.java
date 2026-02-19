package com.westwood.common.dto.reward;

import com.westwood.domain.CashbackType;
import com.westwood.domain.EligibilityType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CashbackProgramRuleResponse {

    private CashbackType cashbackType;
    private BigDecimal cashbackValue;
    private BigDecimal minSpendAmount;
    private EligibilityType eligibilityType;
    private Integer redeemLimitPercent;
    private Integer bonusLifespanDays;
    private BigDecimal pointsSpendThreshold;
}
