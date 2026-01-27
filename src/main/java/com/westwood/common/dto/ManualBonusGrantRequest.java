package com.westwood.common.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ManualBonusGrantRequest {
    
    @NotNull(message = "Bonus amount is required")
    @DecimalMin(value = "0.01", message = "Bonus amount must be greater than 0")
    private BigDecimal amount;
    
    @Size(max = 500, message = "Reason cannot exceed 500 characters")
    private String reason;
}
