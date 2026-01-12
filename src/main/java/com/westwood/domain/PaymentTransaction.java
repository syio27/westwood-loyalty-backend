package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@Table(name = "payment_transactions")
@Getter
@Setter
@ToString(exclude = {"client", "enteredBy", "notes"}) // Exclude lazy relationships and large text fields
public class PaymentTransaction extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "entered_by_user_id", nullable = false)
    private User enteredBy;

    @NotNull
    @Column(name = "amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal amount; // Can be negative for refunds

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private PaymentStatus status = PaymentStatus.COMPLETED;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "refunded_payment_id")
    private PaymentTransaction refundedPayment; // Reference to the original payment if this is a refund

    @Column(name = "transaction_year", nullable = false)
    private Integer transactionYear; // Year for transaction numbering (e.g., 24 for 2024)

    @Column(name = "transaction_number", nullable = false)
    private Long transactionNumber; // Legacy field, kept for compatibility (can be 0 or random)

    @Column(name = "tx_id", unique = true, nullable = false, length = 12)
    private String txId; // Format: PTX-YY-XXXXX (e.g., PTX-24-ABCDE) where XXXXX is random uppercase letters

    public enum PaymentStatus {
        PENDING,
        COMPLETED,
        CANCELLED,
        REFUND,      // Status for refund transactions (internal)
        REFUNDED     // Status for original payment transactions that have been refunded
    }
}

