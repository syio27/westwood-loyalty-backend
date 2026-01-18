-- Make surname column nullable in clients table
-- This allows individual clients to have optional surname
-- Business clients should not have surname at all
ALTER TABLE clients ALTER COLUMN surname DROP NOT NULL;
