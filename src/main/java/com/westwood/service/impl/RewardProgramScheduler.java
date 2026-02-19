package com.westwood.service.impl;

import com.westwood.domain.RewardProgram;
import com.westwood.domain.RewardProgramStatus;
import com.westwood.repository.RewardProgramRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Scheduled task that manages reward program lifecycle transitions:
 * - SCHEDULED → ACTIVE when start_date has arrived.
 * - ACTIVE → INACTIVE when end_date has passed (time-based campaigns).
 *
 * Runs every minute.
 */
@Component
public class RewardProgramScheduler {

    private static final Logger logger = LoggerFactory.getLogger(RewardProgramScheduler.class);

    private final RewardProgramRepository rewardProgramRepository;

    public RewardProgramScheduler(RewardProgramRepository rewardProgramRepository) {
        this.rewardProgramRepository = rewardProgramRepository;
    }

    @Scheduled(fixedRate = 60_000)
    @Transactional
    public void processScheduledPrograms() {
        LocalDateTime now = LocalDateTime.now();

        activateScheduledPrograms(now);
        deactivateExpiredPrograms(now);
    }

    private void activateScheduledPrograms(LocalDateTime now) {
        List<RewardProgram> readyToLaunch =
                rewardProgramRepository.findScheduledProgramsReadyToLaunch(RewardProgramStatus.SCHEDULED, now);

        for (RewardProgram program : readyToLaunch) {
            program.setStatus(RewardProgramStatus.ACTIVE);
            rewardProgramRepository.save(program);
            logger.info("Activated scheduled program: {} (uuid={})", program.getName(), program.getUuid());
        }
    }

    private void deactivateExpiredPrograms(LocalDateTime now) {
        List<RewardProgram> expired = rewardProgramRepository.findActiveProgramsPastEndDate(now);

        for (RewardProgram program : expired) {
            program.setStatus(RewardProgramStatus.INACTIVE);
            rewardProgramRepository.save(program);
            logger.info("Deactivated expired program: {} (uuid={})", program.getName(), program.getUuid());
        }
    }
}
