package com.westwood.service;

import com.westwood.common.dto.JwtResponse;
import com.westwood.common.dto.LoginRequest;
import com.westwood.common.dto.RegisterRequest;

public interface AuthenticationService {

    JwtResponse login(LoginRequest request);

    JwtResponse register(RegisterRequest request);
}

