package com.westwood.service;

import com.westwood.common.dto.CreateRewardProgramDraftRequest;
import com.westwood.common.dto.CreateRewardProgramDraftResponse;
import com.westwood.common.dto.RewardProgramSlotDto;
import com.westwood.common.dto.reward.*;

import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.UUID;

public interface RewardProgramService {

    /**
     * Returns one slot per reward program type (WELCOME, BIRTHDAY, REFERRAL, CASHBACK).
     * Status NOT_CREATED if no row exists, otherwise DRAFT / SCHEDULED / ACTIVE / etc.
     */
    List<RewardProgramSlotDto> getSlots();

    /**
     * Creates a draft reward program for the given type (generates UUID).
     * If a DRAFT program for this type already exists, returns it (idempotent).
     */
    CreateRewardProgramDraftResponse createDraft(CreateRewardProgramDraftRequest request);

    /**
     * Get full program details by UUID.
     */
    RewardProgramResponse getProgram(UUID uuid);

    /**
     * List all programs, optionally filtered.
     */
    List<RewardProgramListItem> listPrograms();

    // --- Draft save (per program type) ---

    /**
     * Save/update all cashback program draft data in one call.
     * All fields in the request are optional — partial saves are fine.
     * Only allowed when program is in DRAFT status.
     */
    RewardProgramResponse saveCashbackDraft(UUID uuid, SaveCashbackProgramDraftRequest request);

    // --- Lifecycle ---

    /**
     * Launch a cashback program immediately or schedule it.
     * Accepts optional program data — if provided, persisted before launch validation.
     * This allows the frontend to submit the full form and launch in one call.
     * DRAFT -> ACTIVE (immediate) or DRAFT -> SCHEDULED.
     */
    RewardProgramResponse launchCashbackProgram(UUID uuid, LaunchCashbackProgramRequest request);

    /**
     * ACTIVE -> INACTIVE (manually deactivate a running program).
     */
    RewardProgramResponse deactivateProgram(UUID uuid);

    /**
     * INACTIVE -> ARCHIVED (permanently archive).
     */
    RewardProgramResponse archiveProgram(UUID uuid);

    /**
     * Delete a program. Allowed on DRAFT, INACTIVE, and ARCHIVED statuses only.
     */
    void deleteProgram(UUID uuid);

    /**
     * Get paginated tiered clients for an ACTIVE program with tiers.
     * Clients are tiered by program-period spend only; returns empty when program is not ACTIVE or has no tiers.
     */
    PagedTieredClientsResponse getTieredClients(UUID programUuid, Pageable pageable, String tierName);
}
