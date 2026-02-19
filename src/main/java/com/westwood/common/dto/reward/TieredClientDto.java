package com.westwood.common.dto.reward;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TieredClientDto {

    private UUID clientUuid;
    private String clientName;
    private String phone;
    private String tierName;
    private Integer tierSortOrder;
    private BigDecimal programPeriodSpend;
    /** Percent (0–100) of progress from current tier min to next tier min; null if top tier or no next. */
    private BigDecimal percentToNextTier;
    private String nextTierName;
}
