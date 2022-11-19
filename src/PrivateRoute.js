/** @format */

import { Route, Redirect } from "react-router-dom";

function PrivateRoutes({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoutes;
