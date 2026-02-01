package com.westwood.util.mapper;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.BonusEventDto;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusRevoked;
import com.westwood.domain.BonusUsed;
import com.westwood.domain.ManualBonusRevoke;
import com.westwood.domain.PaymentTransaction;
import com.westwood.domain.User;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import com.westwood.util.ClientUtils;

@Component
public class BonusMapper {

    public BonusBalanceDto calculateBalanceDto(UUID clientId, String clientName, List<BonusEvent> events) {
        BigDecimal totalAccumulated = BigDecimal.ZERO;
        BigDecimal totalUsed = BigDecimal.ZERO;
        BigDecimal totalRevoked = BigDecimal.ZERO;
        LocalDateTime now = LocalDateTime.now();
        
        // Track which granted bonuses have been revoked
        Set<Long> revokedGrantedIds = new HashSet<>();

        // First pass: collect revoked bonus IDs and handle manual revokes
        BigDecimal manualRevokes = BigDecimal.ZERO;
        for (BonusEvent event : events) {
            if (event instanceof BonusRevoked) {
                BonusRevoked revoked = (BonusRevoked) event;
                // Initialize lazy relationship if needed (should work within @Transactional context)
                Hibernate.initialize(revoked.getOriginalBonusGranted());
                if (revoked.getOriginalBonusGranted() != null) {
                    revokedGrantedIds.add(revoked.getOriginalBonusGranted().getId());
                    totalRevoked = totalRevoked.add(event.getBonusAmount());
                } else {
                    // Manual revoke - no original bonus, just a direct deduction
                    manualRevokes = manualRevokes.add(event.getBonusAmount());
                }
            }
        }

        // Second pass: calculate accumulated and used, excluding revoked bonuses
        for (BonusEvent event : events) {
            if (event instanceof BonusGranted) {
                BonusGranted granted = (BonusGranted) event;
                // Skip if this bonus was revoked
                if (revokedGrantedIds.contains(granted.getId())) {
                    continue;
                }
                // Only count non-expired bonuses
                if (granted.getExpiresAt() == null || granted.getExpiresAt().isAfter(now)) {
                    totalAccumulated = totalAccumulated.add(event.getBonusAmount());
                }
            } else if (event instanceof BonusUsed) {
                totalUsed = totalUsed.add(event.getBonusAmount());
            }
        }

        // currentBalance = accumulated - used - manualRevokes
        BigDecimal currentBalance = totalAccumulated.subtract(totalUsed).subtract(manualRevokes);
        // Ensure balance doesn't go negative
        if (currentBalance.compareTo(BigDecimal.ZERO) < 0) {
            currentBalance = BigDecimal.ZERO;
        }

        return new BonusBalanceDto(clientId, clientName, totalAccumulated, totalUsed, currentBalance);
    }

    public BonusEventDto toDto(BonusEvent event) {
        if (event == null) {
            return null;
        }

        BonusEventDto dto = new BonusEventDto();
        dto.setId(event.getId());
        dto.setEventId(event.getEventId());
        dto.setClientId(event.getClient() != null ? event.getClient().getUuid() : null);
        dto.setClientName(event.getClient() != null ? ClientUtils.getFullName(event.getClient()) : null);
        dto.setBonusAmount(event.getBonusAmount());
        dto.setCreatedAt(event.getCreatedAt());

        if (event instanceof BonusGranted) {
            BonusGranted granted = (BonusGranted) event;
            dto.setEventType("GRANTED");
            PaymentTransaction payment = granted.getPaymentTransaction();
            dto.setPaymentTxId(payment != null ? payment.getTxId() : null);
            dto.setBonusPercentage(granted.getBonusPercentage());
            dto.setPaymentAmount(granted.getPaymentAmount());
            dto.setGrantReason(granted.getGrantReason());
            dto.setExpiresAt(granted.getExpiresAt());
            setInitiatorFromPayment(dto, payment);
            if (payment == null) {
                dto.setInitiatedByUserName("SYSTEM");
            }
        } else if (event instanceof BonusUsed) {
            BonusUsed used = (BonusUsed) event;
            dto.setEventType("USED");
            PaymentTransaction payment = used.getPaymentTransaction();
            dto.setPaymentTxId(payment != null ? payment.getTxId() : null);
            dto.setOriginalPaymentAmount(used.getOriginalPaymentAmount());
            dto.setFinalPaymentAmount(used.getFinalPaymentAmount());
            setInitiatorFromPayment(dto, payment);
            if (payment == null) {
                dto.setInitiatedByUserName("SYSTEM");
            }
        } else if (event instanceof BonusRevoked) {
            BonusRevoked revoked = (BonusRevoked) event;
            dto.setEventType("REVOKED");
            dto.setRevokeReason(revoked.getRevokeReason());
            dto.setRevokedAt(revoked.getCreatedAt());
            
            // Refund transaction info
            dto.setRefundTxId(revoked.getPaymentTransaction() != null ? 
                revoked.getPaymentTransaction().getTxId() : null);
            
            // Copy info from original granted bonus
            BonusGranted originalGrant = revoked.getOriginalBonusGranted();
            if (originalGrant != null) {
                Hibernate.initialize(originalGrant);
                Hibernate.initialize(originalGrant.getPaymentTransaction());
                dto.setOriginalPaymentTxId(originalGrant.getPaymentTransaction() != null ?
                    originalGrant.getPaymentTransaction().getTxId() : null);
                dto.setPaymentTxId(originalGrant.getPaymentTransaction() != null ?
                    originalGrant.getPaymentTransaction().getTxId() : null);
                dto.setBonusPercentage(originalGrant.getBonusPercentage());
                dto.setPaymentAmount(originalGrant.getPaymentAmount());
                dto.setGrantReason(originalGrant.getGrantReason());
                dto.setExpiresAt(originalGrant.getExpiresAt());
            }
            setInitiatorFromPayment(dto, revoked.getPaymentTransaction());
        }

        return dto;
    }

    private void setInitiatorFromPayment(BonusEventDto dto, PaymentTransaction payment) {
        if (payment == null) {
            return;
        }
        User enteredBy = payment.getEnteredBy();
        if (enteredBy != null) {
            dto.setInitiatedByUserId(enteredBy.getUuid());
            dto.setInitiatedByUserName(enteredBy.getFirstName() + " " + enteredBy.getLastName());
        }
    }

    /**
     * Map a BonusGranted to DTO with original and remaining amounts (consumption-based).
     */
    public BonusEventDto toDto(BonusGranted grant, BigDecimal consumed) {
        if (grant == null) {
            return null;
        }
        BigDecimal cons = consumed != null ? consumed : BigDecimal.ZERO;
        BigDecimal remaining = grant.getBonusAmount().subtract(cons);
        BonusEventDto dto = toDto(grant);
        dto.setOriginalAmount(grant.getBonusAmount());
        dto.setRemainingAmount(remaining);
        return dto;
    }

    /**
     * Map a ManualBonusRevoke to a BonusEventDto for the timeline (eventType MANUAL_REVOKE).
     */
    public BonusEventDto toManualRevokeDto(ManualBonusRevoke mbr) {
        if (mbr == null) {
            return null;
        }
        BonusEventDto dto = new BonusEventDto();
        dto.setId(mbr.getId());
        dto.setEventId(null);
        dto.setClientId(mbr.getClient() != null ? mbr.getClient().getUuid() : null);
        dto.setClientName(mbr.getClient() != null ? ClientUtils.getFullName(mbr.getClient()) : null);
        dto.setEventType("MANUAL_REVOKE");
        dto.setBonusAmount(mbr.getAmount());
        dto.setCreatedAt(mbr.getCreatedAt());
        dto.setRevokeReason(mbr.getReason());
        dto.setRevokedAt(mbr.getCreatedAt());
        User revokedBy = mbr.getRevokedBy();
        if (revokedBy != null) {
            dto.setRevokedByUserId(revokedBy.getUuid());
            dto.setRevokedByUserName(revokedBy.getFirstName() + " " + revokedBy.getLastName());
            dto.setInitiatedByUserId(revokedBy.getUuid());
            dto.setInitiatedByUserName(revokedBy.getFirstName() + " " + revokedBy.getLastName());
        }
        return dto;
    }

    public List<BonusEventDto> toDtoList(List<BonusEvent> events) {
        if (events == null) {
            return null;
        }
        return events.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }
}

