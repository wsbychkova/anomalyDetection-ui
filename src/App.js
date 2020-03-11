import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import COVIData from "../src/components/COVIData";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/coviData" component={COVIData} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
