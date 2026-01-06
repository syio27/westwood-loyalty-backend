package com.westwood.util.mapper;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.BonusEventDto;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusUsed;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class BonusMapper {

    public BonusBalanceDto calculateBalanceDto(UUID clientId, String clientName, List<BonusEvent> events) {
        BigDecimal totalAccumulated = BigDecimal.ZERO;
        BigDecimal totalUsed = BigDecimal.ZERO;
        LocalDateTime now = LocalDateTime.now();

        for (BonusEvent event : events) {
            if (event instanceof BonusGranted) {
                BonusGranted granted = (BonusGranted) event;
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
            dto.setPaymentTransactionId(granted.getPaymentTransaction() != null ? 
                granted.getPaymentTransaction().getId() : null); // Long ID
            dto.setBonusPercentage(granted.getBonusPercentage());
            dto.setPaymentAmount(granted.getPaymentAmount());
            // Note: expiresAt can be added to BonusEventDto if needed for frontend display
        } else if (event instanceof BonusUsed) {
            BonusUsed used = (BonusUsed) event;
            dto.setEventType("USED");
            dto.setPaymentTransactionId(used.getPaymentTransaction() != null ? 
                used.getPaymentTransaction().getId() : null); // Long ID
            dto.setOriginalPaymentAmount(used.getOriginalPaymentAmount());
            dto.setFinalPaymentAmount(used.getFinalPaymentAmount());
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

