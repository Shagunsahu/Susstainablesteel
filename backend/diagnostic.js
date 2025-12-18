const mysql = require('mysql2');
require('dotenv').config();

console.log('🔍 Diagnostic Test Started...\n');

// Check environment variables
console.log('1️⃣  Environment Variables:');
console.log(`   DB_HOST: ${process.env.DB_HOST ? '✅' : '❌'} ${process.env.DB_HOST ? process.env.DB_HOST : 'NOT SET'}`);
console.log(`   DB_USER: ${process.env.DB_USER ? '✅' : '❌'} ${process.env.DB_USER ? process.env.DB_USER : 'NOT SET'}`);
console.log(`   DB_PASSWORD: ${process.env.DB_PASSWORD ? '✅ (hidden)' : '❌ NOT SET'}`);
console.log(`   DB_NAME: ${process.env.DB_NAME ? '✅' : '❌'} ${process.env.DB_NAME ? process.env.DB_NAME : 'NOT SET'}`);
console.log(`   DB_PORT: ${process.env.DB_PORT ? '✅' : '❌'} ${process.env.DB_PORT ? process.env.DB_PORT : 'NOT SET'}`);
console.log(`   EMAIL_USER: ${process.env.EMAIL_USER ? '✅' : '❌'}`);
console.log(`   EMAIL_PASS: ${process.env.EMAIL_PASS ? '✅ (hidden)' : '❌'}`);
console.log(`   COMPANY_EMAIL: ${process.env.COMPANY_EMAIL ? '✅' : '❌'}\n`);

// Test database connection
console.log('2️⃣  Testing Database Connection...');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect((err) => {
    if (err) {
        console.log(`   ❌ Database connection failed:`);
        console.log(`   Error: ${err.message}`);
        console.log(`   Code: ${err.code}`);
        process.exit(1);
    }
    console.log('   ✅ Database connected successfully!\n');

    // Test if tables exist
    console.log('3️⃣  Checking Tables...');
    connection.query(`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?`, [process.env.DB_NAME], (err, results) => {
        if (err) {
            console.log(`   ❌ Error checking tables: ${err.message}`);
            connection.end();
            process.exit(1);
        }
        
        const tables = results.map(r => r.TABLE_NAME);
        console.log(`   Found tables: ${tables.join(', ') || 'NONE'}\n`);

        // Check for required tables
        const requiredTables = ['contacts', 'applications'];
        console.log('4️⃣  Checking Required Tables...');
        requiredTables.forEach(table => {
            if (tables.includes(table)) {
                console.log(`   ✅ ${table} table exists`);
            } else {
                console.log(`   ❌ ${table} table MISSING`);
            }
        });

        console.log('\n5️⃣  Attempting test insert...');
        const testData = {
            name: 'Test User',
            email: 'test@example.com',
            phone: '971508614171',
            company: 'Test Company',
            service: 'test',
            message: 'Test message'
        };

        connection.query(
            'INSERT INTO contacts (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)',
            [testData.name, testData.email, testData.phone, testData.company, testData.service, testData.message],
            (err, results) => {
                if (err) {
                    console.log(`   ❌ Insert failed: ${err.message}`);
                } else {
                    console.log(`   ✅ Test insert successful (ID: ${results.insertId})`);
                    
                    // Clean up test data
                    connection.query('DELETE FROM contacts WHERE id = ?', [results.insertId], () => {
                        console.log(`   ✅ Test data cleaned up\n`);
                        printSummary();
                    });
                }
            }
        );
    });

    function printSummary() {
        console.log('='.repeat(50));
        console.log('✅ DIAGNOSTIC COMPLETE');
        console.log('='.repeat(50));
        console.log('If all checks passed:');
        console.log('1. Restart the backend on Render');
        console.log('2. Test the forms on your live site');
        console.log('3. Check DevTools Network tab for errors');
        console.log('='.repeat(50));
        connection.end();
        process.exit(0);
    }
});
