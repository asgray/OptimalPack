import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TableProvider from "./context/tableContext";
import CRUDPanel from "./components/crudpanel";
import React, { useContext } from "react";
import Nav from "./components/nav";
import "./App.css";

function App() {
  const context = useContext(TableProvider);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <h1>HOME</h1>} />
          <Route
            path="/food"
            render={() => <CRUDPanel specs={context["food"]} />}
          />
          <Route
            path="/gear"
            render={() => <CRUDPanel specs={context["gear"]} />}
          />
          <Route
            path="/gear_type"
            render={() => <CRUDPanel specs={context["gear_type"]} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
