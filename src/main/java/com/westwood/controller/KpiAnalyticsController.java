package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.KpiDashboardDto;
import com.westwood.service.KpiAnalyticsService;
import jakarta.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

/**
 * Controller for high-level KPI / business intelligence metrics.
 * Separates strategic KPI logic from the operational {@link com.westwood.controller.AnalyticsController}.
 */
@RestController
@RequestMapping(ApiConstants.API_V1 + "/kpi-analytics")
@Validated
public class KpiAnalyticsController {

    private final KpiAnalyticsService kpiAnalyticsService;

    public KpiAnalyticsController(KpiAnalyticsService kpiAnalyticsService) {
        this.kpiAnalyticsService = kpiAnalyticsService;
    }

    /**
     * Get dashboard metrics for the given period. All metrics are scoped to [from, to] (ISO-8601).
     */
    @GetMapping("/dashboard-metrics")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<KpiDashboardDto> getDashboardMetrics(
            @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime from,
            @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime to) {
        KpiDashboardDto metrics = kpiAnalyticsService.getDashboardMetrics(from, to);
        return ResponseEntity.ok(metrics);
    }
}
