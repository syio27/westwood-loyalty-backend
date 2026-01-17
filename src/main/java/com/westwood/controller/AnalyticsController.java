package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.*;
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

    // Dashboard analytics endpoints
    @GetMapping("/revenue/monthly")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<RevenueAnalyticsDto> getMonthlyRevenue() {
        RevenueAnalyticsDto revenue = analyticsService.getMonthlyRevenue();
        return ResponseEntity.ok(revenue);
    }

    @GetMapping("/revenue/daily")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<RevenueAnalyticsDto> getDailyRevenue() {
        RevenueAnalyticsDto revenue = analyticsService.getDailyRevenue();
        return ResponseEntity.ok(revenue);
    }

    @GetMapping("/transactions/daily")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<TransactionCountAnalyticsDto> getDailyTransactionCount() {
        TransactionCountAnalyticsDto count = analyticsService.getDailyTransactionCount();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/clients/new/daily")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientCountAnalyticsDto> getNewClientsCount(
            @RequestParam(defaultValue = "DAILY") String period) {
        ClientCountAnalyticsDto count = analyticsService.getNewClientsCount(period);
        return ResponseEntity.ok(count);
    }

    @GetMapping("/average-check")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<AverageCheckAnalyticsDto> getAverageCheck(
            @RequestParam(defaultValue = "DAILY") String period) {
        AverageCheckAnalyticsDto average = analyticsService.getAverageCheck(period);
        return ResponseEntity.ok(average);
    }

    @GetMapping("/bonuses/accrued")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<BonusAccruedAnalyticsDto> getBonusesAccrued(
            @RequestParam(defaultValue = "DAILY") String period) {
        BonusAccruedAnalyticsDto bonuses = analyticsService.getBonusesAccrued(period);
        return ResponseEntity.ok(bonuses);
    }

    @GetMapping("/refunds/daily")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ReturnsAnalyticsDto> getDailyRefundsCount() {
        ReturnsAnalyticsDto refunds = analyticsService.getDailyRefundsCount();
        return ResponseEntity.ok(refunds);
    }

    @GetMapping("/clients/active")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientCountAnalyticsDto> getActiveClientsCount() {
        ClientCountAnalyticsDto count = analyticsService.getActiveClientsCount();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/revenue/monthly/chart")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<MonthlyRevenueChartDto> getMonthlyRevenueChart(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) Integer month) {
        MonthlyRevenueChartDto chart = analyticsService.getMonthlyRevenueChart(year, month);
        return ResponseEntity.ok(chart);
    }

    @GetMapping("/totals/overall")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<OverallTotalsDto> getOverallTotals() {
        OverallTotalsDto totals = analyticsService.getOverallTotals();
        return ResponseEntity.ok(totals);
    }
}

