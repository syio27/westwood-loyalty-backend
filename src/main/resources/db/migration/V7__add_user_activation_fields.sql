-- Add account activation fields to users table
-- Using separate statements for H2 compatibility
ALTER TABLE users ADD COLUMN account_status VARCHAR(20);
ALTER TABLE users ADD COLUMN activation_token VARCHAR(255);
ALTER TABLE users ADD COLUMN activation_token_expiry TIMESTAMP;

-- Set default value for existing rows
UPDATE users SET account_status = 'ACTIVE' WHERE account_status IS NULL;

-- Create index on activation_token for faster lookups
CREATE INDEX idx_users_activation_token ON users(activation_token);

-- Create index on account_status for filtering
CREATE INDEX idx_users_account_status ON users(account_status);

