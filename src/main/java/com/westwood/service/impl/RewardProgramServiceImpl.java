package com.westwood.service.impl;

import com.westwood.common.dto.CreateRewardProgramDraftRequest;
import com.westwood.common.dto.CreateRewardProgramDraftResponse;
import com.westwood.common.dto.RewardProgramSlotDto;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.domain.RewardProgram;
import com.westwood.domain.RewardProgramStatus;
import com.westwood.domain.RewardProgramType;
import com.westwood.repository.RewardProgramRepository;
import com.westwood.service.RewardProgramService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class RewardProgramServiceImpl implements RewardProgramService {

    private static final String NOT_CREATED = "NOT_CREATED";

    private final RewardProgramRepository rewardProgramRepository;

    public RewardProgramServiceImpl(RewardProgramRepository rewardProgramRepository) {
        this.rewardProgramRepository = rewardProgramRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<RewardProgramSlotDto> getSlots() {
        List<RewardProgram> all = rewardProgramRepository.findAll();
        Map<RewardProgramType, RewardProgram> byType = all.stream()
                .collect(Collectors.toMap(RewardProgram::getType, p -> p, (a, b) -> a));

        List<RewardProgramSlotDto> slots = new ArrayList<>();
        for (RewardProgramType type : RewardProgramType.values()) {
            RewardProgram program = byType.get(type);
            if (program == null) {
                slots.add(RewardProgramSlotDto.builder()
                        .type(type)
                        .status(NOT_CREATED)
                        .uuid(null)
                        .build());
            } else {
                slots.add(RewardProgramSlotDto.builder()
                        .type(type)
                        .status(program.getStatus().name())
                        .uuid(program.getUuid())
                        .build());
            }
        }
        return slots;
    }

    @Override
    public CreateRewardProgramDraftResponse createDraft(CreateRewardProgramDraftRequest request) {
        RewardProgramType type = request.getType();
        var existing = rewardProgramRepository.findByType(type);
        if (existing.isPresent()) {
            RewardProgram p = existing.get();
            if (p.getStatus() == RewardProgramStatus.ACTIVE) {
                throw new ResourceAlreadyExistsException(
                        "Reward program for type " + type + " already exists and is active. Use configure instead.");
            }
            return CreateRewardProgramDraftResponse.builder()
                    .uuid(p.getUuid())
                    .type(p.getType())
                    .status(p.getStatus())
                    .build();
        }

        RewardProgram program = new RewardProgram();
        program.setUuid(UUID.randomUUID());
        program.setType(type);
        program.setStatus(RewardProgramStatus.DRAFT);
        program.setBonusTypeId(null);
        RewardProgram saved = rewardProgramRepository.save(program);
        return CreateRewardProgramDraftResponse.builder()
                .uuid(saved.getUuid())
                .type(saved.getType())
                .status(saved.getStatus())
                .build();
    }
}
