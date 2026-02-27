-- Link bonus_granted to reward_programs. Reward programs are the single source of truth for bonus scope.
ALTER TABLE bonus_granted ADD COLUMN reward_program_id BIGINT REFERENCES reward_programs(id) ON DELETE SET NULL;
CREATE INDEX idx_bonus_granted_reward_program_id ON bonus_granted(reward_program_id);
