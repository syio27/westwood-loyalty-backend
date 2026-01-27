package com.westwood.common.dto;

import com.westwood.domain.PaymentTransaction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentSearchResultDto {
    private String txId; // ID платежа
    private UUID clientId; // ID клиента
    private String clientName; // Имя клиента
    private String clientPhone; // Телефон клиента
    private String clientEmail; // Email клиента
    private BigDecimal amount; // Сумма платежа
    private PaymentTransaction.PaymentStatus status; // Статус (COMPLETED, REFUNDED, etc.)
    private PaymentTransaction.PaymentMethod paymentMethod; // Способ оплаты
    private String initiatedBy; // Пользователь, который создал платеж (email)
    private LocalDateTime createdAt; // Дата создания
    private String refundedPaymentTxId; // ID возвращенного платежа (если это возврат)
    private BigDecimal bonusGranted; // Сумма начисленных бонусов за этот платеж
    private BigDecimal bonusUsed; // Сумма использованных бонусов для этого платежа
    private BigDecimal bonusRevoked; // Сумма отозванных бонусов (если платеж был возвращен)
    private String refundReason; // Причина возврата (если платеж был возвращен)
}
