package com.westwood.repository;

import com.westwood.domain.Client;
import com.westwood.domain.ClientType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>, JpaSpecificationExecutor<Client> {

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

    // Find frequent clients by transaction count (most transactions first)
    @Query("SELECT c FROM Client c " +
           "JOIN PaymentTransaction p ON p.client.id = c.id " +
           "WHERE p.status = 'COMPLETED' " +
           "GROUP BY c.id " +
           "ORDER BY COUNT(p) DESC")
    List<Client> findFrequentClients(Pageable pageable);

    @Query("SELECT COUNT(c) FROM Client c WHERE c.referrerId IS NOT NULL")
    Long countReferredClients();

    @Query("SELECT COUNT(DISTINCT c.id) FROM Client c WHERE c.referrerId IS NOT NULL AND EXISTS (SELECT 1 FROM PaymentTransaction p WHERE p.client.id = c.id AND p.status = 'COMPLETED')")
    Long countReferredClientsWithPurchase();
}

