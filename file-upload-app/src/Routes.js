import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import Congrats from "./containers/Congrats";
import Sucess from "./containers/Sucess";




export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/congrats" exact component={Congrats} props={childProps} />
    <AppliedRoute path="/sucess" exact component={Sucess} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
