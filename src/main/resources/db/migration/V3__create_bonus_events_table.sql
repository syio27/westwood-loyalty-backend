-- Base table for bonus events (polymorphic table with JOINED inheritance)
-- Note: event_type is the discriminator column used by Hibernate to determine subclass type
CREATE TABLE bonus_events (
    id BIGSERIAL PRIMARY KEY,
    client_id BIGINT NOT NULL,
    event_type VARCHAR(20) NOT NULL,
    event_id UUID NOT NULL UNIQUE,
    bonus_amount DECIMAL(19, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    version BIGINT,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

CREATE TABLE bonus_granted (
    id BIGINT PRIMARY KEY,
    payment_transaction_id BIGINT NOT NULL,
    bonus_percentage DECIMAL(5, 2) NOT NULL,
    payment_amount DECIMAL(19, 2) NOT NULL,
    FOREIGN KEY (id) REFERENCES bonus_events(id) ON DELETE CASCADE,
    FOREIGN KEY (payment_transaction_id) REFERENCES payment_transactions(id) ON DELETE CASCADE
);

CREATE TABLE bonus_used (
    id BIGINT PRIMARY KEY,
    payment_transaction_id BIGINT NOT NULL,
    original_payment_amount DECIMAL(19, 2) NOT NULL,
    final_payment_amount DECIMAL(19, 2) NOT NULL,
    FOREIGN KEY (id) REFERENCES bonus_events(id) ON DELETE CASCADE,
    FOREIGN KEY (payment_transaction_id) REFERENCES payment_transactions(id) ON DELETE CASCADE
);

CREATE INDEX idx_bonus_events_client_id ON bonus_events(client_id);
CREATE INDEX idx_bonus_events_event_type ON bonus_events(event_type);
CREATE INDEX idx_bonus_granted_payment ON bonus_granted(payment_transaction_id);
CREATE INDEX idx_bonus_used_payment ON bonus_used(payment_transaction_id);

