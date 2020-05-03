from api import api, database
from flask import render_template, url_for, jsonify, request

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
