package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "message_records", indexes = {
    @Index(name = "idx_message_records_client_id", columnList = "client_id"),
    @Index(name = "idx_message_records_initiated_by", columnList = "initiated_by"),
    @Index(name = "idx_message_records_status", columnList = "status"),
    @Index(name = "idx_message_records_channel", columnList = "channel"),
    @Index(name = "idx_message_records_created_at", columnList = "created_at")
})
@Getter
@Setter
@ToString(exclude = {"messageContent"})
public class MessageRecord extends BaseEntity {

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "initiated_by", nullable = false)
    private User initiatedBy;

    @NotNull
    @Column(name = "message_content", columnDefinition = "TEXT", nullable = false)
    private String messageContent;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "channel", nullable = false, length = 20)
    private MessageChannel channel;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private MessageStatus status;
}
