package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TierInfoDto {
    private String name;
    private BigDecimal extraRate;
    private BigDecimal minAmount;
    private BigDecimal maxAmount;
}
