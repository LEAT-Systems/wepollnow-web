import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import image from "../../images/image_2.png";
import Footer from "../../Components/Layout/Landing/Footer";
import PollsSwiper from "../Polls/PollsSwiper";
import BlogSingleGroupPage from "../blogPages/blogSingleGroup";

//
const GettingStartedContent = (props) => {
  return (
    <div>
      {/* Mini poll swiper section */}
      <div>
        <PollsSwiper onPop={props.prompt} />
      </div>
      {/* About section */}
      <div className="w-screen">
        <div className="relative flex flex-col w-screen mx-auto md:my-6 md:flex-row md:px-0">
          <div className="right-0 max-w-4xl text-black md:space-y-8 md:right-0 md:py-20 md:p-0 md:absolute">
            <div className="flex md:px-0">
              <img src={image} alt="" className="mt-12 rounded md:mt-0" />
            </div>
          </div>
          <div className="max-w-3xl -mt-8 rounded-lg md:rounded px-6 md:mt-[125px] bg-[#FFF1F4]/70 p-8 z-10 backdrop-blur-md">
            <div className="md:p-16 md:space-y-4">
              <p className="text-lg font-bold underline decoration-[#F9C033] decoration-4">
                About Us
              </p>
              <h1 className="text-2xl md:text-3xl">
                Creating a better Society by making every vote count.
              </h1>
              <p className="text-md">
                We are a dedicated group that is passionate about making the
                society a better place by ensuring that we simulate polls and
                ensure that all your votes count. We liase with civil bodies in
                the real world to also monitor the electoral processes at your
                polling Units and stations to ensure a free and fair election
                for everyone.
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
