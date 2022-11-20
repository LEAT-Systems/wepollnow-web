import React from "react";
import { Link, useHistory } from "react-router-dom";
import "react-phone-number-input/style.css";
import image from "../../images/image_3.jpg";
import Footer from "../../Components/Layout/Landing/Footer";
import PollsSwiper from "../Polls/PollsSwiper";
import BlogSingleGroupPage from "../blogPages/blogSingleGroup";

//
const GettingStartedContent = (props) => {
  return (
    <div className="overflow-x-hidden">
      {/* Mini poll swiper section */}
      <div>
        <PollsSwiper onPop={props.prompt} />
      </div>
      {/* About section */}
      <div className="w-screen">
        <div className="relative flex flex-col mx-auto max-w-[1410px]  md:my-6 md:flex-row md:px-0">
          <div className="right-0 text-black  min-w-[50%] max-w-96 md:space-y-8 md:right-0 md:py-20 md:p-0 md:absolute">
            <div className="flex md:px-0">
              <img
                src={image}
                alt=""
                className="md:w-[911px] md:h-[608px] mt-12 md:mt-0"
              />
            </div>
          </div>
          <div className="max-w-xl -mt-8 min-w-[50%]  rounded-lg md:rounded px-6 md:mt-[145px] bg-[#FFF1F4]/70 p-8 z-10 backdrop-blur-md">
            <div className="md:p-16 md:space-y-4">
              <p className="text-lg font-bold underline decoration-[#F9C033] decoration-4">
                About Us
              </p>
              <h1 className="text-2xl md:text-[34px]">
                Creating a better Society by making every vote count.
              </h1>
              <p className="text-md">
                WePollNow is an independent research and analytics group
                dedicated to bringing data into the conversations that help
                African citizens make informed decisions that affect policy in
                multi-sectors.
              </p>
              <Link to="/about">
                <button className="w-1/2 mt-4 animate p-4 px-4 font-bold text-white bg-[#08BC26]  rounded-lg md:w-1/4">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Mini Blog section  */}
      <div className="pb-12 md:pb-24">
        <BlogSingleGroupPage />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default GettingStartedContent;
