package com.westwood.domain;

/**
 * Fixed reward program types, one per segment slot.
 * Segment mapping: ACQUISITION_AND_EVENTS = WELCOME, BIRTHDAY; GROWTH = REFERRAL; EVERYDAY = CASHBACK.
 */
public enum RewardProgramType {
    WELCOME,
    BIRTHDAY,
    REFERRAL,
    CASHBACK
}
