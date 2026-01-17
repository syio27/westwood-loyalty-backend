package com.westwood.service;

import com.westwood.common.dto.ChangePasswordRequest;
import com.westwood.common.dto.PaymentSearchResultDto;
import com.westwood.common.dto.UpdateProfileRequest;
import com.westwood.common.dto.UserDto;

import java.util.List;

public interface UserProfileService {

    /**
     * Get the current authenticated user's profile
     * @return UserDto with user profile information
     */
    UserDto getCurrentUserProfile();

    /**
     * Update the current authenticated user's profile
     * Only the owner can update their own profile, regardless of role
     * @param request UpdateProfileRequest with updated profile data
     * @return Updated UserDto
     */
    UserDto updateCurrentUserProfile(UpdateProfileRequest request);

    /**
     * Change the current authenticated user's password
     * Requires current password verification
     * @param request ChangePasswordRequest with current and new passwords
     */
    void changePassword(ChangePasswordRequest request);

    /**
     * Get the current authenticated user's transactions (operations history)
     * @return List of payment transactions entered by the current user
     */
    List<PaymentSearchResultDto> getCurrentUserTransactions();
}
