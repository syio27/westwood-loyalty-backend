-- Allow NULL for payment_transaction_id and original_bonus_granted_id in bonus_revoked
-- to support manual bonus revokes (no linked payment or original grant)
ALTER TABLE bonus_revoked
    ALTER COLUMN payment_transaction_id DROP NOT NULL;

ALTER TABLE bonus_revoked
    ALTER COLUMN original_bonus_granted_id DROP NOT NULL;

-- Extend revoke_reason length for manual reasons (e.g. "MANUAL: ...")
ALTER TABLE bonus_revoked
    ALTER COLUMN revoke_reason TYPE VARCHAR(500);
