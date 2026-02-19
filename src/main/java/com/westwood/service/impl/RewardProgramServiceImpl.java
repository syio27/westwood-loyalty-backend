package com.westwood.service.impl;

import com.westwood.common.dto.CreateRewardProgramDraftRequest;
import com.westwood.common.dto.CreateRewardProgramDraftResponse;
import com.westwood.common.dto.RewardProgramSlotDto;
import com.westwood.common.dto.reward.*;
import com.westwood.common.exception.InvalidProgramStateException;
import com.westwood.common.exception.ResourceAlreadyExistsException;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.*;
import com.westwood.domain.Client;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.RewardProgramRepository;
import com.westwood.service.RewardProgramService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class RewardProgramServiceImpl implements RewardProgramService {

    private static final String NOT_CREATED = "NOT_CREATED";

    private final RewardProgramRepository rewardProgramRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final ClientRepository clientRepository;

    public RewardProgramServiceImpl(
            RewardProgramRepository rewardProgramRepository,
            PaymentTransactionRepository paymentTransactionRepository,
            ClientRepository clientRepository) {
        this.rewardProgramRepository = rewardProgramRepository;
        this.paymentTransactionRepository = paymentTransactionRepository;
        this.clientRepository = clientRepository;
    }

    // ─── Slots & Draft ───────────────────────────────────────────────

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
                        .name(program.getName())
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
            if (p.getStatus() != RewardProgramStatus.DRAFT) {
                throw new ResourceAlreadyExistsException(
                        "Reward program for type " + type + " already exists with status " + p.getStatus()
                                + ". Cannot create a new draft.");
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
        RewardProgram saved = rewardProgramRepository.save(program);
        return CreateRewardProgramDraftResponse.builder()
                .uuid(saved.getUuid())
                .type(saved.getType())
                .status(saved.getStatus())
                .build();
    }

    // ─── Get / List ──────────────────────────────────────────────────

    @Override
    @Transactional(readOnly = true)
    public RewardProgramResponse getProgram(UUID uuid) {
        RewardProgram program = findByUuidOrThrow(uuid);
        return toResponse(program);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RewardProgramListItem> listPrograms() {
        return rewardProgramRepository.findAllWithCashbackRule().stream()
                .map(this::toListItem)
                .collect(Collectors.toList());
    }

    // ─── Draft Save ─────────────────────────────────────────────────

    @Override
    public RewardProgramResponse saveCashbackDraft(UUID uuid, SaveCashbackProgramDraftRequest request) {
        RewardProgram program = findDraftOrThrow(uuid);
        assertCashbackType(program);

        // Program details (only overwrite if provided)
        if (request.getName() != null) {
            program.setName(request.getName());
        }
        if (request.getDescription() != null) {
            program.setDescription(request.getDescription());
        }

        // Schedule
        if (request.getStartDate() != null) {
            program.setStartDate(request.getStartDate());
        }
        // endDate can be explicitly set to null (ongoing) — always apply
        program.setEndDate(request.getEndDate());

        if (request.getWeeklySchedules() != null) {
            syncWeeklySchedules(program, request.getWeeklySchedules());
        }

        // Cashback rule fields
        CashbackProgramRule rule = ensureCashbackRule(program);
        if (request.getCashbackType() != null) {
            rule.setCashbackType(request.getCashbackType());
        }
        if (request.getCashbackValue() != null) {
            rule.setCashbackValue(request.getCashbackValue());
        }
        if (request.getMinSpendAmount() != null) {
            rule.setMinSpendAmount(request.getMinSpendAmount());
        }
        if (request.getEligibilityType() != null) {
            rule.setEligibilityType(request.getEligibilityType());
        }
        if (request.getRedeemLimitPercent() != null) {
            rule.setRedeemLimitPercent(request.getRedeemLimitPercent());
        }
        if (request.getBonusLifespanDays() != null) {
            rule.setBonusLifespanDays(request.getBonusLifespanDays());
        }
        if (request.getPointsSpendThreshold() != null) {
            rule.setPointsSpendThreshold(request.getPointsSpendThreshold());
        }

        // Tiers (if provided, full replace; null means "don't touch")
        if (request.getTiers() != null) {
            syncCashbackTiers(program, request.getTiers());
        }

        return toResponse(rewardProgramRepository.save(program));
    }

    // ─── Lifecycle ───────────────────────────────────────────────────

    @Override
    public RewardProgramResponse launchCashbackProgram(UUID uuid, LaunchCashbackProgramRequest request) {
        RewardProgram program = findByUuidOrThrow(uuid);
        assertCashbackType(program);

        boolean launchNowFromScheduled = program.getStatus() == RewardProgramStatus.SCHEDULED && request.isImmediate();

        if (program.getStatus() != RewardProgramStatus.DRAFT && !launchNowFromScheduled) {
            throw new InvalidProgramStateException(
                    "Program can only be launched from DRAFT status, or from SCHEDULED when launching now. Current: " + program.getStatus());
        }

        // Apply any program data included in the launch request
        applyCashbackData(program, request);

        if (!launchNowFromScheduled) {
            validateProgramReadyForLaunch(program);
        }

        if (request.isImmediate()) {
            program.setStatus(RewardProgramStatus.ACTIVE);
            program.setStartDate(LocalDateTime.now());
        } else {
            if (program.getStartDate() == null) {
                throw new InvalidProgramStateException(
                        "Start date must be set to schedule a program.");
            }
            // Allow start date up to 5 minutes in the past to account for timezone/clock skew (e.g. "today in 30 mins" in user TZ)
            if (program.getStartDate().isBefore(LocalDateTime.now().minusMinutes(5))) {
                throw new InvalidProgramStateException(
                        "Start date must be in the future for scheduled launch.");
            }
            program.setStatus(RewardProgramStatus.SCHEDULED);
        }

        return toResponse(rewardProgramRepository.save(program));
    }

    @Override
    public RewardProgramResponse deactivateProgram(UUID uuid) {
        RewardProgram program = findByUuidOrThrow(uuid);

        if (program.getStatus() != RewardProgramStatus.ACTIVE
                && program.getStatus() != RewardProgramStatus.SCHEDULED) {
            throw new InvalidProgramStateException(
                    "Only ACTIVE or SCHEDULED programs can be deactivated. Current: " + program.getStatus());
        }

        program.setStatus(RewardProgramStatus.INACTIVE);
        return toResponse(rewardProgramRepository.save(program));
    }

    @Override
    public RewardProgramResponse archiveProgram(UUID uuid) {
        RewardProgram program = findByUuidOrThrow(uuid);

        if (program.getStatus() != RewardProgramStatus.INACTIVE) {
            throw new InvalidProgramStateException(
                    "Only INACTIVE programs can be archived. Current: " + program.getStatus());
        }

        program.setStatus(RewardProgramStatus.ARCHIVED);
        return toResponse(rewardProgramRepository.save(program));
    }

    @Override
    public void deleteProgram(UUID uuid) {
        RewardProgram program = findByUuidOrThrow(uuid);
        RewardProgramStatus status = program.getStatus();

        if (status != RewardProgramStatus.DRAFT
                && status != RewardProgramStatus.INACTIVE
                && status != RewardProgramStatus.ARCHIVED) {
            throw new InvalidProgramStateException(
                    "Programs can only be deleted when DRAFT, INACTIVE, or ARCHIVED. Current: " + status);
        }

        rewardProgramRepository.delete(program);
    }

    // ─── Private Helpers ─────────────────────────────────────────────

    private RewardProgram findByUuidOrThrow(UUID uuid) {
        return rewardProgramRepository.findByUuid(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("Reward program not found: " + uuid));
    }

    private RewardProgram findDraftOrThrow(UUID uuid) {
        RewardProgram program = findByUuidOrThrow(uuid);
        if (program.getStatus() != RewardProgramStatus.DRAFT) {
            throw new InvalidProgramStateException(
                    "Program must be in DRAFT status to edit. Current: " + program.getStatus());
        }
        return program;
    }

    private void assertCashbackType(RewardProgram program) {
        if (program.getType() != RewardProgramType.CASHBACK) {
            throw new IllegalArgumentException(
                    "This operation is only valid for CASHBACK programs. Type: " + program.getType());
        }
    }

    private void applyCashbackData(RewardProgram program, LaunchCashbackProgramRequest request) {
        if (request.getName() != null) {
            program.setName(request.getName());
        }
        if (request.getDescription() != null) {
            program.setDescription(request.getDescription());
        }
        if (request.getStartDate() != null) {
            program.setStartDate(request.getStartDate());
        }
        program.setEndDate(request.getEndDate());

        if (request.getWeeklySchedules() != null) {
            syncWeeklySchedules(program, request.getWeeklySchedules());
        }

        CashbackProgramRule rule = ensureCashbackRule(program);
        if (request.getCashbackType() != null) {
            rule.setCashbackType(request.getCashbackType());
        }
        if (request.getCashbackValue() != null) {
            rule.setCashbackValue(request.getCashbackValue());
        }
        if (request.getMinSpendAmount() != null) {
            rule.setMinSpendAmount(request.getMinSpendAmount());
        }
        if (request.getEligibilityType() != null) {
            rule.setEligibilityType(request.getEligibilityType());
        }
        if (request.getRedeemLimitPercent() != null) {
            rule.setRedeemLimitPercent(request.getRedeemLimitPercent());
        }
        if (request.getBonusLifespanDays() != null) {
            rule.setBonusLifespanDays(request.getBonusLifespanDays());
        }
        if (request.getPointsSpendThreshold() != null) {
            rule.setPointsSpendThreshold(request.getPointsSpendThreshold());
        }

        if (request.getTiers() != null) {
            syncCashbackTiers(program, request.getTiers());
        }
    }

    private CashbackProgramRule ensureCashbackRule(RewardProgram program) {
        if (program.getCashbackRule() == null) {
            CashbackProgramRule rule = new CashbackProgramRule();
            rule.setProgram(program);
            rule.setCashbackType(CashbackType.PERCENTAGE);
            program.setCashbackRule(rule);
        }
        return program.getCashbackRule();
    }

    private void syncWeeklySchedules(RewardProgram program, List<WeeklyScheduleEntry> entries) {
        Map<DayOfWeek, ProgramWeeklySchedule> existing = program.getWeeklySchedules().stream()
                .collect(Collectors.toMap(ProgramWeeklySchedule::getDayOfWeek, s -> s));

        Set<DayOfWeek> incoming = entries.stream()
                .map(WeeklyScheduleEntry::getDayOfWeek)
                .collect(Collectors.toSet());

        program.getWeeklySchedules().removeIf(s -> !incoming.contains(s.getDayOfWeek()));

        for (WeeklyScheduleEntry entry : entries) {
            ProgramWeeklySchedule schedule = existing.get(entry.getDayOfWeek());
            if (schedule == null) {
                schedule = new ProgramWeeklySchedule();
                schedule.setProgram(program);
                schedule.setDayOfWeek(entry.getDayOfWeek());
                program.getWeeklySchedules().add(schedule);
            }
            schedule.setEnabled(entry.getEnabled());
            schedule.setStartTime(entry.getStartTime());
            schedule.setEndTime(entry.getEndTime());
        }
    }

    private void syncCashbackTiers(RewardProgram program, List<CashbackTierEntry> entries) {
        program.getCashbackTiers().clear();

        if (entries != null) {
            for (CashbackTierEntry entry : entries) {
                CashbackTier tier = new CashbackTier();
                tier.setProgram(program);
                tier.setName(entry.getName());
                tier.setMinAmount(entry.getMinAmount());
                tier.setMaxAmount(entry.getMaxAmount());
                tier.setExtraEarningPercent(entry.getExtraEarningPercent());
                tier.setSortOrder(entry.getSortOrder());
                program.getCashbackTiers().add(tier);
            }
        }
    }

    private void validateProgramReadyForLaunch(RewardProgram program) {
        List<String> errors = new ArrayList<>();

        if (program.getName() == null || program.getName().isBlank()) {
            errors.add("Program name is required");
        }

        if (program.getType() == RewardProgramType.CASHBACK) {
            CashbackProgramRule rule = program.getCashbackRule();
            if (rule == null) {
                errors.add("Cashback rules must be configured");
            } else {
                if (rule.getCashbackType() == null) {
                    errors.add("Cashback type is required");
                }
                if (rule.getCashbackValue() == null) {
                    errors.add("Cashback value is required");
                }
                if (rule.getCashbackType() == CashbackType.BONUS_POINTS
                        && (rule.getPointsSpendThreshold() == null
                            || rule.getPointsSpendThreshold().compareTo(BigDecimal.ZERO) <= 0)) {
                    errors.add("Points spend threshold is required for BONUS_POINTS type and must be > 0");
                }
            }
        }

        if (!errors.isEmpty()) {
            throw new InvalidProgramStateException(
                    "Program is not ready for launch: " + String.join("; ", errors));
        }
    }

    // ─── Tiered clients ───────────────────────────────────────────────

    @Override
    @Transactional(readOnly = true)
    public PagedTieredClientsResponse getTieredClients(UUID programUuid, Pageable pageable, String tierName) {
        RewardProgram program = findByUuidOrThrow(programUuid);
        if (program.getStatus() != RewardProgramStatus.ACTIVE) {
            return emptyTieredClientsResponse(pageable);
        }
        List<CashbackTier> tiers = program.getCashbackTiers();
        if (tiers == null || tiers.isEmpty() || program.getStartDate() == null) {
            return emptyTieredClientsResponse(pageable);
        }
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime start = program.getStartDate();
        LocalDateTime end = program.getEndDate() != null && program.getEndDate().isBefore(now)
                ? program.getEndDate() : now;

        List<Object[]> raw = paymentTransactionRepository.findClientIdsWithCompletedSpendInTimeRange(start, end);
        List<CashbackTier> sortedTiers = tiers.stream()
                .sorted(Comparator.comparing(CashbackTier::getSortOrder))
                .collect(Collectors.toList());

        List<TieredClientRow> rows = new ArrayList<>();
        for (Object[] r : raw) {
            Long clientId = (Long) r[0];
            BigDecimal spend = (BigDecimal) r[1];
            Optional<CashbackTier> tierOpt = sortedTiers.stream()
                    .filter(t -> spend.compareTo(t.getMinAmount()) >= 0)
                    .filter(t -> t.getMaxAmount() == null || spend.compareTo(t.getMaxAmount()) <= 0)
                    .findFirst();
            if (tierOpt.isEmpty()) {
                continue;
            }
            CashbackTier tier = tierOpt.get();
            int tierIndex = sortedTiers.indexOf(tier);
            BigDecimal percentToNext = null;
            String nextTierName = null;
            if (tierIndex < sortedTiers.size() - 1) {
                CashbackTier nextTier = sortedTiers.get(tierIndex + 1);
                nextTierName = nextTier.getName();
                BigDecimal range = nextTier.getMinAmount().subtract(tier.getMinAmount());
                if (range.compareTo(BigDecimal.ZERO) > 0) {
                    BigDecimal progress = spend.subtract(tier.getMinAmount());
                    percentToNext = progress.multiply(BigDecimal.valueOf(100)).divide(range, 2, RoundingMode.HALF_UP);
                    if (percentToNext.compareTo(BigDecimal.valueOf(100)) > 0) {
                        percentToNext = BigDecimal.valueOf(100);
                    }
                }
            }
            rows.add(new TieredClientRow(clientId, tier.getName(), tier.getSortOrder(), spend, percentToNext, nextTierName));
        }
        if (tierName != null && !tierName.isBlank()) {
            rows.removeIf(r -> !tierName.equalsIgnoreCase(r.getTierName()));
        }

        rows.sort(Comparator.comparing(TieredClientRow::getTierSortOrder)
                .thenComparing(TieredClientRow::getSpend, Comparator.reverseOrder()));

        int total = rows.size();
        int page = pageable.getPageNumber();
        int size = pageable.getPageSize();
        int from = Math.min(page * size, total);
        int to = Math.min(from + size, total);
        List<TieredClientRow> pageRows = from < to ? rows.subList(from, to) : List.of();
        Set<Long> clientIds = pageRows.stream().map(TieredClientRow::getClientId).collect(Collectors.toSet());
        Map<Long, Client> clientMap = clientRepository.findAllById(clientIds).stream()
                .collect(Collectors.toMap(Client::getId, c -> c));

        List<TieredClientDto> content = pageRows.stream()
                .map(row -> {
                    Client c = clientMap.get(row.getClientId());
                    String name = c != null ? (c.getName() != null ? c.getName() : "") + (c.getSurname() != null ? " " + c.getSurname() : "").trim() : "—";
                    if (name.isBlank()) name = "—";
                    return TieredClientDto.builder()
                            .clientUuid(c != null ? c.getUuid() : null)
                            .clientName(name)
                            .phone(c != null ? c.getPhone() : null)
                            .tierName(row.getTierName())
                            .tierSortOrder(row.getTierSortOrder())
                            .programPeriodSpend(row.getSpend())
                            .percentToNextTier(row.getPercentToNextTier())
                            .nextTierName(row.getNextTierName())
                            .build();
                })
                .collect(Collectors.toList());

        int totalPages = size > 0 ? (int) Math.ceil((double) total / size) : 0;
        return PagedTieredClientsResponse.builder()
                .content(content)
                .page(page)
                .size(size)
                .totalElements(total)
                .totalPages(totalPages)
                .first(page == 0)
                .last(page >= totalPages - 1 || totalPages == 0)
                .build();
    }

    private PagedTieredClientsResponse emptyTieredClientsResponse(Pageable pageable) {
        return PagedTieredClientsResponse.builder()
                .content(List.of())
                .page(pageable.getPageNumber())
                .size(pageable.getPageSize())
                .totalElements(0L)
                .totalPages(0)
                .first(true)
                .last(true)
                .build();
    }

    private static class TieredClientRow {
        final Long clientId;
        final String tierName;
        final int tierSortOrder;
        final BigDecimal spend;
        final BigDecimal percentToNextTier;
        final String nextTierName;

        TieredClientRow(Long clientId, String tierName, int tierSortOrder, BigDecimal spend,
                        BigDecimal percentToNextTier, String nextTierName) {
            this.clientId = clientId;
            this.tierName = tierName;
            this.tierSortOrder = tierSortOrder;
            this.spend = spend;
            this.percentToNextTier = percentToNextTier;
            this.nextTierName = nextTierName;
        }

        Long getClientId() { return clientId; }
        String getTierName() { return tierName; }
        int getTierSortOrder() { return tierSortOrder; }
        BigDecimal getSpend() { return spend; }
        BigDecimal getPercentToNextTier() { return percentToNextTier; }
        String getNextTierName() { return nextTierName; }
    }

    // ─── Mappers ─────────────────────────────────────────────────────

    private RewardProgramResponse toResponse(RewardProgram program) {
        return RewardProgramResponse.builder()
                .uuid(program.getUuid())
                .type(program.getType())
                .status(program.getStatus())
                .name(program.getName())
                .description(program.getDescription())
                .startDate(program.getStartDate())
                .endDate(program.getEndDate())
                .weeklySchedules(mapSchedules(program.getWeeklySchedules()))
                .cashbackRule(mapCashbackRule(program.getCashbackRule()))
                .cashbackTiers(mapCashbackTiers(program.getCashbackTiers()))
                .createdAt(program.getCreatedAt())
                .updatedAt(program.getUpdatedAt())
                .build();
    }

    private RewardProgramListItem toListItem(RewardProgram program) {
        RewardProgramListItem.RewardProgramListItemBuilder b = RewardProgramListItem.builder()
                .uuid(program.getUuid())
                .type(program.getType())
                .status(program.getStatus())
                .name(program.getName())
                .startDate(program.getStartDate())
                .endDate(program.getEndDate())
                .createdAt(program.getCreatedAt());
        if (program.getType() == RewardProgramType.CASHBACK && program.getCashbackRule() != null) {
            var rule = program.getCashbackRule();
            b.cashbackType(rule.getCashbackType())
                    .cashbackValue(rule.getCashbackValue())
                    .minSpendAmount(rule.getMinSpendAmount())
                    .pointsSpendThreshold(rule.getPointsSpendThreshold());
        }
        return b.build();
    }

    private List<WeeklyScheduleResponse> mapSchedules(List<ProgramWeeklySchedule> schedules) {
        if (schedules == null || schedules.isEmpty()) {
            return List.of();
        }
        return schedules.stream()
                .map(s -> WeeklyScheduleResponse.builder()
                        .dayOfWeek(s.getDayOfWeek())
                        .enabled(s.getEnabled())
                        .startTime(s.getStartTime())
                        .endTime(s.getEndTime())
                        .build())
                .collect(Collectors.toList());
    }

    private CashbackProgramRuleResponse mapCashbackRule(CashbackProgramRule rule) {
        if (rule == null) {
            return null;
        }
        return CashbackProgramRuleResponse.builder()
                .cashbackType(rule.getCashbackType())
                .cashbackValue(rule.getCashbackValue())
                .minSpendAmount(rule.getMinSpendAmount())
                .eligibilityType(rule.getEligibilityType())
                .redeemLimitPercent(rule.getRedeemLimitPercent())
                .bonusLifespanDays(rule.getBonusLifespanDays())
                .pointsSpendThreshold(rule.getPointsSpendThreshold())
                .build();
    }

    private List<CashbackTierResponse> mapCashbackTiers(List<CashbackTier> tiers) {
        if (tiers == null || tiers.isEmpty()) {
            return List.of();
        }
        return tiers.stream()
                .map(t -> CashbackTierResponse.builder()
                        .id(t.getId())
                        .name(t.getName())
                        .minAmount(t.getMinAmount())
                        .maxAmount(t.getMaxAmount())
                        .extraEarningPercent(t.getExtraEarningPercent())
                        .sortOrder(t.getSortOrder())
                        .build())
                .collect(Collectors.toList());
    }
}
