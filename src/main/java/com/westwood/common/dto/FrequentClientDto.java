package com.westwood.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FrequentClientDto {
    private UUID clientId;
    private String phone;
    private String name;
    private String surname;
}
