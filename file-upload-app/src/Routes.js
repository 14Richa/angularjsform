import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
//import AppliedRoute from "./components/AppliedRoute";
import Congrats from "./containers/Congrats";
import Sucess from "./containers/Sucess";




export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    { /* Finally, catch all unmatched routes */ }
    <Route path="/signup" exact component={Signup}/>
    <Route path="/congrats" exact component={Congrats}/>
    <Route path="/sucess" exact component={Sucess} />
    <Route component={NotFound} />
  </Switch>;
