import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../Components/Layout/Landing/mainNav";
import Badge from "../../UI/Badge";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import instagram from "../../images/landingIcons/IG.png";
import youtube from "../../images/landingIcons/YU.png";
import facebook from "../../images/landingIcons/FB.png";
import calendar from "../../images/calendar.png";
import text_logo from "../../images/voteWatermark.png";
import GettingStartedContent from "./GettingStartedContent";
import ModalComponent from "./GettingStartedModal";
import doneIcon from "../../images/doneIcon.png";
import errorIcon from "../../images/errorImg.png";
import Toast from "../../UI/SuccessToast";

//
const uniqueID = localStorage.getItem("uniqueID");

const GettingStartedFour = () => {
  const [error, setHasError] = useState(false);
  const [hasHTTPError, setHasHTTPError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState();
  const [errorMessageEmail, setErrorMessageEmail] = useState();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const [open, setOpen] = useState(false);

  // open and close the modal
  const handleOpen = () => {
    if (uniqueID !== "" || uniqueID !== undefined || uniqueID !== null) {
      history.push("/polls", { replace: true });
      // make API request with unique ID and poll_type
    }
    if (uniqueID === null) {
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collecting the email data with refs
    let email = emailRef.current.value.trim();

    const sendToAPI = async () => {
      try {
        const requestOptions = {
          method: "POST",
          body: JSON.stringify({
            email: email,
          }),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        };
        const response = await fetch(
          "https://wepollnow.azurewebsites.net/utilities/subscriber/",
          requestOptions
        );
        const result = await response.text();
        const JSONdata = await JSON.parse(result);
        const emailHasError = JSONdata?.email?.[0];
        console.log(response);
        if (emailHasError === "Enter a valid email address.") {
          setHasError(true);
          setShow(true);
          setErrorMessageEmail(emailHasError);
        }
        console.log("JSONDATA", JSONdata);
        console.log("RESULT", result);
        if (emailHasError !== "Enter a valid email address.") {
          setShow(true);
          setHasError(false);
          setHasSubmitted(true);
        }
      } catch (error) {
        setHasHTTPError(error.message);
      }
    };

    sendToAPI();

    // clear form
    emailRef.current.value = "";
  };

  // clear message
  const closeHandler = () => {
    setHasError(false);
    setShow(false);
  };

  // Message to display before timeout
  const msgToast = (
    <Toast
      children={
        error === true ? (
          <p>{errorMessageEmail}</p>
        ) : (
          <p>Successfully submitted</p>
        )
      }
      enter={show}
      img={error === true ? errorIcon : doneIcon}
      border={error === true ? `red-500` : `green-500`}
      onClose={closeHandler}
    />
  );

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Nav />
      {msgToast}
      <ModalComponent open={open} handleClose={handleClose} />
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
          <h1 className="text-xl font-extrabold md:text-3xl">
            Local Government Polls
          </h1>
          <div
            className={`inline-flex items-center justify-center space-x-1 px-4 py-1 text-xs bg-[#EDFFF0] border-[#08c127] border md:text-lg font-semibold leading-none text-black rounded-md`}
          >
            <img src={calendar} alt="calendarMonth" />
            <p className="text-sm">Oncoming</p>
          </div>
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
            <p className="max-w-xs text-center text-md md:max-w-xl">
              We would love to keep you informed on all House of Assembly Polls
            </p>
          </div>
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
              <Link
                to="/getting-started-three"
                className="bg-[#EDFFF0] rounded-full p-1 "
              >
                <KeyboardArrowUpIcon />
              </Link>
              <div className="flex flex-col items-center justify-center px-2 space-y-2">
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-black rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <Link
                to="/getting-started-five"
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
            className="w-full md:w-[55%] md:-mt-[140px] h-full md:max-w-[30%] md:min-w-[55%] md:h-[200px]"
          />
        </div>
        <GettingStartedContent prompt={handleOpen} />
      </div>
    </div>
  );
};

export default GettingStartedFour;
