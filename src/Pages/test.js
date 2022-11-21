import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import SliderSocial from "../Components/Forms/VoteForm/Slider";

// import FormThree from "../Components/Forms/FormThree";
// import FormOne from "../Components/Forms/FormOne";
// import FormTwo from "../Components/Forms/FormTwo";
// import FormComponent from "../Components/Forms/FormComponent";
// import PollsSwiper from "./Polls/PollsSwiper";
// import FormTwo from "../Components/Forms/VoteForm/VoteFormTwo";
// import Login from "../Components/Layout/Admin/Dashboard/Login/Login";
// import BlogSingle from "./blogPages/blogSinglePost";
// import Header from "../Components/Layout/Admin/Header";
// import Dashboard from "../Components/Layout/Admin/Dashboard/Home/Home";
// import Polls from "../Components/Layout/Admin/Dashboard/Polls/ManagePolls";
// import PollsPageContentOne from "../Components/Layout/Admin/Dashboard/Polls/PollsPageContentOne";
// import PollsPageContentTwo from "../Components/Layout/Admin/Dashboard/Polls/PollsPageContentTwo";
// import VoteSuccess from "../Components/Forms/VoteForm/VoteSuccess";

const Test = () => {
  return (
    <div className="w-[80%] h-[75%] mx-auto border ">
      {/* <BlogSingle /> */}
      {/* <PollsPageContentOne /> */}
      {/* <PollsSwiper /> */}
      {/* <Dashboard /> */}
      {/* <FormOne /> */}
      {/* <FormTwo /> */}
      {/* <FormThree /> */}
      {/* <FormComponent /> */}
      {/* <PollsSingle /> */}
      <Editor
        // editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        // onEditorStateChange={this.onEditorStateChange}
      />
    </div>
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

// import React from "react";
// import Nav from "../../Layout/Landing/mainNav";
// import { Link } from "react-router-dom";
// import SwiperSlideSocials from "./SocialSwiper";
// import doneIcon from "../../../images/doneIcon.png";

// const VoteSuccess = () => {
//   return (
//     <div>
//       <Nav />
//       <div className="flex flex-row items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
//         <div className="w-full px-4 py-4 text-lg text-gray-700 border rounded-lg md:w-2/4">
//           <header className="w-full py-4 md:p-8">
//             <div className="flex flex-col items-center justify-center space-y-4">
//               <img src={doneIcon} alt="success" />
//               <p className="p-1 px-4 text-sm text-center text-black md:text-xl">
//                 Yay...!!! Your vote has been recorded successfully.
//                 <br />
//                 Kindly Share poll with friends.
//               </p>

//               <SwiperSlideSocials />
//             </div>
//           </header>

//           <section>
//             <div className="flex flex-row items-end justify-end w-full p-2 space-x-4 md:px-16 md:p-8">
//               <Link to="/">
//                 <button
//                   type="button"
//                   className="p-2 px-6 ml-6 text-black bg-transparent border border-black rounded-md animateBack"
//                 >
//                   Go Home
//                 </button>
//               </Link>
//               <Link to="/polls">
//                 <button
//                   type="submit"
//                   className="p-2 px-6 text-white animate bg-[#08C127] rounded-md"
//                 >
//                   More Polls
//                 </button>
//               </Link>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VoteSuccess;
