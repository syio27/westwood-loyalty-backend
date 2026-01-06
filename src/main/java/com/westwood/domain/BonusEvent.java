package com.westwood.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "bonus_events")
@DiscriminatorColumn(name = "event_type", discriminatorType = DiscriminatorType.STRING)
@Getter
@Setter
@ToString(exclude = {"client"}) // Exclude lazy relationship
public abstract class BonusEvent extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    // Note: event_type is managed by @DiscriminatorColumn, no need for separate field
    // The discriminator value is determined by @DiscriminatorValue on subclasses

    @JdbcTypeCode(SqlTypes.UUID)
    @Column(name = "event_id", unique = true, nullable = false)
    private UUID eventId; // UUID for event sourcing

    @Column(name = "bonus_amount", nullable = false, precision = 19, scale = 2)
    private BigDecimal bonusAmount;
}

