package com.westwood.common.dto;

import com.westwood.common.validation.PhoneNumber;
import com.westwood.domain.ClientType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Data
public class CreateClientRequest {

    @NotBlank(message = "Phone is required")
    @PhoneNumber
    private String phone;

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @NotBlank(message = "Surname is required")
    @Size(min = 2, max = 100, message = "Surname must be between 2 and 100 characters")
    private String surname;

    private LocalDate dateOfBirth;

    private UUID referrerId; // UUID of the client who referred this client

    private String notes;

    private Set<String> tags;

    @NotNull(message = "Client type is required")
    private ClientType clientType;
}

