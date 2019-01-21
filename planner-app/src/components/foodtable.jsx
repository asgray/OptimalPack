import React, { Component } from "react";
import Food from "./food";

class FoodTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      route: this.props.route
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/" + this.state.route)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Name</th>
              <th>Weight (g)</th>
              <th>Calories per Serving</th>
              <th> Protein (g) </th>
              <th> Servings per Package </th>
              <th> Cooked? </th>
            </tr>
          </thead>
          <tbody>
            {items.map(food => (
              <Food key={food.idfood} food={food} />
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default FoodTable;
