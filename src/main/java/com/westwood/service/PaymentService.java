package com.westwood.service;

import com.westwood.common.dto.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface PaymentService {

    PaymentTransactionDto createPayment(CreatePaymentRequest request, Long enteredByUserId);

    PaymentTransactionDto getPaymentByTxId(String txId);

    PagedPaymentSearchResponse getPaymentsByClientId(UUID clientId, Integer page, Integer size);

    List<PaymentTransactionDto> getPaymentsByClientIdAndTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate);

    BigDecimal calculateTotalByClientAndTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate);

    PaymentTransactionDto refundPayment(String txId, RefundPaymentRequest request, Long enteredByUserId);

    PagedPaymentSearchResponse searchPayments(PaymentSearchRequest request);

    // Draft payment methods
    PaymentTransactionDto createDraftPayment(CreateDraftPaymentRequest request, Long enteredByUserId);

    PaymentTransactionDto completePayment(String txId, CompletePaymentRequest request, Long enteredByUserId);

    void deleteDraftPayment(String txId);

    /**
     * Get all transactions entered by a specific user
     * @param userId User UUID
     * @return List of payment transactions with bonus info
     */
    List<PaymentSearchResultDto> getTransactionsByUserId(UUID userId);
}

