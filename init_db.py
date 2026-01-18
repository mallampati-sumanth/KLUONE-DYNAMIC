from app import app, db, User, MessMenu, FacultyCabin, Transport
from werkzeug.security import generate_password_hash

with app.app_context():
    # Create all tables
    db.create_all()
    print("✅ Database tables created!")
    
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
        print("✅ Admin user created!")
    else:
        print("ℹ️  Admin user already exists")
    
    # Add sample mess menu
    if MessMenu.query.count() == 0:
        days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        meals = {
            'Breakfast': 'Idli, Sambar, Chutney, Coffee/Tea',
            'Lunch': 'Rice, Dal, Sambar, Rasam, Curd, Chapati, Veg Curry',
            'Dinner': 'Rice, Dal, Chapati, Veg Curry, Sweet'
        }
        
        for day in days:
            for meal_type, items in meals.items():
                menu = MessMenu(day=day, meal_type=meal_type, items=items, updated_by=1)
                db.session.add(menu)
        print("✅ Sample mess menu added!")
    
    # Add sample cabin data
    if FacultyCabin.query.count() == 0:
        sample_cabins = [
            {'faculty_name': 'Dr. Rajesh Kumar', 'department': 'CSE', 'cabin_number': 'C-101', 'block': 'C Block', 'is_hod': True, 'phone': '9876543210', 'email': 'rajesh@klu.ac.in'},
            {'faculty_name': 'Dr. Suman Maloji', 'department': 'ECE', 'cabin_number': 'R-403', 'block': 'R Block', 'is_hod': True, 'phone': '9876543213', 'email': 'suman@klu.ac.in'},
            {'faculty_name': 'Prof. Amit Singh', 'department': 'CSE', 'cabin_number': 'C-102', 'block': 'C Block', 'is_hod': False, 'phone': '9876543211', 'email': 'amit@klu.ac.in'},
        ]
        
        for cabin_data in sample_cabins:
            cabin = FacultyCabin(**cabin_data)
            db.session.add(cabin)
        print("✅ Sample cabin data added!")
    
    db.session.commit()
    print("\n🎉 Database setup complete!")
    print("\n📝 Login Credentials:")
    print("   Email: admin@kluone.com")
    print("   Password: admin123")
