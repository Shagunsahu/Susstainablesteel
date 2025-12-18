# Sustainable Steel

Modern React + Vite frontend with an Express/MySQL backend for handling contact inquiries and job applications, including file uploads and background email notifications via Brevo SMTP.

## Features
- Contact form: saves submissions to MySQL and sends background notification email
- Job application form: saves applications, uploads resumes to `backend/uploads`, sends background email with attachment
- Fire-and-forget email sending so users get instant success even if email is slow
- Health check endpoints for uptime monitoring
- MySQL schema with indexes for contacts and applications

## Tech Stack
- Frontend: React, Vite, TypeScript, Tailwind, Radix UI
- Backend: Node.js, Express, MySQL (mysql2), Multer, Nodemailer
- Email: Brevo SMTP relay
- Deployment: Render-friendly (uses `PORT` and works behind SSL)

## Project Structure
- Frontend: `src/` (pages, components, hooks)
- Backend: `backend/server.js` (API), `backend/uploads/` (resumes), `backend/database.sql` (schema)
- Tooling: `package.json` (root frontend), `backend/package.json` (backend)

## Environment Variables
Create a `.env` in `backend/` with:
```
PORT=5000
DB_HOST=your-mysql-host
DB_USER=your-mysql-user
DB_PASSWORD=your-mysql-password
DB_NAME=your-mysql-db
DB_PORT=3306
EMAIL_USER=your-brevo-smtp-username
EMAIL_PASS=your-brevo-smtp-password
COMPANY_EMAIL=dest@example.com
```

## Database Setup
1. Ensure MySQL is running and accessible.
2. Run the schema script: `mysql -h <host> -u <user> -p < dbname < backend/database.sql`.
3. Tables: `contacts` (name, email, phone, company, service, message, project_details), `applications` (name, email, phone, position, resume_path).

## Backend
**Install & run**
```
cd backend
npm install
npm run dev
```
Server listens on `PORT` (defaults to 5000). `uploads/` is auto-created for resumes.

**Key endpoints**
- POST `/api/contact`
  - Body: `{ name, email, phone, company?, service, message?, project_details? }`
  - Saves to DB, returns 200 immediately, sends email in background.
- POST `/api/apply` (multipart/form-data with `resume` file field)
  - Body fields: `name, email, phone, position`, optional file `resume`
  - Saves to DB, stores file in `uploads/`, returns 200 immediately, sends email in background.
- GET `/api/health` and GET `/` for health/status.

**Email transport (Brevo SMTP)**
Configured in `backend/server.js`:
```
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});
```
- Update `EMAIL_USER`/`EMAIL_PASS` for your Brevo credentials.
- Change destination email by updating `COMPANY_EMAIL` in `.env` and redeploy/restart.

## Frontend
**Install & run**
```
npm install
npm run dev
```
The app runs on Vite’s dev server (default 5173). Update API base URLs if your backend runs elsewhere.

## Deployment Notes
- Render/Web services: bind to `PORT` env; backend already respects it.
- MySQL over SSL: current pool sets `ssl: { rejectUnauthorized: false }` for hosted MySQL providers.
- File uploads: ensure persistent disk on your host if you need resumes retained.

## Changing Notification Recipient Later
- Set `COMPANY_EMAIL` in `backend/.env` (or Render env vars) to the new address.
- Restart/redeploy backend; no code changes required.

## Scripts Reference
- Frontend: `npm run dev`, `npm run build`, `npm run preview`
- Backend: `npm run dev` (or `npm start`)
