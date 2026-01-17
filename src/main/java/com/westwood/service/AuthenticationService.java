package com.westwood.service;

import com.westwood.common.dto.AuthResponse;
import com.westwood.common.dto.ForgotPasswordRequest;
import com.westwood.common.dto.LoginRequest;
import com.westwood.common.dto.RegisterRequest;
import com.westwood.common.dto.ResetPasswordRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {

    AuthResponse login(LoginRequest request, HttpServletResponse response);

    AuthResponse register(RegisterRequest request, HttpServletResponse response);

    AuthResponse refreshToken(HttpServletRequest request, HttpServletResponse response);

    void logout(HttpServletRequest request, HttpServletResponse response);

    AuthResponse getCurrentUser();

    void forgotPassword(ForgotPasswordRequest request);

    AuthResponse resetPassword(ResetPasswordRequest request, HttpServletResponse response);
}

