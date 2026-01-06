package com.westwood.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.Client;
import com.westwood.domain.EventStore;
import com.westwood.event.PaymentCreatedEvent;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.service.EventReplayService;
import com.westwood.service.EventSourcingService;
import com.westwood.util.mapper.BonusMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class EventReplayServiceImpl implements EventReplayService {

    private final EventSourcingService eventSourcingService;
    private final BonusEventRepository bonusEventRepository;
    private final ClientRepository clientRepository;
    private final BonusMapper bonusMapper;
    private final ObjectMapper objectMapper;

    public EventReplayServiceImpl(EventSourcingService eventSourcingService,
                                  BonusEventRepository bonusEventRepository,
                                  ClientRepository clientRepository,
                                  BonusMapper bonusMapper,
                                  ObjectMapper objectMapper) {
        this.eventSourcingService = eventSourcingService;
        this.bonusEventRepository = bonusEventRepository;
        this.clientRepository = clientRepository;
        this.bonusMapper = bonusMapper;
        this.objectMapper = objectMapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<EventStore> replayEventsByAggregateId(String aggregateId) {
        return eventSourcingService.getEventsByAggregateId(aggregateId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<EventStore> replayEventsByAggregateIdAndTimeRange(String aggregateId, LocalDateTime fromDate, LocalDateTime toDate) {
        return eventSourcingService.getEventsByAggregateIdAndTimeRange(aggregateId, fromDate, toDate);
    }

    @Override
    @Transactional(readOnly = true)
    public BigDecimal recalculateClientTotalSpending(Long clientId, LocalDateTime fromDate, LocalDateTime toDate) {
        List<EventStore> events = eventSourcingService.getEventsByAggregateIdAndTimeRange(clientId.toString(), fromDate, toDate);

        BigDecimal total = BigDecimal.ZERO;
        for (EventStore event : events) {
            if (event.getEventType() == EventStore.EventType.PAYMENT_CREATED) {
                try {
                    PaymentCreatedEvent paymentEvent = objectMapper.readValue(event.getEventData(), PaymentCreatedEvent.class);
                    total = total.add(paymentEvent.getAmount());
                } catch (Exception e) {
                    // Log error and continue
                }
            }
        }

        return total;
    }

    @Override
    @Transactional(readOnly = true)
    public BonusBalanceDto recalculateClientBonusBalance(Long clientId) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));
        List<BonusEvent> events = bonusEventRepository.findByClientIdOrderByCreatedAtAsc(clientId);
        String clientName = client.getName() + " " + client.getSurname();
        return bonusMapper.calculateBalanceDto(client.getUuid(), clientName, events); // Use UUID for DTO
    }
}

