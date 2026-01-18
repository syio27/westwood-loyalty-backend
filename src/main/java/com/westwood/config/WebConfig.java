package com.westwood.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    /**
     * Configure static resource handling for Angular frontend
     * Angular builds to static/browser/ subfolder
     * Only handle actual static file patterns - let SPA controller handle routes
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // JavaScript files
        registry.addResourceHandler("/*.js")
                .addResourceLocations("classpath:/static/browser/");
        // CSS files
        registry.addResourceHandler("/*.css")
                .addResourceLocations("classpath:/static/browser/");
        // Source maps
        registry.addResourceHandler("/*.map")
                .addResourceLocations("classpath:/static/browser/");
        // JSON files
        registry.addResourceHandler("/*.json")
                .addResourceLocations("classpath:/static/browser/");
        // Assets folder
        registry.addResourceHandler("/assets/**")
                .addResourceLocations("classpath:/static/browser/assets/");
        // Favicon
        registry.addResourceHandler("/favicon.ico")
                .addResourceLocations("classpath:/static/browser/");
    }
}

