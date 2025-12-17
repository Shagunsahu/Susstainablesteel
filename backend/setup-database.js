const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
  try {
    console.log('Connecting to MySQL...');
    
    // Connect without database first to create it
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      multipleStatements: true
    });

    console.log('Connected successfully!');

    // Read SQL file
    const sqlPath = path.join(__dirname, 'database.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Executing SQL statements...');
    
    // Execute SQL
    await connection.query(sql);

    console.log('✓ Database created successfully!');
    console.log('✓ Tables created: contacts, applications');
    console.log('✓ Indexes created');

    await connection.end();
    console.log('\nDatabase setup complete! 🎉');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n⚠️  Please check your database credentials in .env file');
      console.log('Current settings:');
      console.log(`  DB_HOST: ${process.env.DB_HOST}`);
      console.log(`  DB_USER: ${process.env.DB_USER}`);
      console.log(`  DB_PASSWORD: ${process.env.DB_PASSWORD ? '***' : '(empty)'}`);
    }
    
    process.exit(1);
  }
}

setupDatabase();
