-- Make username column nullable since we migrated to email-based authentication
-- This allows new users to be created without a username (email is used instead)
ALTER TABLE users ALTER COLUMN username DROP NOT NULL;

-- Update existing users to set username to email if username is null (for backward compatibility)
UPDATE users SET username = email WHERE username IS NULL;
