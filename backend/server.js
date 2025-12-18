require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer'); // Import Nodemailer
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - CORS Configuration
app.use(cors({
    origin: '*', // Allow all origins for now
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure 'uploads' directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// 1. Database Connection
const db = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: {
        rejectUnauthorized: false
    }
});

// Test the connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('DB Connection Failed:', err);
    } else {
        console.log('Connected to MySQL Database');
        connection.release();
    }
});

// 2. Configure Email Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Let's try the built-in service handler again
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    },
    // FORCE IPv4 (Fixes the timeout issue)
    family: 4
});
// 3. Configure Multer (File Uploads)
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage: storage });


// --- ROUTES ---

// A. Contact Form Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, phone, company, service, message, project_details } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
        return res.status(400).json({ error: "Missing required fields: name, email, phone, service" });
    }

    // 1. Save to Database
    const sql = "INSERT INTO contacts (name, email, phone, company, service, message, project_details) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [name, email, phone, company || null, service, message || null, project_details || null], (err, result) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: "Database error", details: err.message });
        }

        console.log('Contact saved to database:', result.insertId);

        // --- THE FIX: Send "Success" to the user IMMEDIATELY ---
        res.status(200).json({ message: "Message received successfully!" });

        // --- Send Email in the Background (Fire and Forget) ---
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.COMPANY_EMAIL,
            subject: `New Contact Inquiry from ${name}`,
            html: `
                <h3>New Message Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Project Details:</strong> ${project_details || 'N/A'}</p>
                <p><strong>Message:</strong> ${message || 'No message'}</p>
            `
        };

        transporter.sendMail(mailOptions, (mailErr, info) => {
            if (mailErr) {
                console.error("Background Email Failed (But User saw Success):", mailErr);
            } else {
                console.log('Background Email Sent:', info.response);
            }
        });
    });
});

// B. Job Application Endpoint (With Resume Attachment)
app.post('/api/apply', upload.single('resume'), (req, res) => {
    const { name, email, phone, position } = req.body;
    const resumePath = req.file ? req.file.path : null;

    // Validate required fields
    if (!name || !email || !phone || !position) {
        return res.status(400).json({ error: "Missing required fields: name, email, phone, position" });
    }

    // 1. Save to Database
    const sql = "INSERT INTO applications (name, email, phone, position, resume_path) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, email, phone, position, resumePath || null], (err, result) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: "Failed to save application. Please try again.", details: err.message });
        }

        console.log('Application saved to database:', result.insertId);

        // --- THE FIX: Send "Success" immediately ---
        res.status(200).json({ message: "Application submitted successfully." });

        // --- Fire-and-forget email with attachment ---
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.COMPANY_EMAIL,
            subject: `Job Application: ${position} - ${name}`,
            html: `
                <h3>New Job Application</h3>
                <p><strong>Position:</strong> ${position}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><em>Resume ${resumePath ? 'attached below' : 'not provided'}.</em></p>
            `,
            attachments: resumePath ? [
                {
                    filename: req.file.originalname,
                    path: path.join(__dirname, resumePath)
                }
            ] : []
        };

        transporter.sendMail(mailOptions, (mailErr, info) => {
            if (mailErr) {
                console.error("Background Email Failed (But User saw Success):", mailErr);
            } else {
                console.log('Background Email Sent:', info.response);
            }
        });
    });
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        status: 'Server is running', 
        message: 'Sustainable Steel API',
        timestamp: new Date().toISOString(),
        endpoints: {
            contact: 'POST /api/contact',
            apply: 'POST /api/apply',
            health: 'GET /api/health'
        }
    });
});

app.get('/api/health', (req, res) => {
    // Check database status
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Health check - DB Error:', err.message);
            return res.status(503).json({ 
                status: 'DEGRADED', 
                message: 'Database unavailable',
                error: err.message,
                timestamp: new Date().toISOString() 
            });
        }
        
        connection.release();
        res.status(200).json({ 
            status: 'OK', 
            database: 'Connected',
            timestamp: new Date().toISOString() 
        });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});