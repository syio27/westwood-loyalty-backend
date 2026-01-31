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
    private String eventType; // "GRANTED", "USED", "REVOKED", "MANUAL_REVOKE"
    private BigDecimal bonusAmount;
    private LocalDateTime createdAt;

    // For GRANTED events: original grant amount and remaining after consumptions
    private BigDecimal originalAmount;
    private BigDecimal remainingAmount;

    // For GRANTED events
    private String paymentTxId; // Transaction identifier of the payment that granted the bonus
    private BigDecimal bonusPercentage;
    private BigDecimal paymentAmount; // Original payment amount
    private String grantReason; // Reason why bonus was granted (e.g., "CASHBACK", "BIRTHDAY", "FIRST_PAYMENT", "10TH_PAYMENT", "REFERRAL")
    private LocalDateTime expiresAt; // When the bonus expires (null = never expires)
    
    // For USED events
    private BigDecimal originalPaymentAmount; // Payment amount before bonus
    private BigDecimal finalPaymentAmount; // Payment amount after bonus
    
    // For REVOKED events
    private String revokeReason; // Reason why bonus was revoked (e.g., "PAYMENT_REFUND")
    private String originalPaymentTxId; // Original payment that granted the bonus (for REVOKED events)
    private String refundTxId; // Refund transaction that caused the revocation
    private LocalDateTime revokedAt; // When the bonus was revoked

    // For MANUAL_REVOKE events (audit: who / when / reason)
    private Long revokedByUserId;
    private String revokedByUserName;

    // Initiator for any event: who performed the action (payment entered by, refund by, manual revoke by)
    private Long initiatedByUserId;
    private String initiatedByUserName;
}

