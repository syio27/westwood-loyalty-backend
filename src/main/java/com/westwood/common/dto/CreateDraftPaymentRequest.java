package com.westwood.common.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class CreateDraftPaymentRequest {

    @NotNull(message = "Client ID is required")
    private UUID clientId;
}
