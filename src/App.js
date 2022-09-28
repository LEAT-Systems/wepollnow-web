import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import FormComponent from "./Components/Forms/FormComponent";
import FormFour from "./Components/Forms/FormFour";
import Loading from "./UI/Loading";
const GettingStartedOne = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-1")
);
const GettingStartedTwo = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-2")
);
const GettingStartedThree = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-3")
);

const NotFound = React.lazy(() => import("./UI/NotFound"));
const AboutPage = React.lazy(() => import("./Pages/landingPages/about"));
const BlogPage = React.lazy(() => import("./Pages/blogPages/blog"));
const Test = React.lazy(() => import("./Pages/test"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* Matches a blank URL */}
        <Route path="/" exact>
          <GettingStartedOne />
        </Route>

        {/* Some Other Page */}
        <Route path="/getting-started-one" exact>
          <GettingStartedOne />
        </Route>

        {/* Some Other Page */}
        <Route path="/getting-started-two" exact>
          <GettingStartedTwo />
        </Route>

        {/* Some Other Page */}
        <Route path="/getting-started-three" exact>
          <GettingStartedThree />
        </Route>

        {/* Some Other Page */}
        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <Route path="/blog" exact>
          <BlogPage />
        </Route>

        <Route path="/test" exact>
          <Test />
        </Route>

        <Route path="/register" exact>
          <FormComponent />
        </Route>

        {/* Some Other Page */}
        <Route path="/vote" exact>
          <FormFour />
        </Route>

        {/* Not Found route*/}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
