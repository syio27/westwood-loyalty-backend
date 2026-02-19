package com.westwood.repository;

import com.westwood.domain.CashbackTier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CashbackTierRepository extends JpaRepository<CashbackTier, Long> {

    List<CashbackTier> findByProgramIdOrderBySortOrderAsc(Long programId);

    void deleteByProgramId(Long programId);
}
