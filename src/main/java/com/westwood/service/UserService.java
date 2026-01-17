package com.westwood.service;

import com.westwood.common.dto.CreateUserRequest;
import com.westwood.common.dto.UserDto;

import java.util.List;
import java.util.UUID;

public interface UserService {

    UserDto createUser(CreateUserRequest request);

    UserDto getUserById(UUID id);

    UserDto getUserByEmail(String email);

    List<UserDto> getAllUsers();

    UserDto updateUser(UUID id, CreateUserRequest request);

    void deleteUser(UUID id);

    /**
     * Lock a user account (restriction)
     * @param id User UUID
     * @return Updated UserDto
     */
    UserDto lockUser(UUID id);

    /**
     * Unlock a user account (restore access)
     * @param id User UUID
     * @return Updated UserDto
     */
    UserDto unlockUser(UUID id);

    /**
     * Delete all users with LOCKED status
     * @return Number of users deleted
     */
    int deleteLockedUsers();
}

