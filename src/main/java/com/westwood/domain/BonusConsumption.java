package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

/**
 * Grant-level consumption: how much was taken from which grant (payment use or manual revoke).
 */
@Entity
@Table(name = "bonus_consumption")
@Getter
@Setter
@ToString(exclude = {"bonusGranted", "paymentTransaction", "manualRevoke"})
public class BonusConsumption extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bonus_granted_id", nullable = false)
    private BonusGranted bonusGranted;

    @Column(name = "amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal amount;

    @Column(name = "consumption_type", nullable = false, length = 20)
    @Enumerated(EnumType.STRING)
    private ConsumptionType consumptionType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_transaction_id")
    private PaymentTransaction paymentTransaction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manual_revoke_id")
    private ManualBonusRevoke manualRevoke;

    public enum ConsumptionType {
        PAYMENT_USE,
        MANUAL_REVOKE
    }
}
