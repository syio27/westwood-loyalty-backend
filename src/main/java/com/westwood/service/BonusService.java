package com.westwood.service;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.BonusEventDto;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public interface BonusService {

    void grantBonus(Long paymentId, Long clientId, BigDecimal paymentAmount); // Internal method, uses Long

    BonusBalanceDto getClientBonusBalance(UUID clientId);

    com.westwood.common.dto.PagedBonusHistoryResponse getClientBonusHistory(UUID clientId, Integer page, Integer size);

    void recalculateBonusBalance(UUID clientId);
}

