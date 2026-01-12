package com.westwood.service.impl;

import com.westwood.common.dto.BonusTypeDto;
import com.westwood.common.dto.CreateBonusTypeRequest;
import com.westwood.common.dto.UpdateBonusTypeRequest;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusType;
import com.westwood.domain.BonusTypeEnum;
import com.westwood.repository.BonusTypeRepository;
import com.westwood.service.BonusTypeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class BonusTypeServiceImpl implements BonusTypeService {

    private final BonusTypeRepository bonusTypeRepository;

    public BonusTypeServiceImpl(BonusTypeRepository bonusTypeRepository) {
        this.bonusTypeRepository = bonusTypeRepository;
    }

    @Override
    public BonusTypeDto createBonusType(CreateBonusTypeRequest request) {
        BonusType bonusType = new BonusType();
        bonusType.setName(request.getName());
        bonusType.setType(request.getType());
        bonusType.setEnabled(true);
        bonusType.setBonusAmount(request.getBonusAmount());
        bonusType.setBonusPercentage(request.getBonusPercentage());
        bonusType.setMilestoneThreshold(request.getMilestoneThreshold());
        bonusType.setExpirationDays(request.getExpirationDays());
        bonusType.setDescription(request.getDescription());
        bonusType.setIconType(request.getIconType());

        BonusType saved = bonusTypeRepository.save(bonusType);
        return toDto(saved);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BonusTypeDto> getAllBonusTypes() {
        return bonusTypeRepository.findAll().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public BonusTypeDto getBonusTypeById(Long id) {
        BonusType bonusType = bonusTypeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bonus type with id '" + id + "' not found"));
        return toDto(bonusType);
    }

    @Override
    public BonusTypeDto updateBonusType(Long id, UpdateBonusTypeRequest request) {
        BonusType bonusType = bonusTypeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bonus type with id '" + id + "' not found"));

        bonusType.setName(request.getName());
        bonusType.setBonusAmount(request.getBonusAmount());
        bonusType.setBonusPercentage(request.getBonusPercentage());
        bonusType.setMilestoneThreshold(request.getMilestoneThreshold());
        bonusType.setExpirationDays(request.getExpirationDays());
        bonusType.setDescription(request.getDescription());
        bonusType.setIconType(request.getIconType());
        if (request.getEnabled() != null) {
            bonusType.setEnabled(request.getEnabled());
        }

        BonusType updated = bonusTypeRepository.save(bonusType);
        return toDto(updated);
    }

    @Override
    public void toggleBonusType(Long id, Boolean enabled) {
        BonusType bonusType = bonusTypeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bonus type with id '" + id + "' not found"));
        bonusType.setEnabled(enabled);
        bonusTypeRepository.save(bonusType);
    }

    @Override
    public void deleteBonusType(Long id) {
        if (!bonusTypeRepository.existsById(id)) {
            throw new ResourceNotFoundException("Bonus type with id '" + id + "' not found");
        }
        bonusTypeRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BonusTypeDto> getActiveBonusTypes() {
        return bonusTypeRepository.findByEnabledTrue().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public BonusTypeDto getActiveBonusByType(BonusTypeEnum type) {
        BonusType bonusType = bonusTypeRepository.findByTypeAndEnabledTrue(type)
                .orElseThrow(() -> new ResourceNotFoundException("Active bonus type '" + type + "' not found"));
        return toDto(bonusType);
    }

    private BonusTypeDto toDto(BonusType bonusType) {
        BonusTypeDto dto = new BonusTypeDto();
        dto.setId(bonusType.getId());
        dto.setName(bonusType.getName());
        dto.setType(bonusType.getType());
        dto.setEnabled(bonusType.getEnabled());
        dto.setBonusAmount(bonusType.getBonusAmount());
        dto.setBonusPercentage(bonusType.getBonusPercentage());
        dto.setMilestoneThreshold(bonusType.getMilestoneThreshold());
        dto.setExpirationDays(bonusType.getExpirationDays());
        dto.setDescription(bonusType.getDescription());
        dto.setIconType(bonusType.getIconType());
        dto.setCreatedAt(bonusType.getCreatedAt());
        dto.setUpdatedAt(bonusType.getUpdatedAt());
        return dto;
    }
}

