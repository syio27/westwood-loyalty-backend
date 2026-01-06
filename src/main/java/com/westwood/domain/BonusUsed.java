package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Entity
@DiscriminatorValue("USED")
@Table(name = "bonus_used")
@Getter
@Setter
@ToString(callSuper = true, exclude = {"paymentTransaction"}) // Exclude lazy relationship
public class BonusUsed extends BonusEvent {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_transaction_id", nullable = false)
    private PaymentTransaction paymentTransaction;

    @Column(name = "original_payment_amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal originalPaymentAmount; // Payment amount before bonus applied

    @Column(name = "final_payment_amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal finalPaymentAmount; // Payment amount after bonus applied
}

