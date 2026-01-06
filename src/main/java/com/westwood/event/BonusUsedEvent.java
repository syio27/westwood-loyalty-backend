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
public class BonusUsedEvent extends BaseEvent {

    private Long bonusUsedId;
    private Long paymentId;
    private Long clientId;
    private BigDecimal bonusAmountUsed;
    private BigDecimal originalPaymentAmount;
    private BigDecimal finalPaymentAmount;
}

