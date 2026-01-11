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
public class PaymentRefundedEvent extends BaseEvent {

    private String refundPaymentTxId; // Transaction identifier of the refund transaction
    private String originalPaymentTxId; // Transaction identifier of the original payment being refunded
    private Long refundPaymentId; // Internal ID (kept for backward compatibility)
    private Long originalPaymentId; // Internal ID (kept for backward compatibility)
    private Long clientId;
    private Long enteredByUserId;
    private BigDecimal refundAmount; // Negative amount (or positive, will be subtracted)
    private String notes;
}

