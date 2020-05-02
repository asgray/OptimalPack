import React, { Component } from "react";
import Meal from "./meal";

class MealTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      meals: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/meallist")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            meals: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, meals } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {meals.map(meal => (
            <Meal key={meal.name} meal={meal} />
          ))}
        </div>
      );
    }
  }
}

export default MealTable;

/**fetch("http://localhost:5000/meallist")
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
      ); */
