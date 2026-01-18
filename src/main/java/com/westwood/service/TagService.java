package com.westwood.service;

import com.westwood.domain.Tag;

import java.util.List;
import java.util.Optional;

public interface TagService {

    List<Tag> getAllTags();

    Optional<Tag> getTagByName(String name);

    void deleteAllTags();

    void deleteTagByName(String name);
}
