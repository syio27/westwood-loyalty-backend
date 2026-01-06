package com.westwood.service;

import com.westwood.common.dto.CreatePaymentRequest;
import com.westwood.common.dto.PaymentTransactionDto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface PaymentService {

    PaymentTransactionDto createPayment(CreatePaymentRequest request, Long enteredByUserId);

    PaymentTransactionDto getPaymentById(Long id); // Payment ID stays as Long (internal)

    List<PaymentTransactionDto> getPaymentsByClientId(UUID clientId);

    List<PaymentTransactionDto> getPaymentsByClientIdAndTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate);

    BigDecimal calculateTotalByClientAndTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate);
}

