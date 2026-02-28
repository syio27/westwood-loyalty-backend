package com.westwood.common.dto.reward;

import com.westwood.domain.EventGrantType;
import com.westwood.domain.FirstPayMode;
import com.westwood.domain.GrantTrigger;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventProgramRuleResponse {

    private EventGrantType grantType;
    private BigDecimal grantValue;
    private Integer bonusLifespanDays;
    private GrantTrigger grantTrigger;
    private FirstPayMode firstPayMode;
}
