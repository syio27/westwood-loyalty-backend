package com.westwood.common.dto;

import com.westwood.domain.MessageTemplateType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageTemplateDto {

    private Long id;
    private String name;
    private MessageTemplateType type;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
