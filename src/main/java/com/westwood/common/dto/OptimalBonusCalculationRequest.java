package com.westwood.common.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class OptimalBonusCalculationRequest {

    @NotNull(message = "Revenue is required")
    @Positive(message = "Revenue must be positive")
    private BigDecimal revenue;

    @NotNull(message = "Client retention rate is required")
    @Positive(message = "Client retention rate must be positive")
    private BigDecimal clientRetentionRate; // e.g., 0.85 for 85%

    @NotNull(message = "Average transaction amount is required")
    @Positive(message = "Average transaction amount must be positive")
    private BigDecimal averageTransactionAmount;
}

