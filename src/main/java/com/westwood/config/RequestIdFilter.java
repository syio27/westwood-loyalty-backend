package com.westwood.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

/**
 * Filter to handle Request ID (Correlation ID) for logging and tracing.
 * 
 * This filter:
 * - Checks for X-Request-Id header from client
 * - Generates a new UUID if not present
 * - Stores it in MDC (Mapped Diagnostic Context) for logging
 * - Adds it to response header
 * - Cleans up MDC after request
 * 
 * Registered via RequestIdFilterConfig with highest priority to run before all other filters.
 */
@Component
public class RequestIdFilter extends OncePerRequestFilter {

    private static final String REQUEST_ID_HEADER = "X-Request-Id";
    private static final String MDC_REQUEST_ID_KEY = "requestId";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        try {
            // Get request ID from header or generate new one
            String requestId = getOrGenerateRequestId(request);
            
            // Store in MDC for logging
            MDC.put(MDC_REQUEST_ID_KEY, requestId);
            
            // Add to response header so frontend can track it
            response.setHeader(REQUEST_ID_HEADER, requestId);
            
            // Continue filter chain
            filterChain.doFilter(request, response);
        } finally {
            // Always clear MDC after request to prevent memory leaks
            MDC.clear();
        }
    }

    private String getOrGenerateRequestId(HttpServletRequest request) {
        String requestId = request.getHeader(REQUEST_ID_HEADER);
        
        // If client provided a request ID, use it; otherwise generate a new one
        if (requestId == null || requestId.isBlank()) {
            requestId = UUID.randomUUID().toString();
        }
        
        return requestId;
    }
}

