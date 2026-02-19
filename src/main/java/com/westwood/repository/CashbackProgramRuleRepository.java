package com.westwood.repository;

import com.westwood.domain.CashbackProgramRule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CashbackProgramRuleRepository extends JpaRepository<CashbackProgramRule, Long> {

    Optional<CashbackProgramRule> findByProgramId(Long programId);

    void deleteByProgramId(Long programId);
}
