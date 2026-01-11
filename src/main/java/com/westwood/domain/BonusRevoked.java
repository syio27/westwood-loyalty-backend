package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@DiscriminatorValue("REVOKED")
@Table(name = "bonus_revoked")
@Getter
@Setter
@ToString(callSuper = true, exclude = {"paymentTransaction", "originalBonusGranted"})
public class BonusRevoked extends BonusEvent {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_transaction_id", nullable = false)
    private PaymentTransaction paymentTransaction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "original_bonus_granted_id", nullable = false)
    private BonusGranted originalBonusGranted; // Reference to the original bonus that was revoked

    @Column(name = "revoke_reason", length = 100)
    private String revokeReason; // e.g., "PAYMENT_REFUND"
}

