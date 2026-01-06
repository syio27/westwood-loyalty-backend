package com.westwood.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tags", indexes = {
    @Index(name = "idx_tag_name", columnList = "name", unique = true)
})
@Getter
@Setter
@ToString
public class Tag extends BaseEntity {

    @NotBlank
    @Size(min = 1, max = 100)
    @Column(name = "name", unique = true, nullable = false, length = 100)
    private String name;

    @ManyToMany(mappedBy = "tags", fetch = FetchType.LAZY)
    @ToString.Exclude
    private Set<Client> clients = new HashSet<>();
}

