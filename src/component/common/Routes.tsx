import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../page/home";
import BreweryDetail from "../../page/brewery-detail";
import Layout from "../layout/Layout";

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/brewery-detail/:id" component={BreweryDetail} />
        <Route
          component={() => <Layout title={"404 Error - Page not found"} />} />
      </Switch>
  );
};

export default Routes;
