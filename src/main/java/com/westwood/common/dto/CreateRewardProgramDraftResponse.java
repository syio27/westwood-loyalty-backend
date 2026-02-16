package com.westwood.common.dto;

import com.westwood.domain.RewardProgramStatus;
import com.westwood.domain.RewardProgramType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateRewardProgramDraftResponse {

    private UUID uuid;
    private RewardProgramType type;
    private RewardProgramStatus status;
}
