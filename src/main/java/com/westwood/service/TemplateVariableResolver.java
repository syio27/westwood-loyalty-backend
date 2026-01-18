package com.westwood.service;

import com.westwood.common.dto.BonusBalanceDto;
import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.BonusEvent;
import com.westwood.domain.BonusGranted;
import com.westwood.domain.Client;
import com.westwood.domain.PaymentTransaction;
import com.westwood.repository.BonusEventRepository;
import com.westwood.repository.ClientRepository;
import com.westwood.repository.PaymentTransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@Transactional(readOnly = true)
public class TemplateVariableResolver {

    private static final Pattern PLACEHOLDER_PATTERN = Pattern.compile("\\{\\{([^}]+)\\}\\}");
    private static final DateTimeFormatter DATETIME_FORMATTER = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm");

    private final ClientRepository clientRepository;
    private final PaymentTransactionRepository paymentTransactionRepository;
    private final BonusService bonusService;
    private final BonusEventRepository bonusEventRepository;

    public TemplateVariableResolver(ClientRepository clientRepository,
                                   PaymentTransactionRepository paymentTransactionRepository,
                                   BonusService bonusService,
                                   BonusEventRepository bonusEventRepository) {
        this.clientRepository = clientRepository;
        this.paymentTransactionRepository = paymentTransactionRepository;
        this.bonusService = bonusService;
        this.bonusEventRepository = bonusEventRepository;
    }

    public String resolveTemplate(String templateContent, UUID clientId, String paymentTxId) {
        Client client = clientRepository.findByUuid(clientId)
                .orElseThrow(() -> new ResourceNotFoundException("Client with id '" + clientId + "' not found"));

        Map<String, String> variables = buildVariableMap(client, paymentTxId);

        return replacePlaceholders(templateContent, variables);
    }

    private Map<String, String> buildVariableMap(Client client, String paymentTxId) {
        Map<String, String> variables = new HashMap<>();

        // Basic client info
        variables.put("clientName", client.getName() != null ? client.getName() : "");
        variables.put("clientPhone", client.getPhone() != null ? client.getPhone() : "");
        variables.put("clientEmail", client.getEmail() != null ? client.getEmail() : "");

        // Bonus information
        BonusBalanceDto bonusBalance = bonusService.getClientBonusBalance(client.getUuid());
        variables.put("clientBonus", bonusBalance.getCurrentBalance() != null 
                ? bonusBalance.getCurrentBalance().toString() : "0");

        // Payment transaction data
        Long internalClientId = client.getId();
        List<PaymentTransaction> payments = paymentTransactionRepository
                .findByClientIdOrderByCreatedAtDesc(internalClientId);

        BigDecimal totalAmount = payments.stream()
                .map(PaymentTransaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        variables.put("clientTotalAmount", totalAmount.toString());
        variables.put("clientTotalTransactions", String.valueOf(payments.size()));

        LocalDateTime lastVisit = payments.isEmpty() ? null : payments.get(0).getCreatedAt();
        variables.put("clientLastVisit", lastVisit != null 
                ? lastVisit.format(DATETIME_FORMATTER) : "");

        // Bonus granted for specific payment transaction
        if (paymentTxId != null && !paymentTxId.isEmpty()) {
            // First, try to find the payment transaction to get its ID
            PaymentTransaction payment = paymentTransactionRepository.findByTxId(paymentTxId)
                    .orElse(null);
            
            BonusGranted grantedBonus = null;
            
            if (payment != null) {
                // Try direct query by payment transaction txId
                List<BonusGranted> grantedBonuses = bonusEventRepository
                        .findBonusGrantedByPaymentTxId(paymentTxId);
                
                if (!grantedBonuses.isEmpty()) {
                    grantedBonus = grantedBonuses.get(0);
                } else {
                    // Fallback: find by payment transaction ID (internal ID)
                    List<BonusGranted> bonusesByPaymentId = bonusEventRepository
                            .findBonusGrantedByPaymentId(payment.getId());
                    
                    if (!bonusesByPaymentId.isEmpty()) {
                        grantedBonus = bonusesByPaymentId.get(0);
                    }
                }
            }
            
            if (grantedBonus != null && grantedBonus.getBonusAmount() != null) {
                // Format the bonus amount with 2 decimal places
                BigDecimal bonusAmount = grantedBonus.getBonusAmount();
                variables.put("clientGrantedBonus", bonusAmount.setScale(2, java.math.RoundingMode.HALF_UP).toString());
                
                // Bonus expiration
                if (grantedBonus.getExpiresAt() != null) {
                    variables.put("clientBonusExp", grantedBonus.getExpiresAt().format(DATETIME_FORMATTER));
                } else {
                    // Find earliest expiring active bonus if this one doesn't expire
                    LocalDateTime earliestExpiration = findEarliestBonusExpiration(client.getId());
                    variables.put("clientBonusExp", earliestExpiration != null 
                            ? earliestExpiration.format(DATETIME_FORMATTER) : "");
                }
            } else {
                variables.put("clientGrantedBonus", "0");
                variables.put("clientBonusExp", "");
            }
        } else {
            // No paymentTxId provided - find the most recent bonus granted for this client
            // This is useful for WELCOME_BONUS templates where there's no payment transaction
            List<BonusGranted> recentBonuses = bonusEventRepository
                    .findMostRecentBonusGrantedByClientId(client.getId());
            
            if (!recentBonuses.isEmpty()) {
                BonusGranted mostRecentBonus = recentBonuses.get(0);
                if (mostRecentBonus.getBonusAmount() != null) {
                    BigDecimal bonusAmount = mostRecentBonus.getBonusAmount();
                    variables.put("clientGrantedBonus", bonusAmount.setScale(2, java.math.RoundingMode.HALF_UP).toString());
                    
                    if (mostRecentBonus.getExpiresAt() != null) {
                        variables.put("clientBonusExp", mostRecentBonus.getExpiresAt().format(DATETIME_FORMATTER));
                    } else {
                        LocalDateTime earliestExpiration = findEarliestBonusExpiration(client.getId());
                        variables.put("clientBonusExp", earliestExpiration != null 
                                ? earliestExpiration.format(DATETIME_FORMATTER) : "");
                    }
                } else {
                    variables.put("clientGrantedBonus", "0");
                    LocalDateTime earliestExpiration = findEarliestBonusExpiration(client.getId());
                    variables.put("clientBonusExp", earliestExpiration != null 
                            ? earliestExpiration.format(DATETIME_FORMATTER) : "");
                }
            } else {
                variables.put("clientGrantedBonus", "0");
                LocalDateTime earliestExpiration = findEarliestBonusExpiration(client.getId());
                variables.put("clientBonusExp", earliestExpiration != null 
                        ? earliestExpiration.format(DATETIME_FORMATTER) : "");
            }
        }

        return variables;
    }

    private LocalDateTime findEarliestBonusExpiration(Long clientId) {
        List<BonusEvent> events = bonusEventRepository
                .findByClientIdOrderByCreatedAtDesc(clientId);
        
        return events.stream()
                .filter(event -> event instanceof BonusGranted)
                .map(event -> (BonusGranted) event)
                .filter(bonus -> bonus.getExpiresAt() != null 
                        && bonus.getExpiresAt().isAfter(LocalDateTime.now()))
                .map(BonusGranted::getExpiresAt)
                .min(LocalDateTime::compareTo)
                .orElse(null);
    }

    private String replacePlaceholders(String template, Map<String, String> variables) {
        Matcher matcher = PLACEHOLDER_PATTERN.matcher(template);
        StringBuffer result = new StringBuffer();

        while (matcher.find()) {
            String placeholder = matcher.group(1);
            String value = variables.getOrDefault(placeholder, "{{" + placeholder + "}}");
            matcher.appendReplacement(result, Matcher.quoteReplacement(value));
        }
        matcher.appendTail(result);

        return result.toString();
    }
}
