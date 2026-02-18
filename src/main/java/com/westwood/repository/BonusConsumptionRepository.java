package com.westwood.repository;

import com.westwood.domain.BonusConsumption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface BonusConsumptionRepository extends JpaRepository<BonusConsumption, Long> {

    @Query("SELECT COALESCE(SUM(c.amount), 0) FROM BonusConsumption c WHERE c.bonusGranted.id = :grantId")
    BigDecimal sumAmountByBonusGrantedId(@Param("grantId") Long grantId);

    @Query("SELECT c FROM BonusConsumption c WHERE c.bonusGranted.id = :grantId ORDER BY c.createdAt ASC")
    List<BonusConsumption> findByBonusGrantedIdOrderByCreatedAtAsc(@Param("grantId") Long grantId);

    @Query("SELECT COALESCE(SUM(c.amount), 0) FROM BonusConsumption c WHERE c.bonusGranted.bonusType.id = :bonusTypeId AND c.consumptionType = 'PAYMENT_USE' AND c.createdAt BETWEEN :from AND :to")
    BigDecimal sumAmountByBonusTypeIdAndDateRange(@Param("bonusTypeId") Long bonusTypeId, @Param("from") java.time.LocalDateTime from, @Param("to") java.time.LocalDateTime to);

    @Query("SELECT DISTINCT c.paymentTransaction.id FROM BonusConsumption c WHERE c.bonusGranted.bonusType.id = :bonusTypeId AND c.paymentTransaction IS NOT NULL AND c.consumptionType = 'PAYMENT_USE' AND c.paymentTransaction.createdAt BETWEEN :from AND :to AND c.paymentTransaction.status = 'COMPLETED'")
    List<Long> findCompletedPaymentIdsThatConsumedBonusTypeInPeriod(@Param("bonusTypeId") Long bonusTypeId, @Param("from") java.time.LocalDateTime from, @Param("to") java.time.LocalDateTime to);

    @Query("SELECT COUNT(DISTINCT c.bonusGranted.client.id) FROM BonusConsumption c WHERE c.bonusGranted.bonusType.id = :bonusTypeId AND c.consumptionType = 'PAYMENT_USE' AND c.createdAt BETWEEN :from AND :to")
    Long countDistinctClientsConsumedByBonusTypeInPeriod(@Param("bonusTypeId") Long bonusTypeId, @Param("from") java.time.LocalDateTime from, @Param("to") java.time.LocalDateTime to);

    /** Payment IDs (COMPLETED) that used any bonus in period (for "all bonuses" report). */
    @Query("SELECT DISTINCT c.paymentTransaction.id FROM BonusConsumption c WHERE c.paymentTransaction IS NOT NULL AND c.consumptionType = 'PAYMENT_USE' AND c.paymentTransaction.createdAt BETWEEN :from AND :to AND c.paymentTransaction.status = 'COMPLETED'")
    List<Long> findCompletedPaymentIdsThatConsumedAnyBonusInPeriod(@Param("from") java.time.LocalDateTime from, @Param("to") java.time.LocalDateTime to);

    @Query("SELECT COALESCE(SUM(c.amount), 0) FROM BonusConsumption c WHERE c.consumptionType = 'PAYMENT_USE' AND c.createdAt BETWEEN :from AND :to")
    java.math.BigDecimal sumAmountByDateRange(@Param("from") java.time.LocalDateTime from, @Param("to") java.time.LocalDateTime to);
}
