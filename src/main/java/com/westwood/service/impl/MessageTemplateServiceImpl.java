package com.westwood.service.impl;

import com.westwood.common.dto.*;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.MessageTemplate;
import com.westwood.domain.MessageTemplateType;
import com.westwood.repository.MessageTemplateRepository;
import com.westwood.service.MessageTemplateService;
import com.westwood.service.TemplateVariableResolver;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class MessageTemplateServiceImpl implements MessageTemplateService {

    private final MessageTemplateRepository messageTemplateRepository;
    private final TemplateVariableResolver templateVariableResolver;

    public MessageTemplateServiceImpl(MessageTemplateRepository messageTemplateRepository,
                                     TemplateVariableResolver templateVariableResolver) {
        this.messageTemplateRepository = messageTemplateRepository;
        this.templateVariableResolver = templateVariableResolver;
    }

    @Override
    public MessageTemplateDto createTemplate(CreateMessageTemplateRequest request) {
        // Check if template with same name already exists
        if (messageTemplateRepository.findByName(request.getName()).isPresent()) {
            throw new ResourceAlreadyExistsException("Template with name '" + request.getName() + "' already exists");
        }

        // Check if template with same type already exists (only one template per type allowed)
        if (messageTemplateRepository.findFirstByType(request.getType()).isPresent()) {
            throw new ResourceAlreadyExistsException("Template with type '" + request.getType() + "' already exists. Only one template per type is allowed.");
        }

        MessageTemplate template = new MessageTemplate();
        template.setName(request.getName());
        template.setType(request.getType());
        template.setContent(request.getContent());

        MessageTemplate savedTemplate = messageTemplateRepository.save(template);
        return toDto(savedTemplate);
    }

    @Override
    @Transactional(readOnly = true)
    public MessageTemplateDto getTemplateById(Long id) {
        MessageTemplate template = messageTemplateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Template with id '" + id + "' not found"));
        return toDto(template);
    }

    @Override
    @Transactional(readOnly = true)
    public List<MessageTemplateDto> getAllTemplates() {
        return messageTemplateRepository.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<MessageTemplateDto> getTemplatesByType(MessageTemplateType type) {
        return messageTemplateRepository.findByType(type).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public MessageTemplateDto updateTemplate(Long id, CreateMessageTemplateRequest request) {
        MessageTemplate template = messageTemplateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Template with id '" + id + "' not found"));

        // Check if name is being changed and if new name already exists
        if (!template.getName().equals(request.getName())) {
            if (messageTemplateRepository.findByName(request.getName()).isPresent()) {
                throw new ResourceAlreadyExistsException("Template with name '" + request.getName() + "' already exists");
            }
        }

        // Check if type is being changed and if new type already exists (only one template per type allowed)
        if (!template.getType().equals(request.getType())) {
            if (messageTemplateRepository.findFirstByType(request.getType()).isPresent()) {
                throw new ResourceAlreadyExistsException("Template with type '" + request.getType() + "' already exists. Only one template per type is allowed.");
            }
        }

        template.setName(request.getName());
        template.setType(request.getType());
        template.setContent(request.getContent());

        MessageTemplate updatedTemplate = messageTemplateRepository.save(template);
        return toDto(updatedTemplate);
    }

    @Override
    public void deleteTemplate(Long id) {
        MessageTemplate template = messageTemplateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Template with id '" + id + "' not found"));
        messageTemplateRepository.delete(template);
    }

    @Override
    @Transactional(readOnly = true)
    public PopulatedMessageTemplateDto getPopulatedTemplate(UUID clientId, MessageTemplateType templateType, String paymentTxId) {
        MessageTemplate template = messageTemplateRepository.findFirstByType(templateType)
                .orElseThrow(() -> new ResourceNotFoundException("Template with type '" + templateType + "' not found"));

        String populatedContent = templateVariableResolver.resolveTemplate(
                template.getContent(), clientId, paymentTxId);

        PopulatedMessageTemplateDto dto = new PopulatedMessageTemplateDto();
        dto.setId(template.getId());
        dto.setName(template.getName());
        dto.setType(template.getType());
        dto.setPopulatedContent(populatedContent);

        return dto;
    }

    @Override
    @Transactional(readOnly = true)
    public List<TemplateVariableDto> getAvailableVariables() {
        return Arrays.asList(
                new TemplateVariableDto("clientName", "Имя клиента"),
                new TemplateVariableDto("clientGrantedBonus", "клиент вознагражден бонусом"),
                new TemplateVariableDto("clientBonus", "Бонусы клиента"),
                new TemplateVariableDto("clientPhone", "Телефон клиента"),
                new TemplateVariableDto("clientBonusExp", "Срок истечения бонусов"),
                new TemplateVariableDto("clientEmail", "Email клиента"),
                new TemplateVariableDto("clientTotalAmount", "Общая сумма покупок"),
                new TemplateVariableDto("clientTotalTransactions", "Количество транзакций"),
                new TemplateVariableDto("clientLastVisit", "Последний визит")
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<MessageTemplateTypeDto> getAvailableTemplateTypes() {
        return Arrays.stream(MessageTemplateType.values())
                .map(type -> {
                    String displayName = convertEnumToDisplayName(type);
                    return new MessageTemplateTypeDto(type.name(), displayName);
                })
                .collect(Collectors.toList());
    }

    private String convertEnumToDisplayName(MessageTemplateType type) {
        switch (type) {
            case BASIC_CASHBACK_BONUS_GRANT:
                return "Basic Cashback Bonus Grant";
            default:
                return type.name();
        }
    }

    private MessageTemplateDto toDto(MessageTemplate template) {
        return new MessageTemplateDto(
                template.getId(),
                template.getName(),
                template.getType(),
                template.getContent(),
                template.getCreatedAt(),
                template.getUpdatedAt()
        );
    }
}
