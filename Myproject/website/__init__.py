from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def create_database():
    db.create_all()
    print('Database Created')



def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static')
    app.config['SECRET_KEY'] = 'HGhkfhnb HKGhhHVHVBFAKhvbdfn fdvnsdbdfsk'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///nududu.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    from .views import views
    from .admin import admin
    from .auth import auth
    
    


    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(admin, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    


    with app.app_context():
        create_database()


    return app