package com.westwood.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

@Component
public class CookieUtil {

    private static final Logger log = LoggerFactory.getLogger(CookieUtil.class);

    @Value("${app.cookie.domain:}")
    private String cookieDomain;

    @Value("${app.cookie.secure:true}")
    private Boolean cookieSecure;

    @Value("${app.cookie.same-site:Strict}")
    private String cookieSameSite;

    private static final String ACCESS_TOKEN_COOKIE_NAME = "accessToken";
    private static final String REFRESH_TOKEN_COOKIE_NAME = "refreshToken";

    public void addAccessTokenCookie(HttpServletResponse response, String token, Long maxAge) {
        log.info("Setting access token cookie with sameSite={}, secure={}, domain={}", 
                cookieSameSite, cookieSecure, cookieDomain.isEmpty() ? "null" : cookieDomain);
        ResponseCookie cookie = ResponseCookie.from(ACCESS_TOKEN_COOKIE_NAME, token)
                .httpOnly(true)
                .secure(cookieSecure)
                .sameSite(cookieSameSite)
                .path("/")
                .maxAge(maxAge)
                .domain(cookieDomain.isEmpty() ? null : cookieDomain)
                .build();
        log.info("Cookie header: {}", cookie.toString());
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }

    public void addRefreshTokenCookie(HttpServletResponse response, String token, Long maxAge) {
        ResponseCookie cookie = ResponseCookie.from(REFRESH_TOKEN_COOKIE_NAME, token)
                .httpOnly(true)
                .secure(cookieSecure)
                .sameSite(cookieSameSite)
                .path("/")
                .maxAge(maxAge)
                .domain(cookieDomain.isEmpty() ? null : cookieDomain)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }

    public void deleteAccessTokenCookie(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from(ACCESS_TOKEN_COOKIE_NAME, "")
                .httpOnly(true)
                .secure(cookieSecure)
                .sameSite(cookieSameSite)
                .path("/")
                .maxAge(0)
                .domain(cookieDomain.isEmpty() ? null : cookieDomain)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }

    public void deleteRefreshTokenCookie(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from(REFRESH_TOKEN_COOKIE_NAME, "")
                .httpOnly(true)
                .secure(cookieSecure)
                .sameSite(cookieSameSite)
                .path("/")
                .maxAge(0)
                .domain(cookieDomain.isEmpty() ? null : cookieDomain)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }

    public String getAccessTokenFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            log.debug("Received {} cookies", cookies.length);
            for (Cookie cookie : cookies) {
                log.debug("Cookie: {}={}", cookie.getName(), cookie.getName().equals(ACCESS_TOKEN_COOKIE_NAME) ? "[PRESENT]" : cookie.getValue());
                if (ACCESS_TOKEN_COOKIE_NAME.equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        } else {
            log.debug("No cookies received in request");
        }
        return null;
    }

    public String getRefreshTokenFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (REFRESH_TOKEN_COOKIE_NAME.equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }
}
