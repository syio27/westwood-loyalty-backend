package com.westwood.repository;

import com.westwood.domain.ManualBonusRevoke;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManualBonusRevokeRepository extends JpaRepository<ManualBonusRevoke, Long> {

    @Query("SELECT mbr FROM ManualBonusRevoke mbr LEFT JOIN FETCH mbr.revokedBy WHERE mbr.client.id = :clientId ORDER BY mbr.createdAt DESC")
    List<ManualBonusRevoke> findByClientIdOrderByCreatedAtDesc(@Param("clientId") Long clientId);
}
