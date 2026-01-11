package com.westwood.event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class BonusRevokedEvent extends BaseEvent {

    private Long bonusRevokedId;
    private String paymentTxId; // Transaction identifier
    private Long paymentId; // Internal ID (kept for backward compatibility)
    private Long clientId;
    private Long originalBonusGrantedId;
    private BigDecimal bonusAmount;
    private String revokeReason;
}

