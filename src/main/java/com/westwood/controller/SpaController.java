package com.westwood.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

/**
 * SPA Controller - Serves Angular's index.html for client-side routing.
 * In dev (app.static.browser-path = file:...) index is read from filesystem so ng build is picked up without restart.
 */
@Controller
public class SpaController implements ErrorController {

    @Value("${app.static.browser-path:classpath:/static/browser/}")
    private String browserPath;

    private final ResourceLoader resourceLoader;

    public SpaController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    private String getIndexHtml() throws IOException {
        String base = browserPath.endsWith("/") ? browserPath : browserPath + "/";
        Resource resource = resourceLoader.getResource(base + "index.html");
        return new String(resource.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
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
        "/reward-programs",
        "/reward-programs/**",
        "/bonus-expiring",
        "/bonus-management",
        "/bonus-management/**",
        "/payments",
        "/payments/**",
        "/profile",
        "/profile/**",
        "/communications",
        "/communications/**",
        "/reports",
        "/reports/**"
    }, produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String forwardToAngular() throws IOException {
        return getIndexHtml();
    }
}
