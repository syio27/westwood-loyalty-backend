package com.westwood.common.dto.reward;

import com.westwood.domain.RewardProgramStatus;
import com.westwood.domain.RewardProgramType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

/**
 * Full program response used for GET and summary step.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RewardProgramResponse {

    private UUID uuid;
    private RewardProgramType type;
    private RewardProgramStatus status;

    private String name;
    private String description;

    private LocalDateTime startDate;
    private LocalDateTime endDate;

    private List<WeeklyScheduleResponse> weeklySchedules;

    private CashbackProgramRuleResponse cashbackRule;

    private List<CashbackTierResponse> cashbackTiers;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
