package com.westwood.domain;

/**
 * When event bonus is granted on first pay: grant only event bonus, or event alongside cashback.
 */
public enum FirstPayMode {
    /** On first payment, grant welcome only; do not grant cashback for that payment. */
    WELCOME_ONLY,
    /** On first payment, grant welcome and also process cashback as usual. */
    WELCOME_AND_CASHBACK
}
