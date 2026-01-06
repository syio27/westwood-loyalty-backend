CREATE TABLE payment_transactions (
    id BIGSERIAL PRIMARY KEY,
    client_id BIGINT NOT NULL,
    entered_by_user_id BIGINT NOT NULL,
    amount DECIMAL(19, 2) NOT NULL,
    notes TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'COMPLETED',
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    version BIGINT,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (entered_by_user_id) REFERENCES users(id) ON DELETE RESTRICT
);

CREATE INDEX idx_payment_transactions_client_id ON payment_transactions(client_id);
CREATE INDEX idx_payment_transactions_entered_by ON payment_transactions(entered_by_user_id);
CREATE INDEX idx_payment_transactions_created_at ON payment_transactions(created_at);

