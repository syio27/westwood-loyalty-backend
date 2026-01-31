package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

/**
 * Audit record for manual bonus revoke: who, when, reason.
 * One row per manual revoke action; bonus_consumption rows reference this via manual_revoke_id.
 */
@Entity
@Table(name = "manual_bonus_revoke")
@Getter
@Setter
@ToString(exclude = {"client", "revokedBy"})
public class ManualBonusRevoke extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @Column(name = "amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal amount;

    @Column(name = "reason", length = 500)
    private String reason;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "revoked_by_user_id", nullable = false)
    private User revokedBy;
}
