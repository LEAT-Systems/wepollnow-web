import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import facebook from "../../../images/navIcons/Facebook.png";
import instagram from "../../../images/navIcons/IG.png";
import youtube from "../../../images/navIcons/YouTube.png";
import EastIcon from "@mui/icons-material/East";
import back from "../../../images/backArrow.png";
import hamburger from "../../../images/hamburger.png";
import { Modal, Slide } from "@mui/material";
import hamburgerSmall from "../../../images/hamburgSmall.png";

const Nav = (props) => {
  const [show, setShow] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [hidden, setHidden] = useState(true);
  const [hasError, setHasError] = useState();
  const [hasHTTPError, setHasHTTPError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const closeHandler = () => {
    setShow(false);
  };
  const handlerToToggle = () => {
    setHidden(false);
  };
  const handlerToCollaspe = () => {
    setHidden(true);
  };
  // Handle submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collecting the data with refs
    let name = nameRef.current.value.trim();
    let email = emailRef.current.value.trim();
    let message = messageRef.current.value.trim();

    const sendToAPI = async () => {
      try {
        const requestOptions = {
          method: "POST",
          body: JSON.stringify({
            email: email,
            name: name,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        };
        const response = await fetch(
          "https://wepollnow.azurewebsites.net/utilities/contact/",
          requestOptions
        );
        const result = await response.text();
        const JSONdata = await JSON.parse(result);
        const emailHasError = JSONdata?.email?.[0];
        if (!response.ok && emailHasError !== "") {
          setHasError(true);
          setErrorMessageEmail(emailHasError);
        }
        console.log("JSONDATA", JSONdata);
        console.log("RESULT", result);
        if (!response.ok) {
          setHasError(true);
          throw new Error("Something Isn't right");
        } else {
          setShow(true);
          setHasSubmitted(true);
        }
      } catch (error) {
        setHasHTTPError(error.message);
      }
    };

    sendToAPI();

    // clear form
    if (hasSubmitted === true) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  // Dismissing success message on form
  setTimeout(() => {
    setHasSubmitted(false);
  }, 5000);

  const desktopContainer = (
    <div className="flex-col items-start justify-start hidden px-6 space-y-8 md:flex md:items-center md:justify-center md:mx-auto md:px-36">
      <div className="space-y-8 text-start md:text-left md:mt-10">
        <div>
          <Link to="/" className="text-4xl font-bold stroke md:text-7xl">
            <h1>Home</h1>
          </Link>
        </div>
        <div>
          <Link to="/about" className="text-4xl font-bold stroke md:text-7xl">
            <h1>About</h1>
          </Link>
        </div>
        <div>
          <Link to="/blog" className="text-4xl font-bold stroke md:text-7xl">
            <h1>Blog</h1>
          </Link>
        </div>
        <div>
          <Link to="/polls" className="text-4xl font-bold stroke md:text-7xl">
            <h1>Polls</h1>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mx-auto space-x-6 md:-ml-1">
        <div>
          <img src={instagram} alt="instagram" />
        </div>
        <div>
          <img src={youtube} alt="youtube" />
        </div>
        <div>
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </div>
  );
  const mobileNavLinkContainer = (
    <div className="flex flex-col items-start justify-start px-6 space-y-8 md:hidden md:items-center md:justify-center md:mx-auto md:px-36">
      <div className="space-y-8 text-start md:text-left md:mt-10">
        <div>
          <Link to="/" className="text-4xl font-bold stroke md:text-7xl">
            <h1>Home</h1>
          </Link>
        </div>
        <div>
          <Link to="/about" className="text-4xl font-bold stroke md:text-7xl">
            <h1>About</h1>
          </Link>
        </div>
        <div>
          <Link to="/blog" className="text-4xl font-bold stroke md:text-7xl">
            <h1>Blog</h1>
          </Link>
        </div>
        <div>
          <Link to="/polls" className="text-4xl font-bold stroke md:text-7xl">
            <h1>Polls</h1>
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mx-auto space-x-6 md:-ml-1">
        <div>
          <img src={instagram} alt="instagram" />
        </div>
        <div>
          <img src={youtube} alt="youtube" />
        </div>
        <div>
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </div>
  );

  const form = (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <p className="text-white">Name</p>
        <input
          required
          type="text"
          ref={nameRef}
          className="w-full p-4 text-white placeholder-gray-200 bg-black border rounded input hover:bg-gray-900"
          placeholder="Enter Your Name"
        />
      </div>
      <div>
        <p className="text-white">Email</p>
        <input
          required
          type="email"
          ref={emailRef}
          className="w-full p-4 text-white placeholder-gray-200 bg-black border rounded input hover:bg-gray-900"
          placeholder="Enter Your Email"
        />
      </div>
      <div>
        <p className="text-white">Message</p>
        <textarea
          required
          type="text"
          ref={messageRef}
          className="w-full h-32 p-4 text-white placeholder-gray-200 bg-black border rounded input hover:bg-gray-900"
          placeholder="Enter Your Message"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 transition bg-white rounded text-dark hover:-translate-y-1"
        >
          <p className="font-bold">Send Message</p>
        </button>
      </div>
    </form>
  );

  const mobileFormContainer = (
    <div className="flex md:hidden flex-col py-0 w-[100%] px-4 border-gray-200 md:border-0">
      <div className="space-y-4 w-[100%] md:w-[65%]">
        {hasSubmitted && hasError !== false && (
          <div className="p-4 text-center text-white bg-green-500 rounded-lg">
            <p>Action was Successful. We will get back to you.</p>
          </div>
        )}
        {errorMessageEmail !== "" && (
          <div className="flex flex-row justify-between p-4 text-center text-white bg-red-500 rounded-lg">
            <p>
              {hasHTTPError}: {errorMessageEmail}
            </p>
            <EastIcon />
          </div>
        )}
        <button
          onClick={handlerToCollaspe}
          className="flex flex-row items-center space-x-2"
        >
          <img src={back} alt="img" />
          <p className="text-lg font-bold text-left text-white md:text-xl md:mt-0 md:text-left ">
            Back
          </p>
        </button>
        {form}
      </div>
    </div>
  );
  const desktopFormContainer = (
    <div className=" hidden md:flex flex-col items-center justify-center mx-auto w-[65%] border-gray-200 md:border-0">
      <div className="space-y-4 w-[100%] md:w-[65%]">
        {hasSubmitted && hasError !== false && (
          <div className="p-4 text-center text-white bg-green-500 rounded-lg">
            <p>Action was Successful. We will get back to you.</p>
          </div>
        )}
        {errorMessageEmail !== "" && (
          <div className="p-4 text-center text-white bg-red-500 rounded-lg">
            <p>
              {hasHTTPError}: {errorMessageEmail}
            </p>
          </div>
        )}
        <p className="mt-8 text-lg font-bold text-left text-white md:text-xl md:mt-0 md:text-left ">
          Get in touch
        </p>
        {form}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {/*=======================   Top Navigation ============================*/}

      <div
        className={`px-6 md:px-24 mx-auto  bg-[#${props.bg}] bg-${props.bgImg} `}
      >
        <div className="flex flex-row items-center justify-between py-3 border-b border-gray-200">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className={`relative z-30 items-center justify-center`}>
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              <img
                src={hamburger}
                alt="hamburgerButton"
                className="hidden md:flex"
              />
              <img
                src={hamburgerSmall}
                alt="hamburgerButton"
                className="flex md:hidden"
              />
            </button>
          </div>
        </div>
      </div>

      {/* =======================  Collapsible Nav ============================*/}
      <Modal
        className="relative"
        open={show}
        children={
          <Slide direction="up" in={show} mountOnEnter unmountOnExit>
            <div
              className={
                !show
                  ? "hidden"
                  : "flex relative h-screen flex-col md:flex-row items-start pt-6 pb-8 justify-start md:items-center md:justify-center bg-black mx-auto space-y-12"
              }
            >
              <button
                onClick={closeHandler}
                className="absolute z-30 open top-8 right-12 md:top-12 md:right-24"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-bottom"></span>
              </button>
              {/* show this container when on mobile view */}
              {hidden && mobileNavLinkContainer}
              {/* show this container when on desktop view */}
              {desktopContainer}
              {/* show this form when on mobile view */}
              {!hidden && mobileFormContainer}
              {/* show this container when on mobile view */}
              {show && (
                <button
                  onClick={handlerToToggle}
                  className={!hidden ? "hidden" : ""}
                >
                  <div className="flex flex-row items-center px-6 mt-8 space-x-2 text-lg font-bold text-left text-white md:hidden md:text-xl md:mt-0 md:text-left ">
                    <p>Get in touch</p>
                    <EastIcon />
                  </div>
                </button>
              )}
              {/* show this container when on desktop view */}
              {desktopFormContainer}
            </div>
          </Slide>
        }
      />
    </React.Fragment>
  );
};

export default Nav;
