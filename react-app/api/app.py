from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.ext.automap import automap_base
from flask_cors import CORS
import pymysql
pymysql.install_as_MySQLdb()


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost:3306/hikeplanner'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db = SQLAlchemy(app)

# UNCLEAR if Automap is the way to go
# Base = automap_base()
# Base.prepare(db.engine, reflect=True)
# Food = Base.classes.food

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
    foods = [{'idfood':food.idfood, 'name': food.name, 'brand': food.brand, 'weight': food.weight,
            'calories': food.calories, 'protein': food.protein, 'servings': food.servings,
            'cooked': int(food.cooked)} for food in db.session.query(Food).all()]
    return jsonify({'data':foods})


@app.route('/food_insert', methods=['POST'])
def food_insert():
    new_row = request.get_json()
    food = Food(name=new_row['name'], brand=new_row['brand'], weight=int(new_row['weight']), calories=int(new_row['calories']), protein=int(new_row['protein']), servings=int(new_row['servings']), cooked=int(new_row['cooked']))
    db.session.add(food)
    db.session.commit()
    return 'Data Saved'

@app.route('/food_delete', methods=['POST'])
def food_delete():
        target_id = request.get_json()
        target = Food.query.filter_by(idfood=target_id).first()
        db.session.delete(target)
        db.session.commit()
        return f'Food {target_id} deleted'