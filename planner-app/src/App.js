import React, { Component } from "react";
import FoodTable from "./components/foodtable";
import MealTable from "./components/mealtable";
import "./App.css";

class App extends Component {
  render() {
    return <MealTable />;
  }
}

export default App;

/**
 <FoodTable param='food' />;
 */
