package com.westwood.common.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class ClientValueDto {

    private UUID clientId;
    private String clientName;
    private String phone;
    private BigDecimal totalSpent;
    private Long transactionCount;
    private BigDecimal averageTransactionAmount;
    private LocalDateTime lastTransactionDate;
    private BigDecimal bonusBalance;
}

