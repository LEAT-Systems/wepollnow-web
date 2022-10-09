import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import FaceBookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../../images/logo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Modal } from "@mui/material";

const Nav = (props) => {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [dismiss, setDismiss] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Handle submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collecting the data with refs
    let name = nameRef.current.value.trim();
    let email = emailRef.current.value.trim();
    let message = messageRef.current.value.trim();

    // preparing the data into setData() in useState()
    setData({
      dataID: "Navigation Bar Form Data",
      userNames: name,
      userEmail: email,
      message: message,
    });

    // getting the data() value from useState and Sending the data to API endpoint
    localStorage.setItem("Contact Form", JSON.stringify(data));
    setHasSubmitted(true);

    // clear form
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  // Dismissing success message on form
  setTimeout(() => {
    setHasSubmitted(false);
  }, 2000);

  return (
    <React.Fragment>
      {/* Top Navigation */}
      <div
        className={`flex flex-row items-center justify-between px-12 md:px-24 py-8 mx-auto border-b border-gray-200 bg-[#${props.bg}]`}
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <button
            className={show ? "open p-3" : "hamburger focus:outline-none"}
            onClick={() => {
              setShow(!show);
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      {/* Collapsible Nav */}
      <div
        className={
          !show
            ? "hidden"
            : "flex flex-col md:flex-row items-center justify-center py-12 bg-black mx-auto space-y-12"
        }
      >
        <div className="flex flex-col items-center justify-center mx-auto space-y-8 md:mx-0 md:px-48">
          <div className="space-y-8 text-center md:text-left md:mt-10 md:mx-auto">
            <div>
              <Link to="/" className="text-5xl font-bold stroke md:text-8xl">
                <h1>Home</h1>
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                className="text-5xl font-bold stroke md:text-8xl"
              >
                <h1>About</h1>
              </Link>
            </div>
            <div>
              <Link
                to="/blog"
                className="text-5xl font-bold stroke md:text-8xl"
              >
                <h1>Blog</h1>
              </Link>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mx-auto space-x-6 md:-ml-1">
            <div className="p-4 text-center bg-gray-200 rounded-full">
              <InstagramIcon />
            </div>
            <div className="p-4 text-center bg-gray-200 rounded-full">
              <YouTubeIcon />
            </div>
            <div className="p-4 text-center bg-gray-200 rounded-full">
              <FaceBookIcon />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mx-auto border-t md:border-0 border-gray-200">
          <div className="space-y-4">
            {hasSubmitted && (
              <div className="bg-green-500 p-4 rounded-lg text-white">
                Action was Successful. We will get back to you
              </div>
            )}
            <h4 className="text-xl md:text-2xl mt-8 md:mt-0 font-bold text-left text-white md:text-left ">
              Get in touch
            </h4>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div>
                <p className="text-white">Name</p>
                <input
                  required
                  type="text"
                  ref={nameRef}
                  className="p-4 text-white placeholder-gray-200 bg-black border rounded w-[300px] md:w-[400px] lg:w-[500px] hover:bg-gray-900"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <p className="text-white">Email</p>
                <input
                  required
                  type="email"
                  ref={emailRef}
                  className="p-4 text-white placeholder-gray-200 bg-black border rounded w-[300px] md:w-[400px] lg:w-[500px] hover:bg-gray-900"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <p className="text-white">Message</p>
                <textarea
                  required
                  type="text"
                  ref={messageRef}
                  className="p-4 text-white placeholder-gray-200 bg-black border rounded w-[300px] md:w-[400px] lg:w-[500px] hover:bg-gray-900 h-32"
                  placeholder="Enter Your Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-4 transition bg-white rounded text-dark hover:-translate-y-1"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
