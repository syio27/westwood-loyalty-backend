package com.westwood.common.dto.reward;

import com.westwood.domain.EventGrantType;
import com.westwood.domain.FirstPayMode;
import com.westwood.domain.GrantTrigger;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Save event program draft. All fields optional for partial updates.
 * Event program grants on events (join, first pay, birthday, etc.). Schedule: startDate, endDate only (no weekly).
 */
@Data
public class SaveEventProgramDraftRequest {

    private String name;
    private String description;

    private EventGrantType grantType;
    private BigDecimal grantValue;
    private Integer bonusLifespanDays;
    private GrantTrigger grantTrigger;
    private FirstPayMode firstPayMode;

    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
