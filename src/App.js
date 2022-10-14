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

const NotFound = React.lazy(() => import("./UI/NotFound"));
const AboutPage = React.lazy(() => import("./Pages/landingPages/about"));
const BlogPage = React.lazy(() => import("./Pages/blogPages/blog"));
const Test = React.lazy(() => import("./Pages/test"));
const FormFive = React.lazy(() =>
  import("./Components/Forms/VoteForm/FormFive")
);
const AllPolls = React.lazy(() => import("./Pages/Polls/allPolls"));
const FormComponent = React.lazy(() =>
  import("././Components/Forms/FormComponent")
);

// =====================   Admin imports
const PollsResult = React.lazy(() =>
  import("./Components/Layout/Admin/Pages/PollsResult")
);
const ManageSurvey = React.lazy(() =>
  import("./Components/Layout/Admin/Pages/ManageSurvey")
);
const ManagePolls = React.lazy(() =>
  import("./Components/Layout/Admin/Pages/ManagePolls")
);
const Blog = React.lazy(() => import("./Components/Layout/Admin/Pages/Blog"));

const Account = React.lazy(() =>
  import("./Components/Layout/Admin/Pages/Account")
);
const Survey = React.lazy(() =>
  import("./Components/Layout/Admin/Pages/Survey")
);
const Dashboard = React.lazy(() =>
  import("./Components/Layout/Admin/Pages/Dashboard")
);
const Login = React.lazy(() => import("./Components/Layout/Admin/Pages/Login"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* //////////////////////////   LANDING PAGE ROUTES    //////////////////////////////////// */}
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
        <Route path="/polls" exact>
          <AllPolls />
        </Route>

        {/* REGISTRATION ROUTE */}
        <Route path="/register" exact>
          <FormComponent />
        </Route>

        {/* Some Other Page */}
        <Route path="/vote" exact>
          <FormFive />
        </Route>

        {/* =========================  ADMIN ROUTES  ========================== */}

        {/* Login Page */}
        <Route path="/wepollnow/" exact>
          <Login />
        </Route>
        <Route path="/wepollnow/login" exact>
          <Login />
        </Route>

        {/* Dashboard Landing */}
        <Route path="/wepollnow/dashboard" exact>
          <Dashboard />
        </Route>

        {/* Polls Page */}

        <Route path="/wepollnow/polls" exact>
          <ManagePolls />
        </Route>

        {/* Polls result*/}
        <Route Route path="/wepollnow/polls/polls_result" exact>
          <PollsResult />
        </Route>

        {/* surveys */}

        <Route path="/wepollnow/surveys" exact>
          <Survey />
        </Route>

        <Route path="/wepollnow/surveys/manageSurvey" exact>
          <ManageSurvey />
        </Route>

        {/* blog */}

        <Route path="/wepollnow/blog" exact>
          <Blog />
        </Route>

        {/* account */}
        <Route path="/wepollnow/account" exact>
          <Account />
        </Route>
        {/*=========================  NOT FOUND ROUTE ========================*/}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
