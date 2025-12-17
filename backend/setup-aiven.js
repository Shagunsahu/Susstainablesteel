const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupAivenDatabase() {
  try {
    console.log('🔗 Connecting to Aiven MySQL database...');
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      ssl: {
        rejectUnauthorized: false
      },
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    console.log('✅ Connected to Aiven database!');

    // Drop existing tables if they exist (for fresh setup)
    console.log('\n📋 Setting up tables...');
    
    try {
      await connection.query('DROP TABLE IF EXISTS applications');
      console.log('Dropped applications table (if existed)');
    } catch (e) {
      console.log('No applications table to drop');
    }
    
    try {
      await connection.query('DROP TABLE IF EXISTS contacts');
      console.log('Dropped contacts table (if existed)');
    } catch (e) {
      console.log('No contacts table to drop');
    }

    // Create contacts table
    console.log('\n📝 Creating contacts table...');
    await connection.query(`
      CREATE TABLE contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(255),
        service VARCHAR(100),
        message TEXT NOT NULL,
        project_details TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_phone (phone)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✅ Contacts table created');

    // Create applications table
    console.log('📝 Creating applications table...');
    await connection.query(`
      CREATE TABLE applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        position VARCHAR(100) NOT NULL,
        resume_path VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_position (position)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✅ Applications table created');

    console.log('\n✨ Database setup complete!');
    console.log('\n📊 Tables created:');
    console.log('  - contacts');
    console.log('  - applications');

    await connection.end();
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    process.exit(1);
  }
}

setupAivenDatabase();
