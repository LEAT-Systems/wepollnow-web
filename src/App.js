import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import VoteFormTwo from "./Components/Forms/VoteForm/VoteFormTwo";
import VoteSuccess from "./Components/Forms/VoteForm/VoteSuccess";
import BlogSingle from "./Pages/blogPages/blogSinglePost";
import decode from "jwt-decode";

import Loading from "./UI/Loading";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoute";
import TableStateResult from "./Components/Layout/Admin/Dashboard/Tables/TableStateResult/TableStateResult";

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

const CreateBlog = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Blog/CreateBlog")
);
const PollsResult = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Polls/PollsResult")
);
const ManageSurvey = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Survey/ManageSurvey")
);
const ManagePolls = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Polls/ManagePolls")
);
const Blog = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Blog/Blog")
);

const Account = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Account/Account")
);
const Survey = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Survey/Survey")
);
const Dashboard = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Home/Home")
);
const Login = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Login/Login")
);

const Password = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Account/Password")
);

const Candidate = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Polls/Candidate/Candidate")
);

function App() {
  const getToken = () => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    try {
      decode(token);
      decode(refreshToken);
      console.log([decode(token), decode(refreshToken)]);
      return true;
    } catch (error) {
      return false;
    }
  };

  const isAuthenticated = getToken();

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* //////////////////////////   LANDING PAGE ROUTES    //////////////////////////////////// */}
        {/* FALLBACK URL ROUTE */}
        <PublicRoutes isAuthenticated={isAuthenticated} path="/" exact>
          <GettingStartedOne />
        </PublicRoutes>

        {/* GETTING STARTED ONE Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/getting-started-one"
          exact
        >
          <GettingStartedOne />
        </PublicRoutes>

        {/* GETTING STARTED TWO Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/getting-started-two"
          exact
        >
          <GettingStartedTwo />
        </PublicRoutes>

        {/* GETTING STARTED THREE Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/getting-started-three"
          exact
        >
          <GettingStartedThree />
        </PublicRoutes>

        {/* GETTING STARTED FOUR Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/getting-started-four"
          exact
        >
          <GettingStartedFour />
        </PublicRoutes>

        {/* GETTING STARTED FIVE Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/getting-started-five"
          exact
        >
          <GettingStartedFive />
        </PublicRoutes>

        {/* GETTING STARTED THREE Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/getting-started-six"
          exact
        >
          <GettingStartedSix />
        </PublicRoutes>

        {/* ABOUT PAGE Routes */}
        <PublicRoutes isAuthenticated={isAuthenticated} path="/about" exact>
          <AboutPage />
        </PublicRoutes>

        {/* BLOG PAGE Routes */}
        <PublicRoutes isAuthenticated={isAuthenticated} path="/blog" exact>
          <BlogPage />
        </PublicRoutes>

        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/blog-single"
          exact
        >
          <BlogSingle />
        </PublicRoutes>

        {/* CONTACT PAGE Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/vote/vote-form-next"
          exact
        >
          <VoteFormTwo />
        </PublicRoutes>

        {/* CONTACT PAGE Routes */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/vote/voteSuccess"
          exact
        >
          <VoteSuccess />
        </PublicRoutes>

        {/* TEST PAGE Routes */}
        <PublicRoutes isAuthenticated={isAuthenticated} path="/test" exact>
          <Test />
        </PublicRoutes>

        {/* ALL POLLS PAGE Routes */}
        <PublicRoutes isAuthenticated={isAuthenticated} path="/polls" exact>
          <AllPolls />
        </PublicRoutes>

        {/* REGISTRATION Routes */}
        <PublicRoutes isAuthenticated={isAuthenticated} path="/register" exact>
          <FormComponent />
        </PublicRoutes>

        {/* Some Other Page */}
        <PublicRoutes isAuthenticated={isAuthenticated} path="/vote" exact>
          <FormFive />
        </PublicRoutes>

        {/* =========================  ADMIN ROUTES  ========================== */}

        {/* Login Page */}
        <PublicRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/login"
          exact
        >
          <Login />
        </PublicRoutes>

        {/* Dashboard Landing */}
        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/home"
          exact
        >
          <Dashboard />
        </PrivateRoutes>

        {/* Polls Page */}
        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/polls"
          exact
        >
          <ManagePolls />
        </PrivateRoutes>

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/polls/polls"
          exact
        >
          <ManagePolls />
        </PrivateRoutes>

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/polls/candidates"
          exact
        >
          <Candidate />
        </PrivateRoutes>

        {/* Polls result*/}
        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/polls/poll_result"
          exact
        >
          <PollsResult />
        </PrivateRoutes>

        {/* surveys */}

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/surveys"
          exact
        >
          <Survey />
        </PrivateRoutes>

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/surveys/manageSurvey"
          exact
        >
          <ManageSurvey />
        </PrivateRoutes>

        {/* blog */}

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/blog"
          exact
        >
          <Blog />
        </PrivateRoutes>

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/blog/manageBlog"
          exact
        >
          <CreateBlog />
        </PrivateRoutes>

        {/* account */}
        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/account"
          exact
        >
          <Account />
        </PrivateRoutes>

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/account/settings"
          exact
        >
          <Account />
        </PrivateRoutes>

        <PrivateRoutes
          isAuthenticated={isAuthenticated}
          path="/admin/account/Managepassword"
          exact
        >
          <Password />
        </PrivateRoutes>

        {/*=========================  NOT FOUND ROUTES ========================*/}
        <PublicRoutes isAuthenticated={isAuthenticated} path="*">
          <NotFound />
        </PublicRoutes>
      </Switch>
    </Suspense>
  );
}

export default App;
