package com.westwood.service;

import com.westwood.common.dto.*;
import com.westwood.domain.MessageTemplateType;

import java.util.List;
import java.util.UUID;

public interface MessageTemplateService {

    MessageTemplateDto createTemplate(CreateMessageTemplateRequest request);

    MessageTemplateDto getTemplateById(Long id);

    List<MessageTemplateDto> getAllTemplates();

    List<MessageTemplateDto> getTemplatesByType(MessageTemplateType type);

    MessageTemplateDto updateTemplate(Long id, CreateMessageTemplateRequest request);

    void deleteTemplate(Long id);

    PopulatedMessageTemplateDto getPopulatedTemplate(UUID clientId, MessageTemplateType templateType, String paymentTxId);

    List<TemplateVariableDto> getAvailableVariables();

    List<MessageTemplateTypeDto> getAvailableTemplateTypes();
}
