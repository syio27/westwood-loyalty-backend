package com.westwood.repository;

import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusRevoked;
import com.westwood.domain.BonusUsed;

import java.time.LocalDateTime;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface BonusEventRepository extends JpaRepository<BonusEvent, Long> {

    @Query("SELECT be FROM BonusEvent be LEFT JOIN FETCH be.client WHERE be.client.id = :clientId ORDER BY be.createdAt DESC")
    List<BonusEvent> findByClientIdOrderByCreatedAtDesc(@Param("clientId") Long clientId);

    @Query("SELECT be FROM BonusEvent be LEFT JOIN FETCH be.client WHERE be.client.id = :clientId ORDER BY be.createdAt DESC")
    Page<BonusEvent> findByClientIdOrderByCreatedAtDesc(@Param("clientId") Long clientId, Pageable pageable);

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

    // Find bonus revocations for a payment (through originalBonusGranted link)
    @Query("SELECT br FROM BonusRevoked br " +
           "JOIN FETCH br.originalBonusGranted obg " +
           "JOIN FETCH obg.paymentTransaction pt " +
           "LEFT JOIN FETCH br.paymentTransaction refundTx " +
           "LEFT JOIN FETCH refundTx.enteredBy " +
           "WHERE pt.txId = :txId")
    List<BonusRevoked> findBonusRevokedByPaymentTxId(@Param("txId") String txId);

    @Query("SELECT br FROM BonusRevoked br JOIN FETCH br.originalBonusGranted obg JOIN FETCH obg.paymentTransaction pt WHERE pt.id = :paymentId")
    List<BonusRevoked> findBonusRevokedByPaymentId(@Param("paymentId") Long paymentId);

    // Find bonus revocations by original bonus granted ID
    @Query("SELECT br FROM BonusRevoked br WHERE br.originalBonusGranted.id = :grantedId")
    List<BonusRevoked> findByOriginalBonusGrantedId(@Param("grantedId") Long grantedId);

    // Find bonus revocations by refund transaction txId
    @Query("SELECT br FROM BonusRevoked br WHERE br.paymentTransaction.txId = :refundTxId")
    List<BonusRevoked> findBonusRevokedByRefundTxId(@Param("refundTxId") String refundTxId);

    // Find most recent bonus granted for a client (for welcome bonus etc.)
    @Query("SELECT bg FROM BonusGranted bg WHERE bg.client.id = :clientId ORDER BY bg.createdAt DESC")
    List<BonusGranted> findMostRecentBonusGrantedByClientId(@Param("clientId") Long clientId);

    // Available grants for FIFO consumption: non-revoked, non-expired, oldest first
    @Query("SELECT bg FROM BonusGranted bg WHERE bg.client.id = :clientId " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id) " +
           "AND (bg.expiresAt IS NULL OR bg.expiresAt > :now) ORDER BY bg.createdAt ASC")
    List<BonusGranted> findAvailableGrantsByClientIdOrderByCreatedAtAsc(@Param("clientId") Long clientId, @Param("now") java.time.LocalDateTime now);

    // Grants expiring within given days: non-revoked, expiresAt between now and now+days
    @Query("SELECT bg FROM BonusGranted bg JOIN FETCH bg.client c WHERE " +
           "bg.expiresAt IS NOT NULL AND bg.expiresAt > :now AND bg.expiresAt <= :maxExpiry " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id) " +
           "ORDER BY bg.expiresAt ASC")
    List<BonusGranted> findGrantsExpiringBetween(@Param("now") java.time.LocalDateTime now, @Param("maxExpiry") java.time.LocalDateTime maxExpiry);

    @Query("SELECT bg FROM BonusGranted bg WHERE bg.client.id = :clientId " +
           "AND bg.expiresAt IS NOT NULL AND bg.expiresAt > :now AND bg.expiresAt <= :maxExpiry " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id) " +
           "ORDER BY bg.expiresAt ASC")
    List<BonusGranted> findGrantsExpiringBetweenForClient(@Param("clientId") Long clientId, @Param("now") java.time.LocalDateTime now, @Param("maxExpiry") java.time.LocalDateTime maxExpiry);

    // All non-revoked grants for a client (for balance calculation; includes expired for totalAccumulated)
    @Query("SELECT bg FROM BonusGranted bg WHERE bg.client.id = :clientId " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id) " +
           "ORDER BY bg.createdAt ASC")
    List<BonusGranted> findNonRevokedGrantsByClientIdOrderByCreatedAtAsc(@Param("clientId") Long clientId);

    // Analytics queries
    @Query("SELECT COUNT(bg) FROM BonusGranted bg WHERE bg.createdAt BETWEEN :fromDate AND :toDate " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    Long countBonusesGrantedByDateRange(@Param("fromDate") java.time.LocalDateTime fromDate, @Param("toDate") java.time.LocalDateTime toDate);

    @Query("SELECT COALESCE(SUM(bg.bonusAmount), 0) FROM BonusGranted bg WHERE bg.createdAt BETWEEN :fromDate AND :toDate " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    BigDecimal sumBonusesGrantedByDateRange(@Param("fromDate") java.time.LocalDateTime fromDate, @Param("toDate") java.time.LocalDateTime toDate);

    /** Total bonus amount granted in period (all grants by createdAt; for redemption rate denominator). */
    @Query("SELECT COALESCE(SUM(bg.bonusAmount), 0) FROM BonusGranted bg WHERE bg.createdAt BETWEEN :fromDate AND :toDate")
    BigDecimal sumTotalBonusesGrantedByDateRange(@Param("fromDate") java.time.LocalDateTime fromDate, @Param("toDate") java.time.LocalDateTime toDate);

    // Overall totals (all time)
    @Query("SELECT COUNT(bg) FROM BonusGranted bg " +
           "WHERE NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    Long countAllBonusesGranted();

    @Query("SELECT COALESCE(SUM(bg.bonusAmount), 0) FROM BonusGranted bg " +
           "WHERE NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    BigDecimal sumAllBonusesGrantedAmount();

    // Client analytics queries
    @Query("SELECT COALESCE(SUM(bg.bonusAmount), 0) FROM BonusGranted bg WHERE bg.client.id = :clientId " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    BigDecimal sumBonusesGrantedByClientId(@Param("clientId") Long clientId);

    @Query("SELECT COALESCE(SUM(bu.bonusAmount), 0) FROM BonusUsed bu WHERE bu.client.id = :clientId")
    BigDecimal sumBonusesUsedByClientId(@Param("clientId") Long clientId);

    // Daily bonus amounts grouped by day
    // Note: event_type discriminator values are 'GRANTED' and 'USED' (see @DiscriminatorValue annotations)
    // Excludes revoked bonuses (GRANTED bonuses that have a corresponding REVOKED event)
    // Compatible with both H2 and PostgreSQL - both support EXTRACT(DAY FROM ...)
    @Query(value = "SELECT " +
            "CAST(EXTRACT(DAY FROM be.created_at) AS INTEGER), " +
            "COALESCE(SUM(CASE WHEN be.event_type = 'GRANTED' AND br.id IS NULL THEN be.bonus_amount ELSE 0 END), 0), " +
            "COALESCE(SUM(CASE WHEN be.event_type = 'USED' THEN be.bonus_amount ELSE 0 END), 0) " +
            "FROM bonus_events be " +
            "LEFT JOIN bonus_revoked br ON br.original_bonus_granted_id = be.id " +
            "WHERE be.created_at >= :startDate AND be.created_at < :endDate " +
            "AND be.event_type IN ('GRANTED', 'USED') " +
            "GROUP BY CAST(EXTRACT(DAY FROM be.created_at) AS INTEGER) " +
            "ORDER BY CAST(EXTRACT(DAY FROM be.created_at) AS INTEGER)", nativeQuery = true)
    List<Object[]> getDailyBonusAmountsByMonth(@Param("startDate") java.time.LocalDateTime startDate,
                                               @Param("endDate") java.time.LocalDateTime endDate);

    /** Sum of bonus amounts redeemed (used) in the given date range. */
    @Query("SELECT COALESCE(SUM(be.bonusAmount), 0) FROM BonusEvent be WHERE TYPE(be) = BonusUsed AND be.createdAt BETWEEN :fromDate AND :toDate")
    BigDecimal sumBonusUsedByDateRange(@Param("fromDate") LocalDateTime fromDate, @Param("toDate") LocalDateTime toDate);

    /** Sum of bonus used per payment (for KPI). Returns [paymentId, sum]. */
    @Query("SELECT bu.paymentTransaction.id, SUM(bu.bonusAmount) FROM BonusUsed bu WHERE bu.paymentTransaction.id IN :paymentIds GROUP BY bu.paymentTransaction.id")
    List<Object[]> sumBonusUsedGroupByPaymentId(@Param("paymentIds") java.util.Collection<Long> paymentIds);

    /** Sum of bonus granted per payment (for KPI). Returns [paymentId, sum]. */
    @Query("SELECT bg.paymentTransaction.id, SUM(bg.bonusAmount) FROM BonusGranted bg WHERE bg.paymentTransaction.id IN :paymentIds GROUP BY bg.paymentTransaction.id")
    List<Object[]> sumBonusGrantedGroupByPaymentId(@Param("paymentIds") java.util.Collection<Long> paymentIds);

    /** Grants that expired within the period (expiresAt in [from, to], not revoked). For burn rate. */
    @Query("SELECT bg FROM BonusGranted bg WHERE bg.expiresAt IS NOT NULL AND bg.expiresAt BETWEEN :from AND :to " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    List<BonusGranted> findGrantedExpiredInPeriod(@Param("from") LocalDateTime from, @Param("to") LocalDateTime to);

    // --- Bonus type report (filter by bonusTypeId) ---

    @Query("SELECT COALESCE(SUM(bg.bonusAmount), 0) FROM BonusGranted bg WHERE bg.bonusType.id = :bonusTypeId AND bg.createdAt BETWEEN :from AND :to")
    BigDecimal sumTotalBonusesGrantedByBonusTypeIdAndDateRange(@Param("bonusTypeId") Long bonusTypeId, @Param("from") LocalDateTime from, @Param("to") LocalDateTime to);

    @Query("SELECT bg FROM BonusGranted bg WHERE bg.bonusType.id = :bonusTypeId AND bg.expiresAt IS NOT NULL AND bg.expiresAt BETWEEN :from AND :to " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    List<BonusGranted> findGrantedExpiredInPeriodByBonusTypeId(@Param("from") LocalDateTime from, @Param("to") LocalDateTime to, @Param("bonusTypeId") Long bonusTypeId);

    @Query("SELECT bg FROM BonusGranted bg WHERE bg.bonusType.id = :bonusTypeId " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id) " +
           "AND (bg.expiresAt IS NULL OR bg.expiresAt > :now) ORDER BY bg.createdAt ASC")
    List<BonusGranted> findAvailableGrantsByBonusTypeId(@Param("bonusTypeId") Long bonusTypeId, @Param("now") LocalDateTime now);

    @Query("SELECT bg FROM BonusGranted bg WHERE bg.bonusType.id = :bonusTypeId " +
           "AND NOT EXISTS (SELECT 1 FROM BonusRevoked br WHERE br.originalBonusGranted.id = bg.id)")
    List<BonusGranted> findNonRevokedGrantsByBonusTypeId(@Param("bonusTypeId") Long bonusTypeId);

    @Query("SELECT COUNT(DISTINCT bg.client.id) FROM BonusGranted bg WHERE bg.bonusType.id = :bonusTypeId AND bg.createdAt BETWEEN :from AND :to")
    Long countDistinctClientsGrantedByBonusTypeInPeriod(@Param("bonusTypeId") Long bonusTypeId, @Param("from") LocalDateTime from, @Param("to") LocalDateTime to);

    @Query("SELECT COALESCE(SUM(bg.bonusAmount), 0) FROM BonusGranted bg WHERE bg.bonusType.id = :bonusTypeId")
    BigDecimal sumTotalBonusesGrantedByBonusTypeIdAllTime(@Param("bonusTypeId") Long bonusTypeId);
}

