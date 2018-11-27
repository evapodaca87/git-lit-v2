from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# setting up app and db
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/gitlit'
db = SQLAlchemy(app)


# migration table
class People(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first = db.Column(db.String(80), unique=False)
    last = db.Column(db.String(80), unique=False)
    email = db.Column(db.String(80), unique=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(120), unique=False)

    def __init__(self, first, last, email, username, password):
        self.first = first
        self.last = last
        self.email = email
        self.username = username
        self.password = password

    # def __repr__(self):
    #     return '<User %r>' % self.username


class Bars(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    location = db.Column(db.String(120), unique=True)
    star_avg = db.Column(db.Float, unique=False)
    user_count = db.Column(db.SmallInteger, unique=False)

    def __init__(self, name, location, star_avg, user_count):
        self.name = name
        self.location = location
        self.star_avg = star_avg
        self.user_count = user_count

    # def __repr__(self):
    #     return '<User %r>' % self.username


# routes
@app.route('/')
def index():
    return render_template('home.html')


@app.route('/about')
def about():
    return 'Find out what we\'re about'


# run in debug mode
if __name__ == '__main__':
    app.run(debug=True)
