package com.westwood.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    /**
     * Configure static resource handling for Angular frontend
     * Angular builds to static/browser/ subfolder
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Serve static files (JS, CSS, assets) from classpath:/static/browser/
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/browser/")
                .resourceChain(true);
    }
}

