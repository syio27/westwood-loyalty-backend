-- Add last_seen_at column to users table for user activity tracking
ALTER TABLE users ADD COLUMN last_seen_at TIMESTAMP;
