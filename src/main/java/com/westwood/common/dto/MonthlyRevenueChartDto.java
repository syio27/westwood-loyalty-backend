package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyRevenueChartDto {
    private Integer year;
    private Integer month; // 1-12
    private List<DailyRevenueDataDto> dailyData; // Data for each day from 1st to current day
}
