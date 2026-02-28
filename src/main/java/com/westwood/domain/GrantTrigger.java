package com.westwood.domain;

/**
 * When to grant the event program bonus: on join, first payment, or client's birthday. Extensible with new event types.
 */
public enum GrantTrigger {
    ON_JOIN,
    ON_FIRST_PAY,
    ON_BIRTHDAY
}
