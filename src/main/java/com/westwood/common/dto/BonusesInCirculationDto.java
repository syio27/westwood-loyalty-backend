package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BonusesInCirculationDto {
    /** Total amount of bonuses that are active (not revoked, not expired, not fully consumed). */
    private BigDecimal amount;
}
