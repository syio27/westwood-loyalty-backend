package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.CreatePaymentRequest;
import com.westwood.common.dto.PaymentTransactionDto;
import com.westwood.common.dto.RefundPaymentRequest;
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

    @GetMapping("/{txId}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PaymentTransactionDto> getPaymentByTxId(@PathVariable String txId) {
        PaymentTransactionDto payment = paymentService.getPaymentByTxId(txId);
        return ResponseEntity.ok(payment);
    }

    @GetMapping("/client/{clientId}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<PaymentTransactionDto>> getPaymentsByClientId(@PathVariable UUID clientId) {
        List<PaymentTransactionDto> payments = paymentService.getPaymentsByClientId(clientId);
        return ResponseEntity.ok(payments);
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

    private Long getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl) {
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            return userDetails.getUser().getId();
        }
        throw new RuntimeException("User not authenticated");
    }
}

