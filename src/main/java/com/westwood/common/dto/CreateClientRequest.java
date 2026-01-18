package com.westwood.common.dto;

import com.westwood.common.validation.ClientTypeValidation;
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
@ClientTypeValidation
public class CreateClientRequest {

    @NotBlank(message = "Phone is required")
    @PhoneNumber
    private String phone;

    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @Size(min = 2, max = 100, message = "Surname must be between 2 and 100 characters")
    private String surname; // Optional for INDIVIDUAL (validated only if provided), not used for BUSINESS

    private LocalDate dateOfBirth;

    private UUID referrerId; // UUID of the client who referred this client

    private String notes;

    private Set<String> tags;

    @NotNull(message = "Client type is required")
    private ClientType clientType;
}

