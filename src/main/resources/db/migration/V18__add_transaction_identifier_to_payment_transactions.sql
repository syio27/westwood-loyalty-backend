-- Add transaction identifier fields to payment_transactions
-- First add columns as nullable for existing records
ALTER TABLE payment_transactions 
ADD COLUMN transaction_year INTEGER;

ALTER TABLE payment_transactions 
ADD COLUMN transaction_number BIGINT;

ALTER TABLE payment_transactions 
ADD COLUMN tx_id VARCHAR(12);

-- Set default values for existing records (if any)
-- For existing records, we'll use a placeholder based on ID to ensure uniqueness
-- Using EXTRACT(YEAR FROM ...) which works in both H2 and PostgreSQL
UPDATE payment_transactions 
SET 
    transaction_year = CAST(EXTRACT(YEAR FROM created_at) AS INTEGER) % 100,
    transaction_number = id,
    tx_id = 'PTX-' || 
        LPAD(CAST(CAST(EXTRACT(YEAR FROM created_at) AS INTEGER) % 100 AS VARCHAR), 2, '0') || '-' || 
        LPAD(CAST(id AS VARCHAR), 5, '0')
WHERE transaction_year IS NULL;

-- Now make columns NOT NULL
ALTER TABLE payment_transactions 
ALTER COLUMN transaction_year SET NOT NULL;

ALTER TABLE payment_transactions 
ALTER COLUMN transaction_number SET NOT NULL;

ALTER TABLE payment_transactions 
ALTER COLUMN tx_id SET NOT NULL;

-- Create unique index on tx_id for fast lookups and uniqueness
-- This is the primary uniqueness constraint (format: PTX-YY-XXXXX where XXXXX is random uppercase letters)
CREATE UNIQUE INDEX idx_payment_transactions_tx_id 
ON payment_transactions(tx_id);

-- Create non-unique index on transaction_year for filtering/grouping by year
CREATE INDEX idx_payment_transactions_year 
ON payment_transactions(transaction_year);

-- Note: Existing records will have identifiers based on their ID, which is fine for historical data
-- New transactions will get random 5-character uppercase letter sequences (26^5 = 11,881,376 combinations per year)

