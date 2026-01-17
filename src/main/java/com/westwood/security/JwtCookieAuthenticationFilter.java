package com.westwood.security;

import com.westwood.util.CookieUtil;
import com.westwood.util.jwt.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtCookieAuthenticationFilter extends OncePerRequestFilter {

    private final UserDetailsService userDetailsService;
    private final JwtTokenProvider jwtTokenProvider;
    private final CookieUtil cookieUtil;

    public JwtCookieAuthenticationFilter(
            UserDetailsService userDetailsService,
            JwtTokenProvider jwtTokenProvider,
            CookieUtil cookieUtil) {
        this.userDetailsService = userDetailsService;
        this.jwtTokenProvider = jwtTokenProvider;
        this.cookieUtil = cookieUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        String accessToken = cookieUtil.getAccessTokenFromCookie(request);

        if (accessToken != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                if (jwtTokenProvider.validateToken(accessToken)) {
                    String email = jwtTokenProvider.extractEmail(accessToken);
                    UserDetails userDetails = userDetailsService.loadUserByUsername(email);

                    if (jwtTokenProvider.validateToken(accessToken, userDetails)) {
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );
                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    }
                }
            } catch (Exception e) {
                logger.error("Cannot set user authentication: {}", e);
                SecurityContextHolder.clearContext();
            }
        }

        chain.doFilter(request, response);
    }
}
