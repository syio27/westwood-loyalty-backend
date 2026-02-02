package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BonusesExpiringSoonDto {
    private int clientCount;
    private BigDecimal totalAmount;
    private List<ClientBonusExpiringDto> clients;
}
