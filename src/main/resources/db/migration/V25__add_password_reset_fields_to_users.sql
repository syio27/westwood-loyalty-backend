-- Add password reset fields to users table
-- Using separate statements for H2 compatibility
ALTER TABLE users ADD COLUMN password_reset_token VARCHAR(255);
ALTER TABLE users ADD COLUMN password_reset_token_expiry TIMESTAMP;

-- Create index on password_reset_token for faster lookups
CREATE INDEX idx_users_password_reset_token ON users(password_reset_token);
