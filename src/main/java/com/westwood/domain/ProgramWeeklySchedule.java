package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.DayOfWeek;
import java.time.LocalTime;

@Entity
@Table(name = "program_weekly_schedules",
       uniqueConstraints = @UniqueConstraint(columnNames = {"program_id", "day_of_week"}))
@Getter
@Setter
@ToString(exclude = "program")
public class ProgramWeeklySchedule extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "program_id", nullable = false)
    private RewardProgram program;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "day_of_week", nullable = false, length = 10)
    private DayOfWeek dayOfWeek;

    @NotNull
    @Column(name = "enabled", nullable = false)
    private Boolean enabled = false;

    @Column(name = "start_time")
    private LocalTime startTime;

    @Column(name = "end_time")
    private LocalTime endTime;
}
