package com.westwood.common.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {

    @NotBlank(message = "Email is required")
    @jakarta.validation.constraints.Email(message = "Email must be valid")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;
}

