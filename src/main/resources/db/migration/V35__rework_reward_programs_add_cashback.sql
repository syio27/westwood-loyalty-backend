-- ============================================================
-- V35: Rework reward_programs + add cashback program tables
-- ============================================================

-- 1. Extend reward_programs with common program fields
ALTER TABLE reward_programs ADD COLUMN name VARCHAR(255);
ALTER TABLE reward_programs ADD COLUMN description TEXT;
ALTER TABLE reward_programs ADD COLUMN start_date TIMESTAMP;
ALTER TABLE reward_programs ADD COLUMN end_date TIMESTAMP;
ALTER TABLE reward_programs ADD COLUMN created_by_user_id BIGINT REFERENCES users(id);

-- 2. Program weekly schedules (generic, works for any program type)
CREATE TABLE program_weekly_schedules (
    id          BIGSERIAL PRIMARY KEY,
    program_id  BIGINT      NOT NULL REFERENCES reward_programs(id) ON DELETE CASCADE,
    day_of_week VARCHAR(10) NOT NULL,   -- MONDAY, TUESDAY, ... SUNDAY
    enabled     BOOLEAN     NOT NULL DEFAULT false,
    start_time  TIME,
    end_time    TIME,
    created_at  TIMESTAMP   NOT NULL DEFAULT now(),
    updated_at  TIMESTAMP,
    version     BIGINT      DEFAULT 0,
    UNIQUE(program_id, day_of_week)
);

CREATE INDEX idx_program_weekly_schedules_program_id ON program_weekly_schedules(program_id);

-- 3. Cashback program rules (one-to-one with reward_programs for CASHBACK type)
CREATE TABLE cashback_program_rules (
    id                    BIGSERIAL PRIMARY KEY,
    program_id            BIGINT        NOT NULL UNIQUE REFERENCES reward_programs(id) ON DELETE CASCADE,
    cashback_type         VARCHAR(20)   NOT NULL,           -- PERCENTAGE | BONUS_POINTS
    cashback_value        DECIMAL(19,2) NOT NULL DEFAULT 0, -- the base earning rate (% or flat points)
    min_spend_amount      DECIMAL(19,2) NOT NULL DEFAULT 0, -- 0 = any tx amount qualifies
    eligibility_type      VARCHAR(30)   NOT NULL DEFAULT 'ALL', -- ALL | SPECIFIC_ITEMS | SPECIFIC_CATEGORIES | SPECIFIC_SERVICES
    redeem_limit_percent  INTEGER       NOT NULL DEFAULT 100,   -- 50 or 100
    bonus_lifespan_days   INTEGER,                              -- null = never expires
    points_spend_threshold DECIMAL(19,2),                       -- for BONUS_POINTS: earn cashback_value points per this amount (e.g. 1000)
    created_at            TIMESTAMP     NOT NULL DEFAULT now(),
    updated_at            TIMESTAMP,
    version               BIGINT        DEFAULT 0
);

-- 4. Cashback tiers (optional, many-per-program)
CREATE TABLE cashback_tiers (
    id                     BIGSERIAL PRIMARY KEY,
    program_id             BIGINT        NOT NULL REFERENCES reward_programs(id) ON DELETE CASCADE,
    name                   VARCHAR(100)  NOT NULL,
    min_amount             DECIMAL(19,2) NOT NULL,
    max_amount             DECIMAL(19,2),                       -- null = unlimited upper bound
    extra_earning_percent  DECIMAL(5,2)  NOT NULL DEFAULT 0,    -- additional % on top of base rate
    sort_order             INTEGER       NOT NULL DEFAULT 0,
    created_at             TIMESTAMP     NOT NULL DEFAULT now(),
    updated_at             TIMESTAMP,
    version                BIGINT        DEFAULT 0
);

CREATE INDEX idx_cashback_tiers_program_id ON cashback_tiers(program_id);
