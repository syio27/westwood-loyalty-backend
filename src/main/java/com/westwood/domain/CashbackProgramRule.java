package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "cashback_program_rules")
@Getter
@Setter
@ToString(exclude = "program")
public class CashbackProgramRule extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "program_id", nullable = false, unique = true)
    private RewardProgram program;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "cashback_type", nullable = false, length = 20)
    private CashbackType cashbackType;

    @NotNull
    @Column(name = "cashback_value", nullable = false, precision = 19, scale = 2)
    private BigDecimal cashbackValue = BigDecimal.ZERO;

    @NotNull
    @Column(name = "min_spend_amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal minSpendAmount = BigDecimal.ZERO;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "eligibility_type", nullable = false, length = 30)
    private EligibilityType eligibilityType = EligibilityType.ALL;

    @NotNull
    @Column(name = "redeem_limit_percent", nullable = false)
    private Integer redeemLimitPercent = 100;

    @Column(name = "bonus_lifespan_days")
    private Integer bonusLifespanDays;

    @Column(name = "points_spend_threshold", precision = 19, scale = 2)
    private BigDecimal pointsSpendThreshold;
}
