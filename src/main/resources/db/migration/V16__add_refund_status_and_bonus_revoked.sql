-- Add REFUND status to payment_transactions (already exists as enum in code, but ensure DB supports it)
-- The enum is stored as VARCHAR, so no migration needed for enum values

-- Create bonus_revoked table for revoked/cancelled bonuses
CREATE TABLE bonus_revoked (
    id BIGINT PRIMARY KEY,
    payment_transaction_id BIGINT NOT NULL,
    original_bonus_granted_id BIGINT NOT NULL,
    revoke_reason VARCHAR(100),
    FOREIGN KEY (id) REFERENCES bonus_events(id) ON DELETE CASCADE,
    FOREIGN KEY (payment_transaction_id) REFERENCES payment_transactions(id) ON DELETE CASCADE,
    FOREIGN KEY (original_bonus_granted_id) REFERENCES bonus_granted(id) ON DELETE CASCADE
);

CREATE INDEX idx_bonus_revoked_payment ON bonus_revoked(payment_transaction_id);
CREATE INDEX idx_bonus_revoked_original ON bonus_revoked(original_bonus_granted_id);

