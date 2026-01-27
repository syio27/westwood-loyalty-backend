package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BonusRevocationDto {
    private Long id;
    private BigDecimal bonusAmount;
    private String revokeReason; // e.g., "PAYMENT_REFUND"
    private LocalDateTime revokedAt;
    private String refundTxId; // Transaction ID of the refund that caused this revocation
    private String revokedByUsername; // Username of the user who initiated the refund
}
