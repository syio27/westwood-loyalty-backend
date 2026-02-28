-- Refactor Welcome program type to Event Program (grants on events: join, first pay, birthday, etc.)

-- 1. Update program type: WELCOME -> EVENT
UPDATE reward_programs SET type = 'EVENT' WHERE type = 'WELCOME';

-- 2. Rename welcome_program_rules table to event_program_rules
ALTER TABLE welcome_program_rules RENAME TO event_program_rules;

-- 3. Rename index
ALTER INDEX idx_welcome_program_rules_program_id RENAME TO idx_event_program_rules_program_id;
