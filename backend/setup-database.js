const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  try {
    console.log('Connecting to MySQL...');
    
    // Connect DIRECTLY to the database named in .env (defaultdb)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, // <--- IMPORTANT: Connect to existing DB
      port: process.env.DB_PORT,
      ssl: { rejectUnauthorized: false }
    });
    
    console.log(`Connected successfully to ${process.env.DB_NAME}!`);
    console.log('Creating tables...');

    // 1. Create Contacts Table
    const createContacts = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        service VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await connection.query(createContacts);
    console.log('✓ Table "contacts" ready');

    // 2. Create Applications Table
    const createApplications = `
      CREATE TABLE IF NOT EXISTS applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        position VARCHAR(100),
        cover_letter TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await connection.query(createApplications);
    console.log('✓ Table "applications" ready');

    await connection.end();
    console.log('\nDatabase setup complete! 🎉');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

setupDatabase();