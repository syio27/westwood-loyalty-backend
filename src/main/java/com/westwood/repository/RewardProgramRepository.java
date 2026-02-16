package com.westwood.repository;

import com.westwood.domain.RewardProgram;
import com.westwood.domain.RewardProgramType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RewardProgramRepository extends JpaRepository<RewardProgram, Long> {

    Optional<RewardProgram> findByUuid(UUID uuid);

    Optional<RewardProgram> findByType(RewardProgramType type);
}
