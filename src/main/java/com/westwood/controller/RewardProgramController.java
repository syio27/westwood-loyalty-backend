package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.CreateRewardProgramDraftRequest;
import com.westwood.common.dto.CreateRewardProgramDraftResponse;
import com.westwood.common.dto.RewardProgramSlotDto;
import com.westwood.common.dto.reward.*;
import com.westwood.domain.RewardProgramType;
import com.westwood.service.RewardProgramService;
import jakarta.validation.Valid;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/reward-programs")
public class RewardProgramController {

    private final RewardProgramService rewardProgramService;

    public RewardProgramController(RewardProgramService rewardProgramService) {
        this.rewardProgramService = rewardProgramService;
    }

    // ─── Slots & Draft ───────────────────────────────────────────────

    @GetMapping("/slots")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<RewardProgramSlotDto>> getSlots() {
        return ResponseEntity.ok(rewardProgramService.getSlots());
    }

    @PostMapping("/draft")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<CreateRewardProgramDraftResponse> createDraft(
            @Valid @RequestBody CreateRewardProgramDraftRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(rewardProgramService.createDraft(request));
    }

    // ─── Get / List ──────────────────────────────────────────────────

    @GetMapping("/{uuid}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<RewardProgramResponse> getProgram(@PathVariable UUID uuid) {
        return ResponseEntity.ok(rewardProgramService.getProgram(uuid));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<RewardProgramListItem>> listPrograms() {
        return ResponseEntity.ok(rewardProgramService.listPrograms());
    }

    @GetMapping("/check-schedule-overlap")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ScheduleOverlapCheckResponse> checkScheduleOverlap(
            @RequestParam RewardProgramType type,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
            @RequestParam(required = false) UUID excludeUuid) {
        return ResponseEntity.ok(rewardProgramService.checkScheduleOverlap(type, start, end, excludeUuid));
    }

    @GetMapping("/{uuid}/tiered-clients")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PagedTieredClientsResponse> getTieredClients(
            @PathVariable UUID uuid,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) String tierName,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String searchPhone,
            @RequestParam(required = false) String sort) {
        Pageable pageable = PageRequest.of(page, Math.min(Math.max(size, 1), 100));
        return ResponseEntity.ok(rewardProgramService.getTieredClients(uuid, pageable, tierName, search, searchPhone, sort));
    }

    // ─── Draft Save (per program type) ───────────────────────────────

    @PutMapping("/{uuid}/cashback")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<RewardProgramResponse> saveCashbackDraft(
            @PathVariable UUID uuid,
            @Valid @RequestBody SaveCashbackProgramDraftRequest request) {
        return ResponseEntity.ok(rewardProgramService.saveCashbackDraft(uuid, request));
    }

    @PutMapping("/{uuid}/welcome")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<RewardProgramResponse> saveWelcomeDraft(
            @PathVariable UUID uuid,
            @Valid @RequestBody SaveWelcomeProgramDraftRequest request) {
        return ResponseEntity.ok(rewardProgramService.saveWelcomeDraft(uuid, request));
    }

    // ─── Lifecycle ───────────────────────────────────────────────────

    @PostMapping("/{uuid}/launch")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<RewardProgramResponse> launchCashbackProgram(
            @PathVariable UUID uuid,
            @Valid @RequestBody LaunchCashbackProgramRequest request) {
        return ResponseEntity.ok(rewardProgramService.launchCashbackProgram(uuid, request));
    }

    @PostMapping("/{uuid}/launch-welcome")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<RewardProgramResponse> launchWelcomeProgram(
            @PathVariable UUID uuid,
            @Valid @RequestBody LaunchWelcomeProgramRequest request) {
        return ResponseEntity.ok(rewardProgramService.launchWelcomeProgram(uuid, request));
    }

    @PostMapping("/{uuid}/deactivate")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<RewardProgramResponse> deactivateProgram(@PathVariable UUID uuid) {
        return ResponseEntity.ok(rewardProgramService.deactivateProgram(uuid));
    }

    @PostMapping("/{uuid}/archive")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<RewardProgramResponse> archiveProgram(@PathVariable UUID uuid) {
        return ResponseEntity.ok(rewardProgramService.archiveProgram(uuid));
    }

    @DeleteMapping("/{uuid}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<Void> deleteProgram(@PathVariable UUID uuid) {
        rewardProgramService.deleteProgram(uuid);
        return ResponseEntity.noContent().build();
    }
}
