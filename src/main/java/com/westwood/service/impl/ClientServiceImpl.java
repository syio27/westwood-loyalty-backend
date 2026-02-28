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
import com.westwood.util.PhoneUtils;
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
import java.util.*;
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
        // Normalize phone number for consistent storage
        String normalizedPhone = PhoneUtils.normalize(request.getPhone());
        
        if (clientRepository.existsByPhone(normalizedPhone)) {
            throw new ResourceAlreadyExistsException("Client with phone '" + request.getPhone() + "' already exists");
        }

        Client client = new Client();
        client.setPhone(normalizedPhone);
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

        // Grant event bonus (on join, if event program is active)
        eventBonusService.checkAndGrantEventBonus(savedClient.getUuid());

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

        // Normalize phone number for consistent storage
        String normalizedPhone = PhoneUtils.normalize(request.getPhone());
        
        if (!client.getPhone().equals(normalizedPhone) && clientRepository.existsByPhone(normalizedPhone)) {
            throw new ResourceAlreadyExistsException("Client with phone '" + request.getPhone() + "' already exists");
        }

        client.setPhone(normalizedPhone);
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
        // Normalize phone number for consistent lookup
        String normalizedPhone = PhoneUtils.normalize(phone);
        
        Client client = clientRepository.findByPhone(normalizedPhone)
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
        // Normalize client's phone
        String normalizedPhone = PhoneUtils.normalize(request.getPhone());
        request.setPhone(normalizedPhone);

        // Build specification from request
        org.springframework.data.jpa.domain.Specification<Client> spec =
            com.westwood.repository.specification.ClientSpecification.buildSpecification(request);

        String sortBy = request.getSortBy() != null ? request.getSortBy().trim().toLowerCase() : "createdat";
        boolean sortByTotalAmount = "totalamount".equals(sortBy) || "totalspent".equals(sortBy);

        if (sortByTotalAmount) {
            return searchClientsSortedByTotalSpent(request, spec);
        }

        // Prepare sorting
        Sort sort = prepareSort(request.getSortBy(), request.getSortDirection());

        // Prepare pagination with sorting
        Pageable pageable = PageRequest.of(
            request.getPage() != null ? request.getPage() : 0,
            request.getSize() != null ? request.getSize() : 10,
            sort
        );

        // Execute search using Specification
        Page<Client> clientPage = clientRepository.findAll(spec, pageable);

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

    private PagedClientSearchResponse searchClientsSortedByTotalSpent(ClientSearchRequest request,
                                                                       org.springframework.data.jpa.domain.Specification<Client> spec) {
        int page = request.getPage() != null ? request.getPage() : 0;
        int size = request.getSize() != null ? request.getSize() : 10;
        boolean ascending = "ASC".equalsIgnoreCase(request.getSortDirection());

        List<Client> allMatching = clientRepository.findAll(spec, Pageable.unpaged()).getContent();
        if (allMatching.isEmpty()) {
            return new PagedClientSearchResponse(List.of(), page, size, 0L, 0, true, true);
        }

        List<Long> clientIds = allMatching.stream().map(Client::getId).collect(Collectors.toList());
        List<Object[]> totalSpentRows = paymentTransactionRepository.getTotalSpentByClientIds(clientIds);
        Map<Long, BigDecimal> totalSpentByClientId = new HashMap<>();
        for (Long id : clientIds) {
            totalSpentByClientId.put(id, BigDecimal.ZERO);
        }
        for (Object[] row : totalSpentRows) {
            Long id = (Long) row[0];
            BigDecimal sum = (BigDecimal) row[1];
            totalSpentByClientId.put(id, sum != null ? sum : BigDecimal.ZERO);
        }

        List<Long> sortedIds = clientIds.stream()
            .sorted(Comparator.comparing(totalSpentByClientId::get, ascending ? Comparator.naturalOrder() : Comparator.reverseOrder()))
            .collect(Collectors.toList());

        int totalElements = sortedIds.size();
        int totalPages = (totalElements + size - 1) / size;
        int fromIndex = Math.min(page * size, totalElements);
        int toIndex = Math.min(fromIndex + size, totalElements);
        List<Long> pageIds = fromIndex < toIndex ? sortedIds.subList(fromIndex, toIndex) : List.of();

        if (pageIds.isEmpty()) {
            return new PagedClientSearchResponse(List.of(), page, size, (long) totalElements, totalPages, page == 0, page >= totalPages - 1);
        }

        Map<Long, Client> clientMap = clientRepository.findAllById(pageIds).stream().collect(Collectors.toMap(Client::getId, c -> c));
        List<Client> orderedClients = pageIds.stream().map(clientMap::get).filter(Objects::nonNull).collect(Collectors.toList());
        List<ClientSearchResultDto> content = orderedClients.stream().map(this::toSearchResultDto).collect(Collectors.toList());

        return new PagedClientSearchResponse(
            content,
            page,
            size,
            (long) totalElements,
            totalPages,
            page == 0,
            page >= totalPages - 1
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

    /**
     * Prepare Sort object based on sortBy and sortDirection parameters
     */
    private Sort prepareSort(String sortBy, String sortDirection) {
        if (sortBy == null || sortBy.trim().isEmpty()) {
            sortBy = "createdAt";
        }
        
        Sort.Direction direction = "ASC".equalsIgnoreCase(sortDirection) 
            ? Sort.Direction.ASC 
            : Sort.Direction.DESC;
        
        switch (sortBy.toLowerCase()) {
            case "name":
                return Sort.by(direction, "name", "surname");
            case "createdat":
                return Sort.by(direction, "createdAt");
            case "lastvisit":
                // For last visit, we'll sort by createdAt as a proxy
                return Sort.by(direction, "createdAt");
            case "totalamount":
            case "totalspent":
                // Handled in searchClientsSortedByTotalSpent
                return Sort.by(direction, "createdAt");
            default:
                return Sort.by(direction, "createdAt");
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<FrequentClientDto> getFrequentClients(int limit) {
        Pageable pageable = PageRequest.of(0, limit);
        List<Client> frequentClients = clientRepository.findFrequentClients(pageable);
        
        return frequentClients.stream()
            .map(client -> new FrequentClientDto(
                client.getUuid(),
                client.getPhone(),
                client.getName(),
                client.getSurname()
            ))
            .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ClientBirthdayStatsDto getBirthdayStats() {
        long withBirthdate = clientRepository.countClientsWithBirthdate();
        long grantedThisYear = clientRepository.countClientsWithBirthdayAfter(LocalDate.now());
        return ClientBirthdayStatsDto.builder()
                .withBirthdate(withBirthdate)
                .grantedThisYear(grantedThisYear)
                .build();
    }

}

