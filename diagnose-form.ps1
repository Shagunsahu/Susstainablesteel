# Contact Form Diagnostic Script for Windows PowerShell
# Run this to diagnose form submission issues

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Contact Form Diagnostic Tool" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Function to print results
function Print-Result {
    param(
        [bool]$Success,
        [string]$Message
    )
    if ($Success) {
        Write-Host "✅ $Message" -ForegroundColor Green
    } else {
        Write-Host "❌ $Message" -ForegroundColor Red
    }
}

# Test 1: Check backend health
Write-Host "1. Testing Backend Health..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://sustainable-api.onrender.com/api/health" -TimeoutSec 5
    if ($response.StatusCode -eq 200) {
        Print-Result $true "Backend is running"
        Write-Host "   Response: $($response.Content)" -ForegroundColor Gray
    }
} catch {
    Print-Result $false "Backend is DOWN - restart it on Render dashboard"
    Write-Host "   Error: $($_.Exception.Message)" -ForegroundColor Gray
}
Write-Host ""

# Test 2: Check if files exist
Write-Host "2. Checking Project Files..." -ForegroundColor Yellow
$filesToCheck = @(
    "src\pages\Contact.tsx",
    "backend\server.js",
    "backend\.env",
    "backend\package.json"
)

foreach ($file in $filesToCheck) {
    if (Test-Path $file) {
        Print-Result $true "$file found"
    } else {
        Print-Result $false "$file NOT found"
    }
}
Write-Host ""

# Test 3: Check environment variables
Write-Host "3. Checking Environment Variables..." -ForegroundColor Yellow
if (Test-Path "backend\.env") {
    Write-Host "✅ .env file found" -ForegroundColor Green
    Write-Host "   Verify these are set in backend\.env:" -ForegroundColor Gray
    Write-Host "   - DB_HOST" -ForegroundColor Gray
    Write-Host "   - DB_USER" -ForegroundColor Gray
    Write-Host "   - DB_PASSWORD" -ForegroundColor Gray
    Write-Host "   - DB_NAME" -ForegroundColor Gray
    Write-Host "   - EMAIL_USER" -ForegroundColor Gray
    Write-Host "   - EMAIL_PASS" -ForegroundColor Gray
    Write-Host "   - COMPANY_EMAIL" -ForegroundColor Gray
} else {
    Print-Result $false ".env file not found in backend folder"
}
Write-Host ""

# Test 4: Instructions
Write-Host "4. Quick Diagnostic Steps..." -ForegroundColor Yellow
Write-Host "   a) Open your website and open DevTools (F12)" -ForegroundColor Gray
Write-Host "   b) Go to Network tab" -ForegroundColor Gray
Write-Host "   c) Fill out the contact form and submit" -ForegroundColor Gray
Write-Host "   d) Look for request to 'sustainable-api.onrender.com/api/contact'" -ForegroundColor Gray
Write-Host "   e) Check Status Code:" -ForegroundColor Gray
Write-Host "      • 200 = Success ✅" -ForegroundColor Green
Write-Host "      • 400 = Missing fields ❌" -ForegroundColor Red
Write-Host "      • 500 = Server error ❌" -ForegroundColor Red
Write-Host "      • Failed to fetch = Backend DOWN ❌" -ForegroundColor Red
Write-Host ""

# Test 5: Local testing
Write-Host "5. To Test Locally (Development)..." -ForegroundColor Yellow
Write-Host "   Terminal 1 - Start Backend:" -ForegroundColor Gray
Write-Host "     cd backend" -ForegroundColor Gray
Write-Host "     npm install" -ForegroundColor Gray
Write-Host "     npm start" -ForegroundColor Gray
Write-Host ""
Write-Host "   Terminal 2 - Start Frontend:" -ForegroundColor Gray
Write-Host "     npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "   Then in Contact.tsx, change API URL to:" -ForegroundColor Gray
Write-Host "     http://localhost:5000/api/contact" -ForegroundColor Gray
Write-Host ""

# Test 6: Deploy steps
Write-Host "6. Deploy Updated Code..." -ForegroundColor Yellow
Write-Host "   1. Push changes to Git:" -ForegroundColor Gray
Write-Host "      git add ." -ForegroundColor Gray
Write-Host "      git commit -m 'Fix form submission issues'" -ForegroundColor Gray
Write-Host "      git push" -ForegroundColor Gray
Write-Host ""
Write-Host "   2. Redeploy on Render:" -ForegroundColor Gray
Write-Host "      • Go to https://dashboard.render.com" -ForegroundColor Gray
Write-Host "      • Select your backend service" -ForegroundColor Gray
Write-Host "      • Click Restart" -ForegroundColor Gray
Write-Host "      • Wait 30 seconds" -ForegroundColor Gray
Write-Host ""

# Summary
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Diagnostic Complete" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 Documentation:" -ForegroundColor Cyan
Write-Host "   • FORM_FIX_SUMMARY.md - Overview of fixes" -ForegroundColor Gray
Write-Host "   • TROUBLESHOOTING_FORM.md - Detailed troubleshooting" -ForegroundColor Gray
Write-Host "   • FORM_SUBMISSION_FIX.md - Technical details" -ForegroundColor Gray
Write-Host ""
Write-Host "🚀 Next Steps:" -ForegroundColor Cyan
Write-Host "   1. Deploy updated backend code" -ForegroundColor Gray
Write-Host "   2. Restart backend on Render dashboard" -ForegroundColor Gray
Write-Host "   3. Test form on your live site" -ForegroundColor Gray
Write-Host "   4. Set up UptimeRobot to keep API awake" -ForegroundColor Gray
Write-Host ""
