package com.westwood.service;

import com.westwood.common.dto.BonusTypeReportDto;

import java.time.LocalDateTime;

public interface BonusTypeReportService {

    /**
     * Build KPI report for the given bonus type and period.
     */
    BonusTypeReportDto getReport(Long bonusTypeId, LocalDateTime from, LocalDateTime to);
}
