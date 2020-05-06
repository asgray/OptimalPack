from flask import Flask
from flask_cors import CORS
import database
from flask import jsonify, request

app = Flask(__name__)
CORS(app)

db = database.Database()

@app.route('/food')
def food():
    return jsonify(db.list_food())

@app.route('/meallist')
def meals():
    return jsonify(db.list_meals())

@app.route('/meal_ingredients/<mealname>', methods=["GET"])
def meal_ingredients(mealname):
    return jsonify(db.list_ingredients(mealname))


if __name__ == '__main__':
    app.run(debug=True)
# from api import routes