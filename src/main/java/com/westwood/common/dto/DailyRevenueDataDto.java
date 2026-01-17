package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DailyRevenueDataDto {
    private Integer day; // Day of month (1-31)
    private BigDecimal revenue; // Revenue for this day
    private Long transactionCount; // Number of transactions
    private Long bonusesGranted; // Number of bonuses granted (начислено)
    private Long bonusesUsed; // Number of bonuses used (использовано)
}
