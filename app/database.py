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
        result = self.cur.fetchall()
        return result

    def list_meals(self):
        self.cur.execute("select name, quantity  from meal group by name")
        result = self.cur.fetchall()
        print(result)
        return result