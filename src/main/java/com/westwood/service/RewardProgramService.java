package com.westwood.service;

import com.westwood.common.dto.CreateRewardProgramDraftRequest;
import com.westwood.common.dto.CreateRewardProgramDraftResponse;
import com.westwood.common.dto.RewardProgramSlotDto;
import com.westwood.common.dto.reward.*;
import com.westwood.domain.RewardProgram;
import com.westwood.domain.RewardProgramType;

import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
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

    /**
     * Save/update welcome program draft. Schedule is start/end date only (no weekly).
     * Only allowed when program is in DRAFT status and type is WELCOME.
     */
    RewardProgramResponse saveWelcomeDraft(UUID uuid, SaveWelcomeProgramDraftRequest request);

    // --- Lifecycle ---

    /**
     * Launch a cashback program immediately or schedule it.
     * Accepts optional program data — if provided, persisted before launch validation.
     * DRAFT -> ACTIVE (immediate) or DRAFT -> SCHEDULED.
     */
    RewardProgramResponse launchCashbackProgram(UUID uuid, LaunchCashbackProgramRequest request);

    /**
     * Launch a welcome program immediately or schedule it.
     * Schedule: start/end only (no weekly). DRAFT -> ACTIVE or DRAFT -> SCHEDULED.
     */
    RewardProgramResponse launchWelcomeProgram(UUID uuid, LaunchWelcomeProgramRequest request);

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
    PagedTieredClientsResponse getTieredClients(UUID programUuid, Pageable pageable, String tierName, String search, String searchPhone, String sort);

    /**
     * Check if scheduling a program with the given type and date range would overlap with an existing
     * ACTIVE or SCHEDULED program of the same type. When an existing program is "always on" (no end date)
     * and the new program has an end date, no conflict is reported (always-on is ignored during the new program's period).
     *
     * @param excludeUuid UUID of the program being edited (excluded from check); can be null for new programs.
     */
    ScheduleOverlapCheckResponse checkScheduleOverlap(RewardProgramType type,
                                                        LocalDateTime start, LocalDateTime end, UUID excludeUuid);

    /**
     * Returns the active welcome program whose period contains the given time (for grant-on-join and grant-on-first-pay).
     */
    Optional<RewardProgram> getEffectiveActiveWelcomeProgram(LocalDateTime at);
}
