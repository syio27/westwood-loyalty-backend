package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BonusAccruedAnalyticsDto {
    private Long count; // Number of bonuses accrued
    private BigDecimal changePercentage; // Can be positive or negative
    private String period; // "DAILY" or "MONTHLY"
}
