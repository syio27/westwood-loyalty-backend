package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BonusEventDto {
    private Long id;
    private UUID eventId;
    private UUID clientId;
    private String clientName;
    private String eventType; // "GRANTED" or "USED"
    private BigDecimal bonusAmount;
    private LocalDateTime createdAt;
    
    // For GRANTED events
    private String paymentTxId; // Transaction identifier of the payment that granted the bonus
    private BigDecimal bonusPercentage;
    private BigDecimal paymentAmount; // Original payment amount
    
    // For USED events
    private BigDecimal originalPaymentAmount; // Payment amount before bonus
    private BigDecimal finalPaymentAmount; // Payment amount after bonus
}

