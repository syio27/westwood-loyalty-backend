package com.westwood.common.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CompletePaymentRequest {

    @NotNull(message = "Original amount is required")
    @Positive(message = "Original amount must be positive")
    private BigDecimal originalAmount; // Сумма покупки (12000)

    @PositiveOrZero(message = "Bonus amount must be zero or positive")
    private BigDecimal bonusAmountUsed; // Скидка бонусами (2000), default 0

    private String notes; // Опциональные заметки
}
