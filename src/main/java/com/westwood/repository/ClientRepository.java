package com.westwood.repository;

import com.westwood.domain.Client;
import com.westwood.domain.ClientType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Optional<Client> findByUuid(java.util.UUID uuid);

    Optional<Client> findByPhone(String phone);

    boolean existsByPhone(String phone);

    List<Client> findByClientType(ClientType clientType);

    @Query("SELECT c FROM Client c WHERE c.name LIKE %:searchTerm% OR c.surname LIKE %:searchTerm% OR c.phone LIKE %:searchTerm%")
    List<Client> searchClients(@Param("searchTerm") String searchTerm);

    @Query("SELECT c FROM Client c JOIN c.tags t WHERE t.name = :tagName")
    List<Client> findByTag(@Param("tagName") String tagName);
}

