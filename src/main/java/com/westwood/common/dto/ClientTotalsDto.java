package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientTotalsDto {
    private Long totalPayments; // Total number of completed payments for this client
    private BigDecimal totalRevenue; // Total revenue from all completed payments for this client
    private BigDecimal totalBonusesGranted; // Total amount of bonuses granted to this client
    private BigDecimal totalBonusesUsed; // Total amount of bonuses used by this client
}
