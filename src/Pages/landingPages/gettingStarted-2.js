import React, { createRef, useId } from "react";
import { useState, useRef, useEffect } from "react";
import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Slide from "@mui/material/Slide";
import Nav from "../../Components/Layout/Landing/mainNav";
import image from "../../images/image_2.png";
import instagram from "../../images/landingIcons/IG.png";
import youtube from "../../images/landingIcons/YU.png";
import facebook from "../../images/landingIcons/FB.png";
import Footer from "../../Components/Layout/Landing/Footer";
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
  const [value, setValue] = useState(null);

  // Submit form values
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === null) {
      setHasError(true);
      return;
    }
    if (value !== null) {
      // Getting the phone number and country
      const intformatedPhoneNumber = formatPhoneNumberIntl(value);
      const countryEntered = parsePhoneNumber(value).country;
      localStorage.setItem("phoneNumber", {
        intformatedPhoneNumber,
        countryEntered,
      });
      setHasSubmitted(true);
      setHasError(false);
    }
  };

  // open and close the modal
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ================================   JSX   ==========================================
  return (
    <>
      <Nav />
      <Modal
        open={open}
        children={
          <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            <div className="flex flex-col items-center justify-center min-h-screen mx-auto px-4 md:px-0 space-y-4">
              <div className="flex flex-col w-full md:w-1/3 items-end justify-center p-8 space-y-6 bg-white rounded-lg ">
                <div className="flex flex-row items-end justify-end">
                  <button type="button" onClick={handleClose}>
                    <img src={Close} alt="close" />
                  </button>
                </div>

                {!hasSubmitted && (
                  <p className="text-xl text-center font-semibold">
                    Input your phone number to proceed
                  </p>
                )}
                {hasError && (
                  <p className="text-red-500 mx-auto">
                    Please enter your correct Phone Number
                  </p>
                )}
                {hasSubmitted && (
                  <p className="text-center text-xl font-normal text-black">
                    Yayy!!.. You are good to go, kindly proceed below...
                  </p>
                )}
                <form
                  className="flex flex-col items-center justify-center w-full space-y-8 text-center"
                  onSubmit={handleSubmit}
                >
                  {!hasSubmitted && (
                    <div
                      className={`${
                        hasError ? "border-red-500" : ""
                      } border p-2 rounded w-full`}
                    >
                      <PhoneInput
                        countryCallingCodeEditable={false}
                        international
                        defaultCountry="NG"
                        placeholder="Phone number"
                        value={value}
                        onChange={setValue}
                      />
                    </div>
                  )}
                  {!hasSubmitted && (
                    <button
                      type="submit"
                      className="w-full p-4 text-white bg-[#08BC26]  rounded-lg  hover:-translate-y-1"
                    >
                      Submit
                    </button>
                  )}
                  {hasSubmitted && (
                    <Link to="/getting-started-three">
                      <button className="w-full p-4  mt-8 text-white text-center bg-[#08BC26]  rounded-lg animate ">
                        Proceed
                      </button>
                    </Link>
                  )}
                </form>
              </div>
            </div>
          </Slide>
        }
      />
      <div className="relative flex flex-col">
        <div
          className={`absolute z-10 flex flex-col items-center top-[440px] md:top-56 justify-center space-y-4 left-8 md:left-16`}
        >
          <div className={`flex flex-col space-y-4 text-[#707070]`}>
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
        <div className="relative flex flex-col items-center justify-center space-y-2 mt-12 bg-contain bg-hero-pattern bg-no-repeat lg:pb-[10rem] bg-top bg-opacity-5 md:py-8 pb-24">
          <p className="font-extrabold text-[18px]">Presidential Poll</p>
          <span
            className={`inline-flex items-center justify-center space-x-1 px-4 py-1 text-xs border-[#08C127] border md:text-lg font-semibold leading-none text-black bg-[#D3E6D7] rounded-md`}
          >
            <p className="text-sm">Ongoing</p>
          </span>
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
          <div className="md:pt-8">
            <button
              onClick={handleOpen}
              className="w-full p-4 px-8 text-white bg-[#08BC26] rounded-lg animate"
            >
              Vote Now
            </button>
          </div>
          {/* Large screen controls */}
          <div className="absolute right-6 md:right-16 top-96 md:top-36">
            <div className="flex flex-col items-center justify-center space-y-4 ">
              <Link to="/" className="bg-[#EDFFF0] rounded-full p-1 ">
                <KeyboardArrowUpIcon />
              </Link>
              <div className="flex flex-col items-center justify-center px-2 space-y-2">
                <Link
                  to="/"
                  className="inline-block w-2 h-2  bg-gray-200 rounded-full"
                ></Link>
                <Link
                  to="/getting-started-two"
                  className="inline-block w-2 h-2  bg-black rounded-full"
                ></Link>
                <div
                  onClick={handleOpen}
                  className="inline-block  hover:cursor-pointer w-2 h-2 bg-gray-200 rounded-full"
                ></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <div
                onClick={handleOpen}
                className="bg-[#EDFFF0] rounded-full hover:cursor-pointer p-1 "
              >
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row items-center justify-center pb-12 mt-8 md:mt-0 flex">
          <img
            src={text_logo}
            alt="vote"
            className="w-[65%] -mt-[140px] h-[100px] md:h-[230px]"
          />
        </div>

        {/* Mini poll section */}
        <div>
          <PollsSwiper />
        </div>

        <section className="w-full">
          <div className="relative flex flex-col px-4 w-full mx-auto md:my-6 text-gray-900 md:flex-row md:px-0">
            <div className="max-w-4xl pr-0 md:space-y-8 text-black md:right-0 md:py-20 md:pl-20 md:p-0 md:absolute">
              <div className="flex md:px-0">
                <img src={image} alt="" className="mt-12 md:mt-0 rounded" />
              </div>
            </div>
            <div className="max-w-3xl -mt-8 rounded-lg md:rounded px-6 md:mt-[110px] bg-[#FFF1F4]/60 p-8 z-10 backdrop-blur-md">
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
                  ensure that all your votes count. We liase with civil bodies
                  in the real world to also monitor the electoral processes at
                  your polling Units and stations to ensure a free and fair
                  election for everyone.
                </p>
                <Link to="/about">
                  <button className="w-1/2 mt-4 animate p-4 px-4 font-bold text-white bg-[#08BC26]  rounded-lg md:w-1/4 hover:bg-black">
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
