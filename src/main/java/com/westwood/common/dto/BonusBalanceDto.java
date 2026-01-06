package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BonusBalanceDto {

    private UUID clientId;
    private String clientName;
    private BigDecimal totalAccumulated;
    private BigDecimal totalUsed;
    private BigDecimal currentBalance;
}

