import React, { useRef, useState } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import Badge from "../../UI/Badge";
import { Link } from "react-router-dom";
import { countDownDate } from "../../UI/MagicVars";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import instagram from "../../images/landingIcons/IG.png";
import youtube from "../../images/landingIcons/YU.png";
import facebook from "../../images/landingIcons/FB.png";
import calendar from "../../images/calendar.png";
import text_logo from "../../images/voteWatermark.png";
const Timer = React.lazy(() => import("../../UI/Timer"));

//
const GettingStartedOne = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  const emailRef = useRef();

  // Form submit handler for the email
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = emailRef.current.value.trim();
    localStorage.setItem("email", val);
    setHasSubmitted(true);
    emailRef.current.value = "";
    setShow(true);
  };

  // Time out to clear message
  setTimeout(() => {
    setShow(false);
  }, 2000);

  // Message to display before timeout
  const message = hasSubmitted && (
    <p className="px-2 font-bold text-white bg-green-500 rounded-full">
      Action Successful
    </p>
  );
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Nav />
      <div className="relative flex flex-col mt-12 ">
        <div
          className={`absolute z-10 flex flex-col items-center left-4 md:left-16 top-[450px] md:top-48 justify-center`}
        >
          <div className={`flex flex-col space-y-4`}>
            <a href="https://instagram.com/wepollnow">
              <img src={instagram} alt="instagram_link" />
            </a>
            <a href="https://youtube.com/wepollnow">
              <img src={youtube} alt="youtube_link" />
            </a>
            <a href="https://facebook.com/wepollnow">
              <img src={facebook} alt="facebook_link" />
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center bg-no-repeat bg-top bg-opacity-5 justify-center space-y-4 md:space-y-4 bg-contain bg-hero-pattern lg:pb-[10rem]">
          <p className="font-bold">Gubernatorial Poll</p>
          <Badge
            className="flex flex-row space-x-3"
            bg="[#EDFFF0]"
            border="#EDFFF0"
          >
            <img src={calendar} alt="calendarMonth" />
            <p className="text-sm">Oncoming</p>
          </Badge>
          <div className="flex flex-row items-center justify-center ">
            <div className="max-w-4xl p-8 text-4xl text-[#082B0E] md:space-y-4 text-center md:text-[54px]">
              <h1>
                {" "}
                Let's{" "}
                <span className="underline underline-offset-4 decoration-yellow-500 decoration-[6px]">
                  change
                </span>{" "}
                the narrative.
              </h1>
              <h1>Make your vote count.</h1>
            </div>
          </div>
          <div>
            <p className="max-w-xs text-center text-md md:max-w-2xl">
              We would love to keep you informed on all on-coming gubernatorial
              polls
            </p>
          </div>
          {show ? message : ""}
          <div className="relative text-gray-700">
            <form onSubmit={handleSubmit}>
              <input
                className="w-[300px] md:w-[500px] pl-4 h-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline md:p-6"
                type="email"
                placeholder="Enter Email Address"
                ref={emailRef}
                required
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-4 font-semibold text-white bg-[#08C127] rounded-r-lg hover:bg-green-500 focus:bg-gray-700"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Large screen controls */}
          <div className="absolute right-6 md:right-16 top-[430px] md:top-36">
            <div className="flex flex-col items-center justify-center space-y-4 ">
              <Link to="/" className="bg-[#EDFFF0] rounded-full p-1 ">
                <KeyboardArrowUpIcon />
              </Link>
              <div className="flex flex-col items-center justify-center px-2 space-y-2">
                <div className="inline-block w-2 h-2 bg-black rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <Link
                to="/getting-started-two"
                className="bg-[#EDFFF0] rounded-full p-1"
              >
                <KeyboardArrowDownIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={text_logo}
            alt="vote"
            className="w-full md:w-[65%] mt-4 md:-mt-[140px] h-full md:h-24 md:h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GettingStartedOne;
