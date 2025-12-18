const mysql = require('mysql2/promise');
require('dotenv').config();

async function fixDatabase() {
  try {
    console.log('Connecting to Aiven Database...');
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      ssl: { rejectUnauthorized: false }
    });

    console.log('Connected! Adding project_details column...');

    // Add 'project_details' column if it's missing
    try {
      await connection.query(`
        ALTER TABLE contacts 
        ADD COLUMN project_details TEXT AFTER message
      `);
      console.log('✅ Added "project_details" column to contacts table.');
    } catch (err) {
      if (err.code === 'ER_DUP_FIELDNAME') {
        console.log('ℹ️  "project_details" column already exists.');
      } else {
        throw err;
      }
    }

    console.log('\nDatabase update complete! 🎉');
    await connection.end();

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

fixDatabase();
