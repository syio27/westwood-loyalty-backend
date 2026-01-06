package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.ClientValueDto;
import com.westwood.service.AnalyticsService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/analytics")
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    public AnalyticsController(AnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/clients/value")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<ClientValueDto>> getClientValueRankings() {
        List<ClientValueDto> rankings = analyticsService.getClientValueRankings();
        return ResponseEntity.ok(rankings);
    }

    @GetMapping("/clients/{id}/spending")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<BigDecimal> getClientSpendingByTimeRange(
            @PathVariable UUID id,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime to) {
        BigDecimal spending = analyticsService.getClientSpendingByTimeRange(id, from, to);
        return ResponseEntity.ok(spending);
    }

    @GetMapping("/clients/{id}/value")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientValueDto> getClientValue(@PathVariable UUID id) {
        ClientValueDto value = analyticsService.getClientValue(id);
        return ResponseEntity.ok(value);
    }
}

