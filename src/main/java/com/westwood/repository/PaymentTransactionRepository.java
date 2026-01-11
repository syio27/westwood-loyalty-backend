package com.westwood.repository;

import com.westwood.domain.PaymentTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.math.BigDecimal;

@Repository
public interface PaymentTransactionRepository extends JpaRepository<PaymentTransaction, Long> {

    List<PaymentTransaction> findByClientIdOrderByCreatedAtDesc(Long clientId);

    @Query("SELECT p FROM PaymentTransaction p WHERE p.client.id = :clientId AND p.createdAt BETWEEN :fromDate AND :toDate ORDER BY p.createdAt DESC")
    List<PaymentTransaction> findByClientIdAndTimeRange(@Param("clientId") Long clientId,
                                                         @Param("fromDate") LocalDateTime fromDate,
                                                         @Param("toDate") LocalDateTime toDate);

    @Query("SELECT SUM(p.amount) FROM PaymentTransaction p WHERE p.client.id = :clientId AND p.createdAt BETWEEN :fromDate AND :toDate")
    BigDecimal calculateTotalByClientAndTimeRange(@Param("clientId") Long clientId,
                                                             @Param("fromDate") LocalDateTime fromDate,
                                                             @Param("toDate") LocalDateTime toDate);

    List<PaymentTransaction> findByEnteredByIdOrderByCreatedAtDesc(Long userId);

    @Query("SELECT p FROM PaymentTransaction p WHERE p.refundedPayment.id = :paymentId")
    List<PaymentTransaction> findRefundsByPaymentId(@Param("paymentId") Long paymentId);

    @Query("SELECT MAX(p.transactionNumber) FROM PaymentTransaction p WHERE p.transactionYear = :year")
    Long findMaxTransactionNumberByYear(@Param("year") Integer year);

    @Query("SELECT COUNT(p) > 0 FROM PaymentTransaction p WHERE p.txId = :txId")
    boolean existsByTxId(@Param("txId") String txId);

    @Query("SELECT p FROM PaymentTransaction p WHERE p.txId = :txId")
    java.util.Optional<PaymentTransaction> findByTxId(@Param("txId") String txId);

    @Query("SELECT p FROM PaymentTransaction p WHERE p.refundedPayment.txId = :txId")
    List<PaymentTransaction> findRefundsByPaymentTxId(@Param("txId") String txId);
}

