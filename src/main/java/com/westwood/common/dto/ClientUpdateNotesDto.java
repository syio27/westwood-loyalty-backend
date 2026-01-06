package com.westwood.common.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ClientUpdateNotesDto {
    private UUID id;
    private String notes;
}
