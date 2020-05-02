import React, { Component } from "react";
import FoodTable from "./foodtable";

class Meal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listIngredients: false
    };
  }

  toggleIngredients() {
    this.setState({ listIngredients: !this.state.listIngredients });
  }

  render() {
    const { name } = this.props.meal;
    let ingredients;
    if (this.state.listIngredients) {
      const url = "meal_ingredients/" + name;
      ingredients = <FoodTable route={url} />;
    }
    return (
      <div>
        <button onClick={() => this.toggleIngredients()}> {name} </button>
        {ingredients}
      </div>
    );
  }
}

export default Meal;
