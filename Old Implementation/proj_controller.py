import mysql.connector
from tabulate import tabulate
from os import system, name

# DB connection object ----------------------------------------
mydb = mysql.connector.connect(
  host="127.0.0.1",
  user="root",
  passwd="password",
  database="mydb"
)
#---------------------------------------------------------------
# Prompt validation methods ------------------------------------
def str_prompt(prompt):
	while True:
		try:
			value = str(input(prompt))
		except ValueError:
			print("Please enter a string")
			continue
		if value.isdigit():
			print("Please enter a string")
			continue
		else:
			return value
	
def int_prompt(prompt):
	while True:
		try:
			value = int(input(prompt))
		except ValueError:
			print("You must enter a positive integer.")
			continue
		if value < 0:
			print("You must enter a positive integer.")
			continue
		else:
			break
	return value
#------------------------------------------------------------


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#~~~~~~~~~ MENUS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
def clear():
	# for windows
	if name == 'nt':
		_ = system('cls')
	# for mac and linux(here, os.name is 'posix')
	else:
		_ = system('clear')
# MAIN MENU ---------------------------------------------------------------
def main_menu():
	options = ['0: Exit','1: Change Data', '2: Manage Data', '3: Special Queries']
	exit = False
	while not exit:
		print("\nMain Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			exit = True
			print('Exiting...\n')
		elif choice == 1:
			clear()
			data_menu()
		elif choice == 2:
			clear()
			relationship_menu()
		elif choice == 3:
			clear()
			special_query_menu()
		else:
			print("Please select a valid option")
#--------------------------------------------------------------------------
# 1st LEVEL MENUS ----------------------------------------------------------
def data_menu(): # goes to 2nd level
	options = ['0: Back','1: Food', '2: Hikers and Gear', '3: Places']
	back = False
	while not back:
		print("\nData Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			clear()
			food_menu()
		elif choice == 2:
			clear()
			pack_menu()
		elif choice == 3:
			clear()
			place_menu()
		else:
			print("Please select a valid option")

def relationship_menu(): # goes to 2nd level
	options = ['0: Back','1: Plan Meals', '2: Plan Trips']
	back = False
	while not back:
		print("\nManagement Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			clear()
			meal_menu()
		elif choice == 2:
			clear()
			planning_menu()
		# elif choice == 3:
		# 	clear()
		# 	location_menu()
		else:
			print("Please select a valid option")
	
#-------------------------------------------------------------------------
# 2nd LEVEL MENUS ----------------------------------------------------------
def food_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nFood Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_food()
		elif choice == 2:
			read_food()
		elif choice == 3:
			change_food()
		elif choice == 4:
			remove_food()
		else:
			print("Please select a valid option")

def pack_menu(): # goes to 3rd level
	options = ['0: Back','1: Manage Hikers', '2: Manage Gear', '3: Manage Gear Types']
	back = False
	while not back:
		print("\nPack Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			hiker_menu()
		elif choice == 2:
			gear_menu()
		elif choice == 3:
			gear_type_menu()
		else:
			print("Please select a valid option")

def place_menu(): # goes to 3rd level
	options = ['0: Back','1: Manage Regions', '2: Manage Feature', '3: Manage Locations']
	back = False
	while not back:
		print("\nPlace Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			region_menu()
		elif choice == 2:
			feature_menu()
		elif choice == 3:
			location_menu()
		else:
			print("Please select a valid option")

def meal_menu(): # goes to 3rd level
	options = ['0: Back','1: Plan Meals', '2: Plan Days', '3: Build Meal Plan']
	back = False
	while not back:
		print("\nMeal Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			build_meal_menu()
		elif choice == 2:
			print("defunct")
			# plan_day_menu()
		elif choice == 3:
			clear()
			meal_plan_menu()
		else:
			print("Please select a valid option")

def planning_menu(): # goes to 3rd level
	options = ['0: Back','1: Manage Packing List', '2: Build Itinerary']
	back = False
	while not back:
		print("\nPlanning Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			packing_list_menu()
		elif choice == 2:
			itinerary_menu()
		else:
			print("Please select a valid option")

def location_menu(): # goes to 3rd level
	options = ['0: Back','1: Manage Locations', '2: Create Gear Restrictions']
	back = False
	while not back:
		print("\nLocation Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			build_location_menu()
		elif choice == 2:
			gear_restriction_menu()
		else:
			print("Please select a valid option")

#--------------------------------------------------------------------------------------------
# 3rd LEVEL MENUS --------------------------------------------------------------------------
def hiker_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nHiker Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_hiker()
		elif choice == 2:
			read_hiker()
		elif choice == 3:
			change_hiker()
		elif choice == 4:
			remove_hiker()
		else:
			print("Please select a valid option")

def gear_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nGear Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_gear()
		elif choice == 2:
			read_gear()
		elif choice == 3:
			change_gear()
		elif choice == 4:
			remove_gear()
		else:
			print("Please select a valid option")

def gear_type_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nGear Type Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_gear_type()
		elif choice == 2:
			read_gear_type()
		elif choice == 3:
			change_gear_type()
		elif choice == 4:
			remove_gear_type()
		else:
			print("Please select a valid option")

def region_menu(): 
	options = ['0: Back','1: Manage Regions', '2: Manage Restrictions']
	back = False
	while not back:
		print("\nRegion Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			region_crud_menu()
		elif choice == 2:
			restrictions_to_region()
		else:
			print("Please select a valid option")

def region_crud_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nRegion Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_region()
		elif choice == 2:
			read_region()
		elif choice == 3:
			change_region()
		elif choice == 4:
			remove_region()
		else:
			print("Please select a valid option")

def feature_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nFeature Menu")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_feature()
		elif choice == 2:
			read_feature()
		elif choice == 3:
			change_feature()
		elif choice == 4:
			remove_feature()
		else:
			print("Please select a valid option")

def build_meal_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nBuild Meal")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_meal()
		elif choice == 2:
			read_meal()
		elif choice == 3:
			change_meal()
		elif choice == 4:
			remove_meal()
		else:
			print("Please select a valid option")

def plan_day_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nPlan Meals for Each Day")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_day()
		elif choice == 2:
			read_day()
		elif choice == 3:
			change_day()
		elif choice == 4:
			remove_day()
		else:
			print("Please select a valid option")

def meal_plan_menu(): # goes to CRUD
	options = ['0: Back','1: Manage Meal Plans', '2: Change Meals in a Meal Plan']
	back = False
	while not back:
		print("\nPlan Meals for Each Trip")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			meal_plan_crud_menu()
		elif choice == 2:
			meal_plan_to_day()
		else:
			print("Please select a valid option")

def meal_plan_crud_menu(): # goes to CRUD
	options = ['0: Back','1: Create BUGGED', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nAdd or Remove Meal Plans ")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_meal_plan()
		elif choice == 2:
			read_meal_plan()
		elif choice == 3:
			change_meal_plan()
		elif choice == 4:
			remove_meal_plan()
		else:
			print("Please select a valid option")

def packing_list_menu(): 
	options = ['0: Back','1: Make Packing List', '2: Edit Packing Lists']
	back = False
	while not back:
		print("\nBuild Packing List")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			packing_list_crud_menu()
		elif choice == 2:
			edit_packing_list_menu()
		else:
			print("Please select a valid option")

def edit_packing_list_menu(): 
	options = ['0: Back','1: Add Item to Packing List', '2: Remove Item From Packing List', 
				'3: Display All Lists', '4: Display Contents of a List', '5: Display Lists With Item']
	back = False
	while not back:
		print("\nBuild Packing List")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			assign_gear()
		elif choice == 2:
			gear_from_list()
		elif choice == 3:
			view_all_lists()
		elif choice == 4:
			view_list_items()
		elif choice == 5:
			view_item_lists()
		else:
			print("Please select a valid option")

def packing_list_crud_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nBuild Packing List")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_packing_list()
		elif choice == 2:
			read_packing_list()
		elif choice == 3:
			change_packing_list()
		elif choice == 4:
			remove_packing_list()
		else:
			print("Please select a valid option")

def itinerary_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nBuild Itineraries")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_itinerary()
		elif choice == 2:
			read_itinerary()
		elif choice == 3:
			change_itinerary()
		elif choice == 4:
			remove_itinerary()
		else:
			print("Please select a valid option")

def build_location_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nManage Locations")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_location()
		elif choice == 2:
			read_location()
		elif choice == 3:
			change_location()
		elif choice == 4:
			remove_location()
		else:
			print("Please select a valid option")

def gear_restriction_menu(): # goes to CRUD
	options = ['0: Back','1: Create', '2: Read', '3: Update', '4: Delete']
	back = False
	while not back:
		print("\nManage Gear Restrictions")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			create_gear_restriction()
		elif choice == 2:
			read_gear_restriction()
		elif choice == 3:
			change_gear_restriction()
		elif choice == 4:
			remove_gear_restriction()
		else:
			print("Please select a valid option")
#----------------------------------------------------------------------------
# N:M Menus------------------------------------------------------------------
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
def meal_plan_to_day():
	options = ['0: Back','1: Assign Meals to Plan', '2: Show All Planned Meals','3: Show Meals From a Single Plan', '4: Remove Meals from Plan']
	back = False
	while not back:
		print("\nManage Days in a Meal Plan")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			assign_day()
		elif choice == 2:
			view_all_planned_days()
		elif choice == 3:
			view_planned_days()
		elif choice == 4:
			remove_day()
		else:
			print("Please select a valid option")

def restrictions_to_region():
	options = ['0: Back','1: Assign Restriction', '2: Show All Restrictions','3: Show Restrictions in a Single Region', 
				'4: Show All Regions with the Same Restriction', '5: Remove Restrictions from a Region']
	back = False
	while not back:
		print("\nManage Restrictions in Different Regions")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			assign_restrictions()
		elif choice == 2:
			view_all_restrictions()
		elif choice == 3:
			view_region_restrictions()
		elif choice == 4:
			view_restriction_region()
		elif choice == 5:
			remove_restriction()
		else:
			print("Please select a valid option")
# N:M Menus------------------------------------------------------------------
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# *********************** CRUD Methods **************************************
# FOOD----------------------------------------------------------------------
def create_food():
	print("Input facts from the nutrition lable of a certain food")
	name = str_prompt("Enter the name of the food: ")
	brand = str_prompt("Enter the brand of the food: ")
	weight = int_prompt("Enter the weight of a serving in grams: ")
	calories = int_prompt("Enter the calories of a serving: ")
	protein = int_prompt("Enter the protein of a serving in grams: ")
	servings = int_prompt("Enter the number of servings in a single package: ")
	cooked = int_prompt("Enter 1 if the food must be cooked, 0 if not: ")
	commit_query(
		("INSERT INTO food (name, brand, weight, calories, protein, servings, cooked) VALUES(%s, %s, %s, %s, %s, %s, %s)"),
		(name, brand, weight, calories, protein, servings, cooked))

def read_food():
	fetch_all_query(("SELECT * FROM food"),["ID Number","Name","Brand","Weight (g)","Calories","Protein (g)","Servings per Package", "Cooked"])

def change_food():
	idfood = int_prompt("Enter the id of the food you wish to change: ")
	name = str_prompt("Enter the name of the food: ")
	brand = str_prompt("Enter the brand of the food: ")
	weight = int_prompt("Enter the weight of a serving in grams: ")
	calories = int_prompt("Enter the calories of a serving: ")
	protein = int_prompt("Enter the protein of a serving in grams: ")
	servings = int_prompt("Enter the number of servings in a single package: ")
	cooked = int_prompt("Enter 1 if the food must be cooked, 0 if not: ")
	commit_query(
		("UPDATE food SET name = %s, brand = %s, weight = %s, calories = %s, protein = %s, servings = %s, cooked = %s WHERE idfood = %s"),
		(name, brand, weight, calories, protein, servings, cooked, idfood))

def remove_food():
	idfood = int_prompt("Enter the id of the food you wish to delete: ")
	commit_query(
		("DELETE FROM food WHERE idfood = %s"),(idfood,))
#FOOD -------------------------------------------------------------------------
#HIKER -------------------------------------------------------------------------
def create_hiker():
	print("Enter info for the person carrying the pack")
	name = str_prompt("Enter the hiker's name: ")
	weight = int_prompt("Enter the hiker's weight in kilograms: ")
	commit_query(
		("INSERT INTO hiker (name, weight) VALUES(%s, %s)"),(name, weight))

def read_hiker():
	fetch_all_query(("SELECT * FROM hiker"),["ID Number","Name","Weight (kg)", "Budget", "Age"])

def change_hiker():
	idhiker = int_prompt("Enter the id of the hiker you wish to edit: ")
	name = str_prompt("Enter the hiker's name: ")
	weight = int_prompt("Enter the hiker's weight in kilograms: ")
	commit_query(
		("UPDATE hiker SET name = %s, weight = %s WHERE idhiker = %s"),(name, weight, idhiker))

def remove_hiker():
	idhiker = int_prompt("Enter the id of the hiker you wish to delete: ")
	commit_query(
		("DELETE FROM hiker WHERE idhiker = %s"),(idhiker,))
#HIKER -------------------------------------------------------------------------
#GEAR -------------------------------------------------------------------------
def create_gear():
	print("Insert a particular item, like a filter or sleeping bag \nNote: To assign gear type, use the Relationship Menu")
	name = str_prompt("Enter the name of the gear: ")
	brand = str_prompt("Enter the brand of the gear: ")
	weight = int_prompt("Enter the weight of the gear in grams: ")
	read_gear_type()
	type_id = str_prompt("Write the type of the gear from the list above: ")
	commit_query(
		("INSERT INTO gear (name, brand, weight, gear_type_type) VALUES(%s, %s, %s, %s)"),(name, brand, weight, type_id))

def read_gear():
	fetch_all_query(("SELECT * FROM gear"),["ID Number","Name","Brand","Weight (g)","Type"])

def change_gear():
	print("Note: To assign gear type, use the Relationship Menu")
	idgear = int_prompt("Enter the id of the gear you wish to edit: ")
	name = str_prompt("Enter the name of the gear: ")
	brand = str_prompt("Enter the brand of the gear: ")
	weight = int_prompt("Enter the weight of the gear in grams: ")
	read_gear_type()
	type_id = str_prompt("Write the type of the gear from the list above: ")
	commit_query(
		("UPDATE gear SET name = %s, brand = %s, weight = %s, gear_type_type = %s WHERE idgear = %s"),(name, brand, weight, idgear, type_id))

def remove_gear():
	idgear = int_prompt("Enter the id of the gear you wish to delete: ")
	commit_query(
		("DELETE FROM gear WHERE idgear = %s"),(idgear,))
#GEAR -------------------------------------------------------------------------
#GEAR TYPE -------------------------------------------------------------------------
def create_gear_type():
	print("Gear Type could be 'tent', 'stove,' 'bottle,' ect \nNote: To assign gear type, use the Relationship Menu")
	gear_type = str_prompt("Enter the type of the gear: ")
	notes = str_prompt("Enter notes for this type of gear: ")
	commit_query(("INSERT INTO gear_type (type, notes) VALUES(%s, %s)"),(gear_type, notes))

def read_gear_type():
	fetch_all_query(("SELECT * FROM gear_type"),["Type", "Notes"])

def change_gear_type():
	print("Note: To assign gear type, use the Relationship Menu")
	idgear_type = int_prompt("Enter the id of the gear type you wish to edit: ")
	gear_type = str_prompt("Enter the type of the gear: ")
	notes = str_prompt("Enter notes for this type of gear: ")
	commit_query(
		("UPDATE gear_type SET type = %s, notes = %s WHERE idgear_type = %s"),(gear_type, notes, idgear_type))

def remove_gear_type():
	idgear_type = int_prompt("Enter the id of the gear type you wish to delete: ")
	commit_query(("DELETE FROM gear_type WHERE idgear_type = %s"),(idgear_type,))
#GEAR TYPE -------------------------------------------------------------------------
#REGION -------------------------------------------------------------------------
def create_region():
	print("Enter the region, such as a National Park or Forest")
	name = str_prompt("Enter the name of the region: ")
	owner = str_prompt("Enter owner of this region: ")
	commit_query(("INSERT INTO region (name, owner) VALUES(%s, %s)"),(name, owner))

def read_region():
	fetch_all_query(("SELECT * FROM region"),["ID Number","Name","Owner"])

def change_region():
	idregion = int_prompt("Enter the id of the region you wish to edit: ")
	name = str_prompt("Enter the name of the region: ")
	owner = str_prompt("Enter owner of this region: ")
	commit_query(
		("UPDATE region SET name = %s, owner = %s WHERE idregion = %s"),(name, owner, idregion))

def remove_region():
	idregion = int_prompt("Enter the id of the region you wish to delete: ")
	commit_query(("DELETE FROM region WHERE idregion = %s"),(idregion,))
#REGION -------------------------------------------------------------------------
#FEATURE -------------------------------------------------------------------------
def create_feature():
	print("Enter a location feature, such as a trailhead or post office")
	name = str_prompt("Enter the name or type of the feature: ")
	description = str_prompt("Enter a description of the feature: ")
	commit_query(
		("INSERT INTO feature (name, description) VALUES(%s, %s)"),(name, description))

def read_feature():
	fetch_all_query(("SELECT * FROM feature"), ["ID Number","Name","Description"])

def change_feature():
	idfeature = int_prompt("Enter the id of the feature you wish to edit: ")
	name = str_prompt("Enter the name or type of the feature: ")
	description = str_prompt("Enter a description of the feature: ")
	commit_query(
		("UPDATE feature SET name = %s, description = %s WHERE idfeature = %s"),(name, description, idfeature))

def remove_feature():
	idfeature = int_prompt("Enter the id of the feature you wish to delete: ")
	commit_query(
		("DELETE FROM feature WHERE idfeature = %s"),(idfeature,))
#FEATURE -------------------------------------------------------------------------
#MEAL -------------------------------------------------------------------------
def create_meal():
	read_meal()
	name = str_prompt("Enter the name or type of the meal: ")
	read_food()
	food_id = int_prompt("Enter the id of the food being added to the meal: ")
	qty = int_prompt("Enter the quantity of the ingredient: ")
	commit_query(
		("INSERT INTO meal (name, food_idfood, quantity) VALUES(%s, %s, %s)"),(name, food_id, qty))

def read_meal():
	fetch_all_query(("SELECT meal.name, food.name, quantity FROM meal JOIN food ON food_idfood = food.idfood ORDER BY meal.name"), 
		["Name","Food ID", "Quantity"])

def read_meal_w_nums():
	fetch_all_query(("SELECT * FROM meal ORDER BY meal.name"), 
		["Name","Food ID", "Quantity"])

def change_meal():
	read_meal()
	name = str_prompt("Enter the name of the meal to edit: ")
	new_name = str_prompt("Edit the name of this meal entry: ")
	read_food()
	food_id = int_prompt("Enter the id of the food being changed: ")
	new_food = int_prompt("Enter the the id of the new food: ")
	qty = int_prompt("Enter the new food quantity: ")
	commit_query(
		("UPDATE meal SET name = %s, food_idfood = %s, quantity= %s WHERE name=%s AND food_idfood = %s"),(new_name, new_food, qty, name, food_id))

def remove_meal():
	read_meal()
	idmeal = str_prompt("Enter the name of the meal you wish to delete: ")
	commit_query(
		("DELETE FROM meal WHERE name = %s"),(idmeal,))
#MEAL -------------------------------------------------------------------------	
#DAY -------------------------------------------------------------------------
def create_day():
	print("Enter the meals you will eat for a day")
	fetch_all_query(("SELECT DISTINCT name FROM meal"),["Available Meals"])
	print("\n")
	breakfast = str_prompt("Enter the name of your breakfast: ")
	lunch = str_prompt("Enter the name of your lunch: ")
	dinner = str_prompt("Enter the name of your dinner: ")
	snack = str_prompt("Enter the name of your snack: ")
	commit_query(
		("INSERT INTO day (breakfast,lunch,dinner,snacks) VALUES(%s, %s,%s,%s);"),(breakfast, lunch, dinner, snack))

def read_day():
	fetch_all_query(("SELECT * FROM day"), ["Breakfast","Lunch","Dinner", "Snack"])

def change_day():
	idday = int_prompt("Enter the id of the day you wish to edit: ")
	breakfast = str_prompt("Enter the name of your breakfast: ")
	lunch = str_prompt("Enter the name of your lunch: ")
	dinner = str_prompt("Enter the name of your dinner: ")
	snack = str_prompt("Enter the name of your snack: ")
	commit_query(
		("UPDATE day SET breakfast = %s, lunch =%s, dinner=%s, snack=%s WHERE idday=%s"),(breakfast, lunch, dinner, snack, idday))

def remove_day():
	idday = int_prompt("Enter the id of the day you wish to delete: ")
	commit_query(
		("DELETE FROM day WHERE idday = %s"),(idday,))
#DAY -------------------------------------------------------------------------	
#MEAL PLAN -------------------------------------------------------------------------
def create_meal_plan():
	#***BUGGED**
	name = str_prompt("Enter the name of the meal plan: ")
	commit_query(
		("INSERT INTO meal_plan (name) VALUES (%s)"),(name))

def read_meal_plan():
	fetch_all_query(("SELECT * FROM meal_plan"), ["Plan ID","Name"])

def change_meal_plan():
	idmeal_plan = int_prompt("Enter the id of the meal plan you wish to edit: ")
	name = str_prompt("Enter the name or type of the meal: ")
	commit_query(
		("UPDATE meal_plan SET name=%s WHERE idmeal_plan=%s"),(name, idmeal_plan))

def remove_meal_plan():
	idplan = int_prompt("Enter the id of the meal plan you wish to delete: ")
	commit_query(
		("DELETE FROM meal_plan WHERE idmeal_plan = %s"),(idplan,))
#MEAL PLAN -------------------------------------------------------------------------	
#PACKING LIST -------------------------------------------------------------------------
def create_packing_list():
	print("Enter the name  and owner of a packing list")
	read_hiker()
	hikerid = int_prompt("Enter the id of the hiker associated with this plan: ")
	name = str_prompt("Enter the name of the packing list: ")
	read_hiker()
	commit_query(
		("INSERT INTO packing_list (name, hiker_idhiker) VALUES(%s, %s)"),(name, hikerid))

def read_packing_list():
	fetch_all_query(("SELECT idpacking_list, hiker.name, packing_list.name FROM packing_list JOIN hiker ON hiker_idhiker = idhiker"), ["List ID","Hiker Name", "List Name"])

def change_packing_list():
	idpacking_list = int_prompt("Enter the id of the packing list you wish to edit: ")
	name = str_prompt("Enter the name of the packing list: ")
	hikerid = int_prompt("Enter the id of the hiker associated with this plan: ")
	commit_query(
		("UPDATE packing_list SET name=%s, hiker_idhiker=%s WHERE idpacking_list=%s"),(name, hikerid, idpacking_list))

def remove_packing_list():
	idpacking_list = int_prompt("Enter the id of the packing list you wish to delete: ")
	commit_query(
		("DELETE FROM packing_list WHERE idpacking_list = %s"),(idpacking_list,))
#PACKING LIST -------------------------------------------------------------------------	
#ITINERARY -------------------------------------------------------------------------
def create_itinerary():
	print("Enter the information for a trip itinerary")
	read_hiker()
	hiker_id = int_prompt("Enter the id of the hiker going on this trip: ")
	read_location()
	start_id = int_prompt("Enter the id of the starting location: ")
	end_id = int_prompt("Enter the id of the ending location: ")
	days = int_prompt("Enter the number of days in the trip: ")
	read_meal_plan()
	meal_plan_id = int_prompt("Enter the id of the meal plan for this trip: ")
	commit_query(
		("INSERT INTO itinerary (hiker_idhiker, start_idlocation, end_idlocation, no_days, meal_plan_idmeal_plan) VALUES(%s, %s, %s, %s, %s)"),
		(hiker_id, start_id, end_id, days, meal_plan_id))

def read_itinerary():
	fetch_all_query(("SELECT iditinerary, hiker.name, startloc.name, endloc.name, no_days, meal_plan.name FROM itinerary"
						" JOIN hiker ON hiker_idhiker = idhiker"
						" JOIN location AS startloc ON start_idlocation = startloc.idlocation"
						" JOIN location AS endloc ON end_idlocation = endloc.idlocation"
						" JOIN meal_plan ON meal_plan_idmeal_plan = idmeal_plan"
						" ORDER BY hiker.name"), ["ID", "Owner", "Start", "End", "Length (Days)", "Meal Plan"])

def change_itinerary():
	id_itinerary = int_prompt("Enter the id of the itinerary you wish to edit: ")
	read_hiker()
	hiker_id = int_prompt("Enter the id of the hiker going on this trip: ")
	read_location()
	start_id = int_prompt("Enter the id of the starting location: ")
	end_id = int_prompt("Enter the id of the ending location: ")
	days = int_prompt("Enter the number of days in the trip: ")
	read_meal_plan()
	meal_plan_id = int_prompt("Enter the id of the meal plan for this trip: ")
	commit_query(
		("UPDATE itinerary SET hiker_idhiker = %s, start_idlocation = %s, end_idlocation = %s, no_days= %s, meal_plan_idmeal_plan= %s WHERE iditinerary = %s"),
		(hikerid, start_id, end_id, days, meal_plan_id, id_itinerary))

def remove_itinerary():
	id_itinerary = int_prompt("Enter the id of the itinerary you wish to delete: ")
	commit_query(
		("DELETE FROM itinerary WHERE iditinerary = %s"),(id_itinerary,))
#ITINERARY -------------------------------------------------------------------------	
#LOCATION -------------------------------------------------------------------------
def create_location():
	print("Enter the name and region of a location, as well as a special feature ")
	name = str_prompt("Enter the name of the location: ")
	read_feature()
	feature_id = int_prompt("Enter the id of the feature associated with this location: ")
	read_region()
	region_id = int_prompt("Enter the id of the region associated with this location: ")
	commit_query(
		("INSERT INTO location (name, feature_idfeature, region_idregion) VALUES(%s, %s, %s)"),(name, feature_id, region_id))

def read_location():
	fetch_all_query(("SELECT idlocation, location.name, feature.name, region.name FROM location "
					"JOIN feature ON feature_idfeature = idfeature "
					"JOIN region ON region_idregion = idregion"), ["ID","Name", "Feature Type", "Region"])

def change_location():
	id_location = int_prompt("Enter the id of the location you wish to edit: ")
	name = str_prompt("Enter the name of the location: ")
	read_feature()
	feature_id = int_prompt("Enter the id of the feature associated with this location: ")
	read_region()
	region_id = int_prompt("Enter the id of the region associated with this location: ")
	commit_query(
		("UPDATE location SET name=%s, feature_idfeature=%s, region_idregion= %s WHERE idlocation = %s"),(name, feature_id, region_id, id_location))

def remove_location():
	id_location = int_prompt("Enter the id of the location you wish to delete: ")
	commit_query(
		("DELETE FROM location WHERE idlocation = %s"),(id_location,))
#LOCATION -------------------------------------------------------------------------	
#GEAR RESTRICTION -------------------------------------------------------------------------
def create_gear_restriction():
	read_gear_type()
	print("Enter the type of gear and it's requirement (Required, Proibited, Reccomended, Discouraged)")
	idtype = str_prompt("Enter the type of the gear type you wish to restrict: ")
	restriction = str_prompt("Enter the restriction or requirement: ")
	commit_query(
		("INSERT INTO gear_restrictions (gear_type_type, restriction) VALUES(%s, %s)"),(idtype, restriction))

def read_gear_restriction():
	fetch_all_query(("SELECT * FROM gear_restrictions"), ["Gear Type","Restriction"])

def change_gear_restriction():
	read_gear_restriction()
	id_restriction = int_prompt("Enter the id of the gear restriction you wish to edit: ")
	idtype = str_prompt("Enter the id of the gear type you wish to enter: ")
	restriction = str_prompt("Enter the restriction or requirement: ")
	commit_query(
		("UPDATE gear_restrictions SET gear_type_type=%s, restriction=%s WHERE idgear_restrictions= %s"),(idtype, restriction, id_restriction))

def remove_gear_restriction():
	id_restriction = int_prompt("Enter the id of the gear restriction you wish to delete: ")
	commit_query(
		("DELETE FROM gear_restrictions WHERE idgear_restrictions = %s"),(id_restriction,))
#GEAR RESTRICTION -------------------------------------------------------------------------	

#N:M CRUD ------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
def assign_day():
	read_meal_plan()
	meal_plan_id = int_prompt("Enter the id of the meal plan you wish to add to: ")
	read_meal_w_nums()
	meal_id = str_prompt("Enter the name of the meal you wish to add: ")
	food_id = int_prompt("Enter the id of the meal's food : ")
	commit_query(
		("INSERT INTO meal_plan_has_day (meal_plan_idmeal_plan, meal_name, meal_food_idfood) VALUES (%s, %s, %s);"),
		(meal_plan_id, meal_id, food_id))

def view_all_planned_days():
	fetch_all_query(("SELECT meal_plan.name, meal.name, food.brand, food.name, quantity FROM meal_plan_has_day"
					" JOIN meal_plan ON meal_plan.idmeal_plan = meal_plan_idmeal_plan"
					" JOIN meal ON meal.name = meal_name AND meal.food_idfood = meal_food_idfood"
					" JOIN food ON meal.food_idfood = food.idfood"
					" ORDER BY meal_plan.name"), 
					["Plan", "Food", "Brand", "Quantity"])

def view_planned_days():
	read_meal_plan()
	name = str_prompt("Enter the name of the plan you'd like to examine: ")
	fetch_all_query(("SELECT meal_plan.name, meal.name, food.brand, food.name, quantity FROM meal_plan_has_day"
					" JOIN meal_plan ON meal_plan.idmeal_plan = meal_plan_idmeal_plan"
					" JOIN meal ON meal.name = meal_name AND meal.food_idfood = meal_food_idfood"
					" JOIN food ON meal.food_idfood = food.idfood"
					" WHERE meal_plan.name =%s"
					" ORDER BY meal.name"), 
					["Plan", "Food", "Brand", "Quantity"], (name,))

def remove_day():
	fetch_all_query(("SELECT meal_plan.name, meal_name, meal_plan_idmeal_plan, meal_food_idfood, food.name FROM meal_plan_has_day "
					" JOIN food ON food.idfood = meal_food_idfood"
					" JOIN meal_plan ON meal_plan.idmeal_plan = meal_plan_idmeal_plan"
					" ORDER BY meal_plan.name"), 
					["Meal Plan","Meal Name","Plan ID", "Food ID", "Food"])
	id_plan = int_prompt("Enter the id of the plan you would like to remove a meal from: ")
	meal_name = str_prompt("Enter the name of the meal you would like to remove from the meal plan: ")
	id_food = int_prompt("Enter the id of the food you would like to remove from the meal plan: ")
	commit_query(("DELETE FROM meal_plan_has_day WHERE meal_plan_idmeal_plan = %s AND meal_food_idfood = %s AND meal_name = %s"),
				(id_plan, id_food, meal_name))
# MEAL PLAN HAS DAY -------------------------------------------------------------------------------------------------------------------------------
# GEAR RESTRICTIONS HAS REGION -------------------------------------------------------------------------------------------------------------------------------
def assign_restrictions():
	read_gear_restriction()
	restriction_id = int_prompt("Enter the id of the restriction you wish to add: ")
	read_region()
	region_id = int_prompt("Enter the id of the region with the restriction: ")
	commit_query(
		("INSERT INTO gear_restrictions_has_region (gear_restrictions_idgear_restrictions, region_idregion) VALUES (%s, %s);"),
		(restriction_id, region_id))

def view_all_restrictions():
	fetch_all_query(("SELECT name, gear_type_type, restriction FROM gear_restrictions_has_region "
					"JOIN gear_restrictions ON gear_restrictions_idgear_restrictions = gear_restrictions.idgear_restrictions "
					"JOIN region ON region_idregion = region.idregion "
					"ORDER BY name"), ["Region", "Gear Type", "Restriction"])

def view_region_restrictions():
	read_region()
	region_id = int_prompt("Enter the id of the region with the restriction: ")
	fetch_all_query(("SELECT name, gear_type_type, restriction FROM gear_restrictions_has_region "
					"JOIN gear_restrictions ON gear_restrictions_idgear_restrictions = gear_restrictions.idgear_restrictions "
					"JOIN region ON region_idregion = region.idregion "
					"WHERE idregion = %s"), ["Region", "Gear Type", "Restriction"], (region_id,))

def view_restriction_region():
	read_gear_restriction()
	restriction_id = int_prompt("Enter the id of the restriction: ")
	fetch_all_query(("SELECT name, gear_type_type, restriction FROM gear_restrictions_has_region "
					"JOIN gear_restrictions ON gear_restrictions_idgear_restrictions = gear_restrictions.idgear_restrictions "
					"JOIN region ON region_idregion = region.idregion "
					"WHERE idgear_restrictions = %s"), ["Region", "Gear Type", "Restriction"], (restriction_id,))

def remove_restriction():
	fetch_all_query(("SELECT gear_restrictions_idgear_restrictions, region_idregion, name, gear_type_type, restriction FROM gear_restrictions_has_region "
					"JOIN gear_restrictions ON gear_restrictions_idgear_restrictions = gear_restrictions.idgear_restrictions "
					"JOIN region ON region_idregion = region.idregion "
					"ORDER BY name"), ["Restriction ID", "Region ID","Region", "Gear Type", "Restriction"])
	print("\n Both the restriction ID and region ID are required to remove a restriction from a region")
	id_restriction = int_prompt("Enter the id of the restriction: ")
	id_region = int_prompt("Enter the id of the region: ")
	commit_query(
		("DELETE FROM gear_restrictions_has_region WHERE gear_restrictions_idgear_restrictions = %s, region_idregion= %s"),(id_restriction, id_region))
# GEAR RESTRICTIONS HAS REGION -------------------------------------------------------------------------------------------------------------------------------
# GEAR HAS PACKING LIST -------------------------------------------------------------------------------------------------------------------------------
def assign_gear():
	read_packing_list()
	list_id = int_prompt("Enter the id of the list you wish to add to: ")
	read_gear() 
	gear_id = int_prompt("Enter the id of the gear item you wish to add: ")
	qty = int_prompt("Enter the number of the item you are adding: ")
	commit_query(
		("INSERT INTO gear_has_packing_list (packing_list_idpacking_list, gear_idgear, quantity) VALUES (%s, %s, %s);"),
		(list_id, gear_id, qty))

def gear_from_list():
	fetch_all_query(("SELECT packing_list_idpacking_list, gear_idgear, hiker.name, packing_list.name, gear.name, quantity FROM gear_has_packing_list "
					"JOIN packing_list ON packing_list_idpacking_list = idpacking_list "
					"JOIN gear ON gear_idgear = idgear "
					"JOIN hiker ON packing_list.hiker_idhiker = idhiker"), ["List ID","Gear ID","Hiker","List","Gear","Quantity"])
	print("\n Both the Lis ID and Gear ID are required to remove an item from a list")
	list_id = int_prompt("Enter the id of the list item you wish to change: ")
	gear_id = int_prompt("Enter the id of the gear item you wish to remove: ")
	commit_query(
		("DELETE FROM gear_has_packing_list WHERE packing_list_idpacking_list = %s AND gear_idgear= %s"),(list_id, gear_id))

def view_all_lists():
	fetch_all_query(("SELECT hiker.name, packing_list.name, gear.name, quantity FROM gear_has_packing_list "
					"JOIN packing_list ON packing_list_idpacking_list = idpacking_list "
					"JOIN gear ON gear_idgear = idgear "
					"JOIN hiker ON packing_list.hiker_idhiker = idhiker"), ["Hiker","List","Gear", "Quantity"])

def view_list_items():
	read_packing_list()
	list_id = int_prompt("Enter the id of the list item you wish to see: ")
	fetch_all_query(("SELECT gear.name, quantity FROM gear_has_packing_list "
					"JOIN packing_list ON packing_list_idpacking_list = idpacking_list "
					"JOIN gear ON gear_idgear = idgear WHERE gear_has_packing_list.packing_list_idpacking_list = %s"), 
					["List Contents","Quantity"], (list_id,))

def view_item_lists():
	read_gear()
	gear_id = int_prompt("Enter the id of the list item you wish to see: ")
	fetch_all_query(("SELECT packing_list.name, hiker.name, quantity FROM gear_has_packing_list "
					"JOIN packing_list ON packing_list_idpacking_list = idpacking_list "
					"JOIN gear ON gear_idgear = idgear "
					"JOIN hiker ON packing_list.hiker_idhiker = idhiker "
					"WHERE gear_has_packing_list.gear_idgear = %s"), ["List Contents", "Owner", "Quantity"], (gear_id,))
# GEAR HAS PACKING LIST -------------------------------------------------------------------------------------------------------------------------------
#N:M CRUD ------------------------------------------------------------------------------------

def special_query_menu():
	options = ['0: Back','1: Display the Full Menu Sorted by Calories to Grams and Protein to Grams', 
				'2: Find the 10 Most Calorically Dense Meals',
				'3: Show All Locations Where A Bear Can Is Required', 
				'4: Show the Types of Gear in a Packing List ', 
				'5: Compare the Total Weight of a Packing List With the Weight Capacity of it’s Owner',
				'6: View the Stats of a Meal Plan',
				'7: View the Restrictions on a Region',
				'8: View the Regions with a Restriction',
				'9: View Gear in a Packing List',
				'10: View Packing Lists Containing a Specific Gear',
				'11: Show the Totals for All the Food in a Day'
				]
	back = False
	while not back:
		print("\nManage Restrictions in Different Regions")
		for option in options:
			print(option)
		choice = int_prompt("Choose an option: ")
		if choice == 0:
			clear()
			back = True
		elif choice == 1:
			fetch_all_query(("SELECT name, brand, weight, calories, protein, servings, cooked, calories/weight AS 'cal_per_g', protein/weight AS 'prot_per_g' "
							"FROM food ORDER BY cal_per_g DESC, prot_per_g DESC;"), 
							["Name", "Brand", "Weight", "Calories", "Protein", "Servings", "Cooked", "Calories per Gram", "Protein per Gram"])

		elif choice == 2:
			fetch_all_query(("SELECT meal.name, sum(food.calories * meal.quantity) AS cal_total "
							"FROM meal JOIN food ON food_idfood = idfood "
							"GROUP BY meal.name ORDER BY cal_total DESC LIMIT 10;"),["Name", "Toatal Calories"])

		elif choice == 3:
			fetch_all_query(("SELECT location.name, region.name, gear_type_type, restriction FROM location "
							"JOIN region ON location.region_idregion = region.idregion "
							"JOIN gear_restrictions_has_region ON gear_restrictions_has_region.region_idregion= region.idregion "
							"JOIN gear_restrictions "
							"ON gear_restrictions_has_region.gear_restrictions_idgear_restrictions = gear_restrictions.idgear_restrictions "
							"WHERE gear_type_type = 'Bear Can' AND restriction = 'Required'"),["Location", "Region", "Gear Type", "Regulation"])

		elif choice == 4:
			fetch_all_query(("SELECT gear_type_type, gear.name, brand, quantity, quantity*weight AS total_weight "
							"FROM packing_list "
							"JOIN gear_has_packing_list "
							"ON packing_list.idpacking_list = gear_has_packing_list.packing_list_idpacking_list "
							"JOIN gear ON gear.idgear = gear_has_packing_list.gear_idgear "
							"WHERE packing_list.idpacking_list = 7"),["Gear Type", "Gear", "Brand","Quantity","Total Weight"])

		elif choice == 5:
			fetch_all_query(("SELECT packing_list.name, sum(quantity* gear.weight) AS total_weight, hiker.name, ROUND((hiker.weight /4 * 1000),0) AS carry_capacity "
							"FROM packing_list "
							"JOIN gear_has_packing_list ON packing_list.idpacking_list = gear_has_packing_list.packing_list_idpacking_list "
							"JOIN gear ON gear.idgear = gear_has_packing_list.gear_idgear "
							"JOIN hiker ON packing_list.hiker_idhiker = hiker.idhiker "
							"WHERE packing_list.idpacking_list = 7 "
							"GROUP BY packing_list.name"),["List", "Total Weight", "Owner", "Carrying Capacity (kg)"])

		elif choice == 6:
			read_meal_plan()
			meal_plan_id = int_prompt("Enter the id of the meal plan: ")
			fetch_all_query(("SELECT meal_plan.name, SUM(food.weight), SUM(food.calories), SUM(food.protein) FROM meal_plan"
							" JOIN meal_plan_has_day ON meal_plan.idmeal_plan = meal_plan_idmeal_plan JOIN food ON meal_food_idfood = food.idfood"
							" WHERE idmeal_plan = %s"),["Meal Plan", "Total Weight","Total Calories","Total Protein"], (meal_plan_id,))

		elif choice == 7:
			read_region()
			region_id = int_prompt("Enter the id of the region: ")
			fetch_all_query(("SELECT name, gear_type_type, restriction FROM gear_restrictions_has_region "
							"JOIN gear_restrictions ON gear_restrictions_idgear_restrictions = gear_restrictions.idgear_restrictions "
							"JOIN region ON region_idregion = region.idregion "
							"WHERE idregion = %s"), ["Name", "Gear Type", "Regulation"], (region_id,))

		elif choice == 8:
			read_gear_restriction()
			restric_id = int_prompt("Enter the id of the restriction: ")
			fetch_all_query(("SELECT name, gear_type_type, restriction FROM gear_restrictions_has_region "
							"JOIN gear_restrictions ON gear_restrictions_idgear_restrictions = gear_restrictions.idgear_restrictions "
							"JOIN region ON region_idregion = region.idregion "
							"WHERE idgear_restrictions = %s"),["Name", "Type", "Regulation"], (restric_id,))

		elif choice == 9:
			read_packing_list()
			list_id = int_prompt("Enter the id of the packing list: ")
			fetch_all_query(("SELECT gear.name, quantity FROM gear_has_packing_list "
							"JOIN packing_list ON packing_list_idpacking_list = idpacking_list "
							"JOIN gear ON gear_idgear = idgear "
							"WHERE gear_has_packing_list.packing_list_idpacking_list = %s"),["Gear", "Quantity"], (list_id,))

		elif choice == 10:
			read_gear()
			gear_id = int_prompt("Enter the id of the gear: ")
			fetch_all_query(("SELECT packing_list.name, hiker.name, quantity FROM gear_has_packing_list "
							"JOIN packing_list ON packing_list_idpacking_list = idpacking_list "
							"JOIN gear ON gear_idgear = idgear "
							"JOIN hiker ON packing_list.hiker_idhiker = idhiker "
							"WHERE gear_has_packing_list.gear_idgear = %s"),["Packing List", "Owner"], (gear_id,))

		elif choice == 11:
			read_day()
			day_id = int_prompt("Enter the id of the day: ")
			fetch_all_query(("SELECT idday, name, brand, SUM(weight), SUM(calories), SUM(protein), servings, cooked, SUM(quantity), CEIL(SUM(quantity)/servings)  FROM( "
			"SELECT  idday, food.name, food.brand, food.weight, food.calories, food.protein, food.servings, food.cooked, meal.quantity "
			"FROM day JOIN meal ON day.breakfast = meal.name JOIN food ON meal.food_idfood = food.idfood where idday = %s UNION ALL "    
			"SELECT  idday, food.name, food.brand, food.weight, food.calories, food.protein, food.servings, food.cooked, meal.quantity FROM day JOIN meal ON day.lunch = meal.name "
			"JOIN food ON meal.food_idfood = food.idfood where idday = %s UNION ALL "
        	"SELECT  idday, food.name, food.brand, food.weight, food.calories, food.protein, food.servings, food.cooked, meal.quantity FROM day JOIN meal ON day.dinner = meal.name "
			"JOIN food ON meal.food_idfood = food.idfood where idday = %s UNION ALL SELECT  idday, food.name, food.brand, food.weight, food.calories, food.protein, "
			"food.servings, food.cooked, meal.quantity FROM day JOIN meal ON day.snacks = meal.name JOIN food ON meal.food_idfood = food.idfood where idday = %s) z GROUP BY name"),
			["Day ID", "Food", "Brand", "Total Weight", "Total Calories", "Total Protein (g)", "Servings", "Cooked", "Total Servings", "Packages Required"],(day_id,day_id,day_id,day_id))
		else:
			print("Please select a valid option")
#******************************************************************************


#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


# !!!!!!!!!!!!!!!! DB METHODS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
def commit_query(query, data):
	try:
		cursor = mydb.cursor()
		cursor.execute(query, data)
		mydb.commit()
		count = cursor.rowcount
		cursor.close()
		print(f"{count} rows affected")
	except Exception as e:
		print("Query failed")
		print(str(e))

def fetch_all_query(query, table_headers, args = None):
	try:
		cursor = mydb.cursor()
		if args:
			cursor.execute(query, args)
		else:
			cursor.execute(query)
		data = cursor.fetchall()
		cursor.close()
		table = [list(row) for row in data]
		print("\n")
		print(tabulate(table, headers=table_headers))
	except Exception as e:
		print("Retrieval failed")
		print(str(e))

#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

#******* PROGRAM *********************************
print('Welcome to HikePlanner')
main_menu()
mydb.close()