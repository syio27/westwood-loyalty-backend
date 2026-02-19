package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "cashback_tiers")
@Getter
@Setter
@ToString(exclude = "program")
public class CashbackTier extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "program_id", nullable = false)
    private RewardProgram program;

    @NotNull
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @NotNull
    @Column(name = "min_amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal minAmount;

    @Column(name = "max_amount", precision = 19, scale = 2)
    private BigDecimal maxAmount;

    @NotNull
    @Column(name = "extra_earning_percent", nullable = false, precision = 5, scale = 2)
    private BigDecimal extraEarningPercent = BigDecimal.ZERO;

    @NotNull
    @Column(name = "sort_order", nullable = false)
    private Integer sortOrder = 0;
}
