package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.*;
import com.westwood.security.UserDetailsImpl;
import com.westwood.service.PaymentService;
import jakarta.validation.Valid;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PaymentTransactionDto> createPayment(@Valid @RequestBody CreatePaymentRequest request) {
        Long enteredByUserId = getCurrentUserId();
        PaymentTransactionDto createdPayment = paymentService.createPayment(request, enteredByUserId);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPayment);
    }

    @PostMapping("/draft")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PaymentTransactionDto> createDraftPayment(@Valid @RequestBody CreateDraftPaymentRequest request) {
        Long enteredByUserId = getCurrentUserId();
        PaymentTransactionDto draftPayment = paymentService.createDraftPayment(request, enteredByUserId);
        return ResponseEntity.status(HttpStatus.CREATED).body(draftPayment);
    }

    @PostMapping("/{txId}/complete")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PaymentTransactionDto> completePayment(
            @PathVariable String txId,
            @Valid @RequestBody CompletePaymentRequest request) {
        Long enteredByUserId = getCurrentUserId();
        PaymentTransactionDto completedPayment = paymentService.completePayment(txId, request, enteredByUserId);
        return ResponseEntity.ok(completedPayment);
    }

    @GetMapping("/{txId}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PaymentTransactionDto> getPaymentByTxId(@PathVariable String txId) {
        PaymentTransactionDto payment = paymentService.getPaymentByTxId(txId);
        return ResponseEntity.ok(payment);
    }

    @GetMapping("/client/{clientId}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PagedPaymentSearchResponse> getPaymentsByClientId(
            @PathVariable UUID clientId,
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size) {
        PagedPaymentSearchResponse response = paymentService.getPaymentsByClientId(clientId, page, size);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/client/{clientId}/total")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<BigDecimal> getTotalByClientAndTimeRange(
            @PathVariable UUID clientId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime from,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime to) {
        BigDecimal total = paymentService.calculateTotalByClientAndTimeRange(clientId, from, to);
        return ResponseEntity.ok(total);
    }

    @PostMapping("/{txId}/refund")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PaymentTransactionDto> refundPayment(
            @PathVariable String txId,
            @Valid @RequestBody RefundPaymentRequest request) {
        Long enteredByUserId = getCurrentUserId();
        PaymentTransactionDto refundedPayment = paymentService.refundPayment(txId, request, enteredByUserId);
        return ResponseEntity.ok(refundedPayment);
    }

    @PostMapping("/search")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PagedPaymentSearchResponse> searchPayments(@Valid @RequestBody PaymentSearchRequest request) {
        PagedPaymentSearchResponse response = paymentService.searchPayments(request);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/draft/{txId}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<Void> deleteDraftPayment(@PathVariable String txId) {
        paymentService.deleteDraftPayment(txId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{txId}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<Void> deletePayment(@PathVariable String txId) {
        paymentService.deletePayment(txId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{txId}/payment-method")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PaymentTransactionDto> updatePaymentMethod(
            @PathVariable String txId,
            @Valid @RequestBody UpdatePaymentMethodRequest request) {
        PaymentTransactionDto updatedPayment = paymentService.updatePaymentMethod(txId, request);
        return ResponseEntity.ok(updatedPayment);
    }

    private Long getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl) {
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            return userDetails.getUser().getId();
        }
        throw new RuntimeException("User not authenticated");
    }
}

