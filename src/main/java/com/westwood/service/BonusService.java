package com.westwood.service;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.dto.BonusEventDto;
import com.westwood.common.dto.BonusesExpiringSoonDto;
import com.westwood.common.dto.ManualBonusGrantRequest;
import com.westwood.common.dto.ManualBonusRevokeRequest;

import java.time.LocalDate;
import java.util.UUID;

public interface BonusService {

    /**
     * Get clients whose bonuses expire within the next 7 days, grouped by expiry date, with notified status.
     */
    BonusesExpiringSoonDto getBonusesExpiringSoon();

    /**
     * Record that the client was notified (e.g. WhatsApp) about bonuses expiring on the given date.
     */
    void recordBonusExpiryNotified(UUID clientId, LocalDate expiryDate, Long messageRecordId);

    BonusBalanceDto getClientBonusBalance(UUID clientId);

    com.westwood.common.dto.PagedBonusHistoryResponse getClientBonusHistory(UUID clientId, Integer page, Integer size);

    void recalculateBonusBalance(UUID clientId);

    /**
     * Manually grant bonus to a client
     * @param clientId Client UUID
     * @param request Grant request with amount and reason
     * @return Updated bonus balance
     */
    BonusBalanceDto manualGrantBonus(UUID clientId, ManualBonusGrantRequest request);

    /**
     * Manually revoke bonus from a client
     * @param clientId Client UUID
     * @param request Revoke request with amount and reason
     * @param revokedByUserId ID of the user performing the revoke (for audit)
     * @return Updated bonus balance
     */
    BonusBalanceDto manualRevokeBonus(UUID clientId, ManualBonusRevokeRequest request, Long revokedByUserId);
}

