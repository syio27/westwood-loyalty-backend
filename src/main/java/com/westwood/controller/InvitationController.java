package com.westwood.controller;

import com.westwood.common.dto.ActivateAccountRequest;
import com.westwood.common.dto.InviteUserRequest;
import com.westwood.common.dto.JwtResponse;
import com.westwood.common.dto.LoginRequest;
import com.westwood.common.dto.UserDto;
import com.westwood.service.AuthenticationService;
import com.westwood.service.InvitationService;
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
    public ResponseEntity<JwtResponse> activateAccount(@Valid @RequestBody ActivateAccountRequest request) {
        // Activate the account
        invitationService.activateAccount(request);
        
        // Automatically log in the user after activation
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername(request.getUsername());
        loginRequest.setPassword(request.getPassword());
        
        JwtResponse jwtResponse = authenticationService.login(loginRequest);
        return ResponseEntity.ok(jwtResponse);
    }
}

