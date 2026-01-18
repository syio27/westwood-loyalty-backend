package com.westwood.service.impl;

import com.westwood.common.exception.ResourceNotFoundException;
import com.westwood.domain.Tag;
import com.westwood.repository.TagRepository;
import com.westwood.service.TagService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;

    public TagServiceImpl(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Tag> getTagByName(String name) {
        return tagRepository.findByName(name);
    }

    @Override
    public void deleteAllTags() {
        tagRepository.deleteAll();
    }

    @Override
    public void deleteTagByName(String name) {
        Tag tag = tagRepository.findByName(name)
                .orElseThrow(() -> new ResourceNotFoundException("Tag with name '" + name + "' not found"));
        tagRepository.delete(tag);
    }
}
