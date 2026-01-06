package com.westwood.service.impl;

import com.westwood.common.dto.ActivateAccountRequest;
import com.westwood.common.dto.InviteUserRequest;
import com.westwood.common.dto.UserDto;
import com.westwood.common.exception.InvalidActivationTokenException;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.domain.AccountStatus;
import com.westwood.domain.Role;
import com.westwood.domain.User;
import com.westwood.repository.UserRepository;
import com.westwood.service.EmailService;
import com.westwood.service.InvitationService;
import com.westwood.util.mapper.UserMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Base64;

@Service
@Transactional
public class InvitationServiceImpl implements InvitationService {

    private static final Logger logger = LoggerFactory.getLogger(InvitationServiceImpl.class);
    private static final int TOKEN_LENGTH = 64; // 64 bytes = 512 bits
    private static final int ACTIVATION_TOKEN_VALIDITY_DAYS = 7;

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final SecureRandom secureRandom;

    @Value("${app.frontend.url:http://localhost:3000}")
    private String frontendUrl;

    public InvitationServiceImpl(
            UserRepository userRepository,
            EmailService emailService,
            PasswordEncoder passwordEncoder,
            UserMapper userMapper) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
        this.secureRandom = new SecureRandom();
    }

    @Override
    public UserDto inviteUser(InviteUserRequest request) {
        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException("User with email '" + request.getEmail() + "' already exists");
        }

        // Generate unique username if not provided (using email prefix)
        String username = generateUniqueUsername(request.getEmail());

        // Generate secure activation token
        String activationToken = generateActivationToken();
        LocalDateTime tokenExpiry = LocalDateTime.now().plusDays(ACTIVATION_TOKEN_VALIDITY_DAYS);

        // Create user in PENDING_ACTIVATION state
        User user = new User();
        user.setEmail(request.getEmail());
        user.setUsername(username);
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setAccountStatus(AccountStatus.PENDING_ACTIVATION);
        user.setActivationToken(activationToken);
        user.setActivationTokenExpiry(tokenExpiry);
        user.setActive(false); // User is not active until activation
        user.addRole(Role.MANAGER); // Invited users are managers

        // Set a temporary password (will be changed during activation)
        user.setPassword(passwordEncoder.encode(generateTemporaryPassword()));

        User savedUser = userRepository.save(user);
        logger.info("User invited: email={}, username={}", request.getEmail(), username);

        // Send invitation email
        String activationUrl = String.format("%s/activate?token=%s", frontendUrl, activationToken);
        emailService.sendInvitationEmail(
                savedUser.getEmail(),
                savedUser.getFirstName(),
                activationToken,
                activationUrl
        );

        return userMapper.toDto(savedUser);
    }

    @Override
    public UserDto activateAccount(ActivateAccountRequest request) {
        // Find user by activation token
        User user = userRepository.findByActivationToken(request.getToken())
                .orElseThrow(() -> new InvalidActivationTokenException("Invalid or expired activation token"));

        // Validate token expiry
        if (user.getActivationTokenExpiry() == null || 
            user.getActivationTokenExpiry().isBefore(LocalDateTime.now())) {
            user.setAccountStatus(AccountStatus.EXPIRED);
            userRepository.save(user);
            throw new InvalidActivationTokenException("Activation token has expired. Please request a new invitation.");
        }

        // Validate account status
        if (user.getAccountStatus() != AccountStatus.PENDING_ACTIVATION) {
            throw new InvalidActivationTokenException("Account is not in pending activation state");
        }

        // Check if username is already taken (if different from current)
        if (!user.getUsername().equals(request.getUsername())) {
            if (userRepository.existsByUsername(request.getUsername())) {
                throw new ResourceAlreadyExistsException("Username '" + request.getUsername() + "' is already taken");
            }
            user.setUsername(request.getUsername());
        }

        // Update user with new password and activate account
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setAccountStatus(AccountStatus.ACTIVE);
        user.setActive(true);
        user.setActivationToken(null); // Clear token after activation
        user.setActivationTokenExpiry(null);

        User activatedUser = userRepository.save(user);
        logger.info("User activated: email={}, username={}", activatedUser.getEmail(), activatedUser.getUsername());

        // Send activation confirmation email
        emailService.sendActivationConfirmationEmail(activatedUser.getEmail(), activatedUser.getFirstName());

        return userMapper.toDto(activatedUser);
    }

    private String generateActivationToken() {
        byte[] tokenBytes = new byte[TOKEN_LENGTH];
        secureRandom.nextBytes(tokenBytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes);
    }

    private String generateUniqueUsername(String email) {
        String baseUsername = email.split("@")[0].toLowerCase()
                .replaceAll("[^a-z0-9]", "");
        
        String username = baseUsername;
        int counter = 1;
        
        while (userRepository.existsByUsername(username)) {
            username = baseUsername + counter;
            counter++;
        }
        
        return username;
    }

    private String generateTemporaryPassword() {
        byte[] passwordBytes = new byte[32];
        secureRandom.nextBytes(passwordBytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(passwordBytes);
    }
}

