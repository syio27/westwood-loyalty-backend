package com.westwood.repository;

import com.westwood.domain.PaymentTransaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.math.BigDecimal;

@Repository
public interface PaymentTransactionRepository extends JpaRepository<PaymentTransaction, Long> {

    // Exclude refund transactions (status REFUND) from client-facing queries
    // Refund transactions are internal and used for event sourcing only
    @Query("SELECT p FROM PaymentTransaction p LEFT JOIN FETCH p.enteredBy WHERE p.client.id = :clientId AND p.status != 'REFUND' ORDER BY p.createdAt DESC")
    List<PaymentTransaction> findByClientIdOrderByCreatedAtDesc(@Param("clientId") Long clientId);

    @Query("SELECT p FROM PaymentTransaction p LEFT JOIN FETCH p.enteredBy WHERE p.client.id = :clientId AND p.status != 'REFUND' ORDER BY p.createdAt DESC")
    Page<PaymentTransaction> findByClientIdOrderByCreatedAtDesc(@Param("clientId") Long clientId, Pageable pageable);

    @Query("SELECT p FROM PaymentTransaction p LEFT JOIN FETCH p.enteredBy WHERE p.client.id = :clientId AND p.status != 'REFUND' AND p.createdAt BETWEEN :fromDate AND :toDate ORDER BY p.createdAt DESC")
    List<PaymentTransaction> findByClientIdAndTimeRange(@Param("clientId") Long clientId,
                                                         @Param("fromDate") LocalDateTime fromDate,
                                                         @Param("toDate") LocalDateTime toDate);

    @Query("SELECT SUM(p.amount) FROM PaymentTransaction p WHERE p.client.id = :clientId AND p.createdAt BETWEEN :fromDate AND :toDate")
    BigDecimal calculateTotalByClientAndTimeRange(@Param("clientId") Long clientId,
                                                             @Param("fromDate") LocalDateTime fromDate,
                                                             @Param("toDate") LocalDateTime toDate);

    // Client analytics queries
    @Query("SELECT COUNT(p) FROM PaymentTransaction p WHERE p.client.id = :clientId AND p.status = 'COMPLETED'")
    Long countCompletedTransactionsByClientId(@Param("clientId") Long clientId);

    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM PaymentTransaction p WHERE p.client.id = :clientId AND p.status = 'COMPLETED'")
    BigDecimal calculateTotalRevenueByClientId(@Param("clientId") Long clientId);

    @Query("SELECT p FROM PaymentTransaction p LEFT JOIN FETCH p.enteredBy WHERE p.enteredBy.id = :userId ORDER BY p.createdAt DESC")
    List<PaymentTransaction> findByEnteredByIdOrderByCreatedAtDesc(@Param("userId") Long userId);

    @Query("SELECT p FROM PaymentTransaction p WHERE p.refundedPayment.id = :paymentId")
    List<PaymentTransaction> findRefundsByPaymentId(@Param("paymentId") Long paymentId);

    @Query("SELECT MAX(p.transactionNumber) FROM PaymentTransaction p WHERE p.transactionYear = :year")
    Long findMaxTransactionNumberByYear(@Param("year") Integer year);

    @Query("SELECT COUNT(p) > 0 FROM PaymentTransaction p WHERE p.txId = :txId")
    boolean existsByTxId(@Param("txId") String txId);

    @Query("SELECT p FROM PaymentTransaction p LEFT JOIN FETCH p.enteredBy WHERE p.txId = :txId")
    java.util.Optional<PaymentTransaction> findByTxId(@Param("txId") String txId);

    @Query("SELECT p FROM PaymentTransaction p WHERE p.refundedPayment.txId = :txId")
    List<PaymentTransaction> findRefundsByPaymentTxId(@Param("txId") String txId);

    // Analytics queries
    @Query("SELECT SUM(p.amount) FROM PaymentTransaction p WHERE p.status = 'COMPLETED' AND p.createdAt BETWEEN :fromDate AND :toDate")
    BigDecimal calculateTotalRevenueByDateRange(@Param("fromDate") LocalDateTime fromDate, @Param("toDate") LocalDateTime toDate);

    @Query("SELECT COUNT(p) FROM PaymentTransaction p WHERE p.status = 'COMPLETED' AND p.createdAt BETWEEN :fromDate AND :toDate")
    Long countTransactionsByDateRange(@Param("fromDate") LocalDateTime fromDate, @Param("toDate") LocalDateTime toDate);

    @Query("SELECT COUNT(p) FROM PaymentTransaction p WHERE p.status = 'REFUNDED' AND p.createdAt BETWEEN :fromDate AND :toDate")
    Long countReturnsByDateRange(@Param("fromDate") LocalDateTime fromDate, @Param("toDate") LocalDateTime toDate);

    @Query("SELECT AVG(p.amount) FROM PaymentTransaction p WHERE p.status = 'COMPLETED' AND p.createdAt BETWEEN :fromDate AND :toDate")
    BigDecimal calculateAverageAmountByDateRange(@Param("fromDate") LocalDateTime fromDate, @Param("toDate") LocalDateTime toDate);

    // Overall totals (all time)
    @Query("SELECT COUNT(p) FROM PaymentTransaction p WHERE p.status = 'COMPLETED'")
    Long countAllCompletedTransactions();

    @Query("SELECT SUM(p.amount) FROM PaymentTransaction p WHERE p.status = 'COMPLETED'")
    BigDecimal calculateTotalRevenueAllTime();

    // Daily revenue and transaction count grouped by day
    // Compatible with both H2 and PostgreSQL - both support EXTRACT(DAY FROM ...)
    @Query(value = "SELECT " +
            "CAST(EXTRACT(DAY FROM p.created_at) AS INTEGER), " +
            "COALESCE(SUM(p.amount), 0), " +
            "CAST(COUNT(p.id) AS BIGINT) " +
            "FROM payment_transactions p " +
            "WHERE p.status = 'COMPLETED' " +
            "AND p.created_at >= :startDate AND p.created_at < :endDate " +
            "GROUP BY CAST(EXTRACT(DAY FROM p.created_at) AS INTEGER) " +
            "ORDER BY CAST(EXTRACT(DAY FROM p.created_at) AS INTEGER)", nativeQuery = true)
    List<Object[]> getDailyRevenueAndTransactionsByMonth(@Param("startDate") java.time.LocalDateTime startDate, 
                                                          @Param("endDate") java.time.LocalDateTime endDate);

    // Search payments with pagination and filters
    @Query("SELECT DISTINCT p FROM PaymentTransaction p " +
            "JOIN FETCH p.client c " +
            "LEFT JOIN FETCH p.enteredBy u " +
            "LEFT JOIN FETCH p.refundedPayment rp " +
            "WHERE " +
            "(:paymentId IS NULL OR :paymentId = '' OR p.txId LIKE CONCAT('%', :paymentId, '%')) " +
            "AND (:clientName IS NULL OR :clientName = '' OR LOWER(c.name) LIKE LOWER(CONCAT('%', :clientName, '%')) OR LOWER(c.surname) LIKE LOWER(CONCAT('%', :clientName, '%'))) " +
            "AND (:phone IS NULL OR :phone = '' OR c.phone LIKE CONCAT('%', :phone, '%')) " +
            "AND (:periodFrom IS NULL OR p.createdAt >= :periodFrom) " +
            "AND (:periodTo IS NULL OR p.createdAt <= :periodTo) " +
            "AND (:paymentType IS NULL OR :paymentType = 'ALL' OR " +
            "   (:paymentType = 'PAID' AND p.status = 'COMPLETED') OR " +
            "   (:paymentType = 'REFUND' AND p.status = 'REFUNDED')) " +
            "AND p.status != 'REFUND'") // Exclude internal REFUND status transactions
    Page<PaymentTransaction> searchPaymentsWithFilters(
            @Param("paymentId") String paymentId,
            @Param("clientName") String clientName,
            @Param("phone") String phone,
            @Param("periodFrom") LocalDateTime periodFrom,
            @Param("periodTo") LocalDateTime periodTo,
            @Param("paymentType") String paymentType,
            Pageable pageable);
}

