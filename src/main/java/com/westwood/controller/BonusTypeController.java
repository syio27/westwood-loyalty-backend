package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.BonusTypeDto;
import com.westwood.common.dto.BonusTypeInfoDto;
import com.westwood.common.dto.CreateBonusTypeRequest;
import com.westwood.common.dto.RewardConfigStatsDto;
import com.westwood.common.dto.UpdateBonusTypeRequest;
import com.westwood.service.BonusTypeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/bonus-types")
public class BonusTypeController {

    private final BonusTypeService bonusTypeService;

    public BonusTypeController(BonusTypeService bonusTypeService) {
        this.bonusTypeService = bonusTypeService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<BonusTypeDto> createBonusType(@Valid @RequestBody CreateBonusTypeRequest request) {
        BonusTypeDto created = bonusTypeService.createBonusType(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<BonusTypeDto>> getAllBonusTypes() {
        List<BonusTypeDto> bonusTypes = bonusTypeService.getAllBonusTypes();
        return ResponseEntity.ok(bonusTypes);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<BonusTypeDto> getBonusTypeById(@PathVariable Long id) {
        BonusTypeDto bonusType = bonusTypeService.getBonusTypeById(id);
        return ResponseEntity.ok(bonusType);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<BonusTypeDto> updateBonusType(
            @PathVariable Long id,
            @Valid @RequestBody UpdateBonusTypeRequest request) {
        BonusTypeDto updated = bonusTypeService.updateBonusType(id, request);
        return ResponseEntity.ok(updated);
    }

    @PatchMapping("/{id}/toggle")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<Void> toggleBonusType(
            @PathVariable Long id,
            @RequestParam Boolean enabled) {
        bonusTypeService.toggleBonusType(id, enabled);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<Void> deleteBonusType(@PathVariable Long id) {
        bonusTypeService.deleteBonusType(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/active")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<BonusTypeDto>> getActiveBonusTypes() {
        List<BonusTypeDto> activeBonusTypes = bonusTypeService.getActiveBonusTypes();
        return ResponseEntity.ok(activeBonusTypes);
    }

    @GetMapping("/preconfigured")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<BonusTypeInfoDto>> getPreconfiguredBonusTypes() {
        List<BonusTypeInfoDto> preconfiguredTypes = bonusTypeService.getPreconfiguredBonusTypes();
        return ResponseEntity.ok(preconfiguredTypes);
    }

    @GetMapping("/reward-config-stats")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<RewardConfigStatsDto> getRewardConfigStats() {
        RewardConfigStatsDto stats = bonusTypeService.getRewardConfigStats();
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/flow/{flow}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<BonusTypeDto> getActiveBonusByFlow(@PathVariable String flow) {
        BonusTypeDto bonusType = bonusTypeService.getActiveBonusByFlow(flow);
        return ResponseEntity.ok(bonusType);
    }
}

