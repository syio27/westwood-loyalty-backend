package com.westwood.service.impl;

import com.westwood.common.dto.CreateUserRequest;
import com.westwood.common.dto.UserDto;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.User;
import com.westwood.repository.UserRepository;
import com.westwood.service.UserService;
import com.westwood.util.mapper.UserMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserDto createUser(CreateUserRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new ResourceAlreadyExistsException("User with username '" + request.getUsername() + "' already exists");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException("User with email '" + request.getEmail() + "' already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setActive(true);

        User savedUser = userRepository.save(user);
        return userMapper.toDto(savedUser);
    }

    @Override
    @Transactional(readOnly = true)
    public UserDto getUserById(UUID id) {
        User user = userRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + id + "' not found"));
        return userMapper.toDto(user);
    }

    @Override
    @Transactional(readOnly = true)
    public UserDto getUserByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User with username '" + username + "' not found"));
        return userMapper.toDto(user);
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(UUID id, CreateUserRequest request) {
        User user = userRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + id + "' not found"));

        if (!user.getUsername().equals(request.getUsername()) && userRepository.existsByUsername(request.getUsername())) {
            throw new ResourceAlreadyExistsException("User with username '" + request.getUsername() + "' already exists");
        }

        if (!user.getEmail().equals(request.getEmail()) && userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException("User with email '" + request.getEmail() + "' already exists");
        }

        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());

        User updatedUser = userRepository.save(user);
        return userMapper.toDto(updatedUser);
    }

    @Override
    public void deleteUser(UUID id) {
        User user = userRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + id + "' not found"));
        userRepository.deleteById(user.getId()); // Use internal ID for deletion
    }
}

