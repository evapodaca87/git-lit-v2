from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask import request

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


# user1 = People('bill', 'bain', 'b@gmail.com', 'billb', 'pass123')
# user2 = People('Evan', 'Apodaca', 'evapodaca87@gmail.com',
#                'evapodaca87', 'evan')
# user3 = People('Jody', 'Isaguirre', 'jody@mail.com', 'jodyisaquirre', 'irre')
# user4 = People('Jonathan', 'Hovland', 'jonathan@mail.com', 'jonathanhovland',
#                'land')
# user5 = People('Rob', 'Hill', 'robhill@mail.com', 'robhill', 'hill')
# db.session.add(user1)
# db.session.add(user2)
# db.session.add(user3)
# db.session.add(user4)
# db.session.add(user5)
# db.session.commit()


# routes
@app.route('/')
def index():
    return render_template('home.html')


@app.route('/new_user')
def new_user():
    return render_template('new_user.html')


@app.route('/post_user', methods=['POST'])
def post_user():
    user = People(request.form['first'],
                  request.form['last'],
                  request.form['email'],
                  request.form['username'],
                  request.form['password'])
    db.session.add(user)
    db.session.commit()
    return '🐍'


@app.route('/users')
def users():
    # myPeople = People.query.all()
    return print('heyo')


# run in debug mode
if __name__ == '__main__':
    app.run(debug=True)
