import React, { useRef, useState } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import Badge from "../../UI/Badge";
import { Link } from "react-router-dom";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/Facebook";
import { countDownDate } from "../../UI/MagicVars";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import calendar from "../../images/calendar.png";
import text_logo from "../../images/watermark.png";
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
    <>
      <Nav />
      <div className="relative flex flex-col mt-12 ">
        <div
          className={`absolute z-10 flex flex-col items-center top-[400px] md:top-[100px] justify-center px-4 space-y-4 md:px-12 lg:px-24`}
        >
          <div className={`flex flex-col space-y-4 text-[#707070]`}>
            <a href="https://instagram.com/wepollnow">
              <Instagram />
            </a>
            <a href="https://youtube.com/wepollnow">
              <YouTube />
            </a>
            <a href="https://facebook.com/wepollnow">
              <Facebook />
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center bg-no-repeat bg-top bg-opacity-5 justify-center space-y-1 md:space-y-4 bg-contain bg-hero-pattern lg:pb-[10rem]">
          <p className="font-bold">Gubernatorial Poll</p>
          <Badge className="flex flex-row space-x-3" bg="[#EDFFF0]">
            <img src={calendar} alt="calendarMonth" />
            <p className="text-sm">{countDownDate}</p>
          </Badge>
          <Timer date={countDownDate} size="4xl" sizeMD="6xl" />
          <div>
            <p className="max-w-xs text-md text-center md:max-w-xl">
              We would love to keep you informed as the date draws closer
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
                className="absolute inset-y-0 right-0 flex items-center px-4 font-semibold text-white bg-green-600 rounded-r-lg hover:bg-green-500 focus:bg-gray-700"
              >
                Notify Me
              </button>
            </form>
          </div>
          {/* Small screen controls */}
          <div className="hidden flex-row items-center justify-center p-4 px-12 space-x-4 border border-green-500 rounded-lg lg:hidden">
            <Link to="/" className="text-white bg-green-500 rounded-full ">
              <KeyboardArrowLeftIcon />
            </Link>
            <div className="flex flex-row items-center justify-center space-x-3">
              <Link
                to="/"
                className="inline-block w-2 h-2 bg-black rounded-full"
              ></Link>
              <Link
                to="/getting-started-two"
                className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"
              ></Link>
              <Link className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"></Link>
              <Link className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"></Link>
            </div>
            <Link
              to="/getting-started-two"
              className="text-white bg-green-500 rounded-full "
            >
              <KeyboardArrowRightIcon />
            </Link>
          </div>
          {/* Large screen controls */}
          <div className="absolute flex-col items-start justify-center flex -mr-[300px] md:mr-0 pt-[450px] md:pt-0 md:ml-[1000px] lg:ml-[1200px] space-y-4 ">
            <Link to="/" className="bg-green-200 rounded-full ">
              <KeyboardArrowUpIcon />
            </Link>
            <div className="flex flex-col items-center justify-center px-2 space-y-3">
              <Link
                to="/"
                className="inline-block w-2 h-2 mr-2 bg-black rounded-full"
              ></Link>
              <Link
                to="/getting-started-two"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></Link>
              <Link className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"></Link>
              <Link className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"></Link>
            </div>
            <Link
              to="/getting-started-two"
              className="bg-green-200 rounded-full "
            >
              <KeyboardArrowDownIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-row items-center justify-center  pb-12 flex">
        <img
          src={text_logo}
          alt="vote"
          className="w-[65%] mt-4 md:-mt-[120px] h-24 md:h-[200px]"
        />
      </div>
    </>
  );
};

export default GettingStartedOne;
