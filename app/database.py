import pymysql

class Database:
    def __init__(self):
        host = "127.0.0.1"
        user = "root"
        password = "root"
        db = "hikeplanner"
 
        self.con = pymysql.connect(host=host, user=user, password=password, db=db, 
        cursorclass=pymysql.cursors.DictCursor)
        self.cur = self.con.cursor()
 
    def list_food(self):
        self.cur.execute("SELECT * FROM food")
        result = self.cur.fetchall()
        return result