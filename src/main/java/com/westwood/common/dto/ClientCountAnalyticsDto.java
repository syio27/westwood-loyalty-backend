package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientCountAnalyticsDto {
    private Long count;
    private Long changeAbsolute; // Can be positive or negative
    private String type; // "NEW" or "ACTIVE"
    private String period; // "DAILY" or "MONTHLY"
}
