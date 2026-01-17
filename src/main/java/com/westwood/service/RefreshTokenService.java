package com.westwood.service;

import com.westwood.domain.RefreshToken;
import com.westwood.domain.User;

public interface RefreshTokenService {
    RefreshToken createRefreshToken(Long userId);
    RefreshToken verifyRefreshToken(String token);
    void deleteRefreshToken(String token);
    void deleteAllUserTokens(Long userId);
    void deleteExpiredTokens();
}
