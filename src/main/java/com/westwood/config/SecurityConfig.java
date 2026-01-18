package com.westwood.config;

import com.westwood.security.JwtCookieAuthenticationFilter;
import com.westwood.security.UserDetailsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    private final UserDetailsServiceImpl userDetailsService;
    private final JwtCookieAuthenticationFilter jwtCookieAuthenticationFilter;
    
    @org.springframework.beans.factory.annotation.Value("${app.frontend.url:http://localhost:3000}")
    private String frontendUrl;
    
    @org.springframework.beans.factory.annotation.Value("${app.registration.enabled:true}")
    private boolean registrationEnabled;

    public SecurityConfig(
            UserDetailsServiceImpl userDetailsService,
            JwtCookieAuthenticationFilter jwtCookieAuthenticationFilter) {
        this.userDetailsService = userDetailsService;
        this.jwtCookieAuthenticationFilter = jwtCookieAuthenticationFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList(
                frontendUrl,
                "http://localhost:3000", 
                "http://localhost:4200", 
                "http://localhost:8080"
        ));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", configuration);
        return source;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                // Disable CSRF for stateless API - protection is handled by SameSite cookies
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .exceptionHandling(exceptions -> exceptions
                        .authenticationEntryPoint((request, response, authException) -> {
                            response.setStatus(HttpStatus.UNAUTHORIZED.value());
                            response.setContentType("application/json");
                            response.getWriter().write(
                                    String.format(
                                            "{\"status\":401,\"message\":\"%s\",\"timestamp\":\"%s\"}",
                                            "Unauthorized",
                                            java.time.LocalDateTime.now()
                                    )
                            );
                        })
                        .accessDeniedHandler((request, response, accessDeniedException) -> {
                            response.setStatus(HttpStatus.FORBIDDEN.value());
                            response.setContentType("application/json");
                            response.getWriter().write(
                                    String.format(
                                            "{\"status\":403,\"message\":\"%s\",\"timestamp\":\"%s\"}",
                                            "Access Denied: Insufficient permissions",
                                            java.time.LocalDateTime.now()
                                    )
                            );
                        })
                )
                .authorizeHttpRequests(auth -> {
                        // Public API endpoints
                        auth.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll();
                        
                        // Auth endpoints - register is only public in dev (controlled by app.registration.enabled)
                        if (registrationEnabled) {
                            auth.requestMatchers("/api/v1/auth/login", "/api/v1/auth/register", "/api/v1/auth/activate",
                                    "/api/v1/auth/forgot-password", "/api/v1/auth/reset-password").permitAll();
                        } else {
                            auth.requestMatchers("/api/v1/auth/login", "/api/v1/auth/activate",
                                    "/api/v1/auth/forgot-password", "/api/v1/auth/reset-password").permitAll();
                        }
                        
                        auth.requestMatchers("/h2-console/**").permitAll();
                        // Protected API endpoints
                        auth.requestMatchers("/api/v1/auth/**").authenticated();
                        auth.requestMatchers("/api/v1/user/profile/**").authenticated();
                        auth.requestMatchers("/api/v1/users/invite").hasAnyRole("SUDO", "ADMIN");
                        auth.requestMatchers("/api/v1/users/**").authenticated();
                        auth.requestMatchers("/api/**").authenticated();
                        // Everything else (Angular SPA routes, static files) - permit all
                        auth.anyRequest().permitAll();
                })
                .authenticationProvider(authenticationProvider())
                // Cookie-based JWT auth
                .addFilterBefore(jwtCookieAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        // For H2 Console
        http.headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin()));

        return http.build();
    }
}
