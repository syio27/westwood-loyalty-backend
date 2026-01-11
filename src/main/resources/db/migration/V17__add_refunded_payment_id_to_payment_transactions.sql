-- Add refunded_payment_id column to link refund transactions with original payments
ALTER TABLE payment_transactions 
ADD COLUMN refunded_payment_id BIGINT;

-- Add foreign key constraint
ALTER TABLE payment_transactions 
ADD CONSTRAINT fk_refunded_payment 
FOREIGN KEY (refunded_payment_id) REFERENCES payment_transactions(id) ON DELETE SET NULL;

-- Add index for better query performance
CREATE INDEX idx_payment_transactions_refunded_payment ON payment_transactions(refunded_payment_id);

-- Remove @Positive constraint: amount can now be negative for refunds
-- This is handled at application level, no DB constraint change needed

