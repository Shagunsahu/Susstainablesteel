@echo off
REM Complete Form Submission Debugging Script
REM Run this to diagnose form submission issues

echo.
echo ================================
echo Form Submission Diagnostic Tool
echo ================================
echo.

REM Check if Node is installed
echo 1. Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo   ❌ Node.js not found
    echo   Please install Node.js from https://nodejs.org
    pause
    exit /b 1
) else (
    echo   ✅ Node.js installed
    for /f "tokens=*" %%i in ('node --version') do echo      Version: %%i
)

echo.
echo 2. Checking Project Structure...
if exist "backend\server.js" (
    echo   ✅ backend\server.js found
) else (
    echo   ❌ backend\server.js NOT found
)

if exist "src\pages\Contact.tsx" (
    echo   ✅ src\pages\Contact.tsx found
) else (
    echo   ❌ src\pages\Contact.tsx NOT found
)

if exist "backend\.env" (
    echo   ✅ backend\.env found
) else (
    echo   ❌ backend\.env NOT found - Environment variables not set!
)

echo.
echo 3. Testing Backend Database Connection...
cd backend
node diagnostic.js
cd ..

echo.
echo 4. Quick Reference Commands:
echo.
echo   Start Backend:
echo   - cd backend
echo   - node server.js
echo.
echo   Start Frontend:
echo   - npm run dev
echo.
echo   Run Diagnostic:
echo   - cd backend
echo   - node diagnostic.js
echo.
echo   Test Form Locally:
echo   1. Start backend: cd backend && node server.js
echo   2. Start frontend: npm run dev
echo   3. In Contact.tsx, change API URL to: http://localhost:5000/api/contact
echo   4. Fill and submit form
echo.
echo 5. Render Backend Management:
echo   - Dashboard: https://dashboard.render.com
echo   - To Restart: Select service → ... menu → Restart
echo   - To View Logs: Select service → Logs tab
echo.
echo 6. Keep Backend Alive Forever:
echo   - Go to https://uptimerobot.com
echo   - Create Monitor for: https://sustainable-api.onrender.com/api/health
echo   - Set interval to 5 minutes
echo.
echo ================================
echo Diagnostic Complete
echo ================================
pause
