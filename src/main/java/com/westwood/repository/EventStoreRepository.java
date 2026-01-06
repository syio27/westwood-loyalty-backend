package com.westwood.repository;

import com.westwood.domain.EventStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventStoreRepository extends JpaRepository<EventStore, Long> {

    List<EventStore> findByAggregateIdOrderByVersionAsc(String aggregateId);

    List<EventStore> findByAggregateTypeAndAggregateIdOrderByVersionAsc(String aggregateType, String aggregateId);

    @Query("SELECT e FROM EventStore e WHERE e.aggregateId = :aggregateId AND e.timestamp BETWEEN :fromDate AND :toDate ORDER BY e.version ASC")
    List<EventStore> findByAggregateIdAndTimeRange(@Param("aggregateId") String aggregateId,
                                                     @Param("fromDate") LocalDateTime fromDate,
                                                     @Param("toDate") LocalDateTime toDate);

    List<EventStore> findByEventTypeOrderByTimestampAsc(EventStore.EventType eventType);

    @Query("SELECT e FROM EventStore e WHERE e.aggregateType = :aggregateType AND e.timestamp BETWEEN :fromDate AND :toDate ORDER BY e.timestamp ASC")
    List<EventStore> findByAggregateTypeAndTimeRange(@Param("aggregateType") String aggregateType,
                                                      @Param("fromDate") LocalDateTime fromDate,
                                                      @Param("toDate") LocalDateTime toDate);
}

