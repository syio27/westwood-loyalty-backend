package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "message_templates", indexes = {
    @Index(name = "idx_message_templates_type", columnList = "type"),
    @Index(name = "idx_message_templates_name", columnList = "name")
}, uniqueConstraints = {
    @UniqueConstraint(name = "uk_message_templates_type", columnNames = "type")
})
@Getter
@Setter
@ToString
public class MessageTemplate extends BaseEntity {

    @NotBlank
    @Size(min = 1, max = 255)
    @Column(name = "name", unique = true, nullable = false)
    private String name;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type", unique = true, nullable = false, length = 50)
    private MessageTemplateType type;

    @NotBlank
    @Column(name = "content", columnDefinition = "TEXT", nullable = false)
    private String content;
}
