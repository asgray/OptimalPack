from app import app, database
from flask import render_template, url_for, jsonify, request

'''
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')
'''
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
