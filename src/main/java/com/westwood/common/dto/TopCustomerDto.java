package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TopCustomerDto {
    /** Internal client id (numeric). */
    private Long id;
    /** Client UUID (public identifier). */
    private UUID clientId;
    private String name;
    private BigDecimal totalSpent;
    private long paymentsCount;
    private BigDecimal averageOrderValue;
}
