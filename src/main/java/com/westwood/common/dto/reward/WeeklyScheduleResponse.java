package com.westwood.common.dto.reward;

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
public class WeeklyScheduleResponse {

    private DayOfWeek dayOfWeek;
    private Boolean enabled;
    private LocalTime startTime;
    private LocalTime endTime;
}
