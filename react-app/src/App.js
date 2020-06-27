import "./App.css";
import React, { useContext } from "react";
import CRUDPanel from "./components/crudpanel";
import TableProvider from "./context/tableContext";

function App() {
  const context = useContext(TableProvider);
  return (
    <div className="App">
      <CRUDPanel specs={context["food"]} />
      <CRUDPanel specs={context["gear"]} />
    </div>
  );
}

export default App;
