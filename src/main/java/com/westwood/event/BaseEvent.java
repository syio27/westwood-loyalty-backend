package com.westwood.event;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
public abstract class BaseEvent {

    private UUID eventId;
    private LocalDateTime timestamp;
    private Long version;

    protected BaseEvent() {
        this.eventId = UUID.randomUUID();
        this.timestamp = LocalDateTime.now();
        this.version = 1L;
    }
}

