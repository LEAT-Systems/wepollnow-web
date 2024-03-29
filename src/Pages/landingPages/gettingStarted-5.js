import React, { useRef, useState, useEffect } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Link, useHistory } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import instagram from "../../images/landingIcons/IG.png";
import twitter from "../../images/landingIcons/twitter.png";
import text_logo from "../../images/voteWatermark.png";
import GettingStartedContent from "./GettingStartedContent";
import ModalComponent from "./GettingStartedModal";
import doneIcon from "../../images/doneIcon.png";
import errorIcon from "../../images/errorImg.png";
import Toast from "../../UI/SuccessToast";
import { baseUrl } from "../../store/baseUrl";

const GettingStartedFive = () => {
  const history = useHistory();
  const emailRef = useRef();
  const [error, setHasError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState();
  const [errorMessageEmail, setErrorMessageEmail] = useState();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  let uniqueID;
  useEffect(() => {
    uniqueID = localStorage.getItem("uniqueID");
  }, []);

  // open and close the modal
  const handleOpen = () => {
    if (uniqueID === null || uniqueID === undefined) {
      setOpen(true);
    } else {
      // make API request with unique ID
      history.push("/polls", { replace: true });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  //////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collecting the email data with refs
    let email = emailRef.current.value.trim();

    // Sending to API
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
          baseUrl + `utilities/subscriber/`,
          requestOptions
        );
        //
        const result = await response.text();
        const JSONdata = await JSON.parse(result);
        const emailHasError = JSONdata?.email?.[0];

        //
        if (!response) {
          setShow(true);
          setHasError(true);
          throw new Error("An error occured");
        }

        if (emailHasError === "Enter a valid email address.") {
          setHasError(true);
          setShow(true);
          setErrorMessageEmail(emailHasError);
        }

        if (
          response.ok === true &&
          emailHasError !== "Enter a valid email address."
        ) {
          setShow(true);
          setHasError(false);
          setHasSubmitted(true);
        }
      } catch (error) {
        setHasError(true);
        alert(error.message);
      }
    };

    sendToAPI();

    // clear form
    if (hasSubmitted === true) {
      emailRef.current.value = "";
    }
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
          <p className="text-red-500">{errorMessageEmail}</p>
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
          className={`absolute z-10 flex flex-col items-center  left-4 md:left-16 top-[450px] md:top-48 justify-center`}
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

        <div className="relative flex flex-col items-center bg-no-repeat bg-top bg-opacity-5 justify-center space-y-4 md:space-y-4 bg-contain bg-hero-pattern lg:pb-[10rem]">
          <h1 className="text-xl font-extrabold md:text-3xl">
            Senatorial Polls
          </h1>

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
              <h1>Your opinion counts.</h1>
            </div>
          </div>
          <div>
            <p className="max-w-xs text-center text-md md:max-w-2xl">
              We would love to keep you informed on all on-coming gubernatorial
              polls
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
          <div className="absolute right-6 md:right-16 top-[400px] md:top-36">
            <div className="flex flex-col items-center justify-center space-y-4 ">
              <Link
                to="/getting-started-four"
                className="bg-[#EDFFF0] rounded-full p-1 "
              >
                <KeyboardArrowUpIcon />
              </Link>
              <div className="flex flex-col items-center justify-center px-2 space-y-2">
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="inline-block w-2 h-2 bg-black rounded-full"></div>
              </div>
              <div className="bg-[#EDFFF0] rounded-full p-1">
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={text_logo}
            alt="vote"
            className="w-full md:w-[55%] mt-8 md:-mt-[140px] h-full md:max-w-[30%] md:min-w-[55%] md:h-[200px]"
          />
        </div>
        <GettingStartedContent prompt={handleOpen} />
      </div>
    </div>
  );
};

export default GettingStartedFive;
