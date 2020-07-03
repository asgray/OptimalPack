import "./App.css";
import React, { useContext } from "react";
import CRUDPanel from "./components/crudpanel";
import TableProvider from "./context/tableContext";
import Nav from "./components/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const context = useContext(TableProvider);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route
            path="/food"
            render={() => <CRUDPanel specs={context["food"]} />}
          />
          <Route
            path="/gear"
            render={() => <CRUDPanel specs={context["gear"]} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
