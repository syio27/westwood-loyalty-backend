package com.westwood.service.impl;

import com.westwood.common.exception.InvalidTokenException;
import com.westwood.common.exception.TokenRefreshException;
import com.westwood.domain.RefreshToken;
import com.westwood.domain.User;
import com.westwood.repository.RefreshTokenRepository;
import com.westwood.repository.UserRepository;
import com.westwood.security.UserDetailsImpl;
import com.westwood.service.RefreshTokenService;
import com.westwood.util.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.westwood.security.UserDetailsImpl;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
public class RefreshTokenServiceImpl implements RefreshTokenService {

    @Value("${jwt.refresh-token-expiration:604800000}") // 7 days default
    private Long refreshTokenExpiration;

    private final RefreshTokenRepository refreshTokenRepository;
    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public RefreshTokenServiceImpl(
            RefreshTokenRepository refreshTokenRepository,
            UserRepository userRepository,
            JwtTokenProvider jwtTokenProvider) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public RefreshToken createRefreshToken(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        UserDetailsImpl userDetails = new UserDetailsImpl(user);

        // Revoke existing refresh tokens for this user (token rotation)
        Optional<RefreshToken> existingToken = refreshTokenRepository.findActiveTokenByUserId(
                userId, LocalDateTime.now());
        if (existingToken.isPresent()) {
            RefreshToken oldToken = existingToken.get();
            oldToken.setRevoked(true);
            refreshTokenRepository.save(oldToken);
        }

        // Generate JWT refresh token
        String refreshTokenJwt = jwtTokenProvider.generateRefreshToken(userDetails);

        // Create new refresh token entity
        RefreshToken refreshToken = new RefreshToken();
        refreshToken.setUser(user);
        refreshToken.setToken(refreshTokenJwt);
        refreshToken.setExpiresAt(LocalDateTime.now().plusSeconds(refreshTokenExpiration / 1000));
        refreshToken.setRevoked(false);

        return refreshTokenRepository.save(refreshToken);
    }

    @Override
    @Transactional(readOnly = true)
    public RefreshToken verifyRefreshToken(String token) {
        // First validate JWT structure and expiration
        if (!jwtTokenProvider.validateToken(token)) {
            throw new TokenRefreshException("Invalid or expired refresh token. Please login again.");
        }

        // Then check database for revocation
        RefreshToken refreshToken = refreshTokenRepository.findByToken(token)
                .orElseThrow(() -> new TokenRefreshException("Refresh token not found"));

        if (refreshToken.isExpired()) {
            refreshTokenRepository.delete(refreshToken);
            throw new TokenRefreshException("Refresh token has expired. Please login again.");
        }

        if (refreshToken.getRevoked()) {
            throw new TokenRefreshException("Refresh token has been revoked. Please login again.");
        }

        return refreshToken;
    }

    @Override
    public void deleteRefreshToken(String token) {
        refreshTokenRepository.findByToken(token)
                .ifPresent(refreshTokenRepository::delete);
    }

    @Override
    public void deleteAllUserTokens(Long userId) {
        refreshTokenRepository.deleteByUserId(userId);
    }

    @Override
    @Scheduled(cron = "${app.refresh-token.cleanup-cron:0 0 2 * * ?}") // Daily at 2 AM
    public void deleteExpiredTokens() {
        refreshTokenRepository.deleteExpiredTokens(LocalDateTime.now());
    }
}
