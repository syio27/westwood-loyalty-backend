package com.westwood.security;

import com.westwood.domain.AccountStatus;
import com.westwood.domain.Role;
import com.westwood.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

public class UserDetailsImpl implements UserDetails {

    private final User user;

    public UserDetailsImpl(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.name()))
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        // Return email as username for Spring Security compatibility
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // Account is locked if status is LOCKED
        if (user.getAccountStatus() == null) {
            return true;
        }
        return user.getAccountStatus() != AccountStatus.LOCKED;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        // User must be active AND have an active account status
        // Cannot be LOCKED, BANNED, or other non-active statuses
        if (!user.getActive() || user.getAccountStatus() == null) {
            return false;
        }
        AccountStatus status = user.getAccountStatus();
        return status == AccountStatus.ACTIVE;
    }

    public User getUser() {
        return user;
    }

    public boolean hasRole(Role role) {
        return user.hasRole(role);
    }
}

