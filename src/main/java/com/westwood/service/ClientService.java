package com.westwood.service;

import com.westwood.common.dto.ClientDto;
import com.westwood.common.dto.ClientUpdateNotesDto;
import com.westwood.common.dto.ClientWithBonusDto;
import com.westwood.common.dto.CreateClientRequest;

import java.util.List;
import java.util.UUID;

public interface ClientService {

    ClientDto createClient(CreateClientRequest request);

    ClientDto getClientById(UUID id);

    List<ClientDto> getAllClients();

    List<ClientDto> searchClients(String searchTerm);

    List<ClientDto> getClientsByTag(String tag);

    ClientDto updateClient(UUID id, CreateClientRequest request);

    void deleteClient(UUID id);

    ClientWithBonusDto getClientByPhoneWithBonus(String phone);

    List<String> getAllDistinctTags();

    ClientUpdateNotesDto updateClientNotes(ClientUpdateNotesDto request);
}

