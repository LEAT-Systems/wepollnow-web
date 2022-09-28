import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FaceBookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {/* Top Navigation */}
      <div
        className={`container flex flex-row items-center justify-between px-12 py-8 mx-auto border-b border-gray-200`}
      >
        <Link to="/">
          <p className="text-4xl font-bold ">
            <span className="text-gray-400">Poll</span>it
          </p>
        </Link>
        {/* <Link to="/test">TEST</Link> */}
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
            : "flex flex-col md:flex-row items-start justify-start py-12 bg-black mx-auto space-y-12"
        }
      >
        <div className="flex flex-col items-center justify-center mx-auto space-y-8 md:mx-0 md:px-48">
          <div className="space-y-8 text-center md:text-left md:mt-10">
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
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold text-center text-white md:text-left ">
              Get in touch
            </h4>
            <form className="space-y-2">
              <div>
                <p className="text-white">Name</p>
                <input
                  className="p-4 text-white placeholder-gray-200 bg-black border rounded w-[400px] lg:w-[500px] hover:bg-gray-900"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <p className="text-white">Email</p>
                <input
                  className="p-4 text-white placeholder-gray-200 bg-black border rounded w-[400px] lg:w-[500px] hover:bg-gray-900"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <p className="text-white">Message</p>
                <textarea
                  className="p-4 text-white placeholder-gray-200 bg-black border rounded w-[400px] lg:w-[500px] hover:bg-gray-900 h-32"
                  placeholder="Enter Your Message"
                />
              </div>
              <div>
                <button className="w-full p-4 transition bg-white rounded text-dark hover:-translate-y-1">
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
