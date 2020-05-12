from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pymysql
pymysql.install_as_MySQLdb()


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost:3306/hikeplanner'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db = SQLAlchemy(app)


class Food(db.Model):
    __tablename__ = 'food'
    idfood = db.Column('idfood', db.Integer, primary_key=True)
    name = db.Column('name', db.String(45))
    brand = db.Column('brand', db.String(45))
    weight = db.Column('weight', db.Integer)
    calories = db.Column('calories', db.Integer)
    protein = db.Column('protein', db.Integer)
    servings = db.Column('servings', db.Integer)
    cooked = db.Column('cooked', db.Boolean)
    headers = [ 'idfood', 'name', 'brand', 'weight', 'calories', 'protein', 'servings', 'cooked']

    def __init__(self, idfood, name, brand, weight, calories, protein, servings, cooked):
        self.idfood = idfood
        self.name = name
        self.brand = brand
        self.weight = weight
        self.calories = calories
        self.protein = protein
        self.servings = servings
        self.cooked = cooked


@app.route('/food')
def food():
    headers = Food.headers
    foods = [{'idfood':food.idfood, 'name': food.name, 'brand': food.brand, 'weight': food.weight,
            'calories': food.calories, 'protein': food.protein, 'servings': food.servings,
            'cooked': int(food.cooked)} for food in Food.query.all()]
    return jsonify({'headers': headers, 'data':foods})
    # foods = [food._sa_instance_state for food in foods]
    # print(foods)
    # return jsonify(foods)


@app.route('/food_insert', methods=['POST'])
def food_insert():
    req_data = request.get_json()
    print(req_data)
    return 'Data Saved'
