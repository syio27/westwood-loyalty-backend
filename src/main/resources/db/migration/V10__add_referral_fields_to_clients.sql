ALTER TABLE clients ADD COLUMN referrer_id UUID;
ALTER TABLE clients ADD COLUMN referral_code VARCHAR(50);

-- Create unique constraint on referral_code (allows multiple NULLs in standard SQL)
CREATE UNIQUE INDEX idx_clients_referral_code ON clients(referral_code);
CREATE INDEX idx_clients_referrer_id ON clients(referrer_id);

