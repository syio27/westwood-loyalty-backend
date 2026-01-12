-- Add icon_type column to bonus_types table
ALTER TABLE bonus_types
ADD COLUMN icon_type VARCHAR(20);

-- Set default icon types for existing bonus types based on their type
UPDATE bonus_types SET icon_type = 'WALLET' WHERE type = 'PAYMENT_BONUS';
UPDATE bonus_types SET icon_type = 'TROPHY' WHERE type = 'MILESTONE_BONUS';
UPDATE bonus_types SET icon_type = 'CAKE' WHERE type = 'BIRTHDAY_BONUS';
UPDATE bonus_types SET icon_type = 'SHARE' WHERE type = 'REFERRAL_BONUS';
UPDATE bonus_types SET icon_type = 'GIFT' WHERE type = 'WELCOME_BONUS';
UPDATE bonus_types SET icon_type = 'PERCENT' WHERE type = 'PROMO_BONUS';

-- Create index for icon_type (optional, for filtering by icon)
CREATE INDEX idx_bonus_types_icon_type ON bonus_types(icon_type);
