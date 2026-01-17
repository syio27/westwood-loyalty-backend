package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReturnsAnalyticsDto {
    private Long count;
    private Long changeAbsolute; // Can be positive or negative
    private String period; // "DAILY"
}
