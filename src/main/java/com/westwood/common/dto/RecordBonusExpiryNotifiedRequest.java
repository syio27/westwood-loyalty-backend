package com.westwood.common.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecordBonusExpiryNotifiedRequest {
    @NotNull
    private UUID clientId;
    @NotNull
    private LocalDate expiryDate;
    private Long messageRecordId;
}
