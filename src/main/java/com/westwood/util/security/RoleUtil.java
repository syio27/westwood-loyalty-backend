package com.westwood.util.security;

import com.westwood.domain.Role;
import com.westwood.security.UserDetailsImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public final class RoleUtil {

    private RoleUtil() {
        // Utility class
    }

    public static boolean hasRole(Role requiredRole) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl)) {
            return false;
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        return userDetails.hasRole(requiredRole);
    }

    public static boolean hasAnyRole(Role... roles) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl)) {
            return false;
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        for (Role role : roles) {
            if (userDetails.hasRole(role)) {
                return true;
            }
        }
        return false;
    }

    public static boolean hasHigherOrEqualRole(Role requiredRole) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl)) {
            return false;
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        // Check hierarchy: SUDO > ADMIN > MANAGER
        if (userDetails.hasRole(Role.SUDO)) {
            return true; // SUDO has access to everything
        }
        if (requiredRole == Role.SUDO) {
            return false; // Only SUDO can access SUDO resources
        }
        if (userDetails.hasRole(Role.ADMIN)) {
            return requiredRole != Role.SUDO; // ADMIN can access ADMIN and MANAGER resources
        }
        if (userDetails.hasRole(Role.MANAGER)) {
            return requiredRole == Role.MANAGER; // MANAGER can only access MANAGER resources
        }

        return false;
    }

    public static UserDetailsImpl getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl) {
            return (UserDetailsImpl) authentication.getPrincipal();
        }
        return null;
    }
}

