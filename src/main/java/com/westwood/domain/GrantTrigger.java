package com.westwood.domain;

/**
 * When to grant the event (welcome) bonus: on join, first payment, or client's birthday.
 */
public enum GrantTrigger {
    ON_JOIN,
    ON_FIRST_PAY,
    ON_BIRTHDAY
}
