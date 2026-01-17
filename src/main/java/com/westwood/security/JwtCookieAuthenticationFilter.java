package com.westwood.security;

import com.westwood.domain.User;
import com.westwood.repository.UserRepository;
import com.westwood.util.CookieUtil;
import com.westwood.util.jwt.JwtTokenProvider;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

@Component
public class JwtCookieAuthenticationFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(JwtCookieAuthenticationFilter.class);

    private final UserDetailsService userDetailsService;
    private final JwtTokenProvider jwtTokenProvider;
    private final CookieUtil cookieUtil;
    private final UserRepository userRepository;

    public JwtCookieAuthenticationFilter(
            UserDetailsService userDetailsService,
            JwtTokenProvider jwtTokenProvider,
            CookieUtil cookieUtil,
            UserRepository userRepository) {
        this.userDetailsService = userDetailsService;
        this.jwtTokenProvider = jwtTokenProvider;
        this.cookieUtil = cookieUtil;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        try {
            // Only try to authenticate if there's no existing authentication
            if (SecurityContextHolder.getContext().getAuthentication() == null) {
                String accessToken = cookieUtil.getAccessTokenFromCookie(request);

                if (accessToken != null && !accessToken.isEmpty()) {
                    authenticateWithToken(accessToken, request);
                }
            }
        } catch (Exception e) {
            // Log but never block the request - let Spring Security handle authorization
            log.debug("Could not authenticate request: " + e.getMessage());
        }

        // Always continue the filter chain
        chain.doFilter(request, response);
    }

    private void authenticateWithToken(String accessToken, HttpServletRequest request) {
        try {
            // First validate the token is not expired
            if (!jwtTokenProvider.validateToken(accessToken)) {
                return;
            }

            UserDetails userDetails = loadUserFromToken(accessToken);
            
            if (userDetails != null && jwtTokenProvider.validateToken(accessToken, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
                log.debug("Successfully authenticated user");
            }
        } catch (Exception e) {
            log.debug("Token authentication failed: " + e.getMessage());
        }
    }

    private UserDetails loadUserFromToken(String accessToken) {
        try {
            // Try to extract userId (UUID) from token claims first
            Claims claims = jwtTokenProvider.extractAllClaims(accessToken);
            String userId = claims.get("userId", String.class);

            if (userId != null) {
                // Load user by UUID (more reliable, works even if email changes)
                try {
                    UUID uuid = UUID.fromString(userId);
                    User user = userRepository.findByUuid(uuid).orElse(null);
                    if (user != null) {
                        return new UserDetailsImpl(user);
                    }
                } catch (IllegalArgumentException e) {
                    log.debug("Invalid UUID format in token");
                }
            }

            // Fallback to email-based lookup for backward compatibility
            String email = jwtTokenProvider.extractEmail(accessToken);
            return userDetailsService.loadUserByUsername(email);
            
        } catch (Exception e) {
            log.debug("Failed to load user from token: " + e.getMessage());
            return null;
        }
    }
}
