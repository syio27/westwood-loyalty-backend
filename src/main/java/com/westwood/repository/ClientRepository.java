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

import java.time.LocalDate;
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
            "WHERE " +
            "(:name IS NULL OR :name = '' OR LOWER(c.name) LIKE LOWER('%' || :name || '%') OR LOWER(c.surname) LIKE LOWER('%' || :name || '%')) " +
            "AND (:phone IS NULL OR :phone = '' OR c.phone LIKE '%' || :phone || '%') " +
            "AND (:email IS NULL OR :email = '' OR LOWER(c.email) LIKE LOWER('%' || :email || '%')) " +
            "AND (:clientType IS NULL OR c.client_type = :clientType) " +
            "AND (:tagNames IS NULL OR EXISTS (SELECT 1 FROM client_tag ct JOIN tags t ON t.id = ct.tag_id WHERE t.name IN (:tagNames) AND ct.client_id = c.id)) " +
            "AND (:lastVisitFrom IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') >= :lastVisitFrom) " +
            "AND (:lastVisitTo IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') <= :lastVisitTo)",
            countQuery = "SELECT COUNT(DISTINCT c.id) FROM clients c " +
            "WHERE " +
            "(:name IS NULL OR :name = '' OR LOWER(c.name) LIKE LOWER('%' || :name || '%') OR LOWER(c.surname) LIKE LOWER('%' || :name || '%')) " +
            "AND (:phone IS NULL OR :phone = '' OR c.phone LIKE '%' || :phone || '%') " +
            "AND (:email IS NULL OR :email = '' OR LOWER(c.email) LIKE LOWER('%' || :email || '%')) " +
            "AND (:clientType IS NULL OR c.client_type = :clientType) " +
            "AND (:tagNames IS NULL OR EXISTS (SELECT 1 FROM client_tag ct JOIN tags t ON t.id = ct.tag_id WHERE t.name IN (:tagNames) AND ct.client_id = c.id)) " +
            "AND (:lastVisitFrom IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') >= :lastVisitFrom) " +
            "AND (:lastVisitTo IS NULL OR " +
            "   (SELECT MAX(p.created_at) FROM payment_transactions p WHERE p.client_id = c.id AND p.status = 'COMPLETED') <= :lastVisitTo)",
            nativeQuery = true)
    Page<Client> searchClientsWithFilters(
            @Param("name") String name,
            @Param("phone") String phone,
            @Param("email") String email,
            @Param("clientType") ClientType clientType,
            @Param("tagNames") List<String> tagNames,
            @Param("lastVisitFrom") LocalDateTime lastVisitFrom,
            @Param("lastVisitTo") LocalDateTime lastVisitTo,
            Pageable pageable);
}

