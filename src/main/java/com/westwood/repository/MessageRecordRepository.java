package com.westwood.repository;

import com.westwood.domain.MessageChannel;
import com.westwood.domain.MessageRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MessageRecordRepository extends JpaRepository<MessageRecord, Long> {

    @Query("SELECT mr FROM MessageRecord mr WHERE mr.client.uuid = :clientUuid ORDER BY mr.createdAt DESC")
    List<MessageRecord> findByClientUuidOrderByCreatedAtDesc(@Param("clientUuid") UUID clientUuid);

    List<MessageRecord> findByChannelOrderByCreatedAtDesc(MessageChannel channel);
}
