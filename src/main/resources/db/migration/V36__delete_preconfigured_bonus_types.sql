-- Remove preconfigured bonus types: migrated to reward programs system.
-- Null out FK references in bonus_granted first, then delete all bonus_types rows.

UPDATE bonus_granted SET bonus_type_id = NULL WHERE bonus_type_id IS NOT NULL;
DELETE FROM bonus_types;
