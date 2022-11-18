import { Route, Redirect } from "react-router-dom";

function PrivateRoutes({ children, isAuthenticated, ...rest }) {
  console.log("isAuthenticated: ", isAuthenticated)
  console.log("children: ", children);
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

export default PrivateRoutes;
