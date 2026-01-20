package com.westwood.service;

import com.westwood.common.dto.UserStatusDto;

import java.util.List;
import java.util.UUID;

public interface UserActivityService {
    
    /**
     * Update user's last seen timestamp (heartbeat)
     * @param userId User UUID
     */
    void updateLastSeen(UUID userId);
    
    /**
     * Mark user as offline by setting lastSeenAt to a time in the past
     * This ensures they appear offline immediately (e.g., on logout)
     * @param userId User UUID
     */
    void markUserOffline(UUID userId);
    
    /**
     * Get user's online status and last seen time
     * @param userId User UUID
     * @return UserStatusDto with isOnline and lastSeenAt
     */
    UserStatusDto getUserStatus(UUID userId);
    
    /**
     * Get online status for all users
     * @return List of UserStatusDto for all users
     */
    List<UserStatusDto> getAllUsersStatus();
    
    /**
     * Check if user is online (active within last 5 minutes)
     * @param userId User UUID
     * @return true if user is online, false otherwise
     */
    boolean isUserOnline(UUID userId);
}
