package com.westwood.common.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class UseBonusRequest {

    @NotNull(message = "Client ID is required")
    private UUID clientId;

    @NotNull(message = "Payment amount is required")
    @Positive(message = "Payment amount must be positive")
    private BigDecimal paymentAmount;

    @NotNull(message = "Bonus amount to use is required")
    @Positive(message = "Bonus amount must be positive")
    private BigDecimal bonusAmountToUse;

    private String notes;
}

