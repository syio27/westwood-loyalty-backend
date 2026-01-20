package com.westwood.util.mapper;

import com.westwood.common.dto.UserDto;
import com.westwood.domain.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserDto toDto(User user) {
        if (user == null) {
            return null;
        }

        UserDto dto = new UserDto();
        dto.setId(user.getUuid()); // Use UUID for external identification
        dto.setUsername(user.getEmail()); // Use email as username for backward compatibility
        dto.setEmail(user.getEmail());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setPhone(user.getPhone());
        dto.setRoles(user.getRoles());
        dto.setActive(user.getActive());
        dto.setAccountStatus(user.getAccountStatus());
        dto.setCreatedAt(user.getCreatedAt());
        dto.setUpdatedAt(user.getUpdatedAt());
        dto.setLastSeenAt(user.getLastSeenAt());

        return dto;
    }

    public User toEntity(UserDto dto) {
        if (dto == null) {
            return null;
        }

        User user = new User();
        // UUID is auto-generated on persist, don't set it from DTO
        // Username is deprecated - not setting it from DTO
        user.setEmail(dto.getEmail());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setPhone(dto.getPhone());
        user.setRoles(dto.getRoles());
        user.setActive(dto.getActive());

        return user;
    }
}

