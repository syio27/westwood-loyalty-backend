package com.westwood.repository;

import com.westwood.domain.ProgramWeeklySchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProgramWeeklyScheduleRepository extends JpaRepository<ProgramWeeklySchedule, Long> {

    List<ProgramWeeklySchedule> findByProgramId(Long programId);

    void deleteByProgramId(Long programId);
}
