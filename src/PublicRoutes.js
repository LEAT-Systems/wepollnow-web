import { Route, Redirect } from "react-router-dom";

function PublicRoutes({ children, isAuthenticated, ...rest }) {
  console.log("isAuthenticated: ", isAuthenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
          isAuthenticated === false ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      } 
    />
   );
}

export default PublicRoutes;
