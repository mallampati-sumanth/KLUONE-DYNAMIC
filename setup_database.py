# Database Setup Script for KLU ONE

import mysql.connector
from mysql.connector import Error

def create_database():
    """Create the KLU ONE database"""
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='password'  # Change this to your MySQL password
        )
        
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute("CREATE DATABASE IF NOT EXISTS klu_one_db")
            print("✅ Database 'klu_one_db' created successfully!")
            
            cursor.close()
            connection.close()
            return True
    except Error as e:
        print(f"❌ Error creating database: {e}")
        return False

def initialize_database():
    """Initialize database tables and insert sample data"""
    try:
        # Import Flask app after database creation
        from app import app, db, User, MessMenu, FacultyCabin, Transport
        from werkzeug.security import generate_password_hash
        
        with app.app_context():
            # Create all tables
            db.create_all()
            print("✅ Database tables created successfully!")
            
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
                print("✅ Admin user created (email: admin@kluone.com, password: admin123)")
            
            # Add sample mess menu
            if MessMenu.query.count() == 0:
                days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                meals = {
                    'Breakfast': 'Idli, Sambar, Chutney, Coffee/Tea, Banana',
                    'Lunch': 'Rice, Dal, Sambar, Rasam, Curd, 2 Chapatis, Veg Curry, Pickle',
                    'Dinner': 'Rice, Dal, 2 Chapatis, Veg Curry, Sweet Dish, Curd'
                }
                
                for day in days:
                    for meal_type, items in meals.items():
                        menu = MessMenu(
                            day=day,
                            meal_type=meal_type,
                            items=items,
                            updated_by=admin.id
                        )
                        db.session.add(menu)
                print("✅ Sample mess menu added!")
            
            # Add sample cabin data
            if FacultyCabin.query.count() == 0:
                sample_cabins = [
                    # CSE Department
                    {'faculty_name': 'Dr. Rajesh Kumar', 'department': 'CSE', 'cabin_number': 'C-101', 'block': 'C Block', 'is_hod': True, 'phone': '9876543210', 'email': 'rajesh.kumar@klu.ac.in'},
                    {'faculty_name': 'Prof. Amit Singh', 'department': 'CSE', 'cabin_number': 'C-102', 'block': 'C Block', 'is_hod': False, 'phone': '9876543211', 'email': 'amit.singh@klu.ac.in'},
                    {'faculty_name': 'Dr. Priya Sharma', 'department': 'CSE', 'cabin_number': 'C-103', 'block': 'C Block', 'is_hod': False, 'phone': '9876543212', 'email': 'priya.sharma@klu.ac.in'},
                    
                    # ECE Department
                    {'faculty_name': 'Dr. Suman Maloji', 'department': 'ECE', 'cabin_number': 'R-403', 'block': 'R Block', 'is_hod': True, 'phone': '9876543213', 'email': 'suman.maloji@klu.ac.in'},
                    {'faculty_name': 'Dr. M. Venkata Narayana', 'department': 'ECE', 'cabin_number': '1B1', 'block': 'R Block', 'is_hod': False, 'phone': '9876543214', 'email': 'venkata.narayana@klu.ac.in'},
                    {'faculty_name': 'Dr. M. Suman', 'department': 'ECE', 'cabin_number': 'R403', 'block': 'R Block', 'is_hod': False, 'phone': '9876543215', 'email': 'm.suman@klu.ac.in'},
                    
                    # EEE Department
                    {'faculty_name': 'Dr. Ramesh Babu', 'department': 'EEE', 'cabin_number': 'E-201', 'block': 'E Block', 'is_hod': True, 'phone': '9876543216', 'email': 'ramesh.babu@klu.ac.in'},
                    {'faculty_name': 'Prof. Lakshmi Devi', 'department': 'EEE', 'cabin_number': 'E-202', 'block': 'E Block', 'is_hod': False, 'phone': '9876543217', 'email': 'lakshmi.devi@klu.ac.in'},
                    
                    # MECH Department
                    {'faculty_name': 'Dr. Suresh Reddy', 'department': 'MECH', 'cabin_number': 'M-301', 'block': 'M Block', 'is_hod': True, 'phone': '9876543218', 'email': 'suresh.reddy@klu.ac.in'},
                    {'faculty_name': 'Dr. Venkat Rao', 'department': 'MECH', 'cabin_number': 'M-302', 'block': 'M Block', 'is_hod': False, 'phone': '9876543219', 'email': 'venkat.rao@klu.ac.in'},
                ]
                
                for cabin_data in sample_cabins:
                    cabin = FacultyCabin(**cabin_data)
                    db.session.add(cabin)
                print("✅ Sample faculty cabin data added!")
            
            # Add sample transport data
            if Transport.query.count() == 0:
                sample_transport = [
                    {'route_name': 'Vijayawada Route', 'bus_number': 'KLU-101', 'timings': '7:00 AM, 5:00 PM', 'stops': 'Vijayawada Bus Stand, Governorpet, Benz Circle, KLU Campus'},
                    {'route_name': 'Guntur Route', 'bus_number': 'KLU-102', 'timings': '6:30 AM, 4:30 PM', 'stops': 'Guntur Bus Stand, Brodipet, Naaz Center, KLU Campus'},
                    {'route_name': 'Tenali Route', 'bus_number': 'KLU-103', 'timings': '7:30 AM, 5:30 PM', 'stops': 'Tenali Bus Stand, Bapatla Road, KLU Campus'},
                ]
                
                for transport_data in sample_transport:
                    transport = Transport(**transport_data)
                    db.session.add(transport)
                print("✅ Sample transport data added!")
            
            db.session.commit()
            print("\n🎉 Database setup completed successfully!")
            print("\n📝 Admin Login Credentials:")
            print("   Email: admin@kluone.com")
            print("   Password: admin123")
            print("\n⚠️  Please change the admin password after first login!")
            
    except Exception as e:
        print(f"❌ Error initializing database: {e}")
        return False

if __name__ == '__main__':
    print("=" * 60)
    print("KLU ONE - Database Setup Script")
    print("=" * 60)
    print("\n🔧 Setting up database...\n")
    
    # Step 1: Create database
    if create_database():
        # Step 2: Initialize tables and data
        initialize_database()
    else:
        print("\n❌ Database setup failed!")
        print("Please check your MySQL credentials and try again.")
