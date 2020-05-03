import React from "react";
import FoodTable from "./components/foodtable";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FoodTable />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='foodtable'>yar</div>
      </header> */}
    </div>
  );
}

export default App;
