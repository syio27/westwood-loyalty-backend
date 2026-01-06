package com.westwood.domain;

import com.westwood.common.validation.PhoneNumber;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "clients", indexes = {
    @Index(name = "idx_client_uuid", columnList = "uuid", unique = true)
})
@Getter
@Setter
@ToString(exclude = {"notes"}) // Exclude large text fields for cleaner logging
public class Client extends BaseEntity {

    @JdbcTypeCode(SqlTypes.UUID)
    @Column(name = "uuid", unique = true, nullable = false, updatable = false)
    private UUID uuid;

    @NotBlank
    @PhoneNumber
    @Column(name = "phone", unique = true, nullable = false, length = 20)
    private String phone;

    @NotBlank
    @Size(min = 2, max = 100)
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank
    @Size(min = 2, max = 100)
    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "notes", columnDefinition = "TEXT")
    private String notes;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "client_tag",
        joinColumns = @JoinColumn(name = "client_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags = new HashSet<>();

    @Enumerated(EnumType.STRING)
    @Column(name = "client_type", nullable = false)
    private ClientType clientType;

    @JdbcTypeCode(SqlTypes.UUID)
    @Column(name = "referrer_id")
    private UUID referrerId;

    @Column(name = "referral_code", unique = true, nullable = true, length = 50)
    private String referralCode;

    public void addTag(Tag tag) {
        this.tags.add(tag);
        tag.getClients().add(this);
    }

    public void removeTag(Tag tag) {
        this.tags.remove(tag);
        tag.getClients().remove(this);
    }

    @PrePersist
    protected void onCreate() {
        if (uuid == null) {
            uuid = UUID.randomUUID();
        }
    }
}

