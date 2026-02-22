package com.westwood.common.dto.reward;

import com.westwood.domain.CashbackType;
import com.westwood.domain.EligibilityType;
import jakarta.validation.Valid;
import lombok.Data;

import java.math.BigDecimal;
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
    /** If true, launch as always-on (no end date). If false, schedule with start/end dates. Default false so periodic is safe when field is omitted. */
    private boolean immediate = false;

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

    // --- Schedule --- (ISO-8601 strings e.g. "2025-02-20T05:30:00.000Z" for timezone-safe validation)
    private String startDate;
    private String endDate;

    @Valid
    private List<WeeklyScheduleEntry> weeklySchedules;

    // --- Tiers ---
    @Valid
    private List<CashbackTierEntry> tiers;
}
