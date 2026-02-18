package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * All-time split of completed payments: with bonus used (loyalty) vs without (non-loyalty).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SalesByLoyaltyDto {
    /** Number of completed payments where at least one bonus was used. */
    private long loyaltyCount;
    /** Number of completed payments where no bonus was used. */
    private long nonLoyaltyCount;
    /** Loyalty share as percentage (0–100). */
    private double loyaltyPercent;
    /** Non-loyalty share as percentage (0–100). */
    private double nonLoyaltyPercent;
}
