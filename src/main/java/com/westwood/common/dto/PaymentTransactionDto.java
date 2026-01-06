package com.westwood.common.dto;

import com.westwood.domain.PaymentTransaction;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class PaymentTransactionDto {

    private Long id; // Internal ID for database operations
    private UUID clientId; // External UUID for frontend
    private String clientName;
    private UUID enteredByUserId; // External UUID for frontend
    private String enteredByUsername;
    private BigDecimal amount;
    private String notes;
    private PaymentTransaction.PaymentStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

