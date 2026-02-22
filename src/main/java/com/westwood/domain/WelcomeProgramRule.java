package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "welcome_program_rules")
@Getter
@Setter
@ToString(exclude = "program")
public class WelcomeProgramRule extends BaseEntity {

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "program_id", nullable = false, unique = true)
    private RewardProgram program;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "grant_type", nullable = false, length = 20)
    private WelcomeGrantType grantType;

    @NotNull
    @Column(name = "grant_value", nullable = false, precision = 19, scale = 2)
    private BigDecimal grantValue = BigDecimal.ZERO;

    @Column(name = "bonus_lifespan_days")
    private Integer bonusLifespanDays;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "grant_trigger", nullable = false, length = 30)
    private GrantTrigger grantTrigger = GrantTrigger.ON_JOIN;

    @Enumerated(EnumType.STRING)
    @Column(name = "first_pay_mode", length = 30)
    private FirstPayMode firstPayMode;
}
