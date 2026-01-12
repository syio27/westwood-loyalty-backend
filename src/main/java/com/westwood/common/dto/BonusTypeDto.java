package com.westwood.common.dto;

import com.westwood.domain.BonusTypeEnum;
import com.westwood.domain.IconType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class BonusTypeDto {

    private Long id;
    private String name;
    private BonusTypeEnum type;
    private Boolean enabled;
    private BigDecimal bonusAmount;
    private BigDecimal bonusPercentage;
    private Integer milestoneThreshold;
    private Integer expirationDays; // Number of days until bonus expires (null = never expires)
    private String description;
    private IconType iconType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

