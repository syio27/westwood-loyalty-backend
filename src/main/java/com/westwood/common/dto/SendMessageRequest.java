package com.westwood.common.dto;

import com.westwood.domain.MessageChannel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class SendMessageRequest {

    @NotNull(message = "Client ID is required")
    private UUID clientId;

    @NotBlank(message = "Message content is required")
    private String messageContent;

    @NotNull(message = "Channel is required")
    private MessageChannel channel;
}
