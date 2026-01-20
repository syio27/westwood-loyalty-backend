package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.CreateUserRequest;
import com.westwood.common.dto.PaymentSearchResultDto;
import com.westwood.common.dto.UserDto;
import com.westwood.common.dto.UserStatusDto;
import com.westwood.service.PaymentService;
import com.westwood.service.UserActivityService;
import com.westwood.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.API_V1 + ApiConstants.USERS_ENDPOINT)
public class UserController {

    private final UserService userService;
    private final PaymentService paymentService;
    private final UserActivityService userActivityService;

    public UserController(UserService userService, PaymentService paymentService, UserActivityService userActivityService) {
        this.userService = userService;
        this.paymentService = paymentService;
        this.userActivityService = userActivityService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserRequest request) {
        UserDto createdUser = userService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<UserDto> getUserById(@PathVariable UUID id) {
        UserDto user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    /**
     * Get all transactions entered by a specific user
     * Returns payment history with client info, amounts, bonuses, and status
     */
    @GetMapping("/{id}/transactions")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<PaymentSearchResultDto>> getUserTransactions(@PathVariable UUID id) {
        List<PaymentSearchResultDto> transactions = paymentService.getTransactionsByUserId(id);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/email/{email}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<UserDto> getUserByEmail(@PathVariable String email) {
        UserDto user = userService.getUserByEmail(email);
        return ResponseEntity.ok(user);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<UserDto> updateUser(@PathVariable UUID id, @Valid @RequestBody CreateUserRequest request) {
        UserDto updatedUser = userService.updateUser(id, request);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('SUDO')")
    public ResponseEntity<Void> deleteUser(@PathVariable UUID id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Lock a user account
     * Prevents the user from logging in until unlocked
     */
    @PutMapping("/{id}/lock")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<UserDto> lockUser(@PathVariable UUID id) {
        UserDto lockedUser = userService.lockUser(id);
        return ResponseEntity.ok(lockedUser);
    }

    /**
     * Unlock a user account (restore access)
     * Can only unlock LOCKED users
     */
    @PutMapping("/{id}/unlock")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<UserDto> unlockUser(@PathVariable UUID id) {
        UserDto unlockedUser = userService.unlockUser(id);
        return ResponseEntity.ok(unlockedUser);
    }

    /**
     * Delete all users with LOCKED status
     * Returns the number of users deleted
     */
    @DeleteMapping("/locked")
    @PreAuthorize("hasRole('SUDO')")
    public ResponseEntity<DeleteLockedResponse> deleteLockedUsers() {
        int deletedCount = userService.deleteLockedUsers();
        return ResponseEntity.ok(new DeleteLockedResponse(deletedCount));
    }

    /**
     * Update current user's last seen timestamp (heartbeat)
     * Called periodically by frontend to indicate user is active
     */
    @PostMapping("/activity/heartbeat")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Void> updateHeartbeat(Authentication authentication) {
        com.westwood.security.UserDetailsImpl userDetails = (com.westwood.security.UserDetailsImpl) authentication.getPrincipal();
        userActivityService.updateLastSeen(userDetails.getUser().getUuid());
        return ResponseEntity.ok().build();
    }
    
    /**
     * Get user's online status and last seen time
     */
    @GetMapping("/{id}/status")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<UserStatusDto> getUserStatus(@PathVariable UUID id) {
        UserStatusDto status = userActivityService.getUserStatus(id);
        return ResponseEntity.ok(status);
    }
    
    /**
     * Get online status for all users
     */
    @GetMapping("/status")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<UserStatusDto>> getAllUsersStatus() {
        List<UserStatusDto> statuses = userActivityService.getAllUsersStatus();
        return ResponseEntity.ok(statuses);
    }

    /**
     * Response DTO for delete locked users endpoint
     */
    public static class DeleteLockedResponse {
        private final int deletedCount;

        public DeleteLockedResponse(int deletedCount) {
            this.deletedCount = deletedCount;
        }

        public int getDeletedCount() {
            return deletedCount;
        }
    }
}

