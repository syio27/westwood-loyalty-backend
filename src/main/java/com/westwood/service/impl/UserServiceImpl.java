package com.westwood.service.impl;

import com.westwood.common.dto.CreateUserRequest;
import com.westwood.common.dto.UserDto;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.AccountStatus;
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
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException("User with email '" + request.getEmail() + "' already exists");
        }

        User user = new User();
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
    public UserDto getUserByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User with email '" + email + "' not found"));
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

        if (!user.getEmail().equals(request.getEmail()) && userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException("User with email '" + request.getEmail() + "' already exists");
        }

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

    @Override
    public UserDto lockUser(UUID id) {
        User user = userRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + id + "' not found"));
        
        user.setAccountStatus(AccountStatus.LOCKED);
        user.setActive(false);
        
        User updatedUser = userRepository.save(user);
        return userMapper.toDto(updatedUser);
    }

    @Override
    public UserDto unlockUser(UUID id) {
        User user = userRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + id + "' not found"));
        
        // Only unlock if currently locked
        if (user.getAccountStatus() == AccountStatus.LOCKED) {
            user.setAccountStatus(AccountStatus.ACTIVE);
            user.setActive(true);
        }
        
        User updatedUser = userRepository.save(user);
        return userMapper.toDto(updatedUser);
    }

    @Override
    @Transactional
    public int deleteLockedUsers() {
        List<User> usersToDelete = userRepository.findAll().stream()
                .filter(user -> user.getAccountStatus() == AccountStatus.LOCKED)
                .collect(Collectors.toList());
        
        int count = usersToDelete.size();
        usersToDelete.forEach(user -> userRepository.deleteById(user.getId()));
        
        return count;
    }
}

