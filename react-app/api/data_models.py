import db from app

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

    def __init__(self, name, brand, weight, calories, protein, servings, cooked):
        self.name = name
        self.brand = brand
        self.weight = weight
        self.calories = calories
        self.protein = protein
        self.servings = servings
        self.cooked = cooked

class Gear(db.Model):
    __tablename__ = 'gear'
    idgear = db.Column('idgear', db.Integer, primary_key=True)
    name = db.Column('name', db.String(45))
    brand = db.Column('brand', db.String(45))
    weight = db.Column('weight', db.Integer)
    gear_type_type = db.Column('gear_type_type', db.String(45))

    def __init__(self, name, brand, weight, gear_type_type):
        self.name = name
        self.brand = brand
        self.weight = weight
        self.gear_type_type = gear_type_type

class GearType(db.Model):
    __tablename__ = 'gear_type'
    gear_type = db.Column('type', db.String(45), primary_key=True)
    notes = db.Column('notes', db.String(45))

    def __init__(self, gear_type, notes):
        self.gear_type = gear_type
        self.notes = notes

class Meal(db.Model):
    __tablename__ = 'meal'
    name = db.Column('name', db.String(45), primary_key=True)
    food_idfood = db.Column('food_idfood', db.Integer, primary_key=True)
    quantity = db.Column('quantity', db.Integer, primary_key=True)

    def __init__(self, name, food_idfood, quantity):
        self.name = name
        self.food_idfood = food_idfood
        self.quantity = quantity