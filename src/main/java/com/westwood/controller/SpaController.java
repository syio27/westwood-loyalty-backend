package com.westwood.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * SPA Controller - Serves Angular's index.html for client-side routing
 */
@Controller
public class SpaController implements ErrorController {

    /**
     * Serve index.html for the root path
     */
    @GetMapping("/")
    public String index() {
        return "forward:/index.html";
    }

    /**
     * Handle 404 errors by forwarding to Angular
     * This enables Angular's client-side routing
     */
    @GetMapping("/error")
    public String handleError() {
        return "forward:/index.html";
    }
}
