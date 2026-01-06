package com.westwood.service;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.PaymentTransactionDto;
import com.westwood.common.dto.UseBonusRequest;

import java.util.List;
import java.util.UUID;

public interface BonusService {

    void grantBonus(Long paymentId, Long clientId, java.math.BigDecimal paymentAmount); // Internal method, uses Long

    PaymentTransactionDto useBonus(UseBonusRequest request, Long enteredByUserId);

    BonusBalanceDto getClientBonusBalance(UUID clientId);

    List<com.westwood.common.dto.BonusEventDto> getClientBonusHistory(UUID clientId);

    void recalculateBonusBalance(UUID clientId);
}

