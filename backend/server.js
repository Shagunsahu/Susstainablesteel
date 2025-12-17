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
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
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
    const { name, email, phone, company, service, message } = req.body;

    // 1. Save to Database
    const sql = "INSERT INTO contacts (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [name, email, phone, company, service, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }

        // 2. Send Email to Company
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.COMPANY_EMAIL, // Send to company
            subject: `New Contact Inquiry from ${name}`,
            html: `
                <h3>New Message Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Service:</strong> ${service || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        transporter.sendMail(mailOptions, (mailErr, info) => {
            if (mailErr) {
                console.error("Email Error:", mailErr);
                // We still return success because DB save worked
                return res.status(200).json({ message: "Saved to DB, but email failed." });
            }
            res.status(200).json({ message: "Message received and email sent!" });
        });
    });
});

// B. Job Application Endpoint (With Resume Attachment)
app.post('/api/apply', upload.single('resume'), (req, res) => {
    const { name, email, phone, position } = req.body;
    const resumePath = req.file ? req.file.path : null;

    // 1. Save to Database
    const sql = "INSERT INTO applications (name, email, phone, position, resume_path) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, email, phone, position, resumePath], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }

        // 2. Send Email with Attachment
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
                <p><em>Resume attached below.</em></p>
            `,
            attachments: resumePath ? [
                {
                    filename: req.file.originalname,
                    path: path.join(__dirname, resumePath) // Attach the file from uploads folder
                }
            ] : []
        };

        transporter.sendMail(mailOptions, (mailErr, info) => {
            if (mailErr) {
                console.error("Email Error:", mailErr);
                return res.status(200).json({ message: "Saved to DB, but email failed." });
            }
            res.status(200).json({ message: "Application submitted and email sent!" });
        });
    });
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        status: 'Server is running', 
        message: 'Sustainable Steel API',
        endpoints: {
            contact: 'POST /api/contact',
            apply: 'POST /api/apply'
        }
    });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});