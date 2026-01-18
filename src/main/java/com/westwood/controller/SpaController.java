package com.westwood.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * SPA Controller - Forwards unknown routes to Angular's index.html
 * 
 * This enables Angular's client-side routing to work properly when:
 * - User directly navigates to a route (e.g., /dashboard, /login)
 * - User refreshes the page on any Angular route
 * 
 * Without this, Spring Boot would return 404 for Angular routes.
 */
@Controller
public class SpaController {

    /**
     * Forward all non-API routes to Angular's index.html
     * 
     * Matches any route that:
     * - Does NOT start with /api
     * - Does NOT contain a file extension (to exclude static files like .js, .css)
     * 
     * The regex pattern explained:
     * - {path:^(?!api).*$} - matches any path that doesn't start with "api"
     * - The negative lookahead (?!api) excludes API routes
     */
    /**
     * Forward all non-API routes to Angular's index.html
     * 
     * Note: Angular builds output to static/browser/ subfolder
     */
    @GetMapping(value = {
        "/",
        "/{path:^(?!api)(?!h2-console).*$}",
        "/{path:^(?!api)(?!h2-console).*$}/**"
    })
    public String forward() {
        return "forward:/index.html";
    }
}
