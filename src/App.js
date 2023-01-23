import React, { useState, useEffect, useMemo, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VoteFormTwo from "./Components/Forms/VoteForm/VoteFormTwo";
import VoteSuccess from "./Components/Forms/VoteForm/VoteSuccess";
import BlogSingle from "./Pages/blogPages/blogSinglePost";
import Loading from "./UI/Loading";
import TestForm from "./Components/Layout/Admin/Dashboard/TestForm";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

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

const DashboardAll = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Home/HomeAll")
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
const Contact = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Contact/Contact")
);
const Subscribers = React.lazy(() =>
  import("./Components/Layout/Admin/Dashboard/Contact/Subscribers")
);

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* //////////////////////////   LANDING PAGE ROUTES    //////////////////////////////////// */}
        {/* FALLBACK URL ROUTE */}
        <Route path="/" exact>
          <GettingStartedOne />
        </Route>

        {/* GETTING STARTED ONE Routes */}
        <Route path="/getting-started-one" exact>
          <GettingStartedOne />
        </Route>

        {/* GETTING STARTED TWO Routes */}
        <Route path="/getting-started-two" exact>
          <GettingStartedTwo />
        </Route>

        {/* GETTING STARTED THREE Routes */}
        <Route path="/getting-started-three" exact>
          <GettingStartedThree />
        </Route>

        {/* GETTING STARTED FOUR Routes */}
        <Route path="/getting-started-four" exact>
          <GettingStartedFour />
        </Route>

        {/* GETTING STARTED FIVE Routes */}
        <Route path="/getting-started-five" exact>
          <GettingStartedFive />
        </Route>

        {/* GETTING STARTED THREE Routes */}
        <Route path="/getting-started-six" exact>
          <GettingStartedSix />
        </Route>

        {/* ABOUT PAGE Routes */}
        <Route path="/about" exact>
          <AboutPage />
        </Route>

        {/* BLOG PAGE Routes */}
        <Route path="/blog" exact>
          <BlogPage />
        </Route>

        <Route path="/blog-single" exact>
          <BlogSingle />
        </Route>

        {/* CONTACT PAGE Routes */}
        <Route path="/vote/vote-form-next" exact>
          <VoteFormTwo />
        </Route>

        {/* CONTACT PAGE Routes */}
        <Route path="/vote/voteSuccess" exact>
          <VoteSuccess />
        </Route>

        {/* TEST PAGE Routes */}
        <Route path="/test" exact>
          <Test />
        </Route>

        {/* ALL POLLS PAGE Routes */}
        <Route path="/polls" exact>
          <AllPolls />
        </Route>

        {/* REGISTRATION Routes */}
        <Route path="/register" exact>
          <FormComponent />
        </Route>

        {/* Some Other Page */}
        <Route path="/vote" exact>
          <FormFive />
        </Route>

        {/* =========================  ADMIN ROUTES  ========================== */}

        {/* Login Page */}
        <Route path="/admin/login" exact>
          <Login />
        </Route>

        {/* Dashboard Landing */}
        <Route path="/admin/home" exact>
          {authCtx.isLoggedIn && <Dashboard />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* Dashboard Landing */}
        <Route path="/admin/home/view_all" exact>
          {authCtx.isLoggedIn && <DashboardAll />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* Polls Page */}
        <Route path="/admin/polls" exact>
          {authCtx.isLoggedIn && <ManagePolls />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        <Route path="/admin/polls/polls" exact>
          {authCtx.isLoggedIn && <ManagePolls />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* Redirect users to the /admin/polls/polls to activate active class */}
        <Redirect exact strict from="/admin/polls" to="/admin/polls/polls" />

        <Route path="/admin/polls/candidates" exact>
          {authCtx.isLoggedIn && <Candidate />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* Polls result*/}
        <Route path="/admin/polls/poll_result" exact>
          {authCtx.isLoggedIn && <PollsResult />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* surveys */}

        <Route path="/admin/surveys" exact>
          {authCtx.isLoggedIn && <Survey />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* blog and manage blog*/}

        <Route path="/admin/blog" exact>
          {authCtx.isLoggedIn && <Blog />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        <Route path="/admin/blog/manageBlog" exact>
          {authCtx.isLoggedIn && <CreateBlog />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* Contact & subscribers */}

        <Route path="/admin/contact" exact>
          <Contact />
          {/* {authCtx.isLoggedIn && <Contact />} */}
          {/* {!authCtx.isLoggedIn && <Login />} */}
        </Route>

        <Route path="/admin/contact/subscribers" exact>
          <Subscribers />
          {/* {authCtx.isLoggedIn && <Subscribers />}
          {!authCtx.isLoggedIn && <Login />} */}
        </Route>

        {/* account and settings*/}
        <Route path="/admin/account" exact>
          {authCtx.isLoggedIn && <Account />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        <Route path="/admin/account/settings" exact>
          {authCtx.isLoggedIn && <Account />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/* Redirect users to the /admin/account/settings to activate active class */}
        <Redirect
          exact
          strict
          from="/admin/account"
          to="/admin/account/settings"
        />

        <Route path="/admin/account/Managepassword" exact>
          {authCtx.isLoggedIn && <Password />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        <Route path="/testForm">
          {authCtx.isLoggedIn && <TestForm />}
          {!authCtx.isLoggedIn && <Login />}
        </Route>

        {/*=========================  NOT FOUND ROUTES ========================*/}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
