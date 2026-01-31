-- Manual revoke audit: who, when, reason
CREATE TABLE manual_bonus_revoke (
    id BIGSERIAL PRIMARY KEY,
    client_id BIGINT NOT NULL,
    amount DECIMAL(19, 2) NOT NULL,
    reason VARCHAR(500),
    revoked_by_user_id BIGINT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    version BIGINT,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (revoked_by_user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_manual_bonus_revoke_client ON manual_bonus_revoke(client_id);
CREATE INDEX idx_manual_bonus_revoke_created ON manual_bonus_revoke(created_at);

-- Grant-level consumption (payment use + manual revoke)
CREATE TABLE bonus_consumption (
    id BIGSERIAL PRIMARY KEY,
    bonus_granted_id BIGINT NOT NULL,
    amount DECIMAL(19, 2) NOT NULL,
    consumption_type VARCHAR(20) NOT NULL,
    payment_transaction_id BIGINT,
    manual_revoke_id BIGINT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    version BIGINT,
    FOREIGN KEY (bonus_granted_id) REFERENCES bonus_granted(id) ON DELETE CASCADE,
    FOREIGN KEY (payment_transaction_id) REFERENCES payment_transactions(id) ON DELETE SET NULL,
    FOREIGN KEY (manual_revoke_id) REFERENCES manual_bonus_revoke(id) ON DELETE CASCADE,
    CONSTRAINT chk_consumption_ref CHECK (
        (consumption_type = 'PAYMENT_USE' AND payment_transaction_id IS NOT NULL AND manual_revoke_id IS NULL) OR
        (consumption_type = 'MANUAL_REVOKE' AND manual_revoke_id IS NOT NULL AND payment_transaction_id IS NULL)
    )
);

CREATE INDEX idx_bonus_consumption_grant ON bonus_consumption(bonus_granted_id);
CREATE INDEX idx_bonus_consumption_payment ON bonus_consumption(payment_transaction_id);
CREATE INDEX idx_bonus_consumption_manual_revoke ON bonus_consumption(manual_revoke_id);
