package com.westwood.common.dto;

import lombok.Data;

import java.util.Set;

@Data
public class ClientTagsRequestDto {

    private Set<String> tags;
}
