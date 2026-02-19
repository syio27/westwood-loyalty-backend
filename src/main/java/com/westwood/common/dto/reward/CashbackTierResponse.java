package com.westwood.common.dto.reward;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CashbackTierResponse {

    private Long id;
    private String name;
    private BigDecimal minAmount;
    private BigDecimal maxAmount;
    private BigDecimal extraEarningPercent;
    private Integer sortOrder;
}
