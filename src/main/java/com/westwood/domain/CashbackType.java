package com.westwood.domain;

/**
 * How cashback is calculated:
 * PERCENTAGE  – earn a % of the transaction amount as bonus.
 * BONUS_POINTS – earn a flat number of bonus points per qualifying transaction.
 */
public enum CashbackType {
    PERCENTAGE,
    BONUS_POINTS
}
