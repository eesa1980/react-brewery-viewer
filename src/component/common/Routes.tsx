import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../page/home";
import BreweryDetail from "../../page/brewery-detail";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/brewery-detail/:id" component={BreweryDetail} />
      <Route component={() => <h1>Error: Page not found</h1>} />
    </Switch>
  );
};

export default Routes;
