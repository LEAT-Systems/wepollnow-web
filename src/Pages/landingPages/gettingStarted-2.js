import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import PollsSingle from "../../Pages/Polls/PollsSingle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Nav from "../../Components/Layout/Landing/mainNav";
import Badge from "../../UI/Badge";
import image from "../../images/image_2.png";
import Footer from "../../Components/Layout/Landing/Footer";
import Socials from "../../Components/Layout/Landing/Socials";
import { countDownDate } from "../../UI/MagicVars";
import ArticleData from "../blogPages/blogSingle";

//
const GettingStartedTwo = () => {
  return (
    <>
      <Nav />
      <div className="relative flex flex-col">
        {<Socials />}
        <div className="relative flex flex-col items-center justify-center space-y-4 mt-12 bg-hero-pattern bg-no-repeat bg-top bg-opacity-5 md:py-8">
          <p className="font-bold">Presidential Poll</p>
          <Badge>{countDownDate}</Badge>
          <div className="flex flex-row items-center justify-center">
            <h2 className="max-w-4xl p-8 text-2xl md:text-5xl font-bold text-center">
              Let's{" "}
              <span className="underline underline-offset-4 decoration-yellow-500 decoration-[5px]">
                change
              </span>{" "}
              the narrative.
              <br /> Make your vote count.
            </h2>
          </div>
          <div className="md:pt-8">
            <Link
              to="/getting-started-three"
              className="w-full p-4 px-8 text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              Vote Now
            </Link>
          </div>

          {/* Small screen controls */}
          <div></div>
          <div className="flex flex-row items-center justify-center lg:hidden space-x-4 bg-yellow-100 p-4 rounded-lg px-12">
            <Link to="/" className=" bg-green-400 text-white rounded-full">
              <KeyboardArrowLeftIcon />
            </Link>
            <div className="flex flex-row items-center justify-center space-x-3">
              <NavLink
                to="/"
                className="inline-block w-2 h-2 bg-gray-300 rounded-full"
              ></NavLink>
              <NavLink
                to="/getting-started-two"
                className="inline-block w-2 h-2 mr-2 bg-black rounded-full"
              ></NavLink>
              <NavLink
                to="getting-started-three"
                className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"
              ></NavLink>
              <NavLink
                to="/email"
                className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"
              ></NavLink>
            </div>
            <Link
              to="/getting-started-three"
              className=" bg-green-400 text-white rounded-full"
            >
              <KeyboardArrowRightIcon />
            </Link>
          </div>

          {/* Large screen controls */}

          <div className="absolute flex-col items-start justify-center hidden lg:flex lg:ml-[1200px] space-y-4 ">
            <Link to="/" className=" bg-green-200 rounded-full">
              <KeyboardArrowUpIcon />
            </Link>
            <div className="flex flex-col items-center justify-center px-2 space-y-3">
              <NavLink
                to="/"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></NavLink>
              <NavLink
                to="/getting-started-two"
                className="inline-block w-2 h-2 mr-2  bg-black rounded-full"
              ></NavLink>
              <NavLink
                to="getting-started-three"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></NavLink>
              <NavLink
                to="/email"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></NavLink>
            </div>
            <Link
              to="/getting-started-three"
              className=" bg-green-200 rounded-full"
            >
              <KeyboardArrowDownIcon />
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center lg:-mt-24">
          <h1 className="text-[150px] logo text-center md:text-[200px] lg:text-[350px] font-bold text-gray-300 md:ml-8">
            VOTE
          </h1>
        </div>

        {/* Mini poll section */}
        <div>
          <PollsSingle />
        </div>

        <section>
          <div className="relative flex flex-col max-w-6xl px-6 mx-auto my-32 text-gray-900 md:flex-row md:px-0">
            <div className="pr-0 text-black bg-[#FFF1F4] top-48 md:right-0 md:py-20 md:pl-20 md:p-0 md:absolute max-w-3xl space-y-8">
              <div className="px-4 md:px-0 py-4 md:py-0">
                <p className="text-lg font-bold underline">About WepollNow</p>
                <h1 className=" text-2xl md:text-5xl font-bold">
                  Creating a better Society by making every vote count.
                </h1>
                <p className="text-lg">
                  We are a dedicated group that is passionate about making the
                  society a better place by ensuring that we simulate polls and
                  ensure that all your votes count. We liase with civil bodies
                  in the real world to also monitor the electoral processes at
                  your polling Units and stations to ensure a free and fair
                  election for everyone.
                  <br /> Together, We can make Nigeria Great!
                </p>
              </div>
              <div className="pt-8 md:pt-4 text-center md:text-left py-4">
                <Link to="/about">
                  <button className="p-4 w-1/3 rounded-lg bg-[#E2345A] px-4 text-white font-bold hover:bg-black">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className=" p-8 hidden md:flex">
              <img src={image} alt="" />
            </div>
          </div>
        </section>

        {/*Mini Blog section  */}
        <div>
          <ArticleData />
        </div>

        {/* Footer Section */}
        <div className="mt-12 md:mt-48">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GettingStartedTwo;
