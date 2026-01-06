package com.westwood.service;

import com.westwood.common.dto.ClientValueDto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface AnalyticsService {

    List<ClientValueDto> getClientValueRankings();

    ClientValueDto getClientValue(UUID clientId);

    BigDecimal getClientSpendingByTimeRange(UUID clientId, LocalDateTime fromDate, LocalDateTime toDate);
}

