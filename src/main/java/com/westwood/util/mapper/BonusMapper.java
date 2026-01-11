package com.westwood.util.mapper;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.BonusEventDto;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusRevoked;
import com.westwood.domain.BonusUsed;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class BonusMapper {

    public BonusBalanceDto calculateBalanceDto(UUID clientId, String clientName, List<BonusEvent> events) {
        BigDecimal totalAccumulated = BigDecimal.ZERO;
        BigDecimal totalUsed = BigDecimal.ZERO;
        BigDecimal totalRevoked = BigDecimal.ZERO;
        LocalDateTime now = LocalDateTime.now();
        
        // Track which granted bonuses have been revoked
        Set<Long> revokedGrantedIds = new HashSet<>();

        // First pass: collect revoked bonus IDs
        for (BonusEvent event : events) {
            if (event instanceof BonusRevoked) {
                BonusRevoked revoked = (BonusRevoked) event;
                // Initialize lazy relationship if needed (should work within @Transactional context)
                Hibernate.initialize(revoked.getOriginalBonusGranted());
                if (revoked.getOriginalBonusGranted() != null) {
                    revokedGrantedIds.add(revoked.getOriginalBonusGranted().getId());
                    totalRevoked = totalRevoked.add(event.getBonusAmount());
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

        BigDecimal currentBalance = totalAccumulated.subtract(totalUsed);

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
        dto.setClientName(event.getClient() != null ? 
            event.getClient().getName() + " " + event.getClient().getSurname() : null);
        dto.setBonusAmount(event.getBonusAmount());
        dto.setCreatedAt(event.getCreatedAt());

        if (event instanceof BonusGranted) {
            BonusGranted granted = (BonusGranted) event;
            dto.setEventType("GRANTED");
            dto.setPaymentTxId(granted.getPaymentTransaction() != null ? 
                granted.getPaymentTransaction().getTxId() : null);
            dto.setBonusPercentage(granted.getBonusPercentage());
            dto.setPaymentAmount(granted.getPaymentAmount());
            // Note: expiresAt can be added to BonusEventDto if needed for frontend display
        } else if (event instanceof BonusUsed) {
            BonusUsed used = (BonusUsed) event;
            dto.setEventType("USED");
            dto.setPaymentTxId(used.getPaymentTransaction() != null ? 
                used.getPaymentTransaction().getTxId() : null);
            dto.setOriginalPaymentAmount(used.getOriginalPaymentAmount());
            dto.setFinalPaymentAmount(used.getFinalPaymentAmount());
        } else if (event instanceof BonusRevoked) {
            BonusRevoked revoked = (BonusRevoked) event;
            dto.setEventType("REVOKED");
            dto.setPaymentTxId(revoked.getPaymentTransaction() != null ? 
                revoked.getPaymentTransaction().getTxId() : null);
            // Note: originalBonusGrantedId could be added to BonusEventDto if needed
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

