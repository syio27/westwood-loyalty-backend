package com.westwood.service.impl;

import com.westwood.common.dto.UserStatusDto;
import com.westwood.domain.User;
import com.westwood.repository.UserRepository;
import com.westwood.service.UserActivityService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserActivityServiceImpl implements UserActivityService {
    
    private static final int ONLINE_THRESHOLD_MINUTES = 5;
    
    private final UserRepository userRepository;
    
    public UserActivityServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public void updateLastSeen(UUID userId) {
        User user = userRepository.findByUuid(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        user.setLastSeenAt(LocalDateTime.now());
        userRepository.save(user);
    }
    
    /**
     * Mark user as offline by setting lastSeenAt to a time in the past
     * This ensures they appear offline immediately
     */
    public void markUserOffline(UUID userId) {
        User user = userRepository.findByUuid(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        // Set lastSeenAt to 6 minutes ago to ensure they appear offline immediately
        user.setLastSeenAt(LocalDateTime.now().minusMinutes(ONLINE_THRESHOLD_MINUTES + 1));
        userRepository.save(user);
    }
    
    @Override
    @Transactional(readOnly = true)
    public UserStatusDto getUserStatus(UUID userId) {
        User user = userRepository.findByUuid(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        
        boolean isOnline = isUserOnline(user);
        
        return new UserStatusDto(
                user.getUuid(),
                isOnline,
                user.getLastSeenAt()
        );
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<UserStatusDto> getAllUsersStatus() {
        List<User> users = userRepository.findAll();
        
        return users.stream()
                .map(user -> new UserStatusDto(
                        user.getUuid(),
                        isUserOnline(user),
                        user.getLastSeenAt()
                ))
                .collect(Collectors.toList());
    }
    
    @Override
    @Transactional(readOnly = true)
    public boolean isUserOnline(UUID userId) {
        User user = userRepository.findByUuid(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        return isUserOnline(user);
    }
    
    private boolean isUserOnline(User user) {
        if (user.getLastSeenAt() == null) {
            return false;
        }
        
        LocalDateTime threshold = LocalDateTime.now().minusMinutes(ONLINE_THRESHOLD_MINUTES);
        return user.getLastSeenAt().isAfter(threshold);
    }
}
