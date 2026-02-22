package com.westwood.domain;

/**
 * When welcome is granted on first pay: grant only welcome bonus, or welcome alongside cashback.
 */
public enum FirstPayMode {
    /** On first payment, grant welcome only; do not grant cashback for that payment. */
    WELCOME_ONLY,
    /** On first payment, grant welcome and also process cashback as usual. */
    WELCOME_AND_CASHBACK
}
