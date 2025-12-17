const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
  const configs = [
    { host: 'localhost', user: 'root', password: '' },
    { host: 'localhost', user: 'root', password: 'root' },
    { host: '127.0.0.1', user: 'root', password: 'root' },
    { host: 'localhost', user: 'root', password: 'password' },
    { host: 'localhost', user: 'root', password: 'admin' },
    { host: 'localhost', user: 'root', password: 'mysql' },
    { host: 'localhost', user: 'root', password: '123456' },
  ];

  for (let i = 0; i < configs.length; i++) {
    try {
      console.log(`\nTrying config ${i + 1}:`, { ...configs[i], password: configs[i].password ? '***' : '(empty)' });
      const connection = await mysql.createConnection(configs[i]);
      console.log('✓ SUCCESS! Connection established.');
      
      const [rows] = await connection.query('SELECT VERSION() as version');
      console.log('MySQL Version:', rows[0].version);
      
      await connection.end();
      
      console.log('\n✅ Use this configuration in your .env file:');
      console.log(`DB_HOST=${configs[i].host}`);
      console.log(`DB_USER=${configs[i].user}`);
      console.log(`DB_PASSWORD=${configs[i].password}`);
      if (configs[i].port) console.log(`DB_PORT=${configs[i].port}`);
      
      return;
    } catch (error) {
      console.log('✗ Failed:', error.message);
    }
  }
  
  console.log('\n❌ All connection attempts failed.');
  console.log('\nPlease verify:');
  console.log('1. MySQL service is running');
  console.log('2. Your MySQL root password is correct');
  console.log('3. MySQL is installed (XAMPP/WAMP/MySQL Workbench)');
}

testConnection();
