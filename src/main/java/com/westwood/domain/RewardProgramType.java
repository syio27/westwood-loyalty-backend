package com.westwood.domain;

/**
 * Fixed reward program types, one per segment slot.
 * EVENT = Event program: grants on events (join, first pay, birthday, etc.). Extensible with new grant triggers.
 * Segment mapping: ACQUISITION_AND_EVENTS = EVENT, BIRTHDAY; GROWTH = REFERRAL; EVERYDAY = CASHBACK.
 */
public enum RewardProgramType {
    EVENT,
    BIRTHDAY,
    REFERRAL,
    CASHBACK
}
