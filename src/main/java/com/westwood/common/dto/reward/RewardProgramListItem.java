package com.westwood.common.dto.reward;

import com.westwood.domain.CashbackType;
import com.westwood.domain.RewardProgramStatus;
import com.westwood.domain.RewardProgramType;
import com.westwood.domain.EventGrantType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

/**
 * Lightweight DTO for program listing / table.
 * For CASHBACK programs, cashbackType/cashbackValue/minSpendAmount/pointsSpendThreshold are set.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RewardProgramListItem {

    private UUID uuid;
    private RewardProgramType type;
    private RewardProgramStatus status;
    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime createdAt;

    /** Only for type CASHBACK: PERCENTAGE or BONUS_POINTS */
    private CashbackType cashbackType;
    private BigDecimal cashbackValue;
    private BigDecimal minSpendAmount;
    /** Only for BONUS_POINTS: points earned per this spend amount */
    private BigDecimal pointsSpendThreshold;

    /** Only for type EVENT: POINTS or FIXED_MONEY_KZT */
    private EventGrantType eventGrantType;
    /** Only for type EVENT: grant value (points or KZT amount) */
    private BigDecimal eventGrantValue;

    /** When this program has an end date and an always-on program of the same type exists: that program's name (for UI tooltip). */
    private String alwaysOnProgramName;

    /** When this program is always-on (no end date) and a dated program of the same type exists: that program's name (this program is not applied during that program's period). */
    private String ignoredDuringProgramName;
}
