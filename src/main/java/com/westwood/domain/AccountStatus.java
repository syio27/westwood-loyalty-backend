package com.westwood.domain;

public enum AccountStatus {
    PENDING_ACTIVATION,  // User has been invited but not yet activated
    ACTIVE,              // User account is active and can log in
    INACTIVE,            // User account has been deactivated
    EXPIRED,             // Activation token has expired
    LOCKED               // User account is locked (can be unlocked or deleted)
}

