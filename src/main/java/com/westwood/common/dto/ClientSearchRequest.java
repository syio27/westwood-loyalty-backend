package com.westwood.common.dto;

import com.westwood.domain.ClientType;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class ClientSearchRequest {
    private String name; // Поиск по имени
    private String phone; // Поиск по телефону
    private String email; // Поиск по email
    private LocalDate lastVisitFrom; // Период последнего визита - от
    private LocalDate lastVisitTo; // Период последнего визита - до
    private List<String> tags; // Фильтр по тегам
    private ClientType clientType; // Тип клиента (INDIVIDUAL, BUSINESS, или null для всех)
    private String sortBy; // Поле сортировки (например, "lastVisit", "name", "createdAt")
    private String sortDirection; // Направление сортировки ("ASC" или "DESC")
    private Integer page = 0; // Номер страницы (начинается с 0)
    private Integer size = 10; // Размер страницы
}
