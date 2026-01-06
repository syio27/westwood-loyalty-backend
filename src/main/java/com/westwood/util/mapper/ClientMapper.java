package com.westwood.util.mapper;

import com.westwood.common.dto.ClientDto;
import com.westwood.domain.Client;
import com.westwood.domain.Tag;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class ClientMapper {

    public ClientDto toDto(Client client) {
        if (client == null) {
            return null;
        }

        ClientDto dto = new ClientDto();
        dto.setId(client.getUuid()); // Use UUID for external identification
        dto.setPhone(client.getPhone());
        dto.setName(client.getName());
        dto.setSurname(client.getSurname());
        dto.setDateOfBirth(client.getDateOfBirth());
        dto.setNotes(client.getNotes());
        // Convert Tag entities to String names
        if (client.getTags() != null) {
            dto.setTags(client.getTags().stream()
                    .map(Tag::getName)
                    .collect(Collectors.toSet()));
        }
        dto.setClientType(client.getClientType());
        dto.setCreatedAt(client.getCreatedAt());
        dto.setUpdatedAt(client.getUpdatedAt());

        return dto;
    }

    public Client toEntity(ClientDto dto) {
        if (dto == null) {
            return null;
        }

        Client client = new Client();
        // UUID is auto-generated on persist, don't set it from DTO
        client.setPhone(dto.getPhone());
        client.setName(dto.getName());
        client.setSurname(dto.getSurname());
        client.setDateOfBirth(dto.getDateOfBirth());
        client.setNotes(dto.getNotes());
        // Tags will be set separately using Tag entities
        client.setClientType(dto.getClientType());

        return client;
    }
}

