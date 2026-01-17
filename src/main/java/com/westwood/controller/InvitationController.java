package com.westwood.controller;

import com.westwood.common.dto.ActivateAccountRequest;
import com.westwood.common.dto.AuthResponse;
import com.westwood.common.dto.InviteUserRequest;
import com.westwood.common.dto.LoginRequest;
import com.westwood.common.dto.UserDto;
import com.westwood.service.AuthenticationService;
import com.westwood.service.InvitationService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class InvitationController {

    private final InvitationService invitationService;
    private final AuthenticationService authenticationService;

    public InvitationController(
            InvitationService invitationService,
            AuthenticationService authenticationService) {
        this.invitationService = invitationService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/users/invite")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
    public ResponseEntity<UserDto> inviteUser(@Valid @RequestBody InviteUserRequest request) {
        UserDto invitedUser = invitationService.inviteUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(invitedUser);
    }

    @PostMapping("/auth/activate")
    public ResponseEntity<AuthResponse> activateAccount(
            @Valid @RequestBody ActivateAccountRequest request,
            HttpServletResponse response) {
        // Activate the account
        UserDto activatedUser = invitationService.activateAccount(request);
        
        // Automatically log in the user after activation
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail(activatedUser.getEmail());
        loginRequest.setPassword(request.getPassword());
        
        AuthResponse authResponse = authenticationService.login(loginRequest, response);
        return ResponseEntity.ok(authResponse);
    }
}

