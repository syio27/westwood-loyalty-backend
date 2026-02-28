package com.westwood.service;

import java.math.BigDecimal;
import java.util.UUID;

public interface EventBonusService {

    /** Grant event-program bonus on client join (if program is active and trigger is ON_JOIN). */
    void checkAndGrantEventBonus(UUID clientId);

    void checkAndGrantBirthdayBonus(UUID clientId);

    void checkAndGrantMilestoneBonus(UUID clientId, String paymentTxId, BigDecimal paymentAmount);

    void grantReferralBonus(UUID referrerId, UUID refereeId);

    void processPaymentBonuses(String paymentTxId, UUID clientId, BigDecimal paymentAmount);
}

