package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionCountAnalyticsDto {
    private Long count;
    private Long changeAbsolute; // Can be positive or negative
    private String period; // "DAILY"
}
