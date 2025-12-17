# Contact Form Troubleshooting Guide

## Quick Diagnostic Steps

### Step 1: Check if Backend is Running
Open your browser console (F12) and run:
```javascript
fetch('https://sustainable-api.onrender.com/api/health')
  .then(r => r.json())
  .then(d => console.log('Backend Status:', d))
  .catch(e => console.error('Backend DOWN:', e.message))
```

**Expected Output**: `Backend Status: { status: 'OK', timestamp: '...' }`

### Step 2: Check Form in Browser DevTools
1. Open DevTools (F12)
2. Go to **Network** tab
3. Fill out the contact form and click "Get Free Quote"
4. Look for a request to `sustainable-api.onrender.com/api/contact`

**Check the Status Code:**
- ✅ **200** = Success! Check your email
- ❌ **Failed to fetch** = Backend is down or network error
- ❌ **400 Bad Request** = Missing required fields
- ❌ **500 Error** = Database connection issue

### Step 3: Check Console for Errors
In DevTools Console tab, look for any error messages when you submit the form.

Common errors:
- `TypeError: Failed to fetch` → Backend server is down
- `NetworkError` → CORS or network connectivity issue
- `SyntaxError: Unexpected token < in JSON` → Backend returned HTML instead of JSON

## Common Issues & Fixes

### Issue: "Failed to fetch" error
**Cause**: Backend is sleeping (Render free tier) or unreachable
**Fix**: 
- Restart your Render service: https://dashboard.render.com
- Or upgrade to paid plan to keep it always running

### Issue: Form appears to submit but no email received
**Cause**: Database save works but email configuration failed
**Expected**: You should still see "Message Sent!" toast
**Fix**: Check backend logs on Render dashboard for email errors

### Issue: "Missing Fields" error appears
**Cause**: One of the required fields is empty
**Required Fields**:
- ✅ Full Name
- ✅ Phone Number
- ✅ Email Address
- ✅ Service Required

### Issue: Nothing happens when clicking Submit button
**Cause**: Form validation prevented submission
**Fix**: Fill in all required fields marked with *

## Backend Restart Instructions

### If using Render:
1. Go to https://dashboard.render.com
2. Click on your `sustainable-api` service
3. Click the "..." menu (top right)
4. Select "Restart"
5. Wait 30 seconds for restart to complete

### If running locally:
```bash
cd backend
npm install
npm start
```

## Email Configuration Check

The backend needs these environment variables set on Render:
- `EMAIL_USER` - Gmail address (e.g., shagunsahu693@gmail.com)
- `EMAIL_PASS` - Gmail app password (NOT your regular password)
- `COMPANY_EMAIL` - Where contact forms are sent

**To get Gmail App Password**:
1. Go to myaccount.google.com/security
2. Enable 2-Factor Authentication
3. Go to App Passwords
4. Select Mail and Windows Computer
5. Copy the 16-character password
6. Use this in `EMAIL_PASS`

## Database Connection Check

To verify database connection:
```bash
cd backend
node test-connection.js
```

Should output: `Connected to MySQL Database`

## API Endpoint Documentation

### POST /api/contact
**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "company": "string (optional)",
  "service": "string (required, one of: roof-ventilators, tubular-skylights, steel-structures, installation, maintenance, energy-solutions, other)",
  "message": "string (optional)"
}
```

**Success Response (200)**:
```json
{
  "message": "Message received and email sent!"
}
```

**Error Response (400)**:
```json
{
  "error": "Missing required fields: name, email, phone, service"
}
```

**Error Response (500)**:
```json
{
  "error": "Failed to save contact information. Please try again.",
  "details": "error message"
}
```

## Monitoring & Logging

### Real-time Monitoring on Render
1. Go to https://dashboard.render.com
2. Select your service
3. Click "Logs" tab
4. Watch logs as you submit the form

### Local Testing
Set up a test submission:
```bash
node test-form-submission.js
```

This will show you if the backend is responsive.

## Performance Optimization

### To keep Render service awake (free tier):
Use UptimeRobot (free service):
1. Go to uptimerobot.com
2. Create a new monitor
3. Set URL to: `https://sustainable-api.onrender.com/api/health`
4. Set interval to 5 minutes
5. This will ping your API every 5 minutes to keep it running

## Still Having Issues?

1. **Check all 3 steps in the Diagnostic Steps section first**
2. **Look at browser console for specific error messages**
3. **Check Render dashboard logs for backend errors**
4. **Verify all environment variables are set correctly**
5. **Test database connection with test-connection.js**

If issue persists, contact Render support or check your email configuration.
