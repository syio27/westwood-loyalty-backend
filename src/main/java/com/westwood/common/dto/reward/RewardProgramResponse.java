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

    private WelcomeProgramRuleResponse welcomeRule;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    /** When this program has an end date and an always-on program of the same type exists: that program's name (for UI tooltip). */
    private String alwaysOnProgramName;

    /** When this program is always-on (no end date) and a dated program of the same type exists: that program's name (this program is not applied during that program's period). */
    private String ignoredDuringProgramName;
}
