package com.westwood.common.dto;

import com.westwood.domain.MessageTemplateType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PopulatedMessageTemplateDto {

    private Long id;
    private String name;
    private MessageTemplateType type;
    private String populatedContent;
}
