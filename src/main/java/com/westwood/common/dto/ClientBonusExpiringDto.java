package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientBonusExpiringDto {
    private UUID clientId;
    private String clientName;
    private String phone;
    /** Groups by expiry date (FIFO: soonest first); each group has total amount and notified status */
    private List<ExpiryGroupDto> expiryGroups;
}
