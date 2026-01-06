-- Insert preconfigured bonus types with 30 days expiration

-- Basic Cashback: 3% cashback on every payment
INSERT INTO bonus_types (name, type, enabled, bonus_percentage, expiration_days, description, created_at, updated_at, version)
VALUES (
    'Basic Cashback',
    'BASIC_CASHBACK',
    true,
    3.00,
    30,
    '3% cashback on every payment made by the client',
    NOW(),
    NOW(),
    0
);

-- Welcome Bonus: Fixed 1000 tenge bonus for new clients
INSERT INTO bonus_types (name, type, enabled, bonus_amount, expiration_days, description, created_at, updated_at, version)
VALUES (
    'Welcome Bonus',
    'WELCOME',
    true,
    1000.00,
    30,
    'Fixed 1000 tenge welcome bonus for new clients upon registration',
    NOW(),
    NOW(),
    0
);

-- Birthday Bonus: Fixed 1500 tenge bonus on client's birthday
INSERT INTO bonus_types (name, type, enabled, bonus_amount, expiration_days, description, created_at, updated_at, version)
VALUES (
    'Birthday Bonus',
    'BIRTHDAY',
    true,
    1500.00,
    30,
    'Fixed 1500 tenge bonus granted on client''s birthday',
    NOW(),
    NOW(),
    0
);

-- Referral Bonus: 2500 tenge bonus for both referrer and referee
INSERT INTO bonus_types (name, type, enabled, bonus_amount, expiration_days, description, created_at, updated_at, version)
VALUES (
    'Referral Bonus',
    'REFERRAL',
    true,
    2500.00,
    30,
    'Fixed 2500 tenge bonus for both the referrer and the new client when referral code is used',
    NOW(),
    NOW(),
    0
);

