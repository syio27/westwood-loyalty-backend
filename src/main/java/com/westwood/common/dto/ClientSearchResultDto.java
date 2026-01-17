package com.westwood.common.dto;

import com.westwood.domain.ClientType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientSearchResultDto {
    private java.util.UUID id;
    private String name;
    private String surname;
    private String phone;
    private String email;
    private ClientType clientType;
    private Set<String> tags;
    private BigDecimal totalSpent; // Общая сумма покупок
    private Long transactionCount; // Количество транзакций
    private BigDecimal bonusBalance; // Текущий баланс бонусов
    private BigDecimal bonusUsed; // Использовано бонусов
    private LocalDateTime lastVisit; // Последний визит
    private LocalDateTime createdAt;
}
