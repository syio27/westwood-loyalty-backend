package com.westwood.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${app.static.browser-path:classpath:/static/browser/}")
    private String browserPath;

    /**
     * Configure static resource handling for Angular frontend.
     * In dev, browser-path points to filesystem so ng build updates are served without restart.
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String base = browserPath.endsWith("/") ? browserPath : browserPath + "/";
        String assets = base + "assets/";

        registry.addResourceHandler("/*.js").addResourceLocations(base);
        registry.addResourceHandler("/*.css").addResourceLocations(base);
        registry.addResourceHandler("/*.map").addResourceLocations(base);
        registry.addResourceHandler("/*.json").addResourceLocations(base);
        registry.addResourceHandler("/assets/**").addResourceLocations(assets);
        registry.addResourceHandler("/favicon.ico").addResourceLocations(base);
    }
}

