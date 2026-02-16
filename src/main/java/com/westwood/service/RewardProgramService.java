package com.westwood.service;

import com.westwood.common.dto.CreateRewardProgramDraftRequest;
import com.westwood.common.dto.CreateRewardProgramDraftResponse;
import com.westwood.common.dto.RewardProgramSlotDto;

import java.util.List;

public interface RewardProgramService {

    /**
     * Returns one slot per reward program type (WELCOME, BIRTHDAY, REFERRAL, CASHBACK).
     * Status NOT_CREATED if no row exists, otherwise DRAFT or ACTIVE with uuid.
     */
    List<RewardProgramSlotDto> getSlots();

    /**
     * Creates a draft reward program for the given type (generates UUID).
     * If a program for this type already exists, returns existing (idempotent for DRAFT).
     */
    CreateRewardProgramDraftResponse createDraft(CreateRewardProgramDraftRequest request);
}
