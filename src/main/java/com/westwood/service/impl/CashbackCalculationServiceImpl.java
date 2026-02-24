package com.westwood.service.impl;

import com.westwood.common.dto.CashbackContextDto;
import com.westwood.common.dto.TierInfoDto;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.*;
import com.westwood.repository.*;
import com.westwood.service.CashbackCalculationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class CashbackCalculationServiceImpl implements CashbackCalculationService {

    private static final Logger logger = LoggerFactory.getLogger(CashbackCalculationServiceImpl.class);

    private final RewardProgramRepository rewardProgramRepository;
    private final ClientRepository clientRepository;
    private final PaymentTransactionRepository paymentRepository;
    private final BonusEventRepository bonusEventRepository;

    public CashbackCalculationServiceImpl(
            RewardProgramRepository rewardProgramRepository,
            ClientRepository clientRepository,
            PaymentTransactionRepository paymentRepository,
            BonusEventRepository bonusEventRepository) {
        this.rewardProgramRepository = rewardProgramRepository;
        this.clientRepository = clientRepository;
        this.paymentRepository = paymentRepository;
        this.bonusEventRepository = bonusEventRepository;
    }

    /**
     * Among ACTIVE cashback programs, returns the one effective at the given time: whose period contains now.
     * When a dated program and an always-on program both cover now, the dated program wins (always-on is ignored during dated program's period).
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<RewardProgram> getEffectiveActiveCashbackProgram(LocalDateTime at) {
        return findEffectiveActiveCashbackProgram(at);
    }

    private Optional<RewardProgram> findEffectiveActiveCashbackProgram(LocalDateTime now) {
        List<RewardProgram> active = rewardProgramRepository.findByTypeAndStatusInWithCashbackRule(
                RewardProgramType.CASHBACK, List.of(RewardProgramStatus.ACTIVE));
        List<RewardProgram> covering = active.stream()
                .filter(p -> p.getStartDate() != null && !p.getStartDate().isAfter(now))
                .filter(p -> p.getEndDate() == null || !p.getEndDate().isBefore(now))
                .toList();
        if (covering.isEmpty()) {
            return Optional.empty();
        }
        // Prefer dated program (has end date) over always-on when both cover now; then by start date descending
        return covering.stream()
                .max(Comparator.comparing((RewardProgram p) -> p.getEndDate() != null)
                        .thenComparing(RewardProgram::getStartDate, Comparator.nullsLast(Comparator.reverseOrder())));
    }

    @Override
    public void processPaymentCashback(String paymentTxId, UUID clientId, BigDecimal paymentAmount) {
        try {
            Optional<RewardProgram> activeProgramOpt = findEffectiveActiveCashbackProgram(LocalDateTime.now());

            if (activeProgramOpt.isEmpty()) {
                logger.info("No active cashback program found, skipping cashback for payment: {}", paymentTxId);
                return;
            }

            RewardProgram program = activeProgramOpt.get();
            logger.info("Active cashback program found: {} (uuid={})", program.getName(), program.getUuid());
            CashbackProgramRule rule = program.getCashbackRule();

            if (rule == null) {
                logger.warn("Active cashback program {} has no rules configured, skipping", program.getUuid());
                return;
            }

            if (!isWithinScheduleWindow(program)) {
                logger.info("Payment {} is outside cashback program schedule window, skipping", paymentTxId);
                return;
            }

            if (rule.getMinSpendAmount() != null
                    && rule.getMinSpendAmount().compareTo(BigDecimal.ZERO) > 0
                    && paymentAmount.compareTo(rule.getMinSpendAmount()) < 0) {
                logger.info("Payment amount {} is below minimum spend {} for cashback, skipping",
                        paymentAmount, rule.getMinSpendAmount());
                return;
            }

            Client client = clientRepository.findByUuid(clientId)
                    .orElseThrow(() -> new ResourceNotFoundException("Client not found: " + clientId));

            if (client.getClientType() != ClientType.INDIVIDUAL) {
                logger.info("Client {} is not INDIVIDUAL, skipping cashback", clientId);
                return;
            }

            PaymentTransaction payment = paymentRepository.findByTxId(paymentTxId)
                    .orElseThrow(() -> new ResourceNotFoundException("Payment not found: " + paymentTxId));

            BigDecimal bonusAmount = calculateBonusAmount(rule, program.getCashbackTiers(), paymentAmount, client, program);

            if (bonusAmount.compareTo(BigDecimal.ZERO) <= 0) {
                logger.info("Calculated bonus amount is 0 for payment {} (cashbackValue={}, type={}), skipping",
                        paymentTxId, rule.getCashbackValue(), rule.getCashbackType());
                return;
            }

            BonusGranted bonusGranted = new BonusGranted();
            bonusGranted.setClient(client);
            bonusGranted.setEventId(UUID.randomUUID());
            bonusGranted.setBonusAmount(bonusAmount);
            bonusGranted.setRewardProgram(program);
            bonusGranted.setPaymentTransaction(payment);
            bonusGranted.setPaymentAmount(paymentAmount);
            bonusGranted.setGrantReason("CASHBACK");

            if (rule.getCashbackType() == CashbackType.PERCENTAGE) {
                bonusGranted.setBonusPercentage(rule.getCashbackValue());
            }

            if (rule.getBonusLifespanDays() != null && rule.getBonusLifespanDays() > 0) {
                bonusGranted.setExpiresAt(LocalDateTime.now().plusDays(rule.getBonusLifespanDays()));
            }

            bonusEventRepository.save(bonusGranted);
            logger.info("Cashback bonus of {} granted to client {} for payment {}",
                    bonusAmount, clientId, paymentTxId);
        } catch (Exception e) {
            logger.error("Error in processPaymentCashback for payment {}: {}", paymentTxId, e.getMessage(), e);
        }
    }

    /**
     * Check if the current time falls within the program's weekly schedule.
     * If no schedule entries exist, or no entries are enabled, the program is considered always active.
     */
    private boolean isWithinScheduleWindow(RewardProgram program) {
        List<ProgramWeeklySchedule> schedules = program.getWeeklySchedules();
        if (schedules == null || schedules.isEmpty()) {
            return true;
        }

        boolean anyEnabled = schedules.stream().anyMatch(s -> Boolean.TRUE.equals(s.getEnabled()));
        if (!anyEnabled) {
            return true;
        }

        LocalDateTime now = LocalDateTime.now();
        DayOfWeek today = now.getDayOfWeek();
        LocalTime currentTime = now.toLocalTime();

        Optional<ProgramWeeklySchedule> todaySchedule = schedules.stream()
                .filter(s -> s.getDayOfWeek() == today)
                .findFirst();

        if (todaySchedule.isEmpty()) {
            return false;
        }

        ProgramWeeklySchedule schedule = todaySchedule.get();
        if (!Boolean.TRUE.equals(schedule.getEnabled())) {
            return false;
        }

        LocalTime start = schedule.getStartTime();
        LocalTime end = schedule.getEndTime();

        if (start == null && end == null) {
            return true;
        }
        if (start != null && end != null && !end.isAfter(start)) {
            // Overnight window (e.g. 08:00–02:00): inside if current >= start OR current <= end
            return !currentTime.isBefore(start) || !currentTime.isAfter(end);
        }
        if (start != null && currentTime.isBefore(start)) {
            return false;
        }
        if (end != null && currentTime.isAfter(end)) {
            return false;
        }
        return true;
    }

    /**
     * Calculate the bonus amount based on cashback type, base rate, and any applicable tier.
     *
     * PERCENTAGE: paymentAmount * (baseRate + tierExtra) / 100
     * BONUS_POINTS: floor(paymentAmount / pointsSpendThreshold) * (basePoints + tierExtra)
     *   e.g. threshold=1000, basePoints=1, payment=3500 → floor(3.5) * 1 = 3 points
     */
    private BigDecimal calculateBonusAmount(
            CashbackProgramRule rule,
            List<CashbackTier> tiers,
            BigDecimal paymentAmount,
            Client client,
            RewardProgram program) {

        BigDecimal baseRate = rule.getCashbackValue() != null ? rule.getCashbackValue() : BigDecimal.ZERO;
        BigDecimal tierExtra = findApplicableTierExtra(tiers, client, program);
        BigDecimal totalRate = baseRate.add(tierExtra);

        if (rule.getCashbackType() == CashbackType.PERCENTAGE) {
            return paymentAmount.multiply(totalRate)
                    .divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
        } else {
            // BONUS_POINTS: earn totalRate points for every pointsSpendThreshold spent
            BigDecimal threshold = rule.getPointsSpendThreshold();
            if (threshold == null || threshold.compareTo(BigDecimal.ZERO) <= 0) {
                logger.warn("BONUS_POINTS program {} has no valid pointsSpendThreshold, skipping", rule.getProgram().getUuid());
                return BigDecimal.ZERO;
            }
            BigDecimal units = paymentAmount.divide(threshold, 0, RoundingMode.DOWN);
            return units.multiply(totalRate).setScale(2, RoundingMode.HALF_UP);
        }
    }

    @Override
    @Transactional(readOnly = true)
    public CashbackContextDto getCashbackContext(UUID clientId) {
        Optional<RewardProgram> activeProgramOpt = findEffectiveActiveCashbackProgram(LocalDateTime.now());

        if (activeProgramOpt.isEmpty()) {
            CashbackContextDto dto = new CashbackContextDto();
            dto.setActive(false);
            return dto;
        }

        RewardProgram program = activeProgramOpt.get();
        CashbackProgramRule rule = program.getCashbackRule();

        if (rule == null) {
            CashbackContextDto dto = new CashbackContextDto();
            dto.setActive(false);
            return dto;
        }

        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client not found: " + clientId));

        BigDecimal totalSpend = getSpendForTier(program, client.getId());
        BigDecimal baseRate = rule.getCashbackValue();
        BigDecimal tierExtra = BigDecimal.ZERO;
        TierInfoDto tierInfo = null;

        List<CashbackTier> tiers = program.getCashbackTiers();
        if (tiers != null && !tiers.isEmpty()) {
            Optional<CashbackTier> applicableTier = tiers.stream()
                    .filter(tier -> totalSpend.compareTo(tier.getMinAmount()) >= 0)
                    .filter(tier -> tier.getMaxAmount() == null || totalSpend.compareTo(tier.getMaxAmount()) <= 0)
                    .findFirst();

            if (applicableTier.isPresent()) {
                CashbackTier tier = applicableTier.get();
                tierExtra = tier.getExtraEarningPercent();
                tierInfo = new TierInfoDto(
                        tier.getName(),
                        tier.getExtraEarningPercent(),
                        tier.getMinAmount(),
                        tier.getMaxAmount()
                );
            }
        }

        CashbackContextDto dto = new CashbackContextDto();
        dto.setActive(true);
        dto.setProgramName(program.getName());
        dto.setCashbackType(rule.getCashbackType());
        dto.setBaseRate(baseRate);
        dto.setPointsSpendThreshold(rule.getPointsSpendThreshold());
        dto.setMinSpendAmount(rule.getMinSpendAmount());
        dto.setRedeemLimitPercent(rule.getRedeemLimitPercent());
        dto.setBonusLifespanDays(rule.getBonusLifespanDays());
        dto.setEligibilityType(rule.getEligibilityType());
        dto.setCurrentTier(tierInfo);
        dto.setEffectiveRate(baseRate.add(tierExtra));
        dto.setClientTotalSpend(totalSpend);

        return dto;
    }

    /**
     * Spend used for tier: program-period only when program has startDate (so pre-program spend does not count).
     * When program has ended (endDate in the past), tier is effectively none for display; for bonus we only run when program is ACTIVE.
     */
    private BigDecimal getSpendForTier(RewardProgram program, Long clientId) {
        if (program.getStartDate() != null) {
            LocalDateTime end = program.getEndDate() != null && program.getEndDate().isBefore(LocalDateTime.now())
                    ? program.getEndDate() : LocalDateTime.now();
            return calculateClientSpendInProgramPeriod(clientId, program.getStartDate(), end);
        }
        return calculateClientTotalSpend(clientId);
    }

    private BigDecimal calculateClientSpendInProgramPeriod(Long clientId, LocalDateTime start, LocalDateTime end) {
        BigDecimal sum = paymentRepository.calculateCompletedSpendByClientAndTimeRange(clientId, start, end);
        return sum != null ? sum : BigDecimal.ZERO;
    }

    /**
     * Find the extra earning percentage from tiers based on client's spend in program period (or all-time if no startDate).
     * Returns BigDecimal.ZERO if no tiers are configured or client doesn't qualify.
     */
    private BigDecimal findApplicableTierExtra(List<CashbackTier> tiers, Client client, RewardProgram program) {
        if (tiers == null || tiers.isEmpty()) {
            return BigDecimal.ZERO;
        }

        BigDecimal totalSpend = getSpendForTier(program, client.getId());

        return tiers.stream()
                .filter(tier -> totalSpend.compareTo(tier.getMinAmount()) >= 0)
                .filter(tier -> tier.getMaxAmount() == null || totalSpend.compareTo(tier.getMaxAmount()) <= 0)
                .map(CashbackTier::getExtraEarningPercent)
                .findFirst()
                .orElse(BigDecimal.ZERO);
    }

    private BigDecimal calculateClientTotalSpend(Long clientId) {
        return paymentRepository.findByClientIdOrderByCreatedAtDesc(clientId).stream()
                .filter(p -> p.getStatus() == PaymentTransaction.PaymentStatus.COMPLETED)
                .map(PaymentTransaction::getAmount)
                .filter(amount -> amount.compareTo(BigDecimal.ZERO) > 0)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
