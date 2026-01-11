package com.westwood.event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class BonusGrantedEvent extends BaseEvent {

    private Long bonusGrantedId;
    private String paymentTxId; // Transaction identifier
    private Long paymentId; // Internal ID (kept for backward compatibility)
    private Long clientId;
    private BigDecimal bonusAmount;
    private BigDecimal bonusPercentage;
    private BigDecimal paymentAmount;
}

