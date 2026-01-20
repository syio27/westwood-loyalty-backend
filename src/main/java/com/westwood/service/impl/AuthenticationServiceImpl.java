package com.westwood.service.impl;

import com.westwood.common.dto.AuthResponse;
import com.westwood.common.dto.ForgotPasswordRequest;
import com.westwood.common.dto.LoginRequest;
import com.westwood.common.dto.RegisterRequest;
import com.westwood.common.dto.ResetPasswordRequest;
import com.westwood.common.exception.InvalidActivationTokenException;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.common.exception.TokenRefreshException;
import com.westwood.common.exception.UnauthorizedException;
import com.westwood.domain.RefreshToken;
import com.westwood.domain.Role;
import com.westwood.domain.User;
import com.westwood.repository.UserRepository;
import com.westwood.security.UserDetailsImpl;
import com.westwood.service.AuthenticationService;
import com.westwood.service.EmailService;
import com.westwood.service.RefreshTokenService;
import com.westwood.service.UserActivityService;
import com.westwood.util.CookieUtil;
import com.westwood.util.jwt.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationServiceImpl.class);
    private static final int TOKEN_LENGTH = 32;
    private static final int PASSWORD_RESET_TOKEN_VALIDITY_HOURS = 24;

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final RefreshTokenService refreshTokenService;
    private final CookieUtil cookieUtil;
    private final EmailService emailService;
    private final UserActivityService userActivityService;
    private final SecureRandom secureRandom;

    @Value("${app.frontend.url:}")
    private String frontendUrl;
    
    @Value("${app.base-url:https://ww-reward-backend-401aa2c307ef.herokuapp.com}")
    private String baseUrl;

    public AuthenticationServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider,
            RefreshTokenService refreshTokenService,
            CookieUtil cookieUtil,
            EmailService emailService,
            UserActivityService userActivityService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.refreshTokenService = refreshTokenService;
        this.cookieUtil = cookieUtil;
        this.emailService = emailService;
        this.userActivityService = userActivityService;
        this.secureRandom = new SecureRandom();
    }

    @Override
    public AuthResponse login(LoginRequest request, HttpServletResponse response) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        // Generate access token
        String accessToken = jwtTokenProvider.generateAccessToken(userDetails);
        
        // Create and save refresh token
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getUser().getId());

        // Set tokens in HttpOnly cookies
        cookieUtil.addAccessTokenCookie(response, accessToken, jwtTokenProvider.getAccessTokenExpiration() / 1000);
        cookieUtil.addRefreshTokenCookie(response, refreshToken.getToken(), jwtTokenProvider.getRefreshTokenExpiration() / 1000);

        // Update user's last seen timestamp
        User user = userDetails.getUser();
        userActivityService.updateLastSeen(user.getUuid());

        Set<String> roles = userDetails.getAuthorities().stream()
                .map(authority -> authority.getAuthority().replace("ROLE_", ""))
                .collect(Collectors.toSet());
        return new AuthResponse(
                user.getUuid(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                roles
        );
    }

    @Override
    public AuthResponse register(RegisterRequest request, HttpServletResponse response) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResourceAlreadyExistsException("Email is already in use!");
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setActive(true);

        // Set default role if not provided
        Set<Role> roles = request.getRoles();
        if (roles == null || roles.isEmpty()) {
            roles = new HashSet<>();
            roles.add(Role.MANAGER); // Default role
        }
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        UserDetailsImpl userDetails = new UserDetailsImpl(savedUser);
        
        // Generate access token
        String accessToken = jwtTokenProvider.generateAccessToken(userDetails);
        
        // Create and save refresh token
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(savedUser.getId());

        // Set tokens in HttpOnly cookies
        cookieUtil.addAccessTokenCookie(response, accessToken, jwtTokenProvider.getAccessTokenExpiration() / 1000);
        cookieUtil.addRefreshTokenCookie(response, refreshToken.getToken(), jwtTokenProvider.getRefreshTokenExpiration() / 1000);

        Set<String> roleNames = userDetails.getAuthorities().stream()
                .map(authority -> authority.getAuthority().replace("ROLE_", ""))
                .collect(Collectors.toSet());

        return new AuthResponse(
                savedUser.getUuid(),
                savedUser.getEmail(),
                savedUser.getFirstName(),
                savedUser.getLastName(),
                roleNames
        );
    }

    @Override
    public AuthResponse refreshToken(HttpServletRequest request, HttpServletResponse response) {
        String refreshTokenValue = cookieUtil.getRefreshTokenFromCookie(request);
        
        if (refreshTokenValue == null) {
            throw new TokenRefreshException("Refresh token is missing");
        }

        RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenValue);
        User user = refreshToken.getUser();

        // Revoke old refresh token
        refreshToken.setRevoked(true);
        refreshTokenService.deleteRefreshToken(refreshTokenValue);

        // Create new tokens
        UserDetailsImpl userDetails = new UserDetailsImpl(user);
        String newAccessToken = jwtTokenProvider.generateAccessToken(userDetails);
        RefreshToken newRefreshToken = refreshTokenService.createRefreshToken(user.getId());

        // Update old token with replacement tracking
        refreshToken.setReplacedByToken(newRefreshToken.getToken());

        // Set new tokens in HttpOnly cookies
        cookieUtil.addAccessTokenCookie(response, newAccessToken, jwtTokenProvider.getAccessTokenExpiration() / 1000);
        cookieUtil.addRefreshTokenCookie(response, newRefreshToken.getToken(), jwtTokenProvider.getRefreshTokenExpiration() / 1000);

        Set<String> roles = userDetails.getAuthorities().stream()
                .map(authority -> authority.getAuthority().replace("ROLE_", ""))
                .collect(Collectors.toSet());

        return new AuthResponse(
                user.getUuid(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                roles
        );
    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        // Mark user as offline before clearing security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl) {
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            try {
                // Mark user as offline immediately by setting lastSeenAt to a time in the past
                userActivityService.markUserOffline(userDetails.getUser().getUuid());
            } catch (Exception e) {
                logger.warn("Failed to mark user offline on logout: {}", e.getMessage());
            }
        }

        String refreshTokenValue = cookieUtil.getRefreshTokenFromCookie(request);
        
        if (refreshTokenValue != null) {
            refreshTokenService.deleteRefreshToken(refreshTokenValue);
        }

        // Delete cookies
        cookieUtil.deleteAccessTokenCookie(response);
        cookieUtil.deleteRefreshTokenCookie(response);

        SecurityContextHolder.clearContext();
    }

    @Override
    @Transactional(readOnly = true)
    public AuthResponse getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication == null || !(authentication.getPrincipal() instanceof UserDetailsImpl)) {
            throw new UnauthorizedException("User not authenticated");
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userDetails.getUser();

        Set<String> roles = userDetails.getAuthorities().stream()
                .map(authority -> authority.getAuthority().replace("ROLE_", ""))
                .collect(Collectors.toSet());

        return new AuthResponse(
                user.getUuid(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                roles
        );
    }

    @Override
    public void forgotPassword(ForgotPasswordRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User with email '" + request.getEmail() + "' not found"));

        // Generate secure password reset token
        String resetToken = generatePasswordResetToken();
        LocalDateTime tokenExpiry = LocalDateTime.now().plusHours(PASSWORD_RESET_TOKEN_VALIDITY_HOURS);

        // Store token and expiry
        user.setPasswordResetToken(resetToken);
        user.setPasswordResetTokenExpiry(tokenExpiry);
        userRepository.save(user);

        logger.info("Password reset token generated for user: {}", request.getEmail());

        // Send password reset email - use baseUrl for same-origin setup
        String appUrl = (frontendUrl != null && !frontendUrl.isEmpty()) ? frontendUrl : baseUrl;
        String resetUrl = String.format("%s/auth/reset-password?token=%s", appUrl, resetToken);
        emailService.sendPasswordResetEmail(
                user.getEmail(),
                user.getFirstName(),
                resetToken,
                resetUrl
        );
    }

    @Override
    public AuthResponse resetPassword(ResetPasswordRequest request, HttpServletResponse response) {
        // Find user by password reset token
        User user = userRepository.findByPasswordResetToken(request.getToken())
                .orElseThrow(() -> new InvalidActivationTokenException("Invalid or expired password reset token"));

        // Validate token expiry
        if (user.getPasswordResetTokenExpiry() == null ||
                user.getPasswordResetTokenExpiry().isBefore(LocalDateTime.now())) {
            user.setPasswordResetToken(null);
            user.setPasswordResetTokenExpiry(null);
            userRepository.save(user);
            throw new InvalidActivationTokenException("Password reset token has expired. Please request a new password reset.");
        }

        // Update password and clear reset token
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPasswordResetToken(null);
        user.setPasswordResetTokenExpiry(null);
        userRepository.save(user);

        logger.info("Password reset successful for user: {}", user.getEmail());

        // Automatically log in the user after password reset
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail(user.getEmail());
        loginRequest.setPassword(request.getPassword());

        return login(loginRequest, response);
    }

    private String generatePasswordResetToken() {
        byte[] tokenBytes = new byte[TOKEN_LENGTH];
        secureRandom.nextBytes(tokenBytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes);
    }
}

