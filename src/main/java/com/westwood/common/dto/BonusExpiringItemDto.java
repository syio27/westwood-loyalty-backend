package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BonusExpiringItemDto {
    private Long grantId;
    private BigDecimal remainingAmount;
    private BigDecimal originalAmount;
    private LocalDateTime expiresAt;
    private long daysLeft;
    private String grantReason;
}
