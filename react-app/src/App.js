import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CollectionPanel from "./components/collectionpanel";
import CRUDSpecs from "./tablespecs/CRUDspecs";
import collectionSpecs from "./tablespecs/collectionspecs";
import CRUDPanel from "./components/crudpanel";
import React from "react";
import Nav from "./components/nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <h1>HOME</h1>} />
          <Route
            path="/food"
            render={() => <CRUDPanel specs={CRUDSpecs["food"]} />}
          />
          <Route
            path="/gear"
            render={() => <CRUDPanel specs={CRUDSpecs["gear"]} />}
          />
          <Route
            path="/gear_type"
            render={() => <CRUDPanel specs={CRUDSpecs["gear_type"]} />}
          />
          <Route
            path="/meal"
            render={() => <CollectionPanel specs={collectionSpecs["meal"]} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
