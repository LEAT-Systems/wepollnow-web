import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function PrivateRoutes({ children, isAuthenticated, ...rest }) {
  console.log("Private isAuthenticated: ", isAuthenticated);
  let location = useLocation();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated === false ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: location },
            }}
          />
        )
      }
      // render={() =>
      //   isAuthenticated ? children : <Redirect to='/admin/login' />
      // }
    />
  );
}

export default PrivateRoutes;
