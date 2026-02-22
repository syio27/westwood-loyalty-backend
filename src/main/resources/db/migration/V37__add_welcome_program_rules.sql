-- Welcome program rules (one-to-one with reward_programs for WELCOME type)
-- No weekly schedule for welcome: use start_date/end_date only (same as cashback schedule UI without weekly).
CREATE TABLE welcome_program_rules (
    id                      BIGSERIAL PRIMARY KEY,
    program_id              BIGINT        NOT NULL UNIQUE REFERENCES reward_programs(id) ON DELETE CASCADE,
    grant_type              VARCHAR(20)   NOT NULL,           -- POINTS | FIXED_MONEY_KZT
    grant_value             DECIMAL(19,2) NOT NULL DEFAULT 0, -- points or amount in KZT
    bonus_lifespan_days     INTEGER,                          -- null = never expires
    grant_trigger           VARCHAR(30)   NOT NULL DEFAULT 'ON_JOIN',  -- ON_JOIN | ON_FIRST_PAY
    first_pay_mode          VARCHAR(30),                       -- when grant_trigger=ON_FIRST_PAY: WELCOME_ONLY | WELCOME_AND_CASHBACK
    created_at              TIMESTAMP     NOT NULL DEFAULT now(),
    updated_at              TIMESTAMP,
    version                 BIGINT        DEFAULT 0
);

CREATE INDEX idx_welcome_program_rules_program_id ON welcome_program_rules(program_id);
