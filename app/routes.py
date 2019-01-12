from app import app, database
from flask import render_template
 
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/food')
def food():
    def db_query():
        db = database.Database()
        fds = db.list_food()
        return fds
    res = db_query()
    return render_template('food.html', result = res)

if __name__ == '__main__':
    app.run(debug = True)