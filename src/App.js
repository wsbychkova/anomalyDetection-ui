import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import MachineLearning from "../src/components/MachineLearning";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/machineLearning" component={MachineLearning} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
