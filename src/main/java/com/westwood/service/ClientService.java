package com.westwood.service;

import com.westwood.common.dto.*;

import java.util.List;
import java.util.Set;
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

    ClientUpdateNotesDto updateClientNotes(UUID id, ClientUpdateNotesDto request);

    Set<String> saveOrUpdateClientTags(UUID id, ClientTagsRequestDto request);
}

