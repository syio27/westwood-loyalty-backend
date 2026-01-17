package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.ChangePasswordRequest;
import com.westwood.common.dto.PaymentSearchResultDto;
import com.westwood.common.dto.UpdateProfileRequest;
import com.westwood.common.dto.UserDto;
import com.westwood.service.UserProfileService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/user/profile")
public class UserProfileController {

    private final UserProfileService userProfileService;

    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    /**
     * Get current authenticated user's profile
     * Only the owner can access their own profile, regardless of role
     */
    @GetMapping
    public ResponseEntity<UserDto> getCurrentUserProfile() {
        UserDto profile = userProfileService.getCurrentUserProfile();
        return ResponseEntity.ok(profile);
    }

    /**
     * Update current authenticated user's profile
     * Only the owner can update their own profile, regardless of role
     */
    @PutMapping
    public ResponseEntity<UserDto> updateCurrentUserProfile(@Valid @RequestBody UpdateProfileRequest request) {
        UserDto updatedProfile = userProfileService.updateCurrentUserProfile(request);
        return ResponseEntity.ok(updatedProfile);
    }

    /**
     * Change current authenticated user's password
     * Requires current password verification
     * Only the owner can change their own password, regardless of role
     */
    @PutMapping("/password")
    public ResponseEntity<Void> changePassword(@Valid @RequestBody ChangePasswordRequest request) {
        userProfileService.changePassword(request);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    /**
     * Get current authenticated user's transactions (operations history)
     * Returns all payment transactions entered by the current user
     * Any authenticated user can view their own transactions, regardless of role
     */
    @GetMapping("/transactions")
    public ResponseEntity<List<PaymentSearchResultDto>> getCurrentUserTransactions() {
        List<PaymentSearchResultDto> transactions = userProfileService.getCurrentUserTransactions();
        return ResponseEntity.ok(transactions);
    }
}
