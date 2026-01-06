package com.westwood.repository;

import com.westwood.domain.BonusType;
import com.westwood.domain.BonusTypeEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BonusTypeRepository extends JpaRepository<BonusType, Long> {

    List<BonusType> findByEnabledTrue();

    Optional<BonusType> findByTypeAndEnabledTrue(BonusTypeEnum type);

    boolean existsByTypeAndEnabledTrue(BonusTypeEnum type);
}

