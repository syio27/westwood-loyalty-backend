-- Add email column to clients table
ALTER TABLE clients ADD COLUMN email VARCHAR(255);

CREATE INDEX idx_clients_email ON clients(email);

-- Create message_templates table
CREATE TABLE message_templates (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(50) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    version BIGINT
);

CREATE INDEX idx_message_templates_type ON message_templates(type);
CREATE INDEX idx_message_templates_name ON message_templates(name);
