package com.westwood.common.dto;

import com.westwood.domain.MessageChannel;
import com.westwood.domain.MessageStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageRecordDto {

    private Long id;
    private UUID clientId;
    private String clientName;
    private Long initiatedByUserId;
    private String initiatedByUsername;
    private String messageContent;
    private MessageChannel channel;
    private MessageStatus status;
    private LocalDateTime createdAt;
}
