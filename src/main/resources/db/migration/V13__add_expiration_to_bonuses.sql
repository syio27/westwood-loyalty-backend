-- Add expiration_days to bonus_types
ALTER TABLE bonus_types ADD COLUMN expiration_days INTEGER;

-- Add expires_at to bonus_granted
ALTER TABLE bonus_granted ADD COLUMN expires_at TIMESTAMP;

-- H2 doesn't support partial indexes with WHERE clause
CREATE INDEX idx_bonus_granted_expires_at ON bonus_granted(expires_at);

