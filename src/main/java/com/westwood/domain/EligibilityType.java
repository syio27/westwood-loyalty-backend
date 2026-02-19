package com.westwood.domain;

/**
 * Determines which transactions qualify for cashback.
 * For the initial iteration, only ALL is supported.
 * SPECIFIC_ITEMS, SPECIFIC_CATEGORIES, SPECIFIC_SERVICES will be enabled with multi-tenancy.
 */
public enum EligibilityType {
    ALL,
    SPECIFIC_ITEMS,
    SPECIFIC_CATEGORIES,
    SPECIFIC_SERVICES
}
