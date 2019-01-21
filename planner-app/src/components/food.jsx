import React, { Component } from "react";

class Food extends Component {
  render() {
    const {
      name,
      brand,
      weight,
      calories,
      protein,
      servings
    } = this.props.food;
    return (
      <tr>
        <td>{brand}</td>
        <td>{name}</td>
        <td>{weight}</td>
        <td>{calories}</td>
        <td>{protein}</td>
        <td>{servings}</td>
        <td>{this.stoveRequired()}</td>
      </tr>
    );
  }

  stoveRequired() {
    const { val } = this.props.food.cooked;
    return val === 0 ? "No" : "Yes";
  }
}

export default Food;
/**
return (
  <tr>
     
  </tr>
);
 */
