import React from "react";
// import FormThree from "../Components/Forms/FormThree";
// import FormOne from "../Components/Forms/FormOne";
// import FormTwo from "../Components/Forms/FormTwo";
// import FormComponent from "../Components/Forms/FormComponent";
import PollsSwiper from "./Polls/PollsSwiper";
import FormTwo from "../Components/Forms/VoteForm/VoteFormTwo";
import Login from "../Components/Layout/Admin/Pages/Login";
import BlogSingle from "./blogPages/blogSinglePost";
import Header from "../Components/Layout/Admin/Components/Header";
import Dashboard from "../Components/Layout/Admin/Pages/Dashboard";
import Polls from "../Components/Layout/Admin/Pages/ManagePolls";
import PollsPageContentOne from "../Components/Layout/Admin/PageContent/PollsPageContentOne";
import PollsPageContentTwo from "../Components/Layout/Admin/PageContent/PollsPageContentTwo";
import VoteSuccess from "../Components/Forms/VoteForm/VoteSuccess";
//
const Test = () => {
  return (
    <>
      {/* <Polls /> */}
      {/* <BlogSingle /> */}
      {/* <PollsPageContentOne /> */}
      {/* <PollsSwiper /> */}
      {/* <Dashboard /> */}
      {/* <FormOne /> */}
      {/* <FormTwo /> */}
      {/* <FormThree /> */}
      {/* <FormComponent /> */}
      <div class="flex mt-8 ml-4">
        <select
          class="z-10 rounded-l-md  border items-center px-4 text-sm font-medium text-center "
          type="select"
        ></select>

        <div
          id="dropdown"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100"
        ></div>
        <div class="relative w-1/3">
          <input
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm border rounded-r-md  focus:border-0 focus:border-l-0"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>
    </>
  );
};

export default Test;

// import React from "react";
// import { useState, useEffect } from "react";
// import { Item3, Item4 } from "../../Components/Layout/Landing/item";
// import Nav from "../../Components/Layout/Landing/mainNav";

// const GettingStartedThree = () => {
//   const [isLoaded, setIsLoading] = useState(false);

//   const loading = Item3;
//   const hasLoaded = Item4;

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(true), 5000);
//     return () => clearTimeout(timer);
//   });

//   return (
//     <>
//       <Nav />
//       <div className="">{isLoaded ? hasLoaded : loading}</div>
//     </>
//   );
// };

// export default GettingStartedThree;
