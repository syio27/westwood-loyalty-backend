package com.westwood.service.impl;

import com.westwood.common.dto.KpiDashboardDto;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.PaymentTransaction;
import com.westwood.repository.BonusConsumptionRepository;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.service.KpiAnalyticsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class KpiAnalyticsServiceImpl implements KpiAnalyticsService {

    private static final int SCALE = 4;
    private static final RoundingMode ROUNDING = RoundingMode.HALF_UP;

    private final PaymentTransactionRepository paymentRepository;
    private final BonusEventRepository bonusEventRepository;
    private final BonusConsumptionRepository bonusConsumptionRepository;

    public KpiAnalyticsServiceImpl(PaymentTransactionRepository paymentRepository,
                                   BonusEventRepository bonusEventRepository,
                                   BonusConsumptionRepository bonusConsumptionRepository) {
        this.paymentRepository = paymentRepository;
        this.bonusEventRepository = bonusEventRepository;
        this.bonusConsumptionRepository = bonusConsumptionRepository;
    }

    @Override
    public KpiDashboardDto getDashboardMetrics(LocalDateTime from, LocalDateTime to) {
        List<PaymentTransaction> payments = paymentRepository.findCompletedByCreatedAtBetween(from, to);
        Set<Long> paymentIds = payments.stream().map(PaymentTransaction::getId).collect(Collectors.toSet());

        Map<Long, BigDecimal> bonusUsedByPaymentId = paymentIds.isEmpty()
            ? Collections.emptyMap()
            : toMap(bonusEventRepository.sumBonusUsedGroupByPaymentId(paymentIds));

        // Split by REDEMPTION: Bonus = bonusUsed > 0 (redeemed), Regular = bonusUsed == 0 (accumulation only; may have bonusEarned).
        List<PaymentTransaction> bonusGroup = new ArrayList<>();
        List<PaymentTransaction> regularGroup = new ArrayList<>();
        for (PaymentTransaction p : payments) {
            BigDecimal used = bonusUsedByPaymentId.getOrDefault(p.getId(), BigDecimal.ZERO);
            if (used.compareTo(BigDecimal.ZERO) > 0) {
                bonusGroup.add(p);
            } else {
                regularGroup.add(p);
            }
        }

        BigDecimal totalRevenue = payments.stream()
            .map(PaymentTransaction::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);

        // Revenue & incremental
        BigDecimal incrementalRevenue = computeIncrementalRevenue(bonusGroup, regularGroup);
        BigDecimal incrementalPct = safeDividePercent(incrementalRevenue, totalRevenue);

        // Uplift: AOV bonus vs regular
        BigDecimal avgCheckWithBonus = averageAmount(bonusGroup);
        BigDecimal avgCheckRegular = averageAmount(regularGroup);
        BigDecimal aovUplift = computeAovUplift(avgCheckWithBonus, avgCheckRegular);

        // Retention: active clients and returning (>= 2 purchases in period)
        Map<Long, Long> purchasesPerClientId = payments.stream()
            .collect(Collectors.groupingBy(p -> p.getClient().getId(), Collectors.counting()));
        long totalActiveClients = purchasesPerClientId.size();
        long returningClientsCount = purchasesPerClientId.values().stream().filter(c -> c >= 2).count();
        BigDecimal retentionRate = totalActiveClients == 0
            ? BigDecimal.ZERO
            : safeDivide(BigDecimal.valueOf(returningClientsCount), BigDecimal.valueOf(totalActiveClients))
                .multiply(BigDecimal.valueOf(100)).setScale(2, ROUNDING);

        // Total bonus used in these payments (for redemption & effective discount)
        BigDecimal totalBonusUsedInPayments = bonusUsedByPaymentId.values().stream()
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalBonusGrantedInPeriod = nullToZero(
            bonusEventRepository.sumTotalBonusesGrantedByDateRange(from, to));
        BigDecimal redemptionRate = safeDividePercent(totalBonusUsedInPayments, totalBonusGrantedInPeriod);
        BigDecimal effectiveDiscount = safeDividePercent(totalBonusUsedInPayments, totalRevenue);

        // Burn rate: trailing 12-month (TTM) window ending at to (independent of requested [from, to]).
        LocalDateTime burnStart = to.minusYears(1);
        LocalDateTime burnEnd = to;
        List<BonusGranted> expiredGrantsTtm = bonusEventRepository.findGrantedExpiredInPeriod(burnStart, burnEnd);
        BigDecimal totalExpiredTtm = BigDecimal.ZERO;
        for (BonusGranted g : expiredGrantsTtm) {
            BigDecimal consumed = nullToZero(bonusConsumptionRepository.sumAmountByBonusGrantedId(g.getId()));
            BigDecimal remaining = g.getBonusAmount().subtract(consumed).max(BigDecimal.ZERO);
            totalExpiredTtm = totalExpiredTtm.add(remaining);
        }
        BigDecimal totalGrantedTtm = nullToZero(bonusEventRepository.sumTotalBonusesGrantedByDateRange(burnStart, burnEnd));
        BigDecimal burnRate = safeDividePercent(totalExpiredTtm, totalGrantedTtm);
        BigDecimal burnedAmount = totalExpiredTtm;

        KpiDashboardDto.PeriodDto period = new KpiDashboardDto.PeriodDto(
            from.toInstant(ZoneOffset.UTC),
            to.toInstant(ZoneOffset.UTC)
        );
        KpiDashboardDto.RevenueMetricsDto revenue = new KpiDashboardDto.RevenueMetricsDto(
            totalRevenue.setScale(2, ROUNDING),
            incrementalRevenue.setScale(2, ROUNDING),
            incrementalPct.setScale(2, ROUNDING)
        );
        KpiDashboardDto.UpliftMetricsDto uplift = new KpiDashboardDto.UpliftMetricsDto(
            aovUplift.setScale(2, ROUNDING),
            avgCheckWithBonus.setScale(2, ROUNDING),
            avgCheckRegular.setScale(2, ROUNDING)
        );
        KpiDashboardDto.RetentionMetricsDto retention = new KpiDashboardDto.RetentionMetricsDto(
            retentionRate,
            returningClientsCount,
            totalActiveClients
        );
        KpiDashboardDto.EfficiencyMetricsDto efficiency = new KpiDashboardDto.EfficiencyMetricsDto(
            redemptionRate.setScale(2, ROUNDING),
            effectiveDiscount.setScale(2, ROUNDING),
            burnRate.setScale(2, ROUNDING),
            burnedAmount.setScale(2, ROUNDING)
        );

        return KpiDashboardDto.builder()
            .period(period)
            .revenue(revenue)
            .uplift(uplift)
            .retention(retention)
            .efficiency(efficiency)
            .build();
    }

    private static Map<Long, BigDecimal> toMap(List<Object[]> rows) {
        Map<Long, BigDecimal> map = new HashMap<>();
        for (Object[] row : rows) {
            if (row.length >= 2 && row[0] != null && row[1] != null) {
                map.put((Long) row[0], (BigDecimal) row[1]);
            }
        }
        return map;
    }

    private static BigDecimal nullToZero(BigDecimal v) {
        return v == null ? BigDecimal.ZERO : v;
    }

    private static BigDecimal averageAmount(List<PaymentTransaction> list) {
        if (list == null || list.isEmpty()) return BigDecimal.ZERO;
        BigDecimal sum = list.stream().map(PaymentTransaction::getAmount).reduce(BigDecimal.ZERO, BigDecimal::add);
        return sum.divide(BigDecimal.valueOf(list.size()), SCALE, ROUNDING);
    }

    private static BigDecimal computeIncrementalRevenue(List<PaymentTransaction> bonusGroup,
                                                         List<PaymentTransaction> regularGroup) {
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
