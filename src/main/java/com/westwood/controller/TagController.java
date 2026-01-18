package com.westwood.controller;

import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.Tag;
import com.westwood.service.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/backoffice/tags")
@PreAuthorize("hasAnyRole('SUDO', 'ADMIN')")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    /**
     * Get all tags
     */
    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getAllTags() {
        List<Tag> tags = tagService.getAllTags();
        List<Map<String, Object>> response = tags.stream()
                .map(this::mapTagToResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    /**
     * Get tag by name
     */
    @GetMapping("/{name}")
    public ResponseEntity<Map<String, Object>> getTagByName(@PathVariable String name) {
        Tag tag = tagService.getTagByName(name)
                .orElseThrow(() -> new ResourceNotFoundException("Tag with name '" + name + "' not found"));
        return ResponseEntity.ok(mapTagToResponse(tag));
    }

    /**
     * Delete all tags
     */
    @DeleteMapping
    public ResponseEntity<Map<String, String>> deleteAllTags() {
        tagService.deleteAllTags();
        Map<String, String> response = new HashMap<>();
        response.put("message", "All tags deleted successfully");
        return ResponseEntity.ok(response);
    }

    /**
     * Delete tag by name
     */
    @DeleteMapping("/{name}")
    public ResponseEntity<Map<String, String>> deleteTagByName(@PathVariable String name) {
        tagService.deleteTagByName(name);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Tag '" + name + "' deleted successfully");
        return ResponseEntity.ok(response);
    }

    private Map<String, Object> mapTagToResponse(Tag tag) {
        Map<String, Object> map = new HashMap<>();
        map.put("id", tag.getId());
        map.put("name", tag.getName());
        map.put("clientCount", tag.getClients() != null ? tag.getClients().size() : 0);
        map.put("createdAt", tag.getCreatedAt());
        map.put("updatedAt", tag.getUpdatedAt());
        return map;
    }
}
