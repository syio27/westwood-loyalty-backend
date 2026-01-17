package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OverallTotalsDto {
    private Long totalPayments; // Total number of completed payments (all time)
    private BigDecimal totalRevenue; // Total revenue from all completed payments (all time)
    private BigDecimal totalBonusesGranted; // Total amount of bonuses granted (all time)
    private Long totalClients; // Total number of clients (all time)
}
