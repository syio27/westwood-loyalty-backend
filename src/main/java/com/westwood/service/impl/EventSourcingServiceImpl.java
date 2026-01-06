package com.westwood.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.westwood.domain.EventStore;
import com.westwood.event.BaseEvent;
import com.westwood.event.BonusGrantedEvent;
import com.westwood.event.BonusUsedEvent;
import com.westwood.event.PaymentCreatedEvent;
import com.westwood.repository.EventStoreRepository;
import com.westwood.service.EventSourcingService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
public class EventSourcingServiceImpl implements EventSourcingService {

    private final EventStoreRepository eventStoreRepository;
    private final ObjectMapper objectMapper;

    public EventSourcingServiceImpl(EventStoreRepository eventStoreRepository, ObjectMapper objectMapper) {
        this.eventStoreRepository = eventStoreRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void appendEvent(BaseEvent event, String aggregateType, String aggregateId) {
        try {
            EventStore eventStore = new EventStore();
            eventStore.setEventId(event.getEventId());
            eventStore.setEventType(mapEventType(event));
            eventStore.setAggregateType(aggregateType);
            eventStore.setAggregateId(aggregateId);
            eventStore.setEventData(objectMapper.writeValueAsString(event));
            eventStore.setTimestamp(event.getTimestamp());
            eventStore.setVersion(event.getVersion());

            eventStoreRepository.save(eventStore);
        } catch (Exception e) {
            throw new RuntimeException("Failed to append event to event store", e);
        }
    }

    @Override
    public void appendPaymentCreatedEvent(PaymentCreatedEvent event) {
        appendEvent(event, "PaymentTransaction", event.getPaymentId().toString());
    }

    @Override
    public void appendBonusGrantedEvent(BonusGrantedEvent event) {
        appendEvent(event, "Client", event.getClientId().toString());
    }

    @Override
    public void appendBonusUsedEvent(BonusUsedEvent event) {
        appendEvent(event, "Client", event.getClientId().toString());
    }

    @Override
    @Transactional(readOnly = true)
    public List<EventStore> getEventsByAggregateId(String aggregateId) {
        return eventStoreRepository.findByAggregateIdOrderByVersionAsc(aggregateId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<EventStore> getEventsByAggregateIdAndTimeRange(String aggregateId, LocalDateTime fromDate, LocalDateTime toDate) {
        return eventStoreRepository.findByAggregateIdAndTimeRange(aggregateId, fromDate, toDate);
    }

    private EventStore.EventType mapEventType(BaseEvent event) {
        if (event instanceof PaymentCreatedEvent) {
            return EventStore.EventType.PAYMENT_CREATED;
        } else if (event instanceof BonusGrantedEvent) {
            return EventStore.EventType.BONUS_GRANTED;
        } else if (event instanceof BonusUsedEvent) {
            return EventStore.EventType.BONUS_USED;
        }
        throw new IllegalArgumentException("Unknown event type: " + event.getClass().getName());
    }
}

