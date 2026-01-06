package com.westwood.common.dto;

import com.westwood.domain.ClientType;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Data
public class ClientDto {

    private UUID id; // External UUID for frontend routing
    private String phone;
    private String name;
    private String surname;
    private LocalDate dateOfBirth;
    private String notes;
    private Set<String> tags;
    private ClientType clientType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

