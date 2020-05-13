from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from flask_cors import CORS
import pymysql
pymysql.install_as_MySQLdb()


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost:3306/hikeplanner'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)
db = SQLAlchemy(app)
Base = automap_base()
Base.prepare(db.engine, reflect=True)

Food = Base.classes.food


@app.route('/food')
def food():
    foods = [{'idfood':food.idfood, 'name': food.name, 'brand': food.brand, 'weight': food.weight,
            'calories': food.calories, 'protein': food.protein, 'servings': food.servings,
            'cooked': int(food.cooked)} for food in db.session.query(Food).all()]
    return jsonify({'data':foods})


@app.route('/food_insert', methods=['POST'])
def food_insert():
    req_data = request.get_json()
    foods = [Food(name=food['name'], brand=food['brand'], weight=food['weight'], 
            calories=food['calories'], protein=food['protein'], servings=food['servings'],
            cooked=int(food['cooked']), ) for food in req_data]
    db.session.add_all(foods)
    db.session.commit()
    return 'Data Saved'
