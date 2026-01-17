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
    private BigDecimal bonusesGranted; // Total amount of bonuses granted (начислено) in tenge
    private BigDecimal bonusesUsed; // Total amount of bonuses used (использовано) in tenge
}
