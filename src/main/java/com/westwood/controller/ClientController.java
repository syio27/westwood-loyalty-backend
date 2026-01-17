package com.westwood.controller;

import com.westwood.common.constants.ApiConstants;
import com.westwood.common.dto.*;
import com.westwood.service.ClientService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.API_V1 + "/clients")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientDto> createClient(@Valid @RequestBody CreateClientRequest request) {
        ClientDto createdClient = clientService.createClient(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdClient);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientDto> getClientById(@PathVariable UUID id) {
        ClientDto client = clientService.getClientById(id);
        return ResponseEntity.ok(client);
    }

    @PutMapping("/{id}/notes")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientUpdateNotesDto> updateNotes(@PathVariable UUID id , @Valid @RequestBody ClientUpdateNotesDto request){
            ClientUpdateNotesDto client = clientService.updateClientNotes(id, request);
            return ResponseEntity.ok(client);
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<ClientDto>> getAllClients(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String tag) {
        List<ClientDto> clients;
        if (search != null && !search.isEmpty()) {
            clients = clientService.searchClients(search);
        } else if (tag != null && !tag.isEmpty()) {
            clients = clientService.getClientsByTag(tag);
        } else {
            clients = clientService.getAllClients();
        }
        return ResponseEntity.ok(clients);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientDto> updateClient(@PathVariable UUID id, @Valid @RequestBody CreateClientRequest request) {
        ClientDto updatedClient = clientService.updateClient(id, request);
        return ResponseEntity.ok(updatedClient);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<Void> deleteClient(@PathVariable UUID id) {
        clientService.deleteClient(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/phone/{phone}")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<ClientWithBonusDto> getClientByPhone(@PathVariable String phone) {
        ClientWithBonusDto client = clientService.getClientByPhoneWithBonus(phone);
        return ResponseEntity.ok(client);
    }

    @PutMapping("/{id}/tags")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<Set<String>> saveOrUpdateClientTags(@PathVariable UUID id, @Valid @RequestBody ClientTagsRequestDto request) {
        Set<String> tags = clientService.saveOrUpdateClientTags(id, request);
        return ResponseEntity.ok(tags);
    }

    @GetMapping("/tags")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<List<String>> getAllDistinctTags() {
        List<String> tags = clientService.getAllDistinctTags();
        return ResponseEntity.ok(tags);
    }

    @PostMapping("/search")
    @PreAuthorize("hasAnyRole('SUDO', 'ADMIN', 'MANAGER')")
    public ResponseEntity<PagedClientSearchResponse> searchClients(@Valid @RequestBody ClientSearchRequest request) {
        PagedClientSearchResponse response = clientService.searchClients(request);
        return ResponseEntity.ok(response);
    }
}

