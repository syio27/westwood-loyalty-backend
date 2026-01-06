-- Make payment_transaction_id nullable to support bonuses without payments (welcome, birthday, referral)
ALTER TABLE bonus_granted ALTER COLUMN payment_transaction_id DROP NOT NULL;
ALTER TABLE bonus_granted ALTER COLUMN bonus_percentage DROP NOT NULL;
ALTER TABLE bonus_granted ALTER COLUMN payment_amount DROP NOT NULL;

ALTER TABLE bonus_granted ADD COLUMN bonus_type_id BIGINT;
ALTER TABLE bonus_granted ADD COLUMN grant_reason VARCHAR(50);

ALTER TABLE bonus_granted ADD CONSTRAINT fk_bonus_granted_bonus_type 
    FOREIGN KEY (bonus_type_id) REFERENCES bonus_types(id);

CREATE INDEX idx_bonus_granted_bonus_type_id ON bonus_granted(bonus_type_id);

