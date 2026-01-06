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
public class PaymentCreatedEvent extends BaseEvent {

    private Long paymentId;
    private Long clientId;
    private Long enteredByUserId;
    private BigDecimal amount;
    private String notes;
}

