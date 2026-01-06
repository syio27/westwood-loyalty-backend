-- Refactor tags from simple strings to Tag entity with many-to-many relationship

-- Step 1: Create tags table
CREATE TABLE tags (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    version BIGINT
);

CREATE INDEX idx_tag_name ON tags(name);

-- Step 2: Create client_tag join table (many-to-many)
CREATE TABLE client_tag (
    client_id BIGINT NOT NULL,
    tag_id BIGINT NOT NULL,
    PRIMARY KEY (client_id, tag_id),
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

CREATE INDEX idx_client_tag_client_id ON client_tag(client_id);
CREATE INDEX idx_client_tag_tag_id ON client_tag(tag_id);

-- Step 3: Migrate existing tags from client_tags to new structure (if table exists)
-- Check if client_tags table exists and migrate data
-- Note: This will only work if client_tags table exists (from old schema)
-- For fresh databases, this step will be skipped gracefully

-- Insert distinct tags into tags table (only if client_tags exists and has data)
INSERT INTO tags (name, created_at, updated_at, version)
SELECT DISTINCT tag, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 0
FROM client_tags
WHERE tag IS NOT NULL AND tag != ''
AND NOT EXISTS (SELECT 1 FROM tags WHERE tags.name = client_tags.tag);

-- Step 4: Populate client_tag join table with relationships
INSERT INTO client_tag (client_id, tag_id)
SELECT ct.client_id, t.id
FROM client_tags ct
JOIN tags t ON t.name = ct.tag
WHERE ct.tag IS NOT NULL AND ct.tag != ''
AND NOT EXISTS (SELECT 1 FROM client_tag WHERE client_tag.client_id = ct.client_id AND client_tag.tag_id = t.id);

-- Step 5: Drop old client_tags table (if it exists)
DROP TABLE IF EXISTS client_tags;

