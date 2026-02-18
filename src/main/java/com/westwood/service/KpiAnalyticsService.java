package com.westwood.service;

import com.westwood.common.dto.KpiDashboardDto;

import java.time.LocalDateTime;

/**
 * Service for high-level business intelligence (KPI) metrics.
 * Separates strategic KPI logic from operational {@link AnalyticsService}.
 */
public interface KpiAnalyticsService {

    /**
     * Build dashboard metrics for the given period. All calculations are scoped to [from, to].
     *
     * @param from start of the analysis period (inclusive)
     * @param to   end of the analysis period (inclusive)
     * @return KPI dashboard with revenue, uplift, retention, and efficiency metrics
     */
    KpiDashboardDto getDashboardMetrics(LocalDateTime from, LocalDateTime to);
}
