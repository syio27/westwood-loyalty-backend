package com.westwood.service;

import com.westwood.common.dto.BonusTypeReportDto;

import java.time.LocalDateTime;
import java.util.UUID;

public interface BonusTypeReportService {

    /**
     * Build KPI report for the given bonus type and period.
     */
    BonusTypeReportDto getReport(Long bonusTypeId, LocalDateTime from, LocalDateTime to);

    /**
     * Build KPI report for the given reward program (by UUID) and period.
     * Resolves the program's bonus type and uses the program name in the report.
     */
    BonusTypeReportDto getReportByRewardProgram(UUID rewardProgramUuid, LocalDateTime from, LocalDateTime to);
}
