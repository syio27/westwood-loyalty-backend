package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@DiscriminatorValue("GRANTED")
@Table(name = "bonus_granted")
@Getter
@Setter
@ToString(callSuper = true, exclude = {"paymentTransaction"}) // Exclude lazy relationship
public class BonusGranted extends BonusEvent {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_transaction_id")
    private PaymentTransaction paymentTransaction;

    @Column(name = "bonus_percentage", precision = 5, scale = 2)
    private BigDecimal bonusPercentage; // Snapshot at time of grant (e.g., 3.00) - nullable for non-payment bonuses

    @Column(name = "payment_amount", precision = 19, scale = 2)
    private BigDecimal paymentAmount; // Original payment amount that granted this bonus - nullable for non-payment bonuses

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bonus_type_id")
    private BonusType bonusType;

    /** Reward program that this grant belongs to. Main scope for reporting and analytics. */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reward_program_id")
    private RewardProgram rewardProgram;

    @Column(name = "grant_reason", length = 50)
    private String grantReason; // e.g., "BIRTHDAY", "FIRST_PAYMENT", "10TH_PAYMENT", "REFERRAL"

    @Column(name = "expires_at")
    private LocalDateTime expiresAt; // When this bonus expires (null = never expires)
}

