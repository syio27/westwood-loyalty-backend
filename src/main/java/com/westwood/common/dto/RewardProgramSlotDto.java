package com.westwood.common.dto;

import com.westwood.domain.RewardProgramStatus;
import com.westwood.domain.RewardProgramType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

/**
 * One slot in the reward program list (per type).
 * status NOT_CREATED = no program created yet; uuid is null.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RewardProgramSlotDto {

    private RewardProgramType type;
    private String status; // "NOT_CREATED" | "DRAFT" | "ACTIVE"
    private UUID uuid;    // non-null when status is DRAFT or ACTIVE
}
