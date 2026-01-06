package com.westwood.service;

import com.westwood.domain.EventStore;

import java.time.LocalDateTime;
import java.util.List;

public interface EventReplayService {

    List<EventStore> replayEventsByAggregateId(String aggregateId);

    List<EventStore> replayEventsByAggregateIdAndTimeRange(String aggregateId, LocalDateTime fromDate, LocalDateTime toDate);

    java.math.BigDecimal recalculateClientTotalSpending(Long clientId, LocalDateTime fromDate, LocalDateTime toDate);

    com.westwood.common.dto.BonusBalanceDto recalculateClientBonusBalance(Long clientId);
}

