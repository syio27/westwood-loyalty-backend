-- Create message_records table
CREATE TABLE message_records (
    id BIGSERIAL PRIMARY KEY,
    client_id BIGINT NOT NULL,
    initiated_by BIGINT NOT NULL,
    message_content TEXT NOT NULL,
    channel VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    version BIGINT,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (initiated_by) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_message_records_client_id ON message_records(client_id);
CREATE INDEX idx_message_records_initiated_by ON message_records(initiated_by);
CREATE INDEX idx_message_records_status ON message_records(status);
CREATE INDEX idx_message_records_channel ON message_records(channel);
CREATE INDEX idx_message_records_created_at ON message_records(created_at);
