package com.westwood.common.dto.reward;

import com.westwood.domain.CashbackType;
import com.westwood.domain.RewardProgramStatus;
import com.westwood.domain.RewardProgramType;
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
}
