from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import os
from functools import wraps

app = Flask(__name__, static_folder='.', static_url_path='')
app.config['SECRET_KEY'] = 'your-secret-key-change-this-in-production'
# Temporarily use SQLite for testing without MySQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///klu_one.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=24)
app.config['SESSION_COOKIE_SAMESITE'] = None
app.config['SESSION_COOKIE_HTTPONLY'] = False
app.config['SESSION_COOKIE_SECURE'] = False
app.config['SESSION_COOKIE_DOMAIN'] = None

CORS(app, supports_credentials=True, resources={r"/*": {"origins": "*"}})
db = SQLAlchemy(app)

# ==================== DATABASE MODELS ====================

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class MessMenu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(20), nullable=False)
    meal_type = db.Column(db.String(20), nullable=False)  # breakfast, lunch, dinner
    items = db.Column(db.Text, nullable=False)
    last_updated = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    updated_by = db.Column(db.Integer, db.ForeignKey('user.id'))

class FacultyCabin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    faculty_name = db.Column(db.String(100), nullable=False)
    department = db.Column(db.String(100), nullable=False)
    cabin_number = db.Column(db.String(50), nullable=False)
    block = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(20))
    email = db.Column(db.String(120))
    is_hod = db.Column(db.Boolean, default=False)
    last_updated = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Transport(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    route_name = db.Column(db.String(100), nullable=False)
    bus_number = db.Column(db.String(20), nullable=False)
    timings = db.Column(db.String(50), nullable=False)
    stops = db.Column(db.Text, nullable=False)
    last_updated = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# ==================== DECORATORS ====================

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print(f"DEBUG login_required: Session = {dict(session)}, Cookies = {request.cookies}")
        if 'user_id' not in session:
            return jsonify({'error': 'Unauthorized access. Please login.'}), 401
        return f(*args, **kwargs)
    return decorated_function

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print(f"DEBUG admin_required: Session = {dict(session)}, Cookies = {request.cookies}")
        if 'user_id' not in session:
            return jsonify({'error': 'Unauthorized access. Please login.'}), 401
        user = User.query.get(session['user_id'])
        if not user or not user.is_admin:
            return jsonify({'error': 'Admin access required.'}), 403
        return f(*args, **kwargs)
    return decorated_function

# ==================== AUTHENTICATION ROUTES ====================

@app.route('/api/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        if not all([name, email, password]):
            return jsonify({'error': 'All fields are required'}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'Email already exists'}), 400

        hashed_password = generate_password_hash(password)
        new_user = User(name=name, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'Account created successfully!'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        print(f"DEBUG LOGIN: Attempting login for {email}")
        print(f"DEBUG LOGIN: Request headers: {dict(request.headers)}")

        user = User.query.filter_by(email=email).first()
        
        if user and check_password_hash(user.password, password):
            session.clear()  # Clear any existing session
            session['user_id'] = user.id
            session['user_name'] = user.name
            session['is_admin'] = user.is_admin
            session.permanent = True
            session.modified = True  # Force session to save
            print(f"DEBUG LOGIN: Session set - user_id={user.id}, is_admin={user.is_admin}")
            print(f"DEBUG LOGIN: Session after set: {dict(session)}")
            
            response = jsonify({
                'message': 'Login successful!',
                'user': {
                    'id': user.id,
                    'name': user.name,
                    'email': user.email,
                    'is_admin': user.is_admin
                }
            })
            response.set_cookie('session', 'active', samesite=None, secure=False, httponly=False)
            return response, 200
        else:
            print(f"DEBUG LOGIN: Invalid credentials for {email}")
            return jsonify({'error': 'Invalid credentials'}), 401
    except Exception as e:
        print(f"DEBUG LOGIN ERROR: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/api/check-session', methods=['GET'])
def check_session():
    print(f"DEBUG CHECK-SESSION: Cookies: {request.cookies}")
    print(f"DEBUG CHECK-SESSION: Session data: {dict(session)}")
    if 'user_id' in session:
        user = User.query.get(session['user_id'])
        print(f"DEBUG CHECK-SESSION: User found: {user.email}, is_admin: {user.is_admin}")
        response_data = {
            'logged_in': True,
            'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'is_admin': user.is_admin
            }
        }
        print(f"DEBUG CHECK-SESSION: Returning: {response_data}")
        return jsonify(response_data), 200
    print("DEBUG CHECK-SESSION: No user_id in session")
    return jsonify({'logged_in': False}), 200

# ==================== MESS MENU ROUTES ====================

@app.route('/api/mess/menu', methods=['GET'])
def get_mess_menu():
    try:
        day = request.args.get('day', 'all')
        if day == 'all':
            menus = MessMenu.query.all()
        else:
            menus = MessMenu.query.filter_by(day=day).all()
        
        menu_list = [{
            'id': menu.id,
            'day': menu.day,
            'meal_type': menu.meal_type,
            'items': menu.items,
            'last_updated': menu.last_updated.strftime('%Y-%m-%d %H:%M:%S')
        } for menu in menus]
        
        return jsonify({'menus': menu_list}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/mess/menu', methods=['POST'])
@admin_required
def add_mess_menu():
    try:
        data = request.get_json()
        new_menu = MessMenu(
            day=data['day'],
            meal_type=data['meal_type'],
            items=data['items'],
            updated_by=session['user_id']
        )
        db.session.add(new_menu)
        db.session.commit()
        return jsonify({'message': 'Menu added successfully!'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/mess/menu/<int:menu_id>', methods=['PUT'])
@admin_required
def update_mess_menu(menu_id):
    try:
        data = request.get_json()
        menu = MessMenu.query.get_or_404(menu_id)
        menu.day = data.get('day', menu.day)
        menu.meal_type = data.get('meal_type', menu.meal_type)
        menu.items = data.get('items', menu.items)
        menu.updated_by = session['user_id']
        db.session.commit()
        return jsonify({'message': 'Menu updated successfully!'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/mess/menu/<int:menu_id>', methods=['DELETE'])
@admin_required
def delete_mess_menu(menu_id):
    try:
        menu = MessMenu.query.get_or_404(menu_id)
        db.session.delete(menu)
        db.session.commit()
        return jsonify({'message': 'Menu deleted successfully!'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# ==================== CABIN ROUTES ====================

@app.route('/api/cabins', methods=['GET'])
def get_cabins():
    try:
        department = request.args.get('department')
        faculty_name = request.args.get('faculty_name')
        is_hod = request.args.get('is_hod')
        
        query = FacultyCabin.query
        
        if department:
            query = query.filter(FacultyCabin.department.ilike(f'%{department}%'))
        if faculty_name:
            query = query.filter(FacultyCabin.faculty_name.ilike(f'%{faculty_name}%'))
        if is_hod:
            query = query.filter_by(is_hod=True)
            
        cabins = query.all()
        
        cabin_list = [{
            'id': cabin.id,
            'faculty_name': cabin.faculty_name,
            'department': cabin.department,
            'cabin_number': cabin.cabin_number,
            'block': cabin.block,
            'phone': cabin.phone,
            'email': cabin.email,
            'is_hod': cabin.is_hod
        } for cabin in cabins]
        
        return jsonify({'cabins': cabin_list}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/cabins', methods=['POST'])
@admin_required
def add_cabin():
    try:
        data = request.get_json()
        new_cabin = FacultyCabin(
            faculty_name=data['faculty_name'],
            department=data['department'],
            cabin_number=data['cabin_number'],
            block=data['block'],
            phone=data.get('phone'),
            email=data.get('email'),
            is_hod=data.get('is_hod', False)
        )
        db.session.add(new_cabin)
        db.session.commit()
        return jsonify({'message': 'Cabin added successfully!'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/cabins/<int:cabin_id>', methods=['PUT'])
@admin_required
def update_cabin(cabin_id):
    try:
        data = request.get_json()
        cabin = FacultyCabin.query.get_or_404(cabin_id)
        cabin.faculty_name = data.get('faculty_name', cabin.faculty_name)
        cabin.department = data.get('department', cabin.department)
        cabin.cabin_number = data.get('cabin_number', cabin.cabin_number)
        cabin.block = data.get('block', cabin.block)
        cabin.phone = data.get('phone', cabin.phone)
        cabin.email = data.get('email', cabin.email)
        cabin.is_hod = data.get('is_hod', cabin.is_hod)
        db.session.commit()
        return jsonify({'message': 'Cabin updated successfully!'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/cabins/<int:cabin_id>', methods=['DELETE'])
@admin_required
def delete_cabin(cabin_id):
    try:
        cabin = FacultyCabin.query.get_or_404(cabin_id)
        db.session.delete(cabin)
        db.session.commit()
        return jsonify({'message': 'Cabin deleted successfully!'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# ==================== TRANSPORT ROUTES ====================

@app.route('/api/transport', methods=['GET'])
def get_transport():
    try:
        transports = Transport.query.all()
        transport_list = [{
            'id': t.id,
            'route_name': t.route_name,
            'bus_number': t.bus_number,
            'timings': t.timings,
            'stops': t.stops
        } for t in transports]
        return jsonify({'transport': transport_list}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ==================== STATIC FILE ROUTES ====================

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_files(path):
    return app.send_static_file(path)

# ==================== INITIALIZE DATABASE ====================

@app.cli.command()
def init_db():
    """Initialize the database with tables and sample data."""
    db.create_all()
    
    # Create admin user
    admin = User.query.filter_by(email='admin@kluone.com').first()
    if not admin:
        admin = User(
            name='Admin',
            email='admin@kluone.com',
            password=generate_password_hash('admin123'),
            is_admin=True
        )
        db.session.add(admin)
    
    # Add sample mess menu
    if MessMenu.query.count() == 0:
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        meals = {
            'Breakfast': 'Idli, Sambar, Chutney, Tea/Coffee',
            'Lunch': 'Rice, Dal, Sambar, Rasam, Curd, Chapati, Veg Curry',
            'Dinner': 'Rice, Dal, Chapati, Veg Curry, Sweet'
        }
        
        for day in days:
            for meal_type, items in meals.items():
                menu = MessMenu(day=day, meal_type=meal_type, items=items, updated_by=admin.id)
                db.session.add(menu)
    
    # Add sample cabin data
    if FacultyCabin.query.count() == 0:
        sample_cabins = [
            {'faculty_name': 'Dr. Rajesh Kumar', 'department': 'CSE', 'cabin_number': 'C-101', 'block': 'C Block', 'is_hod': True, 'phone': '1234567890', 'email': 'rajesh@klu.ac.in'},
            {'faculty_name': 'Dr. Priya Sharma', 'department': 'ECE', 'cabin_number': 'D-201', 'block': 'D Block', 'is_hod': True, 'phone': '9876543210', 'email': 'priya@klu.ac.in'},
            {'faculty_name': 'Prof. Amit Singh', 'department': 'CSE', 'cabin_number': 'C-102', 'block': 'C Block', 'is_hod': False, 'phone': '1122334455', 'email': 'amit@klu.ac.in'},
        ]
        
        for cabin_data in sample_cabins:
            cabin = FacultyCabin(**cabin_data)
            db.session.add(cabin)
    
    db.session.commit()
    print('Database initialized successfully!')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
