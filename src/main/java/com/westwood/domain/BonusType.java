package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "bonus_types")
@Getter
@Setter
@ToString
public class BonusType extends BaseEntity {

    @NotNull
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false, length = 50)
    private BonusTypeEnum type;

    @NotNull
    @Column(name = "enabled", nullable = false)
    private Boolean enabled = true;

    @Positive
    @Column(name = "bonus_amount", precision = 19, scale = 2)
    private BigDecimal bonusAmount;

    @Positive
    @Column(name = "bonus_percentage", precision = 5, scale = 2)
    private BigDecimal bonusPercentage;

    @Column(name = "milestone_threshold")
    private Integer milestoneThreshold;

    @Column(name = "expiration_days")
    private Integer expirationDays; // Number of days until bonus expires (null = never expires)

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "icon_type", length = 20)
    private IconType iconType;
}

