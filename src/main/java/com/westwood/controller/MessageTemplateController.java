package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.*;
import com.westwood.domain.MessageTemplateType;
import com.westwood.service.MessageTemplateService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/message-templates")
public class MessageTemplateController {

    private final MessageTemplateService messageTemplateService;

    public MessageTemplateController(MessageTemplateService messageTemplateService) {
        this.messageTemplateService = messageTemplateService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<MessageTemplateDto> createTemplate(@Valid @RequestBody CreateMessageTemplateRequest request) {
        MessageTemplateDto createdTemplate = messageTemplateService.createTemplate(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTemplate);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<MessageTemplateDto>> getAllTemplates(
            @RequestParam(required = false) MessageTemplateType type) {
        List<MessageTemplateDto> templates;
        if (type != null) {
            templates = messageTemplateService.getTemplatesByType(type);
        } else {
            templates = messageTemplateService.getAllTemplates();
        }
        return ResponseEntity.ok(templates);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<MessageTemplateDto> getTemplateById(@PathVariable Long id) {
        MessageTemplateDto template = messageTemplateService.getTemplateById(id);
        return ResponseEntity.ok(template);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<MessageTemplateDto> updateTemplate(@PathVariable Long id,
                                                               @Valid @RequestBody CreateMessageTemplateRequest request) {
        MessageTemplateDto updatedTemplate = messageTemplateService.updateTemplate(id, request);
        return ResponseEntity.ok(updatedTemplate);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<Void> deleteTemplate(@PathVariable Long id) {
        messageTemplateService.deleteTemplate(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/populated")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PopulatedMessageTemplateDto> getPopulatedTemplate(
            @RequestParam MessageTemplateType type,
            @RequestParam UUID clientId,
            @RequestParam(required = false) String paymentTxId) {
        PopulatedMessageTemplateDto populatedTemplate = messageTemplateService.getPopulatedTemplate(clientId, type, paymentTxId);
        return ResponseEntity.ok(populatedTemplate);
    }

    @GetMapping("/variables")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<TemplateVariableDto>> getAvailableVariables() {
        List<TemplateVariableDto> variables = messageTemplateService.getAvailableVariables();
        return ResponseEntity.ok(variables);
    }

    @GetMapping("/types")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<MessageTemplateTypeDto>> getAvailableTemplateTypes() {
        List<MessageTemplateTypeDto> types = messageTemplateService.getAvailableTemplateTypes();
        return ResponseEntity.ok(types);
    }
}
