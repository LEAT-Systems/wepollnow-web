import React, { useState } from "react";
import Timer from "../../UI/Timer";
import { countDownDate } from "../../UI/MagicVars";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Nav from "../../Components/Layout/Landing/mainNav";
import instagram from "../../images/landingIcons/IG.png";
import youtube from "../../images/landingIcons/YU.png";
import facebook from "../../images/landingIcons/FB.png";
import text_logo from "../../images/voteWatermark.png";
import GettingStartedContent from "./GettingStartedContent";
import ModalComponent from "./GettingStartedModal";
import calendar from "../../images/calendar.png";

//
const GettingStartedOne = () => {
  const [open, setOpen] = useState(false);

  // open and close the modal
  const handleOpen = () => {
    setOpen(true);
    localStorage.setItem("pollType", "Presidential Poll");
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ================================   JSX   ==========================================
  return (
    <div className="items-center justify-center w-screen h-screen overflow-x-hidden">
      <Nav />
      <ModalComponent open={open} handleClose={handleClose} />
      <div className="relative flex flex-col">
        <div
          className={`absolute z-10 flex flex-col items-center top-[450px] md:top-56 justify-center space-y-4 left-8 md:left-16`}
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
          <p className="text-xl font-extrabold md:text-3xl">
            Presidential Poll
          </p>
          <div
            className={`inline-flex items-center justify-center space-x-1 px-4 py-1 text-xs bg-[#FFFDF1] border-[#f9c833] border md:text-lg font-semibold leading-none text-black rounded-md`}
          >
            <img src={calendar} alt="calendarMonth" />
            <p className="text-sm">February 25, 2023</p>
          </div>
          <div className="md:p-6">
            <Timer
              date={countDownDate}
              size="9xl"
              color="black"
              pcolor="black"
            />
          </div>
          <p>Proceed to vote by clicking the button below</p>
          <div className="md:pt-8">
            <button
              onClick={handleOpen}
              className="w-full p-4 px-8 text-white bg-[#08BC26] rounded-lg animate"
            >
              Vote Now
            </button>
          </div>
          {/* Large screen controls */}
          <div className="absolute right-6 md:right-16 top-[376px] md:top-36">
            <div className="flex flex-col items-center justify-center space-y-4 ">
              <div className="bg-[#EDFFF0] rounded-full p-1 ">
                <KeyboardArrowUpIcon />
              </div>
              <div className="flex flex-col items-center justify-center px-2 space-y-2">
                <div className="inline-block w-2 h-2 bg-black rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <Link
                to="/getting-started-two"
                className="bg-[#EDFFF0] rounded-full hover:cursor-pointer md:p-1 "
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
            className="w-full md:w-[55%] md:-mt-[140px] h-full md:max-w-[30%] md:min-w-[55%] md:h-[200px]"
          />
        </div>
      </div>
      <GettingStartedContent prompt={handleOpen} />
    </div>
  );
};

export default GettingStartedOne;
