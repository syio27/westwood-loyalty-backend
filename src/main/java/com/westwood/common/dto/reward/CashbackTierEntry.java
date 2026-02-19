package com.westwood.common.dto.reward;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CashbackTierEntry {

    @NotBlank(message = "Tier name is required")
    @Size(max = 100, message = "Tier name must be at most 100 characters")
    private String name;

    @NotNull(message = "Minimum amount is required")
    @DecimalMin(value = "0.00", message = "Minimum amount must be >= 0")
    private BigDecimal minAmount;

    private BigDecimal maxAmount;

    @NotNull(message = "Extra earning percent is required")
    @DecimalMin(value = "0.00", message = "Extra earning percent must be >= 0")
    private BigDecimal extraEarningPercent;

    @NotNull(message = "Sort order is required")
    private Integer sortOrder;
}
