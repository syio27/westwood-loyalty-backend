package com.westwood.repository;

import com.westwood.domain.BonusExpiryNotification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface BonusExpiryNotificationRepository extends JpaRepository<BonusExpiryNotification, Long> {

    @Query("SELECT n FROM BonusExpiryNotification n WHERE n.client.id = :clientId AND n.expiryDate = :expiryDate")
    Optional<BonusExpiryNotification> findByClientIdAndExpiryDate(@Param("clientId") Long clientId, @Param("expiryDate") LocalDate expiryDate);

    @Query("SELECT n FROM BonusExpiryNotification n WHERE n.client.id = :clientId")
    List<BonusExpiryNotification> findByClientId(@Param("clientId") Long clientId);
}
