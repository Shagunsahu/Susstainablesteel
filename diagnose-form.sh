#!/bin/bash

# Contact Form Diagnostic Script
# Run this to diagnose form submission issues

echo "================================"
echo "Contact Form Diagnostic Tool"
echo "================================"
echo ""

# Function to print results
print_result() {
    if [ $1 -eq 0 ]; then
        echo "✅ $2"
    else
        echo "❌ $2"
    fi
}

# Test 1: Check backend health
echo "1. Testing Backend Health..."
if curl -s https://sustainable-api.onrender.com/api/health > /dev/null; then
    print_result 0 "Backend is running"
else
    print_result 1 "Backend is DOWN - restart it on Render dashboard"
fi
echo ""

# Test 2: Check database connection
echo "2. Checking Database Connection..."
if [ -f "backend/test-connection.js" ]; then
    echo "Run: cd backend && node test-connection.js"
    echo "Should show: 'Connected to MySQL Database'"
else
    print_result 1 "test-connection.js not found"
fi
echo ""

# Test 3: Check environment variables
echo "3. Checking Environment Variables..."
if [ -f "backend/.env" ]; then
    echo "✅ .env file found in backend/"
    echo "   Check that these are set:"
    echo "   - DB_HOST"
    echo "   - DB_USER"
    echo "   - DB_PASSWORD"
    echo "   - DB_NAME"
    echo "   - EMAIL_USER"
    echo "   - EMAIL_PASS"
    echo "   - COMPANY_EMAIL"
else
    print_result 1 ".env file not found"
fi
echo ""

# Test 4: Test form submission
echo "4. Testing Form Submission..."
echo "Run this in browser console on your website:"
echo ""
echo 'fetch("https://sustainable-api.onrender.com/api/contact", {'
echo '  method: "POST",'
echo '  headers: { "Content-Type": "application/json" },'
echo '  body: JSON.stringify({'
echo '    name: "Test User",'
echo '    email: "test@example.com",'
echo '    phone: "9715086141714",'
echo '    service: "roof-ventilators",'
echo '    message: "Test message"'
echo '  })'
echo '}).then(r => r.json()).then(d => console.log(d)).catch(e => console.error(e))'
echo ""

# Test 5: Check port
echo "5. Checking Services..."
echo "Backend should be running on Render at:"
echo "   https://sustainable-api.onrender.com"
echo ""
echo "Frontend should be running at:"
echo "   Your deployment URL"
echo ""

# Test 6: Local testing
echo "6. To Test Locally..."
echo "Terminal 1:"
echo "  cd backend"
echo "  npm install"
echo "  npm start"
echo ""
echo "Terminal 2:"
echo "  npm run dev"
echo ""
echo "Then test form with API URL: http://localhost:5000/api/contact"
echo ""

echo "================================"
echo "Diagnostic Complete"
echo "================================"
echo ""
echo "For detailed troubleshooting, see:"
echo "  - TROUBLESHOOTING_FORM.md"
echo "  - FORM_SUBMISSION_FIX.md"
