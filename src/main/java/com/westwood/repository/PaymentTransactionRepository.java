package com.westwood.repository;

import com.westwood.domain.PaymentTransaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.math.BigDecimal;
import java.util.Collection;

@Repository
public interface PaymentTransactionRepository extends JpaRepository<PaymentTransaction, Long>, JpaSpecificationExecutor<PaymentTransaction> {

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

    /** Sum of COMPLETED, positive-amount payments for one client in date range (for program-period spend). */
    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM PaymentTransaction p WHERE p.client.id = :clientId AND p.status = 'COMPLETED' AND p.amount > 0 AND p.createdAt BETWEEN :fromDate AND :toDate")
    BigDecimal calculateCompletedSpendByClientAndTimeRange(@Param("clientId") Long clientId,
                                                          @Param("fromDate") LocalDateTime fromDate,
                                                          @Param("toDate") LocalDateTime toDate);

    /** Client id and total spend in range (COMPLETED, amount > 0). For tiered-clients list. */
    @Query("SELECT p.client.id, COALESCE(SUM(p.amount), 0) FROM PaymentTransaction p WHERE p.status = 'COMPLETED' AND p.amount > 0 AND p.createdAt BETWEEN :fromDate AND :toDate GROUP BY p.client.id")
    List<Object[]> findClientIdsWithCompletedSpendInTimeRange(@Param("fromDate") LocalDateTime fromDate,
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

    /** Completed payments in date range (for KPI analytics). Excludes REFUND transactions. */
    @Query("SELECT p FROM PaymentTransaction p JOIN FETCH p.client WHERE p.status = 'COMPLETED' AND p.createdAt BETWEEN :fromDate AND :toDate ORDER BY p.createdAt ASC")
    List<PaymentTransaction> findCompletedByCreatedAtBetween(@Param("fromDate") LocalDateTime fromDate, @Param("toDate") LocalDateTime toDate);

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

    /** Top clients by total spent (COMPLETED payments). Returns [clientId, totalSpent, paymentsCount]. Use Pageable to limit (e.g. 10). */
    @Query("SELECT p.client.id, SUM(p.amount), COUNT(p) FROM PaymentTransaction p WHERE p.status = 'COMPLETED' GROUP BY p.client.id ORDER BY SUM(p.amount) DESC")
    List<Object[]> findTopClientsByTotalSpent(Pageable pageable);

    /** Total spent per client (COMPLETED only) for given client IDs. Returns [clientId, totalSpent]. */
    @Query("SELECT p.client.id, COALESCE(SUM(p.amount), 0) FROM PaymentTransaction p WHERE p.client.id IN :clientIds AND p.status = 'COMPLETED' GROUP BY p.client.id")
    List<Object[]> getTotalSpentByClientIds(@Param("clientIds") Collection<Long> clientIds);

    /** Count of COMPLETED payments that have at least one bonus_used record (all time). */
    @Query(value = "SELECT COUNT(DISTINCT bu.payment_transaction_id) FROM bonus_used bu " +
            "INNER JOIN payment_transactions p ON p.id = bu.payment_transaction_id WHERE p.status = 'COMPLETED'", nativeQuery = true)
    Long countCompletedPaymentsWithBonusUsed();
}

