package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OptimalBonusCalculationResponse {

    private BigDecimal optimalBonusPercentage;
    private BigDecimal projectedBonusCost;
    private BigDecimal projectedNetIncome;
    private BigDecimal clientSatisfactionScore;
    private String recommendation;
}

