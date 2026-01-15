package com.westwood.common.dto;

import com.westwood.domain.MessageTemplateType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateMessageTemplateRequest {

    @NotBlank(message = "Template name is required")
    private String name;

    @NotNull(message = "Template type is required")
    private MessageTemplateType type;

    @NotBlank(message = "Template content is required")
    private String content;
}
