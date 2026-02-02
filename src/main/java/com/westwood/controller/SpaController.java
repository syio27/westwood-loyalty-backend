package com.westwood.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

/**
 * SPA Controller - Serves Angular's index.html for client-side routing
 * Handles all non-API routes to enable Angular Router to work with direct URLs
 */
@Controller
public class SpaController implements ErrorController {

    private String indexHtml;

    /**
     * Load index.html content once on startup
     */
    private String getIndexHtml() throws IOException {
        if (indexHtml == null) {
            Resource resource = new ClassPathResource("static/browser/index.html");
            indexHtml = new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        }
        return indexHtml;
    }

    /**
     * Serve index.html for the root path
     */
    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String index() throws IOException {
        return getIndexHtml();
    }

    /**
     * Handle all errors (404s) by serving Angular app
     */
    @GetMapping(value = "/error", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String handleError() throws IOException {
        return getIndexHtml();
    }

    /**
     * Handle all Angular routes directly
     * This catches routes like /home, /login, /users, /bonus-program, etc.
     */
    @GetMapping(value = {
        "/home",
        "/auth/**",
        "/login",
        // "/register" - disabled, app is private, users should only be invited
        "/users",
        "/users/**",
        "/clients",
        "/clients/**",
        "/bonus-program",
        "/bonus-program/**",
        "/bonus-expiring",
        "/bonus-management",
        "/bonus-management/**",
        "/payments",
        "/payments/**",
        "/profile",
        "/profile/**",
        "/communications",
        "/communications/**"
    }, produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String forwardToAngular() throws IOException {
        return getIndexHtml();
    }
}
