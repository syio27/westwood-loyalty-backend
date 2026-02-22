package com.westwood.common.dto.reward;

import com.westwood.domain.FirstPayMode;
import com.westwood.domain.GrantTrigger;
import com.westwood.domain.WelcomeGrantType;
import lombok.Data;

import java.math.BigDecimal;

/**
 * Launch welcome program. Optional program data applied before launch if provided.
 */
@Data
public class LaunchWelcomeProgramRequest {

    /** If true, launch as always-on (no end date). If false, schedule with start/end dates. Default false so periodic is safe when field is omitted. */
    private boolean immediate = false;

    private String name;
    private String description;

    private WelcomeGrantType grantType;
    private BigDecimal grantValue;
    private Integer bonusLifespanDays;
    private GrantTrigger grantTrigger;
    private FirstPayMode firstPayMode;

    private String startDate;
    private String endDate;
}
