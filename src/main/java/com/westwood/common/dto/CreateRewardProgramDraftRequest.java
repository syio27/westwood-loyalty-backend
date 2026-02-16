package com.westwood.common.dto;

import com.westwood.domain.RewardProgramType;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateRewardProgramDraftRequest {

    @NotNull(message = "Reward program type is required")
    private RewardProgramType type;
}
