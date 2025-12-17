-- Run this if you need to update an existing database
USE sustainable_steel_db;

-- This will only run if the table already exists and needs updating
-- If you're running database.sql from scratch, you don't need this

-- Add project_details column if it doesn't exist
ALTER TABLE contacts 
ADD COLUMN IF NOT EXISTS project_details TEXT AFTER message;
