package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "event_store", indexes = {
    @Index(name = "idx_aggregate_id", columnList = "aggregate_id"),
    @Index(name = "idx_event_type", columnList = "event_type"),
    @Index(name = "idx_timestamp", columnList = "timestamp")
})
@Getter
@Setter
@ToString(exclude = {"eventData"}) // Exclude large JSON data for cleaner logging
public class EventStore extends BaseEntity {

    @JdbcTypeCode(SqlTypes.UUID)
    @Column(name = "event_id", unique = true, nullable = false)
    private UUID eventId; // UUID

    @Enumerated(EnumType.STRING)
    @Column(name = "event_type", nullable = false)
    private EventType eventType;

    @Column(name = "aggregate_id", nullable = false)
    private String aggregateId; // clientId or paymentId

    @Column(name = "aggregate_type", nullable = false)
    private String aggregateType; // "Client" or "PaymentTransaction"

    @Column(name = "event_data", columnDefinition = "TEXT", nullable = false)
    private String eventData; // JSON

    @Column(name = "timestamp", nullable = false)
    private LocalDateTime timestamp;

    @Column(name = "version", nullable = false)
    private Long version;

    public enum EventType {
        PAYMENT_CREATED,
        BONUS_GRANTED,
        BONUS_USED
    }
}

