package com.westwood.util.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.access-token-expiration:900000}") // 15 minutes default
    private Long accessTokenExpiration;

    @Value("${jwt.refresh-token-expiration:604800000}") // 7 days default
    private Long refreshTokenExpiration;

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    public String extractEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public String extractUserId(String token) {
        Claims claims = extractAllClaims(token);
        // Try to get userId from claims, fallback to subject (email) for backward compatibility
        String userId = claims.get("userId", String.class);
        if (userId != null) {
            return userId;
        }
        // Fallback: if no userId claim, extract email and look up user
        return extractEmail(token);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateAccessToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        // Store userId (UUID) in claims for reliable user identification
        // Subject still contains email for backward compatibility
        if (userDetails instanceof com.westwood.security.UserDetailsImpl) {
            com.westwood.security.UserDetailsImpl userDetailsImpl = (com.westwood.security.UserDetailsImpl) userDetails;
            claims.put("userId", userDetailsImpl.getUser().getUuid().toString());
        }
        return createToken(claims, userDetails.getUsername(), accessTokenExpiration);
    }

    public String generateAccessToken(UserDetails userDetails, Map<String, Object> extraClaims) {
        return createToken(extraClaims, userDetails.getUsername(), accessTokenExpiration);
    }

    public String generateRefreshToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("type", "refresh");
        // Store userId (UUID) in claims for reliable user identification
        if (userDetails instanceof com.westwood.security.UserDetailsImpl) {
            com.westwood.security.UserDetailsImpl userDetailsImpl = (com.westwood.security.UserDetailsImpl) userDetails;
            claims.put("userId", userDetailsImpl.getUser().getUuid().toString());
        }
        return createToken(claims, userDetails.getUsername(), refreshTokenExpiration);
    }

    private String createToken(Map<String, Object> claims, String subject, Long expiration) {
        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSigningKey())
                .compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        // Validate token expiration first
        if (isTokenExpired(token)) {
            return false;
        }
        
        // If token has userId claim, validate by UUID (more reliable)
        Claims claims = extractAllClaims(token);
        String userId = claims.get("userId", String.class);
        if (userId != null && userDetails instanceof com.westwood.security.UserDetailsImpl) {
            com.westwood.security.UserDetailsImpl userDetailsImpl = (com.westwood.security.UserDetailsImpl) userDetails;
            return userId.equals(userDetailsImpl.getUser().getUuid().toString());
        }
        
        // Fallback: validate by email for backward compatibility
        final String email = extractEmail(token);
        return email.equals(userDetails.getUsername());
    }

    public Boolean validateToken(String token) {
        try {
            return !isTokenExpired(token);
        } catch (Exception e) {
            return false;
        }
    }

    public Long getAccessTokenExpiration() {
        return accessTokenExpiration;
    }

    public Long getRefreshTokenExpiration() {
        return refreshTokenExpiration;
    }
}
