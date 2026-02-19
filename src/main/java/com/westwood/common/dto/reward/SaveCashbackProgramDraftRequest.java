package com.westwood.common.dto.reward;

import com.westwood.domain.CashbackType;
import com.westwood.domain.EligibilityType;
import jakarta.validation.Valid;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Single DTO for saving all cashback program draft data.
 * All fields are optional — the frontend can send partial updates at any point.
 */
@Data
public class SaveCashbackProgramDraftRequest {

    // --- Program details ---
    private String name;
    private String description;

    // --- Cashback config ---
    private CashbackType cashbackType;
    private BigDecimal cashbackValue;
    private BigDecimal minSpendAmount;
    private EligibilityType eligibilityType;
    private Integer redeemLimitPercent;
    private Integer bonusLifespanDays;
    private BigDecimal pointsSpendThreshold;

    // --- Schedule ---
    private LocalDateTime startDate;
    private LocalDateTime endDate;

    @Valid
    private List<WeeklyScheduleEntry> weeklySchedules;

    // --- Tiers (optional) ---
    @Valid
    private List<CashbackTierEntry> tiers;
}
