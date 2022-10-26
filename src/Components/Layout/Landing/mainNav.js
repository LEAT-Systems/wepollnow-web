import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import facebook from "../../../images/navIcons/Facebook.png";
import instagram from "../../../images/navIcons/IG.png";
import youtube from "../../../images/navIcons/YouTube.png";

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
      {/*=======================   Top Navigation ============================*/}

      <div
        className={`flex flex-row items-center justify-between px-4 md:px-24 border-b border-gray-200  py-8 mx-auto  bg-[#${props.bg}] bg-${props.bgImg} `}
      >
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="relative z-30">
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

      {/* =======================  Collapsible Nav ============================*/}

      <div
        className={
          !show
            ? "hidden"
            : "flex relative z-30 flex-col md:flex-row items-start justify-start md:items-center md:justify-center py-12 bg-black mx-auto space-y-12"
        }
      >
        <div className="flex flex-col items-start justify-start md:items-center px-4 md:justify-center mx-auto space-y-8 md:mx-0 md:px-36">
          <div className="space-y-8 text-start md:text-left md:mt-10 md:mx-auto">
            <div>
              <Link to="/" className="text-4xl font-bold stroke md:text-7xl">
                <h1>Home</h1>
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                className="text-4xl font-bold stroke md:text-7xl"
              >
                <h1>About</h1>
              </Link>
            </div>
            <div>
              <Link
                to="/blog"
                className="text-4xl font-bold stroke md:text-7xl"
              >
                <h1>Blog</h1>
              </Link>
            </div>
            <div>
              <Link
                to="/polls"
                className="text-4xl font-bold stroke md:text-7xl"
              >
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

        <div className="flex flex-col items-center justify-center mx-auto border-t w-[65%] border-gray-200 md:border-0">
          <div className="space-y-4 w-[100%] md:w-[65%]">
            {hasSubmitted && (
              <div className="p-4 text-white bg-green-500 rounded-lg">
                Action was Successful. We will get back to you
              </div>
            )}
            <p className="mt-8 text-lg font-bold text-left text-white md:text-xl md:mt-0 md:text-left ">
              Get in touch
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <p className="text-white">Name</p>
                <input
                  required
                  type="text"
                  ref={nameRef}
                  className="input w-full p-4 text-white placeholder-gray-200 bg-black border rounded hover:bg-gray-900"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <p className="text-white">Email</p>
                <input
                  required
                  type="email"
                  ref={emailRef}
                  className="input w-full p-4 text-white placeholder-gray-200 bg-black border rounded hover:bg-gray-900"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <p className="text-white">Message</p>
                <textarea
                  required
                  type="text"
                  ref={messageRef}
                  className="input w-full h-32 p-4 text-white placeholder-gray-200 bg-black border rounded hover:bg-gray-900"
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
