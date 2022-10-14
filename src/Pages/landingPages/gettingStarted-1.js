import React, { useRef, useState } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import Badge from "../../UI/Badge";
import Socials from "../../Components/Layout/Landing/Socials";
import { Link } from "react-router-dom";
import { countDownDate } from "../../UI/MagicVars";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import calendar from "../../images/calendar.png";
import text_logo from "../../images/text_logo.png";
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
    <p className="text-white px-2 rounded-full font-bold bg-green-500">
      Action Successful
    </p>
  );
  return (
    <>
      <Nav />
      <div className="relative flex flex-col mt-12 ">
        {<Socials marginTop="36" />}
        <div className="relative flex flex-col items-center bg-no-repeat bg-top bg-opacity-5 justify-center space-y-8 bg-hero-pattern lg:pb-[10rem]">
          <p className="font-extrabold">Gubernatorial Poll</p>
          <Badge className="flex flex-row space-x-3">
            <img src={calendar} alt="calendarMonth" />
            <p>{countDownDate}</p>
          </Badge>
          <Timer date={countDownDate} size="4xl" sizeMD="6xl" />
          <div>
            <p className="max-w-xs text-center md:max-w-xl text-xl">
              We would love to keep you informed as the date draws closer
            </p>
          </div>
          {show ? message : ""}
          <div className="relative text-gray-700">
            <form onSubmit={handleSubmit}>
              <input
                className="w-[300px] md:w-[500px] pl-4 h-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline p-6"
                type="email"
                placeholder="Enter Email Address"
                ref={emailRef}
                required
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-green-600 rounded-r-lg hover:bg-green-500 focus:bg-gray-700"
              >
                Notify Me
              </button>
            </form>
          </div>
          {/* Small screen controls */}
          <div className="flex flex-row items-center justify-center lg:hidden space-x-4 border border-green-500 p-4 rounded-lg px-12">
            <Link to="/" className=" bg-green-500 text-white rounded-full">
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
              <Link
                to="getting-started-four"
                className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"
              ></Link>
              <Link
                to="/email"
                className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"
              ></Link>
            </div>
            <Link
              to="/getting-started-two"
              className=" bg-green-500 text-white rounded-full"
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
              <Link
                to="/"
                className="inline-block w-2 h-2 mr-2 bg-black rounded-full"
              ></Link>
              <Link
                to="/getting-started-two"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></Link>
              <Link
                to="getting-started-four"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></Link>
              <Link
                to="/email"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></Link>
            </div>
            <Link
              to="/getting-started-two"
              className=" bg-green-200 rounded-full"
            >
              <KeyboardArrowDownIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-row items-center justify-center pb-12">
        <img
          src={text_logo}
          alt="vote"
          className="w-[65%] -mt-[120px] h-[200px]"
        />
      </div>
    </>
  );
};

export default GettingStartedOne;
