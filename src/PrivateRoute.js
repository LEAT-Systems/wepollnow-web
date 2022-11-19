/** @format */

import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function PrivateRoutes({ children, isAuthenticated, ...rest }) {
  let location = useLocation();

  return (
    <Route
      {...rest}
      render={() =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
  );
}

export default PrivateRoutes;
