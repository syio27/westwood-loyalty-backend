package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.BonusEventDto;
import com.westwood.service.BonusService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
    public ResponseEntity<List<BonusEventDto>> getClientBonusHistory(@PathVariable UUID clientId) {
        List<BonusEventDto> history = bonusService.getClientBonusHistory(clientId);
        return ResponseEntity.ok(history);
    }

    @PostMapping("/recalculate/{clientId}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<Void> recalculateBonusBalance(@PathVariable UUID clientId) {
        bonusService.recalculateBonusBalance(clientId);
        return ResponseEntity.ok().build();
    }
}

