package com.westwood.repository;

import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusUsed;
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

    @Query("SELECT bu FROM BonusUsed bu JOIN FETCH bu.paymentTransaction pt WHERE pt.txId = :txId")
    List<BonusUsed> findBonusUsedByPaymentTxId(@Param("txId") String txId);

    @Query("SELECT bu FROM BonusUsed bu JOIN FETCH bu.paymentTransaction pt WHERE pt.id = :paymentId")
    List<BonusUsed> findBonusUsedByPaymentId(@Param("paymentId") Long paymentId);

    // Analytics queries
    @Query("SELECT COUNT(bg) FROM BonusGranted bg WHERE bg.createdAt BETWEEN :fromDate AND :toDate")
    Long countBonusesGrantedByDateRange(@Param("fromDate") java.time.LocalDateTime fromDate, @Param("toDate") java.time.LocalDateTime toDate);

    // Overall totals (all time)
    @Query("SELECT COUNT(bg) FROM BonusGranted bg")
    Long countAllBonusesGranted();

    // Daily bonus counts grouped by day
    // Note: event_type discriminator values are 'GRANTED' and 'USED' (see @DiscriminatorValue annotations)
    // Compatible with both H2 and PostgreSQL - both support EXTRACT(DAY FROM ...)
    @Query(value = "SELECT " +
            "CAST(EXTRACT(DAY FROM be.created_at) AS INTEGER), " +
            "CAST(COUNT(CASE WHEN be.event_type = 'GRANTED' THEN 1 END) AS BIGINT), " +
            "CAST(COUNT(CASE WHEN be.event_type = 'USED' THEN 1 END) AS BIGINT) " +
            "FROM bonus_events be " +
            "WHERE be.created_at >= :startDate AND be.created_at < :endDate " +
            "AND be.event_type IN ('GRANTED', 'USED') " +
            "GROUP BY EXTRACT(DAY FROM be.created_at) " +
            "ORDER BY EXTRACT(DAY FROM be.created_at)", nativeQuery = true)
    List<Object[]> getDailyBonusCountsByMonth(@Param("startDate") java.time.LocalDateTime startDate, 
                                               @Param("endDate") java.time.LocalDateTime endDate);
}

