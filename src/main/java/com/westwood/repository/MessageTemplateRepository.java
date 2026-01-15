package com.westwood.repository;

import com.westwood.domain.MessageTemplate;
import com.westwood.domain.MessageTemplateType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageTemplateRepository extends JpaRepository<MessageTemplate, Long> {

    List<MessageTemplate> findByType(MessageTemplateType type);

    Optional<MessageTemplate> findByName(String name);

    Optional<MessageTemplate> findFirstByType(MessageTemplateType type);
}
