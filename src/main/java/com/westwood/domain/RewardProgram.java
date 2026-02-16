package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.UUID;

@Entity
@Table(name = "reward_programs", indexes = {
    @Index(name = "idx_reward_programs_uuid", columnList = "uuid", unique = true),
    @Index(name = "idx_reward_programs_type", columnList = "type")
})
@Getter
@Setter
@ToString
public class RewardProgram extends BaseEntity {

    @JdbcTypeCode(SqlTypes.VARCHAR)
    @Column(name = "uuid", nullable = false, unique = true, length = 36)
    private UUID uuid;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false, length = 50)
    private RewardProgramType type;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private RewardProgramStatus status;

    @Column(name = "bonus_type_id")
    private Long bonusTypeId; // Set when activated; links to bonus_types
}
