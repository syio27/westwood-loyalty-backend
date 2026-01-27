package com.westwood.common.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UpdatePaymentMethodRequest {
    @NotNull(message = "Payment method is required")
    private com.westwood.domain.PaymentTransaction.PaymentMethod paymentMethod;
}
