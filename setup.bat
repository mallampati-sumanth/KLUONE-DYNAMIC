@echo off
echo ========================================
echo    KLU ONE - Database Setup
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

echo [1/2] Installing dependencies...
pip install -r requirements.txt

echo.
echo [2/2] Setting up database...
echo.
echo IMPORTANT: Make sure MySQL server is running!
echo.
echo Before running this script:
echo 1. Start MySQL server
echo 2. Update MySQL password in app.py (line 14)
echo    Change: mysql+pymysql://root:password@localhost/klu_one_db
echo    To:     mysql+pymysql://root:YOUR_PASSWORD@localhost/klu_one_db
echo.
pause

python setup_database.py

echo.
echo ========================================
echo Setup Complete!
echo.
echo Next step: Run the application
echo Command: python app.py
echo Or simply double-click: run.bat
echo ========================================
pause
