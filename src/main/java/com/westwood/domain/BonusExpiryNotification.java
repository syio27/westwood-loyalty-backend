package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bonus_expiry_notification", indexes = {
    @Index(name = "idx_bonus_expiry_notification_client", columnList = "client_id"),
    @Index(name = "idx_bonus_expiry_notification_expiry_date", columnList = "expiry_date")
}, uniqueConstraints = {
    @UniqueConstraint(name = "uk_bonus_expiry_notification_client_date", columnNames = {"client_id", "expiry_date"})
})
@Getter
@Setter
@ToString(exclude = {"client", "messageRecord"})
public class BonusExpiryNotification extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @Column(name = "expiry_date", nullable = false)
    private LocalDate expiryDate;

    @Column(name = "notified_at", nullable = false)
    private LocalDateTime notifiedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "message_record_id")
    private MessageRecord messageRecord;
}
