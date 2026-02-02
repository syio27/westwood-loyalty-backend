-- Tracks when a client was notified (WhatsApp) about bonuses expiring on a specific date.
-- One row per (client_id, expiry_date); used to show NOTIFIED status and hide Send button when all groups notified.
CREATE TABLE bonus_expiry_notification (
    id BIGSERIAL PRIMARY KEY,
    client_id BIGINT NOT NULL,
    expiry_date DATE NOT NULL,
    notified_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    message_record_id BIGINT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL,
    version BIGINT NOT NULL DEFAULT 0,
    CONSTRAINT fk_bonus_expiry_notification_client FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    CONSTRAINT fk_bonus_expiry_notification_message FOREIGN KEY (message_record_id) REFERENCES message_records(id) ON DELETE SET NULL,
    CONSTRAINT uk_bonus_expiry_notification_client_date UNIQUE (client_id, expiry_date)
);

CREATE INDEX idx_bonus_expiry_notification_client ON bonus_expiry_notification(client_id);
CREATE INDEX idx_bonus_expiry_notification_expiry_date ON bonus_expiry_notification(expiry_date);
