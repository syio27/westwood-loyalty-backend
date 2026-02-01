package com.westwood.service.impl;

import com.westwood.common.dto.ChangePasswordRequest;
import com.westwood.common.dto.PaymentSearchResultDto;
import com.westwood.common.dto.UpdateProfileRequest;
import com.westwood.common.dto.UserDto;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.common.exception.UnauthorizedException;
import com.westwood.domain.User;
import com.westwood.repository.UserRepository;
import com.westwood.security.UserDetailsImpl;
import com.westwood.service.PaymentService;
import com.westwood.service.UserProfileService;
import com.westwood.util.PhoneUtils;
import com.westwood.util.mapper.UserMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserProfileServiceImpl implements UserProfileService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final PaymentService paymentService;

    public UserProfileServiceImpl(
            UserRepository userRepository,
            UserMapper userMapper,
            PasswordEncoder passwordEncoder,
            PaymentService paymentService) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
        this.paymentService = paymentService;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDto getCurrentUserProfile() {
        User currentUser = getCurrentAuthenticatedUser();
        return userMapper.toDto(currentUser);
    }

    @Override
    public UserDto updateCurrentUserProfile(UpdateProfileRequest request) {
        User currentUser = getCurrentAuthenticatedUser();

        // Check if email is being changed and if new email already exists
        if (!currentUser.getEmail().equals(request.getEmail()) && 
            userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException("Email '" + request.getEmail() + "' is already in use");
        }

        // Update profile fields
        currentUser.setEmail(request.getEmail());
        currentUser.setFirstName(request.getFirstName());
        currentUser.setLastName(request.getLastName());

        // Normalize phone number
        String normalizedPhone = PhoneUtils.normalize(request.getPhone());
        currentUser.setPhone(normalizedPhone); // Can be null

        User updatedUser = userRepository.save(currentUser);
        return userMapper.toDto(updatedUser);
    }

    @Override
    public void changePassword(ChangePasswordRequest request) {
        User currentUser = getCurrentAuthenticatedUser();

        // Verify current password
        if (!passwordEncoder.matches(request.getCurrentPassword(), currentUser.getPassword())) {
            throw new UnauthorizedException("Current password is incorrect");
        }

        // Verify new password matches confirmation
        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            throw new IllegalArgumentException("New password and confirmation password do not match");
        }

        // Update password
        currentUser.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(currentUser);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentSearchResultDto> getCurrentUserTransactions() {
        User currentUser = getCurrentAuthenticatedUser();
        return paymentService.getTransactionsByUserId(currentUser.getUuid());
    }

    /**
     * Get the currently authenticated user from SecurityContext
     * @return User entity of the authenticated user
     * @throws UnauthorizedException if user is not authenticated
     */
    private User getCurrentAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl)) {
            throw new UnauthorizedException("User not authenticated");
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        return userDetails.getUser();
    }
}
