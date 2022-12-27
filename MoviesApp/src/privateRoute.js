import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

const PrivateRoute = ({children}) => {
  const { isAuthenticated } = useContext(AuthContext);
  // Destructure props from <privateRoute> 
  // const { component: Component, ...rest } = props;
  // console.log(props.location);
  return isAuthenticated === true ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        // state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;
