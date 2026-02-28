package com.westwood.service.impl;

import com.westwood.common.dto.BonusesInCirculationDto;
import com.westwood.common.dto.BonusTypeReportDto;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusType;
import com.westwood.domain.BonusTypeEnum;
import com.westwood.domain.PaymentTransaction;
import com.westwood.domain.RewardProgram;
import com.westwood.domain.RewardProgramType;
import com.westwood.repository.*;
import com.westwood.service.AnalyticsService;
import com.westwood.service.BonusTypeReportService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class BonusTypeReportServiceImpl implements BonusTypeReportService {

    private static final int SCALE = 4;
    private static final RoundingMode ROUNDING = RoundingMode.HALF_UP;
    private static final String ALL_BONUSES_NAME = "Общая статистика";

    private final BonusTypeRepository bonusTypeRepository;
    private final BonusEventRepository bonusEventRepository;
    private final BonusConsumptionRepository bonusConsumptionRepository;
    private final PaymentTransactionRepository paymentRepository;
    private final ClientRepository clientRepository;
    private final AnalyticsService analyticsService;
    private final RewardProgramRepository rewardProgramRepository;

    public BonusTypeReportServiceImpl(BonusTypeRepository bonusTypeRepository,
                                      BonusEventRepository bonusEventRepository,
                                      BonusConsumptionRepository bonusConsumptionRepository,
                                      PaymentTransactionRepository paymentRepository,
                                      ClientRepository clientRepository,
                                      AnalyticsService analyticsService,
                                      RewardProgramRepository rewardProgramRepository) {
        this.bonusTypeRepository = bonusTypeRepository;
        this.bonusEventRepository = bonusEventRepository;
        this.bonusConsumptionRepository = bonusConsumptionRepository;
        this.paymentRepository = paymentRepository;
        this.clientRepository = clientRepository;
        this.analyticsService = analyticsService;
        this.rewardProgramRepository = rewardProgramRepository;
    }

    @Override
    public BonusTypeReportDto getReportByRewardProgram(UUID rewardProgramUuid, LocalDateTime from, LocalDateTime to) {
        RewardProgram program = rewardProgramRepository.findByUuid(rewardProgramUuid)
                .orElseThrow(() -> new ResourceNotFoundException("Reward program not found: " + rewardProgramUuid));
        Long rewardProgramId = program.getId();
        return getReportByRewardProgramId(program, rewardProgramId, from, to);
    }

    /** Build report scoped only to grants/consumption linked to this reward program (no bonus_type). */
    private BonusTypeReportDto getReportByRewardProgramId(RewardProgram program, Long rewardProgramId, LocalDateTime from, LocalDateTime to) {
        Set<Long> paymentIdsWithBonus = new HashSet<>(bonusConsumptionRepository.findCompletedPaymentIdsThatConsumedRewardProgramInPeriod(rewardProgramId, from, to));
        List<PaymentTransaction> allPayments = paymentRepository.findCompletedByCreatedAtBetween(from, to);
        List<PaymentTransaction> withBonus = allPayments.stream().filter(p -> paymentIdsWithBonus.contains(p.getId())).collect(Collectors.toList());
        List<PaymentTransaction> withoutBonus = allPayments.stream().filter(p -> !paymentIdsWithBonus.contains(p.getId())).collect(Collectors.toList());

        BigDecimal totalRevenue = allPayments.stream().map(PaymentTransaction::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal avgCheckWithBonus = averageAmount(withBonus);
        BigDecimal avgCheckWithoutBonus = averageAmount(withoutBonus);
        BigDecimal aovUplift = computeAovUplift(avgCheckWithBonus, avgCheckWithoutBonus);
        BigDecimal incrementalRevenue = computeIncrementalRevenue(withBonus, withoutBonus);
        BigDecimal incrementalPct = safeDividePercent(incrementalRevenue, totalRevenue);

        BigDecimal totalGranted = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByRewardProgramIdAndDateRange(rewardProgramId, from, to));
        long grantCount = bonusEventRepository.countGrantsByRewardProgramIdAndDateRange(rewardProgramId, from, to);
        BigDecimal spentAmount = nullToZero(bonusConsumptionRepository.sumAmountByRewardProgramIdAndDateRange(rewardProgramId, from, to));
        long consumptionCount = bonusConsumptionRepository.countConsumptionsByRewardProgramIdAndDateRange(rewardProgramId, from, to);
        BigDecimal inCirculation = BigDecimal.ZERO;
        List<BonusGranted> availableGrants = bonusEventRepository.findAvailableGrantsByRewardProgramId(rewardProgramId, LocalDateTime.now());
        for (BonusGranted g : availableGrants) {
            BigDecimal consumed = nullToZero(bonusConsumptionRepository.sumAmountByBonusGrantedId(g.getId()));
            BigDecimal remaining = g.getBonusAmount().subtract(consumed).max(BigDecimal.ZERO);
            inCirculation = inCirculation.add(remaining);
        }
        LocalDateTime burnStart = to.minusYears(1);
        List<BonusGranted> expiredGrantsTtm = bonusEventRepository.findGrantedExpiredInPeriodByRewardProgramId(burnStart, to, rewardProgramId);
        BigDecimal burnedAmount = BigDecimal.ZERO;
        for (BonusGranted g : expiredGrantsTtm) {
            BigDecimal consumed = nullToZero(bonusConsumptionRepository.sumAmountByBonusGrantedId(g.getId()));
            BigDecimal remaining = g.getBonusAmount().subtract(consumed).max(BigDecimal.ZERO);
            burnedAmount = burnedAmount.add(remaining);
        }
        List<BonusGranted> expiredGrantsInPeriod = bonusEventRepository.findGrantedExpiredInPeriodByRewardProgramId(from, to, rewardProgramId);
        long expiredGrantCount = expiredGrantsInPeriod.size();
        BigDecimal totalGrantedTtm = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByRewardProgramIdAndDateRange(rewardProgramId, burnStart, to));

        BigDecimal redemptionRate = safeDividePercent(spentAmount, totalGranted);
        BigDecimal effectiveDiscount = safeDividePercent(spentAmount, totalRevenue);
        BigDecimal burnRate = safeDividePercent(burnedAmount, totalGrantedTtm);

        List<BonusTypeReportDto.MonthlyReportPointDto> monthlyData = buildMonthlyDataByRewardProgram(rewardProgramId, from, to);

        BigDecimal retentionRatePercent = BigDecimal.ZERO;
        if (program.getType() == RewardProgramType.EVENT || program.getType() == RewardProgramType.BIRTHDAY) {
            Long grantedClients = bonusEventRepository.countDistinctClientsGrantedByRewardProgramIdInPeriod(rewardProgramId, from, to);
            Long consumedClients = bonusConsumptionRepository.countDistinctClientsConsumedByRewardProgramIdInPeriod(rewardProgramId, from, to);
            retentionRatePercent = grantedClients == null || grantedClients == 0
                    ? BigDecimal.ZERO
                    : safeDivide(BigDecimal.valueOf(consumedClients != null ? consumedClients : 0), BigDecimal.valueOf(grantedClients)).multiply(BigDecimal.valueOf(100)).setScale(2, ROUNDING);
        }

        BigDecimal conversionRatePercent = BigDecimal.ZERO;
        BigDecimal cac = BigDecimal.ZERO;
        if (program.getType() == RewardProgramType.REFERRAL) {
            Long referredTotal = clientRepository.countReferredClients();
            Long referredWithPurchase = clientRepository.countReferredClientsWithPurchase();
            conversionRatePercent = (referredTotal == null || referredTotal == 0)
                    ? BigDecimal.ZERO
                    : safeDivide(BigDecimal.valueOf(referredWithPurchase != null ? referredWithPurchase : 0), BigDecimal.valueOf(referredTotal)).multiply(BigDecimal.valueOf(100)).setScale(2, ROUNDING);
            BigDecimal totalReferralGranted = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByRewardProgramIdAllTime(rewardProgramId));
            cac = (referredWithPurchase == null || referredWithPurchase == 0)
                    ? BigDecimal.ZERO
                    : totalReferralGranted.divide(BigDecimal.valueOf(referredWithPurchase), 2, ROUNDING);
        }

        String programName = program.getName() != null && !program.getName().isBlank() ? program.getName() : "Reward program";
        return BonusTypeReportDto.builder()
                .bonusTypeId(null)
                .bonusTypeName(programName)
                .periodFrom(from.toString())
                .periodTo(to.toString())
                .transactionCount(withBonus.size())
                .transactionCountWithoutBonus(withoutBonus.size())
                .avgCheckWithBonus(avgCheckWithBonus.setScale(2, ROUNDING))
                .avgCheckWithoutBonus(avgCheckWithoutBonus.setScale(2, ROUNDING))
                .totalGranted(totalGranted.setScale(2, ROUNDING))
                .grantCount(grantCount)
                .inCirculation(inCirculation.setScale(2, ROUNDING))
                .burnedAmount(burnedAmount.setScale(2, ROUNDING))
                .expiredGrantCount(expiredGrantCount)
                .spentAmount(spentAmount.setScale(2, ROUNDING))
                .consumptionCount(consumptionCount)
                .redemptionRatePercent(redemptionRate.setScale(2, ROUNDING))
                .effectiveDiscountPercent(effectiveDiscount.setScale(2, ROUNDING))
                .burnRatePercent(burnRate.setScale(2, ROUNDING))
                .aovUpliftPercent(aovUplift.setScale(2, ROUNDING))
                .incrementalRevenuePercent(incrementalPct.setScale(2, ROUNDING))
                .retentionRatePercent(retentionRatePercent)
                .conversionRatePercent(conversionRatePercent)
                .cac(cac)
                .monthlyData(monthlyData)
                .build();
    }

    private List<BonusTypeReportDto.MonthlyReportPointDto> buildMonthlyDataByRewardProgram(Long rewardProgramId, LocalDateTime from, LocalDateTime to) {
        List<BonusTypeReportDto.MonthlyReportPointDto> result = new ArrayList<>();
        YearMonth start = YearMonth.from(from);
        YearMonth end = YearMonth.from(to);
        DateTimeFormatter monthFormatter = DateTimeFormatter.ofPattern("MMM yyyy", new Locale("ru"));
        for (YearMonth ym = start; !ym.isAfter(end); ym = ym.plusMonths(1)) {
            LocalDateTime monthStart = ym.atDay(1).atStartOfDay();
            LocalDateTime monthEnd = ym.atEndOfMonth().atTime(23, 59, 59);
            Set<Long> withBonusIds = new HashSet<>(bonusConsumptionRepository.findCompletedPaymentIdsThatConsumedRewardProgramInPeriod(rewardProgramId, monthStart, monthEnd));
            List<PaymentTransaction> monthPayments = paymentRepository.findCompletedByCreatedAtBetween(monthStart, monthEnd);
            List<PaymentTransaction> withBonus = monthPayments.stream().filter(p -> withBonusIds.contains(p.getId())).collect(Collectors.toList());
            List<PaymentTransaction> withoutBonus = monthPayments.stream().filter(p -> !withBonusIds.contains(p.getId())).collect(Collectors.toList());
            BigDecimal avgWith = averageAmount(withBonus);
            BigDecimal avgWithout = averageAmount(withoutBonus);
            BigDecimal monthRevenue = monthPayments.stream().map(PaymentTransaction::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
            result.add(new BonusTypeReportDto.MonthlyReportPointDto(
                    ym.format(monthFormatter),
                    ym.toString(),
                    avgWith.setScale(2, ROUNDING),
                    avgWithout.setScale(2, ROUNDING),
                    withBonus.size(),
                    withoutBonus.size(),
                    monthRevenue.setScale(2, ROUNDING)
            ));
        }
        return result;
    }

    @Override
    public BonusTypeReportDto getReport(Long bonusTypeId, LocalDateTime from, LocalDateTime to) {
        final boolean isAllBonuses = (bonusTypeId == null);
        BonusType bonusType = null;
        if (!isAllBonuses) {
            bonusType = bonusTypeRepository.findById(bonusTypeId)
                    .orElseThrow(() -> new ResourceNotFoundException("Bonus type not found: " + bonusTypeId));
        }

        Set<Long> paymentIdsWithBonus;
        if (isAllBonuses) {
            paymentIdsWithBonus = new HashSet<>(bonusConsumptionRepository.findCompletedPaymentIdsThatConsumedAnyBonusInPeriod(from, to));
        } else {
            paymentIdsWithBonus = new HashSet<>(bonusConsumptionRepository.findCompletedPaymentIdsThatConsumedBonusTypeInPeriod(bonusTypeId, from, to));
        }
        List<PaymentTransaction> allPayments = paymentRepository.findCompletedByCreatedAtBetween(from, to);

        List<PaymentTransaction> withBonus = allPayments.stream().filter(p -> paymentIdsWithBonus.contains(p.getId())).collect(Collectors.toList());
        List<PaymentTransaction> withoutBonus = allPayments.stream().filter(p -> !paymentIdsWithBonus.contains(p.getId())).collect(Collectors.toList());

        BigDecimal totalRevenue = allPayments.stream().map(PaymentTransaction::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal avgCheckWithBonus = averageAmount(withBonus);
        BigDecimal avgCheckWithoutBonus = averageAmount(withoutBonus);
        BigDecimal aovUplift = computeAovUplift(avgCheckWithBonus, avgCheckWithoutBonus);
        BigDecimal incrementalRevenue = computeIncrementalRevenue(withBonus, withoutBonus);
        BigDecimal incrementalPct = safeDividePercent(incrementalRevenue, totalRevenue);

        BigDecimal totalGranted;
        BigDecimal spentAmount;
        BigDecimal inCirculation;
        BigDecimal burnedAmount;
        BigDecimal totalGrantedTtm;
        if (isAllBonuses) {
            totalGranted = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByDateRange(from, to));
            spentAmount = nullToZero(bonusConsumptionRepository.sumAmountByDateRange(from, to));
            BonusesInCirculationDto circ = analyticsService.getBonusesInCirculation();
            inCirculation = circ.getAmount() != null ? circ.getAmount() : BigDecimal.ZERO;
            LocalDateTime burnStart = to.minusYears(1);
            List<BonusGranted> expiredAll = bonusEventRepository.findGrantedExpiredInPeriod(burnStart, to);
            burnedAmount = BigDecimal.ZERO;
            for (BonusGranted g : expiredAll) {
                BigDecimal consumed = nullToZero(bonusConsumptionRepository.sumAmountByBonusGrantedId(g.getId()));
                BigDecimal remaining = g.getBonusAmount().subtract(consumed).max(BigDecimal.ZERO);
                burnedAmount = burnedAmount.add(remaining);
            }
            totalGrantedTtm = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByDateRange(burnStart, to));
        } else {
            totalGranted = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByBonusTypeIdAndDateRange(bonusTypeId, from, to));
            spentAmount = nullToZero(bonusConsumptionRepository.sumAmountByBonusTypeIdAndDateRange(bonusTypeId, from, to));
            inCirculation = BigDecimal.ZERO;
            List<BonusGranted> availableGrants = bonusEventRepository.findAvailableGrantsByBonusTypeId(bonusTypeId, LocalDateTime.now());
            for (BonusGranted g : availableGrants) {
                BigDecimal consumed = nullToZero(bonusConsumptionRepository.sumAmountByBonusGrantedId(g.getId()));
                BigDecimal remaining = g.getBonusAmount().subtract(consumed).max(BigDecimal.ZERO);
                inCirculation = inCirculation.add(remaining);
            }
            LocalDateTime burnStart = to.minusYears(1);
            List<BonusGranted> expiredGrants = bonusEventRepository.findGrantedExpiredInPeriodByBonusTypeId(burnStart, to, bonusTypeId);
            burnedAmount = BigDecimal.ZERO;
            for (BonusGranted g : expiredGrants) {
                BigDecimal consumed = nullToZero(bonusConsumptionRepository.sumAmountByBonusGrantedId(g.getId()));
                BigDecimal remaining = g.getBonusAmount().subtract(consumed).max(BigDecimal.ZERO);
                burnedAmount = burnedAmount.add(remaining);
            }
            totalGrantedTtm = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByBonusTypeIdAndDateRange(bonusTypeId, burnStart, to));
        }
        BigDecimal redemptionRate = safeDividePercent(spentAmount, totalGranted);
        BigDecimal effectiveDiscount = safeDividePercent(spentAmount, totalRevenue);
        BigDecimal burnRate = safeDividePercent(burnedAmount, totalGrantedTtm);

        List<BonusTypeReportDto.MonthlyReportPointDto> monthlyData = buildMonthlyData(bonusTypeId, from, to);

        BigDecimal retentionRatePercent = null;
        if (!isAllBonuses && bonusType != null && (bonusType.getType() == BonusTypeEnum.WELCOME || bonusType.getType() == BonusTypeEnum.BIRTHDAY)) {
            Long grantedClients = bonusEventRepository.countDistinctClientsGrantedByBonusTypeInPeriod(bonusTypeId, from, to);
            Long consumedClients = bonusConsumptionRepository.countDistinctClientsConsumedByBonusTypeInPeriod(bonusTypeId, from, to);
            retentionRatePercent = grantedClients == null || grantedClients == 0
                    ? BigDecimal.ZERO
                    : safeDivide(BigDecimal.valueOf(consumedClients != null ? consumedClients : 0), BigDecimal.valueOf(grantedClients)).multiply(BigDecimal.valueOf(100)).setScale(2, ROUNDING);
        }

        BigDecimal conversionRatePercent = null;
        BigDecimal cac = null;
        if (!isAllBonuses && bonusType != null && bonusType.getType() == BonusTypeEnum.REFERRAL) {
            Long referredTotal = clientRepository.countReferredClients();
            Long referredWithPurchase = clientRepository.countReferredClientsWithPurchase();
            conversionRatePercent = (referredTotal == null || referredTotal == 0)
                    ? BigDecimal.ZERO
                    : safeDivide(BigDecimal.valueOf(referredWithPurchase != null ? referredWithPurchase : 0), BigDecimal.valueOf(referredTotal)).multiply(BigDecimal.valueOf(100)).setScale(2, ROUNDING);
            BigDecimal totalReferralGranted = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByBonusTypeIdAllTime(bonusTypeId));
            cac = (referredWithPurchase == null || referredWithPurchase == 0)
                    ? BigDecimal.ZERO
                    : totalReferralGranted.divide(BigDecimal.valueOf(referredWithPurchase), 2, ROUNDING);
        }

        return BonusTypeReportDto.builder()
                .bonusTypeId(bonusTypeId)
                .bonusTypeName(isAllBonuses ? ALL_BONUSES_NAME : bonusType.getName())
                .periodFrom(from.toString())
                .periodTo(to.toString())
                .transactionCount(withBonus.size())
                .transactionCountWithoutBonus(withoutBonus.size())
                .avgCheckWithBonus(avgCheckWithBonus.setScale(2, ROUNDING))
                .avgCheckWithoutBonus(avgCheckWithoutBonus.setScale(2, ROUNDING))
                .totalGranted(totalGranted.setScale(2, ROUNDING))
                .inCirculation(inCirculation.setScale(2, ROUNDING))
                .burnedAmount(burnedAmount.setScale(2, ROUNDING))
                .spentAmount(spentAmount.setScale(2, ROUNDING))
                .redemptionRatePercent(redemptionRate.setScale(2, ROUNDING))
                .effectiveDiscountPercent(effectiveDiscount.setScale(2, ROUNDING))
                .burnRatePercent(burnRate.setScale(2, ROUNDING))
                .aovUpliftPercent(aovUplift.setScale(2, ROUNDING))
                .incrementalRevenuePercent(incrementalPct.setScale(2, ROUNDING))
                .retentionRatePercent(retentionRatePercent != null ? retentionRatePercent : BigDecimal.ZERO)
                .conversionRatePercent(conversionRatePercent != null ? conversionRatePercent : BigDecimal.ZERO)
                .cac(cac != null ? cac : BigDecimal.ZERO)
                .monthlyData(monthlyData)
                .build();
    }

    private List<BonusTypeReportDto.MonthlyReportPointDto> buildMonthlyData(Long bonusTypeId, LocalDateTime from, LocalDateTime to) {
        List<BonusTypeReportDto.MonthlyReportPointDto> result = new ArrayList<>();
        YearMonth start = YearMonth.from(from);
        YearMonth end = YearMonth.from(to);
        DateTimeFormatter monthFormatter = DateTimeFormatter.ofPattern("MMM yyyy", new Locale("ru"));
        for (YearMonth ym = start; !ym.isAfter(end); ym = ym.plusMonths(1)) {
            LocalDateTime monthStart = ym.atDay(1).atStartOfDay();
            LocalDateTime monthEnd = ym.atEndOfMonth().atTime(23, 59, 59);
            Set<Long> withBonusIds;
            if (bonusTypeId == null) {
                withBonusIds = new HashSet<>(bonusConsumptionRepository.findCompletedPaymentIdsThatConsumedAnyBonusInPeriod(monthStart, monthEnd));
            } else {
                withBonusIds = new HashSet<>(bonusConsumptionRepository.findCompletedPaymentIdsThatConsumedBonusTypeInPeriod(bonusTypeId, monthStart, monthEnd));
            }
            List<PaymentTransaction> monthPayments = paymentRepository.findCompletedByCreatedAtBetween(monthStart, monthEnd);
            List<PaymentTransaction> withBonus = monthPayments.stream().filter(p -> withBonusIds.contains(p.getId())).collect(Collectors.toList());
            List<PaymentTransaction> withoutBonus = monthPayments.stream().filter(p -> !withBonusIds.contains(p.getId())).collect(Collectors.toList());
            BigDecimal avgWith = averageAmount(withBonus);
            BigDecimal avgWithout = averageAmount(withoutBonus);
            BigDecimal monthRevenue = monthPayments.stream().map(PaymentTransaction::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
            result.add(new BonusTypeReportDto.MonthlyReportPointDto(
                    ym.format(monthFormatter),
                    ym.toString(),
                    avgWith.setScale(2, ROUNDING),
                    avgWithout.setScale(2, ROUNDING),
                    withBonus.size(),
                    withoutBonus.size(),
                    monthRevenue.setScale(2, ROUNDING)
            ));
        }
        return result;
    }

    private static BigDecimal nullToZero(BigDecimal v) {
        return v == null ? BigDecimal.ZERO : v;
    }

    private static BigDecimal averageAmount(List<PaymentTransaction> list) {
        if (list == null || list.isEmpty()) return BigDecimal.ZERO;
        BigDecimal sum = list.stream().map(PaymentTransaction::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
        return sum.divide(BigDecimal.valueOf(list.size()), SCALE, ROUNDING);
    }

    private static BigDecimal computeIncrementalRevenue(List<PaymentTransaction> bonusGroup, List<PaymentTransaction> regularGroup) {
        BigDecimal avgBonus = averageAmount(bonusGroup);
        BigDecimal avgRegular = averageAmount(regularGroup);
        if (avgRegular.compareTo(BigDecimal.ZERO) == 0) return BigDecimal.ZERO;
        BigDecimal diff = avgBonus.subtract(avgRegular).max(BigDecimal.ZERO);
        return diff.multiply(BigDecimal.valueOf(bonusGroup.size()));
    }

    private static BigDecimal computeAovUplift(BigDecimal avgBonus, BigDecimal avgRegular) {
        if (avgRegular == null || avgRegular.compareTo(BigDecimal.ZERO) == 0) return BigDecimal.ZERO;
        BigDecimal diff = avgBonus.subtract(avgRegular);
        return diff.divide(avgRegular, SCALE, ROUNDING).multiply(BigDecimal.valueOf(100));
    }

    private static BigDecimal safeDivide(BigDecimal num, BigDecimal denom) {
        if (denom == null || denom.compareTo(BigDecimal.ZERO) == 0) return BigDecimal.ZERO;
        return num.divide(denom, SCALE, ROUNDING);
    }

    private static BigDecimal safeDividePercent(BigDecimal num, BigDecimal denom) {
        if (denom == null || denom.compareTo(BigDecimal.ZERO) == 0) return BigDecimal.ZERO;
        return num.divide(denom, SCALE, ROUNDING).multiply(BigDecimal.valueOf(100));
    }
}
