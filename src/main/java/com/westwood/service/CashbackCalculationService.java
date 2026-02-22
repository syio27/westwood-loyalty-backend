package com.westwood.service;

import com.westwood.common.dto.CashbackContextDto;

import com.westwood.domain.RewardProgram;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

/**
 * Calculates and grants cashback bonuses based on active cashback program rules.
 * Replaces the old hardcoded BASIC_CASHBACK bonus type logic.
 */
public interface CashbackCalculationService {

    /**
     * Processes a payment and grants cashback if an active cashback program applies.
     * Checks: program active, within schedule window, min spend met, applies tiers.
     *
     * @param paymentTxId   the payment transaction ID
     * @param clientId      the client UUID
     * @param paymentAmount the payment amount
     */
    void processPaymentCashback(String paymentTxId, UUID clientId, BigDecimal paymentAmount);

    /**
     * Returns the active cashback program context for a given client, including
     * rates, tier info, min spend, redeem limit, etc. Used by the frontend payment modal.
     *
     * @param clientId the client UUID
     * @return cashback context DTO (active=false if no program)
     */
    CashbackContextDto getCashbackContext(UUID clientId);

    /**
     * Returns the effective active cashback program at the given time (period contains at).
     * When multiple programs cover the time (e.g. dated + always-on), the dated one wins.
     */
    Optional<RewardProgram> getEffectiveActiveCashbackProgram(LocalDateTime at);
}
