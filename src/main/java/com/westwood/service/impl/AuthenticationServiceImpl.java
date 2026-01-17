package com.westwood.service.impl;

import com.westwood.common.dto.AuthResponse;
import com.westwood.common.dto.LoginRequest;
import com.westwood.common.dto.RegisterRequest;
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
import com.westwood.service.RefreshTokenService;
import com.westwood.util.CookieUtil;
import com.westwood.util.jwt.JwtTokenProvider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final RefreshTokenService refreshTokenService;
    private final CookieUtil cookieUtil;

    public AuthenticationServiceImpl(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider,
            RefreshTokenService refreshTokenService,
            CookieUtil cookieUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.refreshTokenService = refreshTokenService;
        this.cookieUtil = cookieUtil;
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

        Set<String> roles = userDetails.getAuthorities().stream()
                .map(authority -> authority.getAuthority().replace("ROLE_", ""))
                .collect(Collectors.toSet());

        return new AuthResponse(
                userDetails.getUser().getId(),
                userDetails.getUser().getEmail(),
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
                savedUser.getId(),
                savedUser.getEmail(),
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
                user.getId(),
                user.getEmail(),
                roles
        );
    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response) {
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
                user.getId(),
                user.getEmail(),
                roles
        );
    }
}

