package com.westwood.common.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class UpdateBonusTypeRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @Positive(message = "Bonus amount must be positive")
    private BigDecimal bonusAmount;

    @Positive(message = "Bonus percentage must be positive")
    private BigDecimal bonusPercentage;

    @Positive(message = "Milestone threshold must be positive")
    private Integer milestoneThreshold;

    @Positive(message = "Expiration days must be positive")
    private Integer expirationDays; // Number of days until bonus expires (null = never expires)

    private String description;

    private Boolean enabled;
}

