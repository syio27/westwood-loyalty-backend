package com.westwood.service;

import com.westwood.domain.EventStore;
import com.westwood.event.BaseEvent;
import com.westwood.event.PaymentCreatedEvent;
import com.westwood.event.BonusGrantedEvent;
import com.westwood.event.BonusUsedEvent;
import java.time.LocalDateTime;
import java.util.List;

public interface EventSourcingService {

    void appendEvent(BaseEvent event, String aggregateType, String aggregateId);

    void appendPaymentCreatedEvent(PaymentCreatedEvent event);

    void appendBonusGrantedEvent(BonusGrantedEvent event);

    void appendBonusUsedEvent(BonusUsedEvent event);

    List<EventStore> getEventsByAggregateId(String aggregateId);

    List<EventStore> getEventsByAggregateIdAndTimeRange(String aggregateId, LocalDateTime fromDate, LocalDateTime toDate);
}

