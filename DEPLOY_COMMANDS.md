# 🚀 Quick Deploy Commands - Copy & Paste

## For PythonAnywhere Deployment

### Step 1: In PythonAnywhere Bash Console

```bash
# Navigate to home directory
cd ~

# Upload files (if using Git)
git clone https://github.com/yourusername/KLU-ONE.git
cd KLU-ONE

# OR if files are already uploaded, just navigate:
cd /home/yourusername

# Install dependencies
pip3 install --user flask flask-sqlalchemy flask-cors pymysql cryptography werkzeug python-dotenv
```

### Step 2: Update app.py Database Connection

**Find this line in app.py (line 14):**
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost/klu_one_db'
```

**Replace with (UPDATE YOUR USERNAME AND PASSWORD):**
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://YOURUSERNAME:YOURPASSWORD@YOURUSERNAME.mysql.pythonanywhere-services.com/YOURUSERNAME$klu_one_db'
```

### Step 3: Run Database Setup

```bash
# In PythonAnywhere Bash console
python3 setup_database.py
```

### Step 4: WSGI Configuration

**Copy this entire file content for your WSGI configuration:**

```python
import sys
import os

# IMPORTANT: Replace 'yourusername' with YOUR actual PythonAnywhere username
project_home = '/home/yourusername'

if project_home not in sys.path:
    sys.path = [project_home] + sys.path

# Import Flask app
from flask import Flask
app = Flask(__name__, static_folder=project_home, static_url_path='')

# Import your application
from app import app as application
```

### Step 5: Verify It Works

```bash
# Test if Flask can import
python3 -c "from app import app; print('Success!')"

# Check if database tables exist
python3 -c "from app import db, User; print('Tables created!')"
```

---

## Quick MySQL Commands (in MySQL console)

```sql
-- See your databases
SHOW DATABASES;

-- Use your database
USE yourusername$klu_one_db;

-- See all tables
SHOW TABLES;

-- Check if admin user exists
SELECT * FROM user WHERE email='admin@kluone.com';

-- Check mess menu data
SELECT * FROM mess_menu LIMIT 5;

-- Check faculty cabin data
SELECT * FROM faculty_cabin LIMIT 5;

-- Count records
SELECT COUNT(*) FROM user;
SELECT COUNT(*) FROM mess_menu;
SELECT COUNT(*) FROM faculty_cabin;
```

---

## Testing Commands (Local Development)

```bash
# Install dependencies locally
pip install -r requirements.txt

# Setup local database (make sure MySQL is running)
python setup_database.py

# Run Flask app locally
python app.py

# Test if app works
curl http://localhost:5000/api/mess/menu
```

---

## Git Commands (If Using GitHub)

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Flask + MySQL full-stack application"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/KLU-ONE.git

# Push to GitHub
git push -u origin main

# Update deployed version (on PythonAnywhere)
cd /home/yourusername
git pull origin main
```

---

## PythonAnywhere Web App Settings

**Static Files Configuration:**
```
URL: /
Directory: /home/yourusername
```

**Virtual Environment:** (Not needed for simple deployment)
```
/home/yourusername/.virtualenvs/myenv
```

---

## Troubleshooting Commands

```bash
# Check Python version
python3 --version

# Check installed packages
pip3 list | grep -i flask

# Check if files exist
ls -la /home/yourusername/app.py

# View last 50 lines of error log
tail -50 /var/log/yourusername.pythonanywhere.com.error.log

# Test database connection
python3 -c "import pymysql; print('PyMySQL works!')"

# Check Flask app can import
python3 -c "from app import app; print('App imported successfully')"
```

---

## Update Database Password in app.py

**Template to copy:**
```python
# MySQL on PythonAnywhere format:
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://USERNAME:PASSWORD@USERNAME.mysql.pythonanywhere-services.com/USERNAME$klu_one_db'

# Example:
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://sumanth123:MySecurePass@sumanth123.mysql.pythonanywhere-services.com/sumanth123$klu_one_db'
```

---

## Create Admin User Manually (If Needed)

```python
# In PythonAnywhere Python console
from app import db, User
from werkzeug.security import generate_password_hash

admin = User(
    name='Admin',
    email='admin@kluone.com',
    password=generate_password_hash('admin123'),
    is_admin=True
)
db.session.add(admin)
db.session.commit()
print("Admin user created!")
```

---

## Quick Health Check

**After deployment, test these URLs:**

1. Homepage:
   ```
   https://yourusername.pythonanywhere.com
   ```

2. API Test:
   ```
   https://yourusername.pythonanywhere.com/api/mess/menu
   ```

3. Login Page:
   ```
   https://yourusername.pythonanywhere.com/login.html
   ```

4. Admin Dashboard:
   ```
   https://yourusername.pythonanywhere.com/admin.html
   ```

---

## Reload Web App

**After making changes, reload the web app:**

1. Go to "Web" tab
2. Click green "Reload" button at top
3. Wait 10 seconds
4. Test your URL

**OR via console:**
```bash
touch /var/www/yourusername_pythonanywhere_com_wsgi.py
```

---

## Update Code After Deployment

```bash
# If using Git
cd /home/yourusername
git pull origin main

# Reload app
touch /var/www/yourusername_pythonanywhere_com_wsgi.py

# Or click "Reload" button in Web tab
```

---

## Backup Database

```sql
-- Export database (in MySQL console)
mysqldump -u yourusername -p yourusername$klu_one_db > backup.sql

-- Import database
mysql -u yourusername -p yourusername$klu_one_db < backup.sql
```

---

## Environment Variables (Optional)

**Create .env file:**
```bash
SECRET_KEY=your-secret-key-here
DATABASE_URI=mysql+pymysql://user:pass@host/db
FLASK_ENV=production
```

**Update app.py to use:**
```python
from dotenv import load_dotenv
import os

load_dotenv()

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'fallback-key')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
```

---

## Change Admin Password (Production)

```python
# In PythonAnywhere Python console
from app import db, User
from werkzeug.security import generate_password_hash

admin = User.query.filter_by(email='admin@kluone.com').first()
admin.password = generate_password_hash('your-new-secure-password')
db.session.commit()
print("Password updated!")
```

---

## Check Deployment Status

**✅ Deployment is successful when:**

- [ ] URL loads: `https://yourusername.pythonanywhere.com`
- [ ] No 502/404 errors
- [ ] Homepage displays correctly
- [ ] Login page works
- [ ] Admin login successful
- [ ] Can add data in admin panel
- [ ] Data appears on public pages
- [ ] API endpoints return JSON: `/api/mess/menu`

---

## Share with Interviewer

**Template email:**

```
Subject: KLU ONE - Live Demo

Hi [Interviewer Name],

I've deployed my KLU ONE project for your review:

Live Application: https://yourusername.pythonanywhere.com

To test admin features:
- URL: https://yourusername.pythonanywhere.com/admin.html
- Email: admin@kluone.com
- Password: admin123

You can:
- Add/edit mess menus
- Manage faculty cabin information
- See real-time database updates

Source Code: https://github.com/yourusername/KLU-ONE

Technologies: Flask, MySQL, SQLAlchemy, JavaScript

Best regards,
[Your Name]
```

---

**🎉 Your deployment is complete! Share your link with confidence!**
