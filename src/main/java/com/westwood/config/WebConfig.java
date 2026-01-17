package com.westwood.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfig {
    // CORS configuration moved to SecurityConfig to ensure proper order
    // and to handle preflight OPTIONS requests correctly
}

