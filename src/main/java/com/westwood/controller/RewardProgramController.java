package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.CreateRewardProgramDraftRequest;
import com.westwood.common.dto.CreateRewardProgramDraftResponse;
import com.westwood.common.dto.RewardProgramSlotDto;
import com.westwood.service.RewardProgramService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/reward-programs")
public class RewardProgramController {

    private final RewardProgramService rewardProgramService;

    public RewardProgramController(RewardProgramService rewardProgramService) {
        this.rewardProgramService = rewardProgramService;
    }

    @GetMapping("/slots")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<RewardProgramSlotDto>> getSlots() {
        List<RewardProgramSlotDto> slots = rewardProgramService.getSlots();
        return ResponseEntity.ok(slots);
    }

    @PostMapping("/draft")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<CreateRewardProgramDraftResponse> createDraft(
            @Valid @RequestBody CreateRewardProgramDraftRequest request) {
        CreateRewardProgramDraftResponse response = rewardProgramService.createDraft(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
