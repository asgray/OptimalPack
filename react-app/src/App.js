import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CollectionPanel from "./components/collectionpanel";
import CRUDProvider from "./context/CRUDContext";
import CollectionProvider from "./context/collectionContext";
import CRUDPanel from "./components/crudpanel";
import React, { useContext } from "react";
import Nav from "./components/nav";
import "./App.css";

function App() {
  const CRUDContext = useContext(CRUDProvider);
  const collectionContext = useContext(CollectionProvider);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <h1>HOME</h1>} />
          <Route
            path="/food"
            render={() => <CRUDPanel specs={CRUDContext["food"]} />}
          />
          <Route
            path="/gear"
            render={() => <CRUDPanel specs={CRUDContext["gear"]} />}
          />
          <Route
            path="/gear_type"
            render={() => <CRUDPanel specs={CRUDContext["gear_type"]} />}
          />
          <Route
            path="/meal"
            render={() => <CollectionPanel specs={collectionContext["meal"]} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
