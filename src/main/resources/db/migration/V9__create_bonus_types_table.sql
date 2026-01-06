CREATE TABLE bonus_types (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    enabled BOOLEAN NOT NULL DEFAULT true,
    bonus_amount DECIMAL(19, 2),
    bonus_percentage DECIMAL(5, 2),
    milestone_threshold INTEGER,
    description TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    version BIGINT
);

CREATE INDEX idx_bonus_types_enabled ON bonus_types(enabled);
CREATE INDEX idx_bonus_types_type ON bonus_types(type);
CREATE INDEX idx_bonus_types_type_enabled ON bonus_types(type, enabled);

