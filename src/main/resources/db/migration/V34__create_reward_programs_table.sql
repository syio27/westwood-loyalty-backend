CREATE TABLE reward_programs (
    id BIGSERIAL PRIMARY KEY,
    uuid VARCHAR(36) NOT NULL UNIQUE,
    type VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL,
    bonus_type_id BIGINT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    version BIGINT
);

CREATE UNIQUE INDEX idx_reward_programs_uuid ON reward_programs(uuid);
CREATE INDEX idx_reward_programs_type ON reward_programs(type);
