-- Add payment_method column to payment_transactions table
ALTER TABLE payment_transactions 
ADD COLUMN payment_method VARCHAR(20);

-- Set default value for existing records (CASH)
UPDATE payment_transactions 
SET payment_method = 'CASH'
WHERE payment_method IS NULL;
