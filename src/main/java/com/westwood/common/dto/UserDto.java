package com.westwood.common.dto;

import com.westwood.domain.AccountStatus;
import com.westwood.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private UUID id; // External UUID for frontend routing
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private Set<Role> roles;
    private Boolean active;
    private AccountStatus accountStatus;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime lastSeenAt;
}

