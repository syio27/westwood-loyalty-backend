package com.westwood.common.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class PaymentSearchRequest {
    private String paymentId; // Поиск по ID платежа (txId)
    private String clientName; // Поиск по клиенту (имя или фамилия)
    private String phone; // Поиск по телефону
    private LocalDate periodFrom; // Период - от
    private LocalDate periodTo; // Период - до
    private String paymentMethod; // Способ оплаты: "CASH", "CARD", "ONLINE", или null для всех
    private String paymentType; // Тип: "ALL", "PAID" (COMPLETED), "REFUND" (REFUNDED), или null для всех
    private String sortBy; // Поле сортировки (например, "date", "amount", "clientName")
    private String sortDirection; // Направление сортировки: "ASC" или "DESC"
    private Integer page = 0; // Номер страницы (начинается с 0)
    private Integer size = 10; // Размер страницы
}
