package com.westwood.common.dto.reward;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Response for schedule overlap check. When overlaps is true, overlappingProgramName is set.
 * When there is an always-on program and the new program has an end date, overlaps is false
 * and alwaysOnProgramName can be set for UI tooltip.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleOverlapCheckResponse {

    private boolean overlaps;
    /** Name of the program that overlaps (when overlaps is true). */
    private String overlappingProgramName;
    /** When new program has end date and an always-on program exists (no conflict). */
    private String alwaysOnProgramName;
    /** When true, the conflict is because an always-on program already exists (only one always-on allowed). */
    private Boolean alwaysOnConflict;
}
