# from sqlalchemy import create_engine

# engine = create_engine('mysql+pymysql://root:password@127.0.0.1/hikeplanner', pool_recycle=3600)
# connection = engine.connect()
# print(connection)
import pymysql

class Database:
    def __init__(self):
        host = "127.0.0.1"
        user = "root"
        password = "password"
        db = "hikeplanner"
 
        self.con = pymysql.connect(host=host, user=user, password=password, db=db, 
        cursorclass=pymysql.cursors.DictCursor)
        self.cur = self.con.cursor()
 
    def list_food(self):
        self.cur.execute("SELECT * FROM food")
        field_names = [i[0] for i in self.cur.description]
        return {'headers': field_names, 'data': self.cur.fetchall()}

    def list_meals(self):
        self.cur.execute("select name from meal group by name")
        return self.cur.fetchall()
    
    def list_ingredients(self, mealname):
        self.cur.execute(
            "select quantity, food.* from meal " 
            "join food on food_idfood = food.idfood " 
            "where meal.name = %s", mealname
            )
        return self.cur.fetchall()