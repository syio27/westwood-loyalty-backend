package com.westwood.common.dto;

import com.westwood.domain.ClientType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Set;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientWithBonusDto {

    private UUID clientId;
    private String name;
    private String surname;
    private String comment;
    private Set<String> tags;
    private BigDecimal currentBonusBalance;
    private ClientType clientType;
}

