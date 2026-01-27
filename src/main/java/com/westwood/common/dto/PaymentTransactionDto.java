package com.westwood.common.dto;

import com.westwood.domain.PaymentTransaction;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
public class PaymentTransactionDto {

    private String txId; // Transaction identifier: PTX-YY-XXXXX (e.g., PTX-24-ABCDE)
    private UUID clientId; // External UUID for frontend
    private String clientName;
    private UUID enteredByUserId; // External UUID for frontend
    private String enteredByUsername;
    private BigDecimal amount;
    private String notes;
    private PaymentTransaction.PaymentStatus status;
    private PaymentTransaction.PaymentMethod paymentMethod;
    private String refundedPaymentTxId; // Transaction identifier of the original payment if this is a refund
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<BonusRevocationDto> bonusRevocations; // List of bonus revocations for this payment (if refunded)
}

