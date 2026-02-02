package com.westwood.config;

import org.springframework.boot.autoconfigure.flyway.FlywayMigrationStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Custom Flyway strategy: when RUN_FLYWAY_REPAIR=true (e.g. on Heroku),
 * run repair once to fix schema history (e.g. mark removed migration V32 as deleted), then migrate.
 * Remove the env var after the next successful deploy.
 */
@Configuration
public class FlywayConfig {

    @Bean
    public FlywayMigrationStrategy flywayMigrationStrategy() {
        return flyway -> {
            if ("true".equalsIgnoreCase(System.getenv("RUN_FLYWAY_REPAIR"))) {
                flyway.repair();
            }
            flyway.migrate();
        };
    }
}
