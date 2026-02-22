package com.westwood.common.dto.reward;

import com.westwood.domain.FirstPayMode;
import com.westwood.domain.GrantTrigger;
import com.westwood.domain.WelcomeGrantType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WelcomeProgramRuleResponse {

    private WelcomeGrantType grantType;
    private BigDecimal grantValue;
    private Integer bonusLifespanDays;
    private GrantTrigger grantTrigger;
    private FirstPayMode firstPayMode;
}
