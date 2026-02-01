-- Fix: ON DELETE SET NULL on bonus_consumption.payment_transaction_id conflicts with chk_consumption_ref
-- (PAYMENT_USE rows require payment_transaction_id IS NOT NULL). Use CASCADE so deleting a payment
-- deletes the related bonus_consumption rows instead of nulling the FK.
ALTER TABLE bonus_consumption
    DROP CONSTRAINT IF EXISTS bonus_consumption_payment_transaction_id_fkey;

ALTER TABLE bonus_consumption
    ADD CONSTRAINT bonus_consumption_payment_transaction_id_fkey
    FOREIGN KEY (payment_transaction_id) REFERENCES payment_transactions(id) ON DELETE CASCADE;
