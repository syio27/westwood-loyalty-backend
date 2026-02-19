package com.westwood.common.dto.reward;

import com.westwood.domain.CashbackType;
import com.westwood.domain.EligibilityType;
import jakarta.validation.Valid;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Launch a cashback program — optionally includes all program data so the
 * frontend can submit the form and launch in a single call without a prior save-draft.
 *
 * If program data fields are provided, they are persisted before launch validation runs.
 * If they are null, the existing draft data is used as-is.
 */
@Data
public class LaunchCashbackProgramRequest {

    // --- Launch options ---
    private boolean immediate = true;

    // --- Program details (optional — applied before launch if provided) ---
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

    // --- Tiers ---
    @Valid
    private List<CashbackTierEntry> tiers;
}
