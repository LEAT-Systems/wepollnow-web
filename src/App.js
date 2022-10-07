import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "./UI/Loading";
// Lazy loads of components
const GettingStartedOne = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-1")
);
const GettingStartedTwo = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-2")
);
const GettingStartedThree = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-3")
);
const GettingStartedFour = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-4")
);
const NotFound = React.lazy(() => import("./UI/NotFound"));
const AboutPage = React.lazy(() => import("./Pages/landingPages/about"));
const BlogPage = React.lazy(() => import("./Pages/blogPages/blog"));
const Test = React.lazy(() => import("./Pages/test"));
const FormFour = React.lazy(() => import("./Components/Forms/FormFour"));
const AllPolls = React.lazy(() => import("./Pages/Polls/All_polls"));
const FormComponent = React.lazy(() =>
  import("././Components/Forms/FormComponent")
);

//////////////////////////    ALL ROUTES    ////////////////////////////////////

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* FALLBACK URL ROUTE */}
        <Route path="/" exact>
          <GettingStartedOne />
        </Route>

        {/* GETTING STARTED ONE ROUTE */}
        <Route path="/getting-started-one" exact>
          <GettingStartedOne />
        </Route>

        {/* GETTING STARTED TWO ROUTE */}
        <Route path="/getting-started-two" exact>
          <GettingStartedTwo />
        </Route>

        {/* GETTING STARTED THREE ROUTE */}
        <Route path="/getting-started-three" exact>
          <GettingStartedThree />
        </Route>

        {/* GETTING STARTED FOUR ROUTE */}
        <Route path="/getting-started-four" exact>
          <GettingStartedFour />
        </Route>

        {/* ABOUT PAGE ROUTE */}
        <Route path="/about" exact>
          <AboutPage />
        </Route>

        {/* CONTACT PAGE ROUTE */}
        <Route path="/blog" exact>
          <BlogPage />
        </Route>

        {/* TEST PAGE ROUTE */}
        <Route path="/test" exact>
          <Test />
        </Route>

        {/* ALL POLLS PAGE ROUTE */}
        <Route path="/all-polls-qwe23124dfs24328667" exact>
          <AllPolls />
        </Route>

        {/* REGISTRATION ROUTE */}
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
