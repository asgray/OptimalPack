import "./App.css";
import React from "react";
// import TableWrapper from "./components/tablewrapper";
import FoodInputs from "./components/inputforms/foodInputs";
// import RowAdder from "./components/rowadder";

function App() {
  return (
    <div className="App">
      {/* <TableWrapper type={"food"} /> */}
      {/* <RowAdder type="food" /> */}
      <FoodInputs />
    </div>
  );
}

export default App;

/* <header className="App-header">
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

</header> */
