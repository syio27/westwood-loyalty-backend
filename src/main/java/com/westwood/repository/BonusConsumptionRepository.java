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
}
