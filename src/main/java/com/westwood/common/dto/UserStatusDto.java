package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserStatusDto {
    private UUID userId;
    private Boolean isOnline;
    private LocalDateTime lastSeenAt;
}
