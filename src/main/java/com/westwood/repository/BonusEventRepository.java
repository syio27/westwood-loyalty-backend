package com.westwood.repository;

import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BonusEventRepository extends JpaRepository<BonusEvent, Long> {

    @Query("SELECT be FROM BonusEvent be LEFT JOIN FETCH be.client WHERE be.client.id = :clientId ORDER BY be.createdAt DESC")
    List<BonusEvent> findByClientIdOrderByCreatedAtDesc(@Param("clientId") Long clientId);

    // Query by discriminator value instead of eventType field
    @Query("SELECT be FROM BonusEvent be WHERE be.client.id = :clientId AND TYPE(be) = :eventClass ORDER BY be.createdAt DESC")
    List<BonusEvent> findByClientIdAndEventTypeOrderByCreatedAtDesc(@Param("clientId") Long clientId, @Param("eventClass") Class<? extends BonusEvent> eventClass);

    @Query("SELECT be FROM BonusEvent be LEFT JOIN FETCH be.client WHERE be.client.id = :clientId ORDER BY be.createdAt ASC")
    List<BonusEvent> findByClientIdOrderByCreatedAtAsc(@Param("clientId") Long clientId);
    

    @Query("SELECT bg FROM BonusGranted bg JOIN FETCH bg.paymentTransaction pt WHERE pt.txId = :txId")
    List<BonusGranted> findBonusGrantedByPaymentTxId(@Param("txId") String txId);

    @Query("SELECT bg FROM BonusGranted bg JOIN FETCH bg.paymentTransaction pt WHERE pt.id = :paymentId")
    List<BonusGranted> findBonusGrantedByPaymentId(@Param("paymentId") Long paymentId);
}

