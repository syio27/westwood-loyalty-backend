package com.westwood.common.dto;

import lombok.Data;

import java.util.Set;

@Data
public class ClientTagsResponseDto {

    private Set<String> tags;
}
