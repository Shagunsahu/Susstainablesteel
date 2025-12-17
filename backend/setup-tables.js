const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupTables() {
  try {
    console.log('Connecting to MySQL...');
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'sustainable_steel_db'
    });

    console.log('Connected successfully!');

    // Drop existing tables to recreate with new structure
    console.log('Dropping existing tables...');
    await connection.query('DROP TABLE IF EXISTS contacts');
    await connection.query('DROP TABLE IF EXISTS applications');

    // Create contacts table
    console.log('Creating contacts table...');
    await connection.query(`
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
      )
    `);

    // Create applications table
    console.log('Creating applications table...');
    await connection.query(`
      CREATE TABLE applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        position VARCHAR(100) NOT NULL,
        resume_path VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create indexes
    console.log('Creating indexes...');
    await connection.query('CREATE INDEX idx_email ON contacts(email)');
    await connection.query('CREATE INDEX idx_phone ON contacts(phone)');
    await connection.query('CREATE INDEX idx_app_email ON applications(email)');
    await connection.query('CREATE INDEX idx_app_position ON applications(position)');

    console.log('✓ Tables created successfully!');
    console.log('✓ Contacts table with: name, email, phone, company, service, message, project_details');
    console.log('✓ Applications table with: name, email, phone, position, resume_path');
    console.log('✓ Indexes created');

    await connection.end();
    console.log('\nDatabase setup complete! 🎉');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

setupTables();
