import React, { useId } from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "intl-tel-input/build/css/intlTelInput.css";
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
import calendar from "../../images/calendar.png";
import text_logo from "../../images/watermark.png";
import { Modal } from "@mui/material";
import Close from "../../images/CloseButton.png";
import PollsSwiper from "../Polls/PollsSwiper";
import BlogSingleGroupPage from "../blogPages/blogSingleGroup";

//
const GettingStartedTwo = () => {
  const [open, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const phoneRef = useRef();

  // Submit form values
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = phoneRef.current.value.trim();
    if (!(val.length === 11)) {
      setHasError(true);
      return;
    }
    localStorage.setItem("phoneNumber", val);
    setHasSubmitted(true);
    setHasError(false);
    phoneRef.current.value = "";
  };

  //
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const modalContent = (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto space-y-4">
      <div className="flex flex-col items-end justify-center p-8 space-y-6 bg-white rounded-lg ">
        <div className="flex flex-row items-end justify-end">
          <button type="button" onClick={handleClose}>
            <img src={Close} alt="close" />
          </button>
        </div>

        {!hasSubmitted && (
          <p className="text-xl font-semibold">
            Input your phone number to proceed
          </p>
        )}

        <form
          className="flex flex-col items-center justify-center w-full space-y-8 text-center"
          onSubmit={handleSubmit}
        >
          {hasError && (
            <p className="text-red-500">Enter 11 digits of your Phone Number</p>
          )}
          {hasSubmitted && (
            <p className="max-w-lg text-3xl font-bold text-black">
              Successfully Submitted. Proceed by Clicking the button below.
            </p>
          )}

          {!hasSubmitted && (
            <input
              ref={phoneRef}
              name="phone"
              placeholder="Enter Phone Number"
              className="border p-2 w-full rounded-md px-4"
            />
          )}
          {!hasSubmitted && (
            <button
              type="submit"
              className="w-full p-4 text-white bg-green-500 rounded-lg hover:bg-green-600 hover:-translate-y-1"
            >
              Submit
            </button>
          )}
          {hasSubmitted && (
            <Link to="/getting-started-three">
              <button className="w-full p-4 px-24 mt-8 text-white bg-green-500 rounded-lg animate hover:bg-green-600">
                Continue
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );

  // ================================   JSX   ==========================================
  return (
    <>
      <Nav />
      <Modal open={open} children={modalContent} />
      <div className="relative flex flex-col">
        <div className="top-48">
          <Socials top="48" />
        </div>
        <div className="relative flex flex-col items-center justify-center space-y-4 mt-12 bg-contain bg-hero-pattern bg-no-repeat lg:pb-[10rem] bg-top bg-opacity-5 md:py-8 pb-24">
          <p className="font-extrabold">Presidential Poll</p>
          <Badge className="flex flex-row space-x-3">
            <img src={calendar} alt="calendarMonth" />
            <p>{countDownDate}</p>
          </Badge>
          <div className="flex flex-row items-center justify-center" id="div">
            <h1 className="max-w-4xl p-8 text-4xl font-bold text-center md:text-5xl">
              Let's{" "}
              <span className="underline underline-offset-4 decoration-yellow-500 decoration-[5px]">
                change
              </span>{" "}
              the narrative.
              <br /> Make your vote count.
            </h1>
          </div>
          <div className="md:pt-8">
            <button
              onClick={handleOpen}
              className="w-full p-4 px-8 text-white bg-green-500 rounded-lg animate hover:bg-green-600"
            >
              Vote Now
            </button>
          </div>

          {/* Small screen controls */}
          <div className="flex flex-row items-center justify-center p-4 px-12 space-x-4 border border-green-500 rounded-lg lg:hidden">
            <Link to="/" className="text-white bg-green-400 rounded-full ">
              <KeyboardArrowLeftIcon />
            </Link>
            <div className="flex flex-row items-center justify-center space-x-3">
              <Link
                to="/"
                className="inline-block w-2 h-2 bg-gray-300 rounded-full"
              ></Link>
              <Link
                to="/getting-started-two"
                className="inline-block w-2 h-2 mr-2 bg-black rounded-full"
              ></Link>
              <Link
                to="getting-started-three"
                className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"
              ></Link>
              <Link
                to="/email"
                className="inline-block w-2 h-2 mr-2 bg-gray-300 rounded-full"
              ></Link>
            </div>
            <Link
              to="/getting-started-three"
              className="text-white bg-green-400 rounded-full "
            >
              <KeyboardArrowRightIcon />
            </Link>
          </div>

          {/* Large screen controls */}

          <div className="absolute flex-col items-start justify-center hidden lg:flex lg:ml-[1200px] space-y-4 ">
            <Link to="/" className="bg-green-200 rounded-full ">
              <KeyboardArrowUpIcon />
            </Link>
            <div className="flex flex-col items-center justify-center px-2 space-y-3">
              <Link
                to="/"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></Link>
              <Link
                to="/getting-started-two"
                className="inline-block w-2 h-2 mr-2 bg-black rounded-full"
              ></Link>
              <div
                onClick={handleOpen}
                className="inline-block  hover:cursor-pointer w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></div>
              <Link
                to="/email"
                className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"
              ></Link>
            </div>
            <div
              onClick={handleOpen}
              className="bg-green-200 rounded-full hover:cursor-pointer "
            >
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <div className="flex-row items-center justify-center hidden pb-12 md:flex">
          <img
            src={text_logo}
            alt="vote"
            className="w-[65%] -mt-[120px] h-[200px]"
          />
        </div>

        {/* Mini poll section */}
        <div>
          <PollsSwiper />
        </div>

        <section className="w-full">
          <div className="relative flex flex-col w-full mx-auto md:my-6 text-gray-900 md:flex-row md:px-0">
            <div className="max-w-4xl pr-0 md:space-y-8 text-black md:right-0 md:py-20 md:pl-20 md:p-0 md:absolute">
              <div className="hidden md:flex">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="max-w-3xl mt-[120px] bg-[#FFF1F4]/30 p-8 z-10 backdrop-blur-md">
              <div className="px-4 py-4 space-y-4 md:px-6 md:py-0">
                <p className="text-lg font-bold underline decoration-[#F9C033] decoration-4">
                  About Us
                </p>
                <h1 className="text-2xl font-bold md:text-5xl">
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
              <div className="py-4 pt-8 text-center md:pt-4 md:text-left md:px-6">
                <Link to="/about">
                  <button className="w-1/2 animate p-4 px-4 font-bold text-white bg-green-500 rounded-lg md:w-1/4 hover:bg-black">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*Mini Blog section  */}
        <div>
          <BlogSingleGroupPage />
        </div>

        {/* Footer Section */}
        <div className="mt-12 md:mt-24">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GettingStartedTwo;
