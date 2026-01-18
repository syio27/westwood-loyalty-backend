package com.westwood.service.impl;

import com.westwood.common.dto.*;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import com.westwood.domain.Tag;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.TagRepository;
import com.westwood.service.BonusService;
import com.westwood.service.ClientService;
import com.westwood.service.EventBonusService;
import com.westwood.util.mapper.ClientMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository;
    private final TagRepository tagRepository;
    private final ClientMapper clientMapper;
    private final BonusService bonusService;
    private final EventBonusService eventBonusService;
    private final PaymentTransactionRepository paymentTransactionRepository;

    public ClientServiceImpl(ClientRepository clientRepository, TagRepository tagRepository,
                             ClientMapper clientMapper, BonusService bonusService, 
                             EventBonusService eventBonusService,
                             PaymentTransactionRepository paymentTransactionRepository) {
        this.clientRepository = clientRepository;
        this.tagRepository = tagRepository;
        this.clientMapper = clientMapper;
        this.bonusService = bonusService;
        this.eventBonusService = eventBonusService;
        this.paymentTransactionRepository = paymentTransactionRepository;
    }

    private Client validateAndGetClient(UUID id, String x) {
        return clientRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException(x + id + "' not found"));
    }

    @Override
    public ClientUpdateNotesDto updateClientNotes(UUID id, ClientUpdateNotesDto request) {
        validateAndGetClient(id, "Client with id '");
        clientRepository.updateClientNotes(id, request.getNotes());
        return request;
    }

    @Override
    public Set<String> saveOrUpdateClientTags(UUID id, ClientTagsRequestDto request) {
        Client client = validateAndGetClient(id, "Client with id '");
        if (request.getTags() != null && !request.getTags().isEmpty()) {
            Set<Tag> tags = request.getTags().stream()
                    .map(this::findOrCreateTag)
                    .collect(Collectors.toSet());
            client.setTags(tags);
        } else {
            client.setTags(new HashSet<>());
        }
        Client updatedClient = clientRepository.save(client);
        return clientMapper.tagToStringDto(updatedClient.getTags());
    }

    @Override
    public ClientDto createClient(CreateClientRequest request) {
        if (clientRepository.existsByPhone(request.getPhone())) {
            throw new ResourceAlreadyExistsException("Client with phone '" + request.getPhone() + "' already exists");
        }

        Client client = new Client();
        client.setPhone(request.getPhone());
        client.setName(request.getName());
        client.setSurname(request.getSurname());
        client.setDateOfBirth(request.getDateOfBirth());
        client.setNotes(request.getNotes());
        // Convert tag names to Tag entities (find existing or create new)
        if (request.getTags() != null && !request.getTags().isEmpty()) {
            Set<Tag> tags = request.getTags().stream()
                    .map(this::findOrCreateTag)
                    .collect(Collectors.toSet());
            client.setTags(tags);
        } else {
            client.setTags(new HashSet<>());
        }
        client.setClientType(request.getClientType());

        // Handle referral
        if (request.getReferrerId() != null) {
            // Validate referrer exists
            validateAndGetClient(request.getReferrerId(), "Referrer with id '");
            client.setReferrerId(request.getReferrerId());
        }

        // Generate unique referral code for this client
        client.setReferralCode(generateReferralCode());

        Client savedClient = clientRepository.save(client);

        // Grant welcome bonus
        eventBonusService.checkAndGrantWelcomeBonus(savedClient.getUuid());

        // Grant referral bonuses if applicable
        if (savedClient.getReferrerId() != null) {
            eventBonusService.grantReferralBonus(savedClient.getReferrerId(), savedClient.getUuid());
        }

        return clientMapper.toDto(savedClient);
    }

    @Override
    @Transactional(readOnly = true)
    public ClientDto getClientById(UUID id) {
        Client client = clientRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + id + "' not found"));
        return clientMapper.toDto(client);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClientDto> getAllClients() {
        return clientRepository.findAll().stream()
                .map(clientMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClientDto> searchClients(String searchTerm) {
        return clientRepository.searchClients(searchTerm).stream()
                .map(clientMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ClientDto> getClientsByTag(String tag) {
        return clientRepository.findByTag(tag).stream()
                .map(clientMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public ClientDto updateClient(UUID id, CreateClientRequest request) {
        Client client = clientRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + id + "' not found"));

        if (!client.getPhone().equals(request.getPhone()) && clientRepository.existsByPhone(request.getPhone())) {
            throw new ResourceAlreadyExistsException("Client with phone '" + request.getPhone() + "' already exists");
        }

        client.setPhone(request.getPhone());
        client.setName(request.getName());
        client.setSurname(request.getSurname());
        client.setDateOfBirth(request.getDateOfBirth());
        client.setNotes(request.getNotes());
        // Convert tag names to Tag entities (find existing or create new)
        if (request.getTags() != null && !request.getTags().isEmpty()) {
            Set<Tag> tags = request.getTags().stream()
                    .map(this::findOrCreateTag)
                    .collect(Collectors.toSet());
            client.setTags(tags);
        } else {
            client.setTags(new HashSet<>());
        }
        client.setClientType(request.getClientType());

        Client updatedClient = clientRepository.save(client);
        return clientMapper.toDto(updatedClient);
    }

    @Override
    public void deleteClient(UUID id) {
        Client client = clientRepository.findByUuid(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + id + "' not found"));
        clientRepository.deleteById(client.getId()); // Use internal ID for deletion
    }

    @Override
    @Transactional(readOnly = true)
    public ClientWithBonusDto getClientByPhoneWithBonus(String phone) {
        Client client = clientRepository.findByPhone(phone)
                .orElseThrow(() -> new ResourceNotFoundException("Client with phone '" + phone + "' not found"));

        BonusBalanceDto bonusBalance = bonusService.getClientBonusBalance(client.getUuid());

        // Convert Tag entities to String names
        Set<String> tagNames = client.getTags() != null ? 
                client.getTags().stream()
                        .map(Tag::getName)
                        .collect(Collectors.toSet()) : 
                new HashSet<>();

        return new ClientWithBonusDto(
                client.getUuid(),
                client.getName(),
                client.getSurname(),
                client.getNotes(),
                tagNames,
                bonusBalance.getCurrentBalance(),
                client.getClientType()
        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<String> getAllDistinctTags() {
        return tagRepository.findAll().stream()
                .map(Tag::getName)
                .sorted()
                .collect(Collectors.toList());
    }

    /**
     * Finds an existing tag by name or creates a new one if it doesn't exist.
     */
    private Tag findOrCreateTag(String tagName) {
        if (tagName == null || tagName.trim().isEmpty()) {
            throw new IllegalArgumentException("Tag name cannot be null or empty");
        }
        
        String normalizedTagName = tagName.trim();
        return tagRepository.findByName(normalizedTagName)
                .orElseGet(() -> {
                    Tag newTag = new Tag();
                    newTag.setName(normalizedTagName);
                    return tagRepository.save(newTag);
                });
    }

    private String generateReferralCode() {
        // Generate a unique referral code (e.g., based on UUID or random string)
        String code;
        int attempts = 0;
        boolean isUnique;
        do {
            // Generate a 8-character alphanumeric code
            if (attempts > 10) {
                code = UUID.randomUUID().toString().replace("-", "").substring(0, 16).toUpperCase();
            } else {
                code = UUID.randomUUID().toString().substring(0, 8).toUpperCase().replace("-", "");
            }
            attempts++;
            final String finalCode = code;
            isUnique = clientRepository.findAll().stream()
                    .noneMatch(c -> c.getReferralCode() != null && c.getReferralCode().equals(finalCode));
        } while (!isUnique);

        return code;
    }

    @Override
    @Transactional(readOnly = true)
    public PagedClientSearchResponse searchClients(ClientSearchRequest request) {
        // Prepare date range for last visit filter
        LocalDateTime lastVisitFrom = null;
        LocalDateTime lastVisitTo = null;
        if (request.getLastVisitFrom() != null) {
            lastVisitFrom = LocalDateTime.of(request.getLastVisitFrom(), LocalTime.MIN);
        }
        if (request.getLastVisitTo() != null) {
            lastVisitTo = LocalDateTime.of(request.getLastVisitTo(), LocalTime.MAX);
        }

        // Normalize empty strings to null
        String name = (request.getName() != null && request.getName().trim().isEmpty()) ? null : request.getName();
        String phone = (request.getPhone() != null && request.getPhone().trim().isEmpty()) ? null : request.getPhone();
        String email = (request.getEmail() != null && request.getEmail().trim().isEmpty()) ? null : request.getEmail();
        
        // Normalize empty tag list to null
        List<String> tagNames = (request.getTags() != null && request.getTags().isEmpty()) ? null : request.getTags();

        // Prepare sorting
        Sort sort = prepareSort(request.getSortBy(), request.getSortDirection());
        Pageable pageable = PageRequest.of(
            request.getPage() != null ? request.getPage() : 0,
            request.getSize() != null ? request.getSize() : 10,
            sort
        );

        // Execute search
        Page<Client> clientPage = clientRepository.searchClientsWithFilters(
            name,
            phone,
            email,
            request.getClientType(),
            tagNames,
            lastVisitFrom,
            lastVisitTo,
            pageable
        );

        // Convert to DTOs with statistics
        List<ClientSearchResultDto> content = clientPage.getContent().stream()
            .map(this::toSearchResultDto)
            .collect(Collectors.toList());

        return new PagedClientSearchResponse(
            content,
            clientPage.getNumber(),
            clientPage.getSize(),
            clientPage.getTotalElements(),
            clientPage.getTotalPages(),
            clientPage.isFirst(),
            clientPage.isLast()
        );
    }

    private ClientSearchResultDto toSearchResultDto(Client client) {
        Long internalClientId = client.getId();
        
        // Get payment statistics
        List<PaymentTransaction> payments = paymentTransactionRepository
            .findByClientIdOrderByCreatedAtDesc(internalClientId);
        
        BigDecimal totalSpent = payments.stream()
            .map(PaymentTransaction::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        Long transactionCount = (long) payments.size();
        LocalDateTime lastVisit = payments.isEmpty() ? null : payments.get(0).getCreatedAt();
        
        // Get bonus information
        BonusBalanceDto bonusBalance = bonusService.getClientBonusBalance(client.getUuid());
        BigDecimal bonusUsed = bonusBalance.getTotalAccumulated()
            .subtract(bonusBalance.getCurrentBalance());
        
        // Get tag names
        Set<String> tagNames = client.getTags() != null ?
            client.getTags().stream()
                .map(Tag::getName)
                .collect(Collectors.toSet()) :
            new HashSet<>();
        
        return new ClientSearchResultDto(
            client.getUuid(),
            client.getName(),
            client.getSurname(),
            client.getPhone(),
            client.getEmail(),
            client.getClientType(),
            tagNames,
            totalSpent,
            transactionCount,
            bonusBalance.getCurrentBalance(),
            bonusUsed,
            lastVisit,
            client.getCreatedAt()
        );
    }

    private Sort prepareSort(String sortBy, String sortDirection) {
        if (sortBy == null || sortBy.isEmpty()) {
            sortBy = "lastVisit"; // Default sort
        }
        
        Sort.Direction direction = "ASC".equalsIgnoreCase(sortDirection) ? 
            Sort.Direction.ASC : Sort.Direction.DESC;
        
        // Map sort field names to actual database column names (snake_case for native query)
        switch (sortBy.toLowerCase()) {
            case "name":
                return Sort.by(direction, "name", "surname");
            case "createdat":
                return Sort.by(direction, "created_at");
            case "lastvisit":
            default:
                // For last visit, we'll sort by created_at as a proxy
                return Sort.by(direction, "created_at");
        }
    }
}

