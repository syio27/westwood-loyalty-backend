package com.westwood.common.dto.reward;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.DayOfWeek;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WeeklyScheduleEntry {

    @NotNull(message = "Day of week is required")
    private DayOfWeek dayOfWeek;

    @NotNull(message = "Enabled flag is required")
    private Boolean enabled;

    private LocalTime startTime;

    private LocalTime endTime;
}
