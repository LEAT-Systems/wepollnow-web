import PieChart from "./Components/Layout/Admin/Dashboard/Charts/PieChart";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import VoteFormTwo from "./Components/Forms/VoteForm/VoteFormTwo";
import VoteSuccess from "./Components/Forms/VoteForm/VoteSuccess";
import BarChart from "./Components/Layout/Admin/Dashboard/Charts/BarChart";
import BlogSingle from "./Pages/blogPages/blogSinglePost";

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
const GettingStartedFive = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-5")
);
const GettingStartedSix = React.lazy(() =>
  import("./Pages/landingPages/gettingStarted-6")
);

const NotFound = React.lazy(() => import("./UI/NotFound"));
const AboutPage = React.lazy(() => import("./Pages/landingPages/about"));
const BlogPage = React.lazy(() => import("./Pages/blogPages/blog"));
const Test = React.lazy(() => import("./Pages/test"));
const FormFive = React.lazy(() =>
  import("./Components/Forms/VoteForm/VoteForm")
);
const AllPolls = React.lazy(() => import("./Pages/Polls/allPolls"));
const FormComponent = React.lazy(() =>
  import("././Components/Forms/FormComponent")
);

// =====================   Admin imports
const PollsResult = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Polls/PollsResult")
);
const ManageSurvey = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Survey/ManageSurvey")
);
const ManagePolls = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Polls/ManagePolls")
);
const Blog = React.lazy(() => import("./Components/Layout/Admin/Dashboard/Account/Blog"));

const Account = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Account/Account")
);
const Survey = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Survey/Survey")
);
const Dashboard = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Home/Home")
);
const Login = React.lazy(() => import("./Components/Layout/Admin/Dashboard/Login/Login"));

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

        {/* GETTING STARTED FOUR ROUTE */}
        <Route path="/getting-started-four" exact>
          <GettingStartedFour />
        </Route>

        {/* GETTING STARTED FIVE ROUTE */}
        <Route path="/getting-started-five" exact>
          <GettingStartedFive />
        </Route>

        {/* GETTING STARTED THREE ROUTE */}
        <Route path="/getting-started-six" exact>
          <GettingStartedSix />
        </Route>

        {/* ABOUT PAGE ROUTE */}
        <Route path="/about" exact>
          <AboutPage />
        </Route>

        {/* BLOG PAGE ROUTE */}
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
        <Route path="/blog-single" exact>
          <BlogSingle />
        </Route>
        {/* CONTACT PAGE ROUTE */}
        <Route path="/vote/vote-form-next" exact>
          <VoteFormTwo />
        </Route>
        {/* CONTACT PAGE ROUTE */}
        <Route path="/vote/voteSuccess" exact>
          <VoteSuccess />
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
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/wepollnow/login" exact>
          <Login />
        </Route>

        {/* Dashboard Landing */}
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

        {/* Polls Page */}

        <Route path='/Managepolls' exact>
          <ManagePolls />
        </Route>

        {/* Polls result*/}
        <Route Route path="/polls/polls_result" exact>
          <PollsResult />
        </Route>

        {/* surveys */}

        <Route path="/surveys" exact>
          <Survey />
        </Route>

        <Route path="/surveys/manageSurvey" exact>
          <ManageSurvey />
        </Route>

        {/* blog */}

        <Route path="/blog" exact>
          <Blog />
        </Route>

        {/* account */}
        <Route path="/account" exact>
          <Account />
        </Route>

        <Route path='/barChart' exact>
          <BarChart />
        </Route>
        <Route path='/pieChart' exact>
          <PieChart />
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
