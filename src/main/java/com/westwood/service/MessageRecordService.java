package com.westwood.service;

import com.westwood.common.dto.MessageRecordDto;
import com.westwood.common.dto.SendMessageRequest;
import com.westwood.domain.MessageChannel;

import java.util.List;

public interface MessageRecordService {

    MessageRecordDto sendMessage(SendMessageRequest request, Long initiatedByUserId);

    List<MessageRecordDto> getMessageRecordsByChannel(MessageChannel channel);
}
