package com.westwood.common.dto;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RefundPaymentRequest {

    @Size(max = 500, message = "Notes must not exceed 500 characters")
    private String notes; // Optional reason for refund
}

