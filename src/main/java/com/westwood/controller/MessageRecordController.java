package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.MessageRecordDto;
import com.westwood.common.dto.SendMessageRequest;
import com.westwood.domain.MessageChannel;
import com.westwood.security.UserDetailsImpl;
import com.westwood.service.MessageRecordService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/messages")
public class MessageRecordController {

    private final MessageRecordService messageRecordService;

    public MessageRecordController(MessageRecordService messageRecordService) {
        this.messageRecordService = messageRecordService;
    }

    @PostMapping("/send")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<MessageRecordDto> sendMessage(@Valid @RequestBody SendMessageRequest request) {
        Long initiatedByUserId = getCurrentUserId();
        MessageRecordDto messageRecord = messageRecordService.sendMessage(request, initiatedByUserId);
        return ResponseEntity.status(HttpStatus.CREATED).body(messageRecord);
    }

    @GetMapping("/channel/{channel}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<MessageRecordDto>> getMessageRecordsByChannel(@PathVariable MessageChannel channel) {
        List<MessageRecordDto> records = messageRecordService.getMessageRecordsByChannel(channel);
        return ResponseEntity.ok(records);
    }

    private Long getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl) {
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            return userDetails.getUser().getId();
        }
        throw new RuntimeException("User not authenticated");
    }
}
