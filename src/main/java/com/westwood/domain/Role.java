package com.westwood.domain;

public enum Role {
    SUDO,      // Highest privilege
    ADMIN,     // Second highest
    MANAGER    // Lowest privilege

    // Note: When checking permissions, SUDO > ADMIN > MANAGER
}

