package com.westwood.service.impl;

import com.westwood.common.dto.MessageRecordDto;
import com.westwood.common.dto.SendMessageRequest;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.*;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.MessageRecordRepository;
import com.westwood.repository.UserRepository;
import com.westwood.service.MessageRecordService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class MessageRecordServiceImpl implements MessageRecordService {

    private final MessageRecordRepository messageRecordRepository;
    private final ClientRepository clientRepository;
    private final UserRepository userRepository;

    public MessageRecordServiceImpl(MessageRecordRepository messageRecordRepository,
                                   ClientRepository clientRepository,
                                   UserRepository userRepository) {
        this.messageRecordRepository = messageRecordRepository;
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
    }

    @Override
    public MessageRecordDto sendMessage(SendMessageRequest request, Long initiatedByUserId) {
        // Get client and user entities
        Client client = clientRepository.findByUuid(request.getClientId())
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + request.getClientId() + "' not found"));

        User initiatedBy = userRepository.findById(initiatedByUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id '" + initiatedByUserId + "' not found"));

        // Create message record with the provided message content
        MessageRecord messageRecord = new MessageRecord();
        messageRecord.setClient(client);
        messageRecord.setInitiatedBy(initiatedBy);
        messageRecord.setMessageContent(request.getMessageContent());
        messageRecord.setChannel(request.getChannel());
        
        // For now, always mark as SENT since we're not actually sending
        // In the future, this would be set based on actual sending result
        messageRecord.setStatus(MessageStatus.SENT);

        MessageRecord savedRecord = messageRecordRepository.save(messageRecord);

        return toDto(savedRecord);
    }

    @Override
    @Transactional(readOnly = true)
    public List<MessageRecordDto> getMessageRecordsByChannel(MessageChannel channel) {
        List<MessageRecord> records = messageRecordRepository.findByChannelOrderByCreatedAtDesc(channel);
        return records.stream()
                .map(this::toDto)
                .collect(java.util.stream.Collectors.toList());
    }

    private MessageRecordDto toDto(MessageRecord record) {
        return new MessageRecordDto(
                record.getId(),
                record.getClient().getUuid(),
                record.getClient().getName() + " " + record.getClient().getSurname(),
                record.getInitiatedBy().getId(),
                record.getInitiatedBy().getUsername(),
                record.getMessageContent(),
                record.getChannel(),
                record.getStatus(),
                record.getCreatedAt()
        );
    }
}
