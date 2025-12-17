CREATE DATABASE sustainable_steel_db;
USE sustainable_steel_db;

-- Table for Contact Form
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(255),
    service VARCHAR(100),
    message TEXT NOT NULL,
    project_details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for Job Applications
CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    position VARCHAR(100) NOT NULL,
    resume_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster queries
CREATE INDEX idx_email ON contacts(email);
CREATE INDEX idx_phone ON contacts(phone);
CREATE INDEX idx_app_email ON applications(email);
CREATE INDEX idx_app_position ON applications(position);
