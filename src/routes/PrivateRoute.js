import React from "react";
import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  //cookie is set or not
  const access_token = Cookies.get("token");
  const isAuthenticated = !!access_token;

  if (isAuthenticated) {
    //if access token is set then allow user to access the route
    return <Route {...props} />;
  } else {
    //if access token is not set redirect user to login page
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;
