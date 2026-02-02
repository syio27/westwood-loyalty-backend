package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExpiryGroupDto {
    /** Expiry date (same for all items in group) */
    private LocalDate expiryDate;
    private long daysLeft;
    /** Sum of remaining amounts for this day */
    private BigDecimal totalRemainingAmount;
    /** When WhatsApp was sent for this expiry date; null if not yet notified */
    private LocalDateTime notifiedAt;
    private List<BonusExpiringItemDto> items;
}
