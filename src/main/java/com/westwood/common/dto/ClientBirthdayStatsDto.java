package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Stats for birthday-type event programs: how many clients have birthdate set
 * and how many will have their birthday (and be granted) after today this year.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClientBirthdayStatsDto {
    /** Number of clients with date of birth filled. */
    private long withBirthdate;
    /** Number of those clients whose birthday (month-day) falls after today this year. */
    private long grantedThisYear;
}
