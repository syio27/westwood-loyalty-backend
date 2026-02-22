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
import com.westwood.domain.FirstPayMode;
import com.westwood.domain.GrantTrigger;
import com.westwood.domain.WelcomeGrantType;
import com.westwood.domain.WelcomeProgramRule;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.repository.RewardProgramRepository;
import com.westwood.service.RewardProgramService;
import com.westwood.util.ClientUtils;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
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
        List<RewardProgramSlotDto> slots = new ArrayList<>();
        for (RewardProgramType type : RewardProgramType.values()) {
            List<RewardProgram> ofType = rewardProgramRepository.findAllByType(type);
            if (ofType.isEmpty()) {
                slots.add(RewardProgramSlotDto.builder()
                        .type(type)
                        .status(NOT_CREATED)
                        .uuid(null)
                        .build());
            } else {
                // Prefer ACTIVE > SCHEDULED > DRAFT > INACTIVE > ARCHIVED for display
                RewardProgram preferred = ofType.stream()
                        .max(Comparator.comparingInt(p -> priorityForSlot(p.getStatus())))
                        .orElse(ofType.get(0));
                slots.add(RewardProgramSlotDto.builder()
                        .type(type)
                        .status(preferred.getStatus().name())
                        .uuid(preferred.getUuid())
                        .name(preferred.getName())
                        .build());
            }
        }
        return slots;
    }

    private static int priorityForSlot(RewardProgramStatus status) {
        switch (status) {
            case ACTIVE: return 5;
            case SCHEDULED: return 4;
            case DRAFT: return 3;
            case INACTIVE: return 2;
            case ARCHIVED: return 1;
            default: return 0;
        }
    }

    @Override
    public CreateRewardProgramDraftResponse createDraft(CreateRewardProgramDraftRequest request) {
        RewardProgramType type = request.getType();
        // Allow multiple programs per type: always create a new draft.
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
        return rewardProgramRepository.findAllWithRules().stream()
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

    @Override
    public RewardProgramResponse saveWelcomeDraft(UUID uuid, SaveWelcomeProgramDraftRequest request) {
        RewardProgram program = findDraftOrThrow(uuid);
        assertWelcomeType(program);

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

        WelcomeProgramRule rule = ensureWelcomeRule(program);
        if (request.getGrantType() != null) {
            rule.setGrantType(request.getGrantType());
        }
        if (request.getGrantValue() != null) {
            rule.setGrantValue(request.getGrantValue());
        }
        if (request.getBonusLifespanDays() != null) {
            rule.setBonusLifespanDays(request.getBonusLifespanDays());
        }
        if (request.getGrantTrigger() != null) {
            rule.setGrantTrigger(request.getGrantTrigger());
        }
        if (request.getFirstPayMode() != null) {
            rule.setFirstPayMode(request.getFirstPayMode());
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

        // "Launch now" from SCHEDULED: activate today and keep end date (periodic program that starts now)
        if (launchNowFromScheduled) {
            program.setStatus(RewardProgramStatus.ACTIVE);
            program.setStartDate(LocalDateTime.now());
            return toResponse(rewardProgramRepository.save(program));
        }

        // Treat as always-on only when immediate and no end date; if end date is set, always use periodic path
        boolean effectiveImmediate = request.isImmediate()
                && (request.getEndDate() == null || request.getEndDate().isBlank());

        if (effectiveImmediate) {
            // Only one always-on program per type allowed
            ScheduleOverlapCheckResponse alwaysOnCheck = checkScheduleOverlap(
                    program.getType(), LocalDateTime.now(), null, program.getUuid());
            if (alwaysOnCheck.isOverlaps() && Boolean.TRUE.equals(alwaysOnCheck.getAlwaysOnConflict())) {
                throw new InvalidProgramStateException(
                        "Only one always-on program per type is allowed. An always-on "
                                + (program.getType() == RewardProgramType.CASHBACK ? "cashback" : "welcome")
                                + " program already exists"
                                + (alwaysOnCheck.getOverlappingProgramName() != null ? ": " + alwaysOnCheck.getOverlappingProgramName() : ".")
                                + " Schedule a periodic program with start and end dates instead.");
            }
            program.setStatus(RewardProgramStatus.ACTIVE);
            program.setStartDate(LocalDateTime.now());
        } else {
            if (program.getStartDate() == null) {
                throw new InvalidProgramStateException(
                        "Start date must be set to schedule a program.");
            }
            // Validate using instant (point in time) so client timezone is respected (e.g. user selects "today 5:30" in their TZ)
            Instant startInstant = parseStartDateToInstant(request);
            if (startInstant != null && startInstant.isBefore(Instant.now().minus(5, ChronoUnit.MINUTES))) {
                throw new InvalidProgramStateException(
                        "Start date must be in the future for scheduled launch.");
            }
            // Only one ACTIVE/SCHEDULED program of same type in the same period (always-on exception: new program with end date is allowed)
            ScheduleOverlapCheckResponse overlap = checkScheduleOverlap(
                    program.getType(), program.getStartDate(), program.getEndDate(), program.getUuid());
            if (overlap.isOverlaps()) {
                throw new InvalidProgramStateException(
                        "This program's period overlaps with an existing program of the same type: "
                                + (overlap.getOverlappingProgramName() != null ? overlap.getOverlappingProgramName() : "unknown")
                                + ". Only one program can be active or scheduled in the same period.");
            }
            program.setStatus(RewardProgramStatus.SCHEDULED);
        }

        return toResponse(rewardProgramRepository.save(program));
    }

    @Override
    public RewardProgramResponse launchWelcomeProgram(UUID uuid, LaunchWelcomeProgramRequest request) {
        RewardProgram program = findByUuidOrThrow(uuid);
        assertWelcomeType(program);

        boolean launchNowFromScheduled = program.getStatus() == RewardProgramStatus.SCHEDULED && request.isImmediate();

        if (program.getStatus() != RewardProgramStatus.DRAFT && !launchNowFromScheduled) {
            throw new InvalidProgramStateException(
                    "Program can only be launched from DRAFT, or from SCHEDULED when launching now. Current: " + program.getStatus());
        }

        applyWelcomeData(program, request);

        if (!launchNowFromScheduled) {
            validateProgramReadyForLaunch(program);
        }

        // "Launch now" from SCHEDULED: activate today and keep end date (periodic program that starts now)
        if (launchNowFromScheduled) {
            program.setStatus(RewardProgramStatus.ACTIVE);
            program.setStartDate(LocalDateTime.now());
            return toResponse(rewardProgramRepository.save(program));
        }

        // Treat as always-on only when immediate and no end date; if end date is set, always use periodic path
        boolean effectiveImmediate = request.isImmediate()
                && (request.getEndDate() == null || request.getEndDate().isBlank());

        if (effectiveImmediate) {
            // Only one always-on program per type allowed
            ScheduleOverlapCheckResponse alwaysOnCheck = checkScheduleOverlap(
                    program.getType(), LocalDateTime.now(), null, program.getUuid());
            if (alwaysOnCheck.isOverlaps() && Boolean.TRUE.equals(alwaysOnCheck.getAlwaysOnConflict())) {
                throw new InvalidProgramStateException(
                        "Only one always-on program per type is allowed. An always-on welcome program already exists"
                                + (alwaysOnCheck.getOverlappingProgramName() != null ? ": " + alwaysOnCheck.getOverlappingProgramName() : ".")
                                + " Schedule a periodic program with start and end dates instead.");
            }
            program.setStatus(RewardProgramStatus.ACTIVE);
            program.setStartDate(LocalDateTime.now());
        } else {
            if (program.getStartDate() == null) {
                throw new InvalidProgramStateException("Start date must be set to schedule a program.");
            }
            Instant startInstant = parseStartDateToInstantWelcome(request);
            if (startInstant != null && startInstant.isBefore(Instant.now().minus(5, ChronoUnit.MINUTES))) {
                throw new InvalidProgramStateException("Start date must be in the future for scheduled launch.");
            }
            ScheduleOverlapCheckResponse overlap = checkScheduleOverlap(
                    program.getType(), program.getStartDate(), program.getEndDate(), program.getUuid());
            if (overlap.isOverlaps()) {
                throw new InvalidProgramStateException(
                        "This program's period overlaps with an existing program of the same type: "
                                + (overlap.getOverlappingProgramName() != null ? overlap.getOverlappingProgramName() : "unknown"));
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

    @Override
    @Transactional(readOnly = true)
    public Optional<RewardProgram> getEffectiveActiveWelcomeProgram(LocalDateTime at) {
        List<RewardProgram> candidates = rewardProgramRepository.findByTypeAndStatusInWithWelcomeRule(
                RewardProgramType.WELCOME, List.of(RewardProgramStatus.ACTIVE));
        return candidates.stream()
                .filter(p -> p.getStartDate() != null && !at.isBefore(p.getStartDate()))
                .filter(p -> p.getEndDate() == null || !at.isAfter(p.getEndDate()))
                .findFirst();
    }

    @Override
    @Transactional(readOnly = true)
    public ScheduleOverlapCheckResponse checkScheduleOverlap(RewardProgramType type,
                                                             LocalDateTime start, LocalDateTime end, UUID excludeUuid) {
        List<RewardProgram> candidates = rewardProgramRepository.findByTypeAndStatusIn(type,
                List.of(RewardProgramStatus.ACTIVE, RewardProgramStatus.SCHEDULED));
        String alwaysOnName = null;
        for (RewardProgram other : candidates) {
            if (other.getUuid().equals(excludeUuid)) {
                continue;
            }
            LocalDateTime otherStart = other.getStartDate();
            if (otherStart == null) {
                continue;
            }
            boolean otherAlwaysOn = other.getEndDate() == null;
            // New program has end date and existing is always-on → allowed (always-on ignored during new program's period)
            if (otherAlwaysOn && end != null) {
                if (alwaysOnName == null) {
                    alwaysOnName = other.getName() != null && !other.getName().isBlank() ? other.getName() : "Always-on program";
                }
                continue;
            }
            // Both always-on (new has no end) and other has no end → overlap (only one always-on allowed)
            if (otherAlwaysOn && end == null) {
                return ScheduleOverlapCheckResponse.builder()
                        .overlaps(true)
                        .overlappingProgramName(other.getName() != null ? other.getName() : "Always-on program")
                        .alwaysOnConflict(true)
                        .build();
            }
            // Dated overlap: new [start, end] vs other [otherStart, otherEnd]
            LocalDateTime otherEnd = other.getEndDate();
            boolean overlaps = start.isBefore(otherEnd != null ? otherEnd : LocalDateTime.MAX)
                    && (end != null ? end : LocalDateTime.MAX).isAfter(otherStart);
            if (overlaps) {
                return ScheduleOverlapCheckResponse.builder()
                        .overlaps(true)
                        .overlappingProgramName(other.getName() != null ? other.getName() : "Program")
                        .alwaysOnConflict(false)
                        .build();
            }
        }
        return ScheduleOverlapCheckResponse.builder()
                .overlaps(false)
                .alwaysOnProgramName(alwaysOnName)
                .build();
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

    private void assertWelcomeType(RewardProgram program) {
        if (program.getType() != RewardProgramType.WELCOME) {
            throw new IllegalArgumentException(
                    "This operation is only valid for WELCOME programs. Type: " + program.getType());
        }
    }

    private WelcomeProgramRule ensureWelcomeRule(RewardProgram program) {
        if (program.getWelcomeRule() == null) {
            WelcomeProgramRule rule = new WelcomeProgramRule();
            rule.setProgram(program);
            rule.setGrantType(WelcomeGrantType.POINTS);
            rule.setGrantValue(BigDecimal.ZERO);
            rule.setGrantTrigger(GrantTrigger.ON_JOIN);
            program.setWelcomeRule(rule);
        }
        return program.getWelcomeRule();
    }

    private Instant parseStartDateToInstantWelcome(LaunchWelcomeProgramRequest request) {
        String s = request.getStartDate();
        if (s == null || s.isBlank()) return null;
        try {
            return Instant.parse(s);
        } catch (Exception e) {
            try {
                return LocalDateTime.parse(s, DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                        .atZone(ZoneId.systemDefault()).toInstant();
            } catch (Exception e2) {
                return null;
            }
        }
    }

    private void applyWelcomeData(RewardProgram program, LaunchWelcomeProgramRequest request) {
        if (request.getName() != null) {
            program.setName(request.getName());
        }
        if (request.getDescription() != null) {
            program.setDescription(request.getDescription());
        }
        if (request.getStartDate() != null && !request.getStartDate().isBlank()) {
            program.setStartDate(parseIsoToLocalDateTime(request.getStartDate()));
        }
        if (request.getEndDate() != null && !request.getEndDate().isBlank()) {
            program.setEndDate(parseIsoToLocalDateTime(request.getEndDate()));
        } else {
            program.setEndDate(null);
        }

        WelcomeProgramRule rule = ensureWelcomeRule(program);
        if (request.getGrantType() != null) {
            rule.setGrantType(request.getGrantType());
        }
        if (request.getGrantValue() != null) {
            rule.setGrantValue(request.getGrantValue());
        }
        if (request.getBonusLifespanDays() != null) {
            rule.setBonusLifespanDays(request.getBonusLifespanDays());
        }
        if (request.getGrantTrigger() != null) {
            rule.setGrantTrigger(request.getGrantTrigger());
        }
        if (request.getFirstPayMode() != null) {
            rule.setFirstPayMode(request.getFirstPayMode());
        }
    }

    /** Parse request start date (ISO-8601) to Instant for timezone-safe "in the future" validation. */
    private Instant parseStartDateToInstant(LaunchCashbackProgramRequest request) {
        String s = request.getStartDate();
        if (s == null || s.isBlank()) return null;
        try {
            return Instant.parse(s);
        } catch (Exception e) {
            try {
                return LocalDateTime.parse(s, DateTimeFormatter.ISO_LOCAL_DATE_TIME)
                        .atZone(ZoneId.systemDefault()).toInstant();
            } catch (Exception e2) {
                return null;
            }
        }
    }

    /** Parse ISO-8601 string to LocalDateTime in system default zone (for storage). */
    private LocalDateTime parseIsoToLocalDateTime(String iso) {
        if (iso == null || iso.isBlank()) return null;
        try {
            return Instant.parse(iso).atZone(ZoneId.systemDefault()).toLocalDateTime();
        } catch (Exception e) {
            try {
                return LocalDateTime.parse(iso, DateTimeFormatter.ISO_LOCAL_DATE_TIME);
            } catch (Exception e2) {
                throw new IllegalArgumentException("Invalid date-time: " + iso, e2);
            }
        }
    }

    private void applyCashbackData(RewardProgram program, LaunchCashbackProgramRequest request) {
        if (request.getName() != null) {
            program.setName(request.getName());
        }
        if (request.getDescription() != null) {
            program.setDescription(request.getDescription());
        }
        if (request.getStartDate() != null && !request.getStartDate().isBlank()) {
            program.setStartDate(parseIsoToLocalDateTime(request.getStartDate()));
        }
        if (request.getEndDate() != null && !request.getEndDate().isBlank()) {
            program.setEndDate(parseIsoToLocalDateTime(request.getEndDate()));
        } else {
            program.setEndDate(null);
        }

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

        if (program.getType() == RewardProgramType.WELCOME) {
            WelcomeProgramRule rule = program.getWelcomeRule();
            if (rule == null) {
                errors.add("Welcome rules must be configured");
            } else {
                if (rule.getGrantType() == null) {
                    errors.add("Grant type is required");
                }
                if (rule.getGrantValue() == null || rule.getGrantValue().compareTo(BigDecimal.ZERO) <= 0) {
                    errors.add("Grant value is required and must be > 0");
                }
                if (rule.getGrantTrigger() == null) {
                    errors.add("Grant trigger is required");
                }
                if (rule.getGrantTrigger() == GrantTrigger.ON_FIRST_PAY && rule.getFirstPayMode() == null) {
                    errors.add("First pay mode is required when granting on first payment");
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
    public PagedTieredClientsResponse getTieredClients(UUID programUuid, Pageable pageable, String tierName, String search, String searchPhone, String sort) {
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

        if (search != null && !search.isBlank()) {
            Set<Long> clientIds = rows.stream().map(TieredClientRow::getClientId).collect(Collectors.toSet());
            Map<Long, Client> clientMapForSearch = clientRepository.findAllById(clientIds).stream()
                    .collect(Collectors.toMap(Client::getId, c -> c));
            String searchLower = search.trim().toLowerCase();
            rows.removeIf(r -> {
                Client c = clientMapForSearch.get(r.getClientId());
                String fullName = c != null ? ClientUtils.getFullName(c).toLowerCase() : "";
                return !fullName.contains(searchLower);
            });
        }
        if (searchPhone != null && !searchPhone.isBlank()) {
            Set<Long> clientIds = rows.stream().map(TieredClientRow::getClientId).collect(Collectors.toSet());
            Map<Long, Client> clientMapForPhone = clientRepository.findAllById(clientIds).stream()
                    .collect(Collectors.toMap(Client::getId, c -> c));
            String phoneSearch = searchPhone.trim();
            rows.removeIf(r -> {
                Client c = clientMapForPhone.get(r.getClientId());
                String phone = c != null && c.getPhone() != null ? c.getPhone() : "";
                return !phone.contains(phoneSearch);
            });
        }

        sortTieredRows(rows, sort);

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

    private void sortTieredRows(List<TieredClientRow> rows, String sort) {
        if (sort == null || sort.isBlank()) {
            rows.sort(Comparator.comparing(TieredClientRow::getTierSortOrder)
                    .thenComparing(TieredClientRow::getSpend, Comparator.reverseOrder()));
            return;
        }
        String[] parts = sort.split(",");
        String property = parts.length > 0 ? parts[0].trim().toLowerCase() : "";
        boolean desc = parts.length > 1 && "desc".equalsIgnoreCase(parts[1].trim());

        Comparator<TieredClientRow> comp;
        if ("percenttonexttier".equals(property) || "percentToNextTier".equals(property)) {
            comp = Comparator.comparing(TieredClientRow::getPercentToNextTier,
                    Comparator.nullsLast(Comparator.naturalOrder()));
        } else {
            comp = Comparator.comparing(TieredClientRow::getSpend);
        }
        if (desc) comp = comp.reversed();
        rows.sort(Comparator.comparing(TieredClientRow::getTierSortOrder).thenComparing(comp));
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
        String alwaysOnName = program.getEndDate() != null ? findAlwaysOnProgramName(program) : null;
        // Only always-on programs (no end date) are "ignored" when a dated program is active; set for them only.
        String ignoredDuringName = program.getEndDate() == null ? findIgnoredDuringProgramName(program) : null;
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
                .welcomeRule(mapWelcomeRule(program.getWelcomeRule()))
                .createdAt(program.getCreatedAt())
                .updatedAt(program.getUpdatedAt())
                .alwaysOnProgramName(alwaysOnName)
                .ignoredDuringProgramName(ignoredDuringName)
                .build();
    }

    private RewardProgramListItem toListItem(RewardProgram program) {
        String alwaysOnName = program.getEndDate() != null ? findAlwaysOnProgramName(program) : null;
        // Only always-on programs are "ignored" when a dated program is active.
        String ignoredDuringName = program.getEndDate() == null ? findIgnoredDuringProgramName(program) : null;
        RewardProgramListItem.RewardProgramListItemBuilder b = RewardProgramListItem.builder()
                .uuid(program.getUuid())
                .type(program.getType())
                .status(program.getStatus())
                .name(program.getName())
                .startDate(program.getStartDate())
                .endDate(program.getEndDate())
                .createdAt(program.getCreatedAt())
                .alwaysOnProgramName(alwaysOnName)
                .ignoredDuringProgramName(ignoredDuringName);
        if (program.getType() == RewardProgramType.CASHBACK && program.getCashbackRule() != null) {
            var rule = program.getCashbackRule();
            b.cashbackType(rule.getCashbackType())
                    .cashbackValue(rule.getCashbackValue())
                    .minSpendAmount(rule.getMinSpendAmount())
                    .pointsSpendThreshold(rule.getPointsSpendThreshold());
        }
        if (program.getType() == RewardProgramType.WELCOME && program.getWelcomeRule() != null) {
            var rule = program.getWelcomeRule();
            b.welcomeGrantType(rule.getGrantType())
                    .welcomeGrantValue(rule.getGrantValue());
        }
        return b.build();
    }

    /** When the given program has an end date, returns the name of an always-on (no end date) program of the same type, if any. */
    private String findAlwaysOnProgramName(RewardProgram program) {
        List<RewardProgram> sameType = rewardProgramRepository.findByTypeAndStatusIn(program.getType(),
                List.of(RewardProgramStatus.ACTIVE, RewardProgramStatus.SCHEDULED));
        Optional<RewardProgram> alwaysOn = sameType.stream()
                .filter(p -> !p.getUuid().equals(program.getUuid()))
                .filter(p -> p.getEndDate() == null)
                .findFirst();
        return alwaysOn.map(p -> p.getName() != null && !p.getName().isBlank() ? p.getName() : "Always-on program").orElse(null);
    }

    /** When the given program is always-on (no end date), returns the name of a dated program of the same type that overrides it during its period, if any. */
    private String findIgnoredDuringProgramName(RewardProgram program) {
        List<RewardProgram> sameType = rewardProgramRepository.findByTypeAndStatusIn(program.getType(),
                List.of(RewardProgramStatus.ACTIVE, RewardProgramStatus.SCHEDULED));
        Optional<RewardProgram> dated = sameType.stream()
                .filter(p -> !p.getUuid().equals(program.getUuid()))
                .filter(p -> p.getEndDate() != null)
                .findFirst();
        return dated.map(p -> p.getName() != null && !p.getName().isBlank() ? p.getName() : "Scheduled program").orElse(null);
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

    private WelcomeProgramRuleResponse mapWelcomeRule(WelcomeProgramRule rule) {
        if (rule == null) {
            return null;
        }
        return WelcomeProgramRuleResponse.builder()
                .grantType(rule.getGrantType())
                .grantValue(rule.getGrantValue())
                .bonusLifespanDays(rule.getBonusLifespanDays())
                .grantTrigger(rule.getGrantTrigger())
                .firstPayMode(rule.getFirstPayMode())
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
