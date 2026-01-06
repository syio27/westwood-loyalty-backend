package com.westwood.service;

import com.westwood.common.dto.CreateUserRequest;
import com.westwood.common.dto.UserDto;

import java.util.List;
import java.util.UUID;

public interface UserService {

    UserDto createUser(CreateUserRequest request);

    UserDto getUserById(UUID id);

    UserDto getUserByUsername(String username);

    List<UserDto> getAllUsers();

    UserDto updateUser(UUID id, CreateUserRequest request);

    void deleteUser(UUID id);
}

