package com.westwood.service.impl;

import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.BonusType;
import com.westwood.domain.BonusTypeEnum;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.BonusTypeRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import com.westwood.service.EventBonusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class EventBonusServiceImpl implements EventBonusService {

    private static final Logger logger = LoggerFactory.getLogger(EventBonusServiceImpl.class);

    private final BonusTypeRepository bonusTypeRepository;
    private final ClientRepository clientRepository;
    private final PaymentTransactionRepository paymentRepository;
    private final BonusEventRepository bonusEventRepository;

    public EventBonusServiceImpl(
            BonusTypeRepository bonusTypeRepository,
            ClientRepository clientRepository,
            PaymentTransactionRepository paymentRepository,
            BonusEventRepository bonusEventRepository) {
        this.bonusTypeRepository = bonusTypeRepository;
        this.clientRepository = clientRepository;
        this.paymentRepository = paymentRepository;
        this.bonusEventRepository = bonusEventRepository;
    }

    @Override
    public void checkAndGrantWelcomeBonus(UUID clientId) {
        try {
            BonusType welcomeBonus = bonusTypeRepository.findByTypeAndEnabledTrue(BonusTypeEnum.WELCOME)
                    .orElse(null);

            if (welcomeBonus == null) {
                logger.debug("Welcome bonus is not enabled, skipping for client: {}", clientId);
                return;
            }

            Client client = clientRepository.findByUuid(clientId)
                    .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

            // Check if welcome bonus already granted (check for existing bonus events)
            boolean alreadyGranted = bonusEventRepository.findByClientIdOrderByCreatedAtDesc(client.getId())
                    .stream()
                    .anyMatch(event -> event instanceof BonusGranted &&
                            ((BonusGranted) event).getGrantReason() != null &&
                            ((BonusGranted) event).getGrantReason().equals("WELCOME"));

            if (alreadyGranted) {
                logger.debug("Welcome bonus already granted for client: {}", clientId);
                return;
            }

            grantBonus(client, welcomeBonus, null, null, "WELCOME", welcomeBonus.getBonusAmount());
            logger.info("Welcome bonus granted to client: {}", clientId);
        } catch (Exception e) {
            logger.error("Error granting welcome bonus to client: {}", clientId, e);
            throw new RuntimeException("Failed to grant welcome bonus", e);
        }
    }

    @Override
    public void checkAndGrantBirthdayBonus(UUID clientId) {
        try {
            BonusType birthdayBonus = bonusTypeRepository.findByTypeAndEnabledTrue(BonusTypeEnum.BIRTHDAY)
                    .orElse(null);

            if (birthdayBonus == null) {
                logger.debug("Birthday bonus is not enabled, skipping for client: {}", clientId);
                return;
            }

            Client client = clientRepository.findByUuid(clientId)
                    .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

            if (client.getDateOfBirth() == null) {
                logger.debug("Client {} has no date of birth, skipping birthday bonus", clientId);
                return;
            }

            LocalDate today = LocalDate.now();
            LocalDate birthDate = client.getDateOfBirth();

            // Check if today is client's birthday (month and day match, ignore year)
            if (today.getMonth() != birthDate.getMonth() || today.getDayOfMonth() != birthDate.getDayOfMonth()) {
                logger.debug("Today is not birthday for client: {}", clientId);
                return;
            }

            // Check if birthday bonus already granted this year
            LocalDateTime startOfYear = LocalDateTime.of(today.getYear(), 1, 1, 0, 0);
            boolean alreadyGranted = bonusEventRepository.findByClientIdOrderByCreatedAtDesc(client.getId())
                    .stream()
                    .filter(event -> event.getCreatedAt().isAfter(startOfYear))
                    .anyMatch(event -> event instanceof BonusGranted &&
                            ((BonusGranted) event).getGrantReason() != null &&
                            ((BonusGranted) event).getGrantReason().equals("BIRTHDAY"));

            if (alreadyGranted) {
                logger.debug("Birthday bonus already granted this year for client: {}", clientId);
                return;
            }

            grantBonus(client, birthdayBonus, null, null, "BIRTHDAY", birthdayBonus.getBonusAmount());
            logger.info("Birthday bonus granted to client: {}", clientId);
        } catch (Exception e) {
            logger.error("Error granting birthday bonus to client: {}", clientId, e);
            throw new RuntimeException("Failed to grant birthday bonus", e);
        }
    }

    @Override
    public void checkAndGrantMilestoneBonus(UUID clientId, String paymentTxId, BigDecimal paymentAmount) {
        try {
            BonusType milestoneBonus = bonusTypeRepository.findByTypeAndEnabledTrue(BonusTypeEnum.PAYMENT_MILESTONE)
                    .orElse(null);

            if (milestoneBonus == null || milestoneBonus.getMilestoneThreshold() == null) {
                logger.debug("Payment milestone bonus is not enabled or threshold not set, skipping for client: {}", clientId);
                return;
            }

            Client client = clientRepository.findByUuid(clientId)
                    .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

            // Count payments for this client
            List<PaymentTransaction> payments = paymentRepository.findByClientIdOrderByCreatedAtDesc(client.getId());
            int paymentCount = payments.size();

            // Check if this payment reaches the milestone
            if (paymentCount != milestoneBonus.getMilestoneThreshold()) {
                logger.debug("Payment count {} does not match milestone threshold {} for client: {}", 
                        paymentCount, milestoneBonus.getMilestoneThreshold(), clientId);
                return;
            }

            // Check if milestone bonus already granted for this milestone
            boolean alreadyGranted = bonusEventRepository.findByClientIdOrderByCreatedAtDesc(client.getId())
                    .stream()
                    .anyMatch(event -> event instanceof BonusGranted &&
                            ((BonusGranted) event).getGrantReason() != null &&
                            ((BonusGranted) event).getGrantReason().equals("MILESTONE_" + milestoneBonus.getMilestoneThreshold()));

            if (alreadyGranted) {
                logger.debug("Milestone bonus already granted for threshold {} for client: {}", 
                        milestoneBonus.getMilestoneThreshold(), clientId);
                return;
            }

            PaymentTransaction payment = paymentRepository.findByTxId(paymentTxId)
                    .orElseThrow(() -> new ResourceNotFoundException("Payment with txId '" + paymentTxId + "' not found"));

            BigDecimal bonusAmount = milestoneBonus.getBonusAmount();
            if (bonusAmount == null && milestoneBonus.getBonusPercentage() != null) {
                bonusAmount = paymentAmount.multiply(milestoneBonus.getBonusPercentage())
                        .divide(BigDecimal.valueOf(100), 2, java.math.RoundingMode.HALF_UP);
            }

            grantBonus(client, milestoneBonus, payment, paymentAmount, 
                    "MILESTONE_" + milestoneBonus.getMilestoneThreshold(), bonusAmount);
            logger.info("Milestone bonus granted to client: {} for {}th payment", clientId, paymentCount);
        } catch (Exception e) {
            logger.error("Error granting milestone bonus to client: {}", clientId, e);
            throw new RuntimeException("Failed to grant milestone bonus", e);
        }
    }

    @Override
    public void grantReferralBonus(UUID referrerId, UUID refereeId) {
        try {
            BonusType referralBonus = bonusTypeRepository.findByTypeAndEnabledTrue(BonusTypeEnum.REFERRAL)
                    .orElse(null);

            if (referralBonus == null) {
                logger.debug("Referral bonus is not enabled, skipping for referrer: {} and referee: {}", referrerId, refereeId);
                return;
            }

            Client referrer = clientRepository.findByUuid(referrerId)
                    .orElseThrow(() -> new ResourceNotFoundException("Referrer with id '" + referrerId + "' not found"));

            Client referee = clientRepository.findByUuid(refereeId)
                    .orElseThrow(() -> new ResourceNotFoundException("Referee with id '" + refereeId + "' not found"));

            // Grant bonus to referrer
            grantBonus(referrer, referralBonus, null, null, "REFERRAL_REFERRER", referralBonus.getBonusAmount());
            logger.info("Referral bonus granted to referrer: {}", referrerId);

            // Grant bonus to referee (new client)
            grantBonus(referee, referralBonus, null, null, "REFERRAL_REFEREE", referralBonus.getBonusAmount());
            logger.info("Referral bonus granted to referee: {}", refereeId);
        } catch (Exception e) {
            logger.error("Error granting referral bonus for referrer: {} and referee: {}", referrerId, refereeId, e);
            throw new RuntimeException("Failed to grant referral bonus", e);
        }
    }

    @Override
    public void processPaymentBonuses(String paymentTxId, UUID clientId, BigDecimal paymentAmount) {
        // Check and grant BASIC_CASHBACK
        try {
            BonusType cashbackBonus = bonusTypeRepository.findByTypeAndEnabledTrue(BonusTypeEnum.BASIC_CASHBACK)
                    .orElse(null);

            if (cashbackBonus != null && cashbackBonus.getBonusPercentage() != null) {
                Client client = clientRepository.findByUuid(clientId)
                        .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

                // Only grant cashback for INDIVIDUAL clients
                if (client.getClientType() == com.westwood.domain.ClientType.INDIVIDUAL) {
                    PaymentTransaction payment = paymentRepository.findByTxId(paymentTxId)
                            .orElseThrow(() -> new ResourceNotFoundException("Payment with txId '" + paymentTxId + "' not found"));

                    BigDecimal bonusAmount = paymentAmount.multiply(cashbackBonus.getBonusPercentage())
                            .divide(BigDecimal.valueOf(100), 2, java.math.RoundingMode.HALF_UP);

                    grantBonus(client, cashbackBonus, payment, paymentAmount, "CASHBACK", bonusAmount);
                    logger.info("Cashback bonus granted to client: {}", clientId);
                }
            }
        } catch (Exception e) {
            logger.error("Error granting cashback bonus to client: {}", clientId, e);
            // Don't throw, continue with other bonuses
        }

        // Check and grant PAYMENT_MILESTONE
        checkAndGrantMilestoneBonus(clientId, paymentTxId, paymentAmount);
    }

    private void grantBonus(Client client, BonusType bonusType, PaymentTransaction payment, 
                           BigDecimal paymentAmount, String grantReason, BigDecimal bonusAmount) {
        BonusGranted bonusGranted = new BonusGranted();
        bonusGranted.setClient(client);
        bonusGranted.setEventId(UUID.randomUUID());
        bonusGranted.setBonusAmount(bonusAmount);
        bonusGranted.setBonusType(bonusType);
        bonusGranted.setGrantReason(grantReason);

        // Calculate expiration date if expirationDays is set
        if (bonusType.getExpirationDays() != null && bonusType.getExpirationDays() > 0) {
            LocalDateTime expiresAt = LocalDateTime.now().plusDays(bonusType.getExpirationDays());
            bonusGranted.setExpiresAt(expiresAt);
        }

        if (payment != null) {
            bonusGranted.setPaymentTransaction(payment);
            bonusGranted.setPaymentAmount(paymentAmount);
            if (bonusType.getBonusPercentage() != null) {
                bonusGranted.setBonusPercentage(bonusType.getBonusPercentage());
            }
        }

        bonusEventRepository.save(bonusGranted);
    }
}

