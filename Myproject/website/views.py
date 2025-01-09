from flask import Blueprint, render_template



views = Blueprint('views', __name__)



@views.route('/')
@views.route('/Home')
def home():
    return render_template('home.html')
