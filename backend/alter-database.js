const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function alterDatabase() {
  try {
    console.log('Connecting to MySQL...');
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'sustainable_steel_db',
      multipleStatements: true
    });

    console.log('Connected successfully!');

    // Read alter SQL file
    const sqlPath = path.join(__dirname, 'alter-database.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    console.log('Altering contacts table...');
    
    await connection.query(sql);

    console.log('✓ Table altered successfully!');
    console.log('✓ Added project_details column to contacts table');

    await connection.end();
    console.log('\nDatabase update complete! 🎉');
    
  } catch (error) {
    console.error('❌ Error altering database:', error.message);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n⚠️  Please check your database credentials in .env file');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.log('\n⚠️  Database does not exist. Run setup-database.js first');
    }
    
    process.exit(1);
  }
}

alterDatabase();
