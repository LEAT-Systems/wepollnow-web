import React, { useState, useEffect } from "react";
import Timer from "../../UI/Timer";
import { countDownDate } from "../../UI/MagicVars";
import { Link, useHistory } from "react-router-dom";
import "react-phone-number-input/style.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Nav from "../../Components/Layout/Landing/mainNav";
import instagram from "../../images/landingIcons/IG.png";
import twitter from "../../images/landingIcons/twitter.png";
import text_logo from "../../images/voteWatermark.png";
import GettingStartedContent from "./GettingStartedContent";
import ModalComponent from "./GettingStartedModal";
import calendar from "../../images/calendar.png";

//

const GettingStartedOne = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  let uniqueID;
  useEffect(() => {
    uniqueID = localStorage.getItem("uniqueID");
  }, []);

  // open and close the modal
  const handleOpen = () => {
    if (uniqueID === null || uniqueID === undefined) {
      localStorage.setItem(
        "poll_details",
        JSON.stringify({
          poll_id: 1,
          poll_name: "Presidential Election",
        })
      );
      setOpen(true);
    } else {
      // make API request with unique ID
      history.push("/polls", { replace: true });
    }
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
          <div className={`flex flex-col space-y-8 text-[#707070]`}>
            <a href="https://instagram.com/wepollnow">
              <img src={instagram} alt="instagram_link" />
            </a>

            <a href="https://facebook.com/wepollnow">
              <img src={twitter} alt="instagram_link" />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center space-y-8 mt-12 bg-contain bg-hero-pattern bg-no-repeat lg:pb-[10rem] bg-top bg-opacity-5 md:py-8 pb-24">
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
              size="4xl"
              sizelg="5xl"
              color="black"
              pcolor="black"
            />
          </div>
          <p>Proceed to vote by clicking the button below</p>
          <div className="md:mt-2">
            <button
              onClick={handleOpen}
              className="w-full p-4 px-8 text-white bg-[#08BC26] rounded-lg animate"
            >
              Vote Now
            </button>
          </div>
          {/* Large screen controls */}
          <div className="absolute right-6 md:right-16 top-[350px] md:top-36">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-[#EDFFF0] rounded-full p-1">
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
            className="w-full md:w-[55%] -mt-16 md:-mt-[140px] h-full md:max-w-[30%] md:min-w-[55%] md:h-[200px]"
          />
        </div>
      </div>
      <GettingStartedContent prompt={handleOpen} />
    </div>
  );
};

export default GettingStartedOne;
