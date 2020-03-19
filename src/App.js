import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import COVIData from "../src/components/COVIData";
import MatrixCovid from "../src/components/MatrixCovid";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/coviData" component={COVIData} />
        <Route path="/matrix" component={MatrixCovid} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
