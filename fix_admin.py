from app import app, db, User
from werkzeug.security import generate_password_hash

with app.app_context():
    # Find admin user
    admin = User.query.filter_by(email='admin@kluone.com').first()
    
    if admin:
        admin.is_admin = True
        db.session.commit()
        print(f"✅ User {admin.email} is now an admin!")
        print(f"   Name: {admin.name}")
        print(f"   Is Admin: {admin.is_admin}")
    else:
        print("❌ Admin user not found. Creating new admin...")
        admin = User(
            name='Admin',
            email='admin@kluone.com',
            password=generate_password_hash('admin123'),
            is_admin=True
        )
        db.session.add(admin)
        db.session.commit()
        print("✅ Admin user created!")
    
    # Show all users
    print("\n📋 All Users:")
    users = User.query.all()
    for user in users:
        print(f"   • {user.email} - Admin: {user.is_admin}")
