package com.westwood.service;

import com.westwood.common.dto.BonusTypeDto;
import com.westwood.common.dto.BonusTypeInfoDto;
import com.westwood.common.dto.CreateBonusTypeRequest;
import com.westwood.common.dto.RewardConfigStatsDto;
import com.westwood.common.dto.UpdateBonusTypeRequest;
import com.westwood.domain.BonusTypeEnum;

import java.util.List;

public interface BonusTypeService {

    BonusTypeDto createBonusType(CreateBonusTypeRequest request);

    List<BonusTypeDto> getAllBonusTypes();

    BonusTypeDto getBonusTypeById(Long id);

    BonusTypeDto updateBonusType(Long id, UpdateBonusTypeRequest request);

    void toggleBonusType(Long id, Boolean enabled);

    void deleteBonusType(Long id);

    List<BonusTypeDto> getActiveBonusTypes();

    BonusTypeDto getActiveBonusByType(BonusTypeEnum type);

    BonusTypeDto getActiveBonusByFlow(String flow);

    List<BonusTypeInfoDto> getPreconfiguredBonusTypes();

    /**
     * Stats for the reward program configuration page (active count, avg reward cost % last 30 days, expiration).
     */
    RewardConfigStatsDto getRewardConfigStats();
}

