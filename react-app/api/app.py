from flask import Flask
from flask_cors import CORS
import database
from flask import jsonify, request

api = Flask(__name__)
CORS(api)

db = database.Database()

@api.route('/food')
def food():
    return jsonify(db.list_food())

@api.route('/meallist')
def meals():
    return jsonify(db.list_meals())

@api.route('/meal_ingredients/<mealname>', methods=["GET"])
def meal_ingredients(mealname):
    return jsonify(db.list_ingredients(mealname))


if __name__ == '__main__':
    api.run(debug=True)
# from api import routes