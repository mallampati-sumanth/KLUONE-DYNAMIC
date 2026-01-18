@echo off
echo ========================================
echo    KLU ONE - Flask Application
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3.8+ and try again
    pause
    exit /b 1
)

echo [1/3] Checking Python dependencies...
pip show flask >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing dependencies...
    pip install -r requirements.txt
) else (
    echo Dependencies already installed!
)

echo.
echo [2/3] Starting MySQL check...
echo Please ensure MySQL server is running!
echo.

echo [3/3] Starting Flask server...
echo.
echo ========================================
echo   Application will open at:
echo   http://localhost:5000
echo ========================================
echo.
echo Admin Login:
echo   Email: admin@klu.ac.in
echo   Password: admin123
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

python app.py
pause
