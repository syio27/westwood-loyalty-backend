package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.*;
import com.westwood.service.BonusService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/bonuses")
public class BonusController {

    private final BonusService bonusService;

    public BonusController(BonusService bonusService) {
        this.bonusService = bonusService;
    }

    @GetMapping("/client/{clientId}/balance")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<BonusBalanceDto> getClientBonusBalance(@PathVariable UUID clientId) {
        BonusBalanceDto balance = bonusService.getClientBonusBalance(clientId);
        return ResponseEntity.ok(balance);
    }

    @GetMapping("/client/{clientId}/history")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PagedBonusHistoryResponse> getClientBonusHistory(
            @PathVariable UUID clientId,
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size) {
        PagedBonusHistoryResponse history = bonusService.getClientBonusHistory(clientId, page, size);
        return ResponseEntity.ok(history);
    }

    @PostMapping("/client/{clientId}/grant")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<BonusBalanceDto> grantBonus(
            @PathVariable UUID clientId,
            @Valid @RequestBody ManualBonusGrantRequest request) {
        BonusBalanceDto balance = bonusService.manualGrantBonus(clientId, request);
        return ResponseEntity.ok(balance);
    }

    @PostMapping("/client/{clientId}/revoke")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<BonusBalanceDto> revokeBonus(
            @PathVariable UUID clientId,
            @Valid @RequestBody ManualBonusRevokeRequest request) {
        BonusBalanceDto balance = bonusService.manualRevokeBonus(clientId, request);
        return ResponseEntity.ok(balance);
    }
}
