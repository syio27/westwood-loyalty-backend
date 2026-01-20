package com.westwood.repository;

import com.westwood.domain.Client;
import com.westwood.domain.ClientType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Optional<Client> findByUuid(java.util.UUID uuid);

    @Modifying
    @Query("UPDATE Client c SET c.notes = :notes WHERE c.uuid = :uuid")
    void updateClientNotes(@Param("uuid") UUID uuid, @Param("notes") String notes);

    Optional<Client> findByPhone(String phone);

    boolean existsByPhone(String phone);

    List<Client> findByClientType(ClientType clientType);

    @Query("SELECT c FROM Client c WHERE c.name LIKE %:searchTerm% OR c.surname LIKE %:searchTerm% OR c.phone LIKE %:searchTerm%")
    List<Client> searchClients(@Param("searchTerm") String searchTerm);

    @Query("SELECT c FROM Client c JOIN c.tags t WHERE t.name = :tagName")
    List<Client> findByTag(@Param("tagName") String tagName);

    // Analytics queries
    @Query("SELECT COUNT(c) FROM Client c WHERE c.createdAt BETWEEN :fromDate AND :toDate")
    Long countNewClientsByDateRange(@Param("fromDate") java.time.LocalDateTime fromDate, @Param("toDate") java.time.LocalDateTime toDate);

    @Query("SELECT COUNT(DISTINCT p.client.id) FROM PaymentTransaction p WHERE p.status = 'COMPLETED' AND p.createdAt BETWEEN :fromDate AND :toDate")
    Long countActiveClientsByDateRange(@Param("fromDate") java.time.LocalDateTime fromDate, @Param("toDate") java.time.LocalDateTime toDate);

    // Overall totals (all time)
    @Query("SELECT COUNT(c) FROM Client c")
    Long countAllClients();

    // Search clients with pagination and filters (native query to avoid Hibernate escape clause issues)
    @Query(value = "SELECT DISTINCT c.* FROM clients c " +
            "LEFT JOIN client_tag ct ON ct.client_id = c.id " +
            "LEFT JOIN tags t ON t.id = ct.tag_id " +
            "WHERE " +
            "(CAST(:name AS VARCHAR) IS NULL OR CAST(:name AS VARCHAR) = '' OR LOWER(c.name) LIKE LOWER('%' || CAST(:name AS VARCHAR) || '%') OR LOWER(c.surname) LIKE LOWER('%' || CAST(:name AS VARCHAR) || '%')) " +
            "AND (CAST(:phone AS VARCHAR) IS NULL OR CAST(:phone AS VARCHAR) = '' OR c.phone LIKE '%' || CAST(:phone AS VARCHAR) || '%') " +
            "AND (CAST(:email AS VARCHAR) IS NULL OR CAST(:email AS VARCHAR) = '' OR LOWER(c.email) LIKE LOWER('%' || CAST(:email AS VARCHAR) || '%')) " +
            "AND (CAST(:clientType AS VARCHAR) IS NULL OR c.client_type = CAST(:clientType AS VARCHAR)) " +
            "AND (:tagNames = '' OR EXISTS (SELECT 1 FROM client_tag ct2 JOIN tags t2 ON t2.id = ct2.tag_id WHERE t2.name = ANY(string_to_array(:tagNames, ',')) AND ct2.client_id = c.id)) " +
            "AND (CAST(:lastVisitFrom AS TIMESTAMP) IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') >= CAST(:lastVisitFrom AS TIMESTAMP)) " +
            "AND (CAST(:lastVisitTo AS TIMESTAMP) IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') <= CAST(:lastVisitTo AS TIMESTAMP)) " +
            "ORDER BY " +
            "CASE WHEN :sortBy = 'name' AND :sortDirection = 'ASC' THEN c.name END ASC, " +
            "CASE WHEN :sortBy = 'name' AND :sortDirection = 'DESC' THEN c.name END DESC, " +
            "CASE WHEN :sortBy = 'createdAt' AND :sortDirection = 'ASC' THEN c.created_at END ASC, " +
            "CASE WHEN :sortBy = 'createdAt' AND :sortDirection = 'DESC' THEN c.created_at END DESC, " +
            "CASE WHEN :sortBy = 'lastVisit' AND :sortDirection = 'ASC' THEN (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') END ASC NULLS LAST, " +
            "CASE WHEN :sortBy = 'lastVisit' AND :sortDirection = 'DESC' THEN (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') END DESC NULLS LAST, " +
            "c.created_at DESC",
            countQuery = "SELECT COUNT(DISTINCT c.id) FROM clients c " +
            "LEFT JOIN client_tag ct ON ct.client_id = c.id " +
            "LEFT JOIN tags t ON t.id = ct.tag_id " +
            "WHERE " +
            "(CAST(:name AS VARCHAR) IS NULL OR CAST(:name AS VARCHAR) = '' OR LOWER(c.name) LIKE LOWER('%' || CAST(:name AS VARCHAR) || '%') OR LOWER(c.surname) LIKE LOWER('%' || CAST(:name AS VARCHAR) || '%')) " +
            "AND (CAST(:phone AS VARCHAR) IS NULL OR CAST(:phone AS VARCHAR) = '' OR c.phone LIKE '%' || CAST(:phone AS VARCHAR) || '%') " +
            "AND (CAST(:email AS VARCHAR) IS NULL OR CAST(:email AS VARCHAR) = '' OR LOWER(c.email) LIKE LOWER('%' || CAST(:email AS VARCHAR) || '%')) " +
            "AND (CAST(:clientType AS VARCHAR) IS NULL OR c.client_type = CAST(:clientType AS VARCHAR)) " +
            "AND (:tagNames = '' OR EXISTS (SELECT 1 FROM client_tag ct2 JOIN tags t2 ON t2.id = ct2.tag_id WHERE t2.name = ANY(string_to_array(:tagNames, ',')) AND ct2.client_id = c.id)) " +
            "AND (CAST(:lastVisitFrom AS TIMESTAMP) IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') >= CAST(:lastVisitFrom AS TIMESTAMP)) " +
            "AND (CAST(:lastVisitTo AS TIMESTAMP) IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') <= CAST(:lastVisitTo AS TIMESTAMP))",
            nativeQuery = true)
    Page<Client> searchClientsWithFilters(
            @Param("name") String name,
            @Param("phone") String phone,
            @Param("email") String email,
            @Param("clientType") String clientType,
            @Param("tagNames") String tagNames,
            @Param("lastVisitFrom") LocalDateTime lastVisitFrom,
            @Param("lastVisitTo") LocalDateTime lastVisitTo,
            @Param("sortBy") String sortBy,
            @Param("sortDirection") String sortDirection,
            Pageable pageable);
}

