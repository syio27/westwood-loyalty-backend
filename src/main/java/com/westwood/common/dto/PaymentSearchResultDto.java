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
    private String paymentMethod; // Способ оплаты (если будет добавлен в будущем)
    private String enteredByUsername; // Пользователь, который создал платеж
    private LocalDateTime createdAt; // Дата создания
    private String refundedPaymentTxId; // ID возвращенного платежа (если это возврат)
    private BigDecimal bonusGranted; // Сумма начисленных бонусов за этот платеж
    private BigDecimal bonusUsed; // Сумма использованных бонусов для этого платежа
    private String refundReason; // Причина возврата (если платеж был возвращен)
}
