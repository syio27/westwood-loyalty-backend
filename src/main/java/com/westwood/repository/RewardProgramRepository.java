package com.westwood.repository;

import com.westwood.domain.RewardProgram;
import com.westwood.domain.RewardProgramStatus;
import com.westwood.domain.RewardProgramType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RewardProgramRepository extends JpaRepository<RewardProgram, Long> {

    /** Load programs with cashback and event rules for list API (bonus type column). */
    @Query("SELECT DISTINCT rp FROM RewardProgram rp LEFT JOIN FETCH rp.cashbackRule LEFT JOIN FETCH rp.eventRule")
    List<RewardProgram> findAllWithRules();

    Optional<RewardProgram> findByUuid(UUID uuid);

    Optional<RewardProgram> findByType(RewardProgramType type);

    List<RewardProgram> findAllByType(RewardProgramType type);

    List<RewardProgram> findByTypeAndStatusIn(RewardProgramType type, List<RewardProgramStatus> statuses);

    List<RewardProgram> findByStatus(RewardProgramStatus status);

    List<RewardProgram> findByStatusIn(List<RewardProgramStatus> statuses);

    @Query("SELECT rp FROM RewardProgram rp WHERE rp.status = :status AND rp.startDate <= :now")
    List<RewardProgram> findScheduledProgramsReadyToLaunch(
            @Param("status") RewardProgramStatus status,
            @Param("now") LocalDateTime now);

    @Query("SELECT rp FROM RewardProgram rp WHERE rp.status = 'ACTIVE' AND rp.endDate IS NOT NULL AND rp.endDate <= :now")
    List<RewardProgram> findActiveProgramsPastEndDate(@Param("now") LocalDateTime now);

    Optional<RewardProgram> findByTypeAndStatus(RewardProgramType type, RewardProgramStatus status);

    /** Load active cashback program with rule (and tiers) for payment bonus processing. */
    @Query("SELECT rp FROM RewardProgram rp LEFT JOIN FETCH rp.cashbackRule WHERE rp.type = :type AND rp.status = :status")
    Optional<RewardProgram> findByTypeAndStatusWithCashbackRule(
            @Param("type") RewardProgramType type,
            @Param("status") RewardProgramStatus status);

    /** Load all programs of given type and statuses with cashback rule (for effective-program resolution). */
    @Query("SELECT DISTINCT rp FROM RewardProgram rp LEFT JOIN FETCH rp.cashbackRule WHERE rp.type = :type AND rp.status IN :statuses")
    List<RewardProgram> findByTypeAndStatusInWithCashbackRule(
            @Param("type") RewardProgramType type,
            @Param("statuses") List<RewardProgramStatus> statuses);

    /** Load active/scheduled event programs with rule (for grant-on-join, first-pay, birthday). */
    @Query("SELECT DISTINCT rp FROM RewardProgram rp LEFT JOIN FETCH rp.eventRule WHERE rp.type = :type AND rp.status IN :statuses")
    List<RewardProgram> findByTypeAndStatusInWithEventRule(
            @Param("type") RewardProgramType type,
            @Param("statuses") List<RewardProgramStatus> statuses);
}
