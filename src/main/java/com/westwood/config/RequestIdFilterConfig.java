package com.westwood.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration to register RequestIdFilter with highest priority.
 * This ensures the request ID is available in MDC before any other filters run.
 */
@Configuration
public class RequestIdFilterConfig {

    @Bean
    public FilterRegistrationBean<RequestIdFilter> requestIdFilterRegistration(RequestIdFilter requestIdFilter) {
        FilterRegistrationBean<RequestIdFilter> registration = new FilterRegistrationBean<>();
        registration.setFilter(requestIdFilter);
        registration.addUrlPatterns("/*");
        registration.setOrder(Integer.MIN_VALUE); // Highest priority - runs first
        registration.setName("requestIdFilter");
        return registration;
    }
}

