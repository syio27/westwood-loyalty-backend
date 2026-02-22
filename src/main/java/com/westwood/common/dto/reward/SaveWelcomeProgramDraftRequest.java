package com.westwood.common.dto.reward;

import com.westwood.domain.FirstPayMode;
import com.westwood.domain.GrantTrigger;
import com.westwood.domain.WelcomeGrantType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Save welcome program draft. All fields optional for partial updates.
 * Schedule: startDate, endDate only (no weekly schedule for welcome).
 */
@Data
public class SaveWelcomeProgramDraftRequest {

    private String name;
    private String description;

    private WelcomeGrantType grantType;
    private BigDecimal grantValue;
    private Integer bonusLifespanDays;
    private GrantTrigger grantTrigger;
    private FirstPayMode firstPayMode;

    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
