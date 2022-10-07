import React from "react";
import { Link } from "react-router-dom";
import FaceBookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/YouTube";

const copy = <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />;
const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-[#2D2D2D] py-16 md:py-[75px] px-8 md:px-[100px] mt-12">
        <Link to="/">
          <p className="text-xl font-bold text-gray-400 logo">
            <span className="text-white">Wepoll</span>Now
          </p>
        </Link>
        <div className="hidden md:flex flex-row items-center justify-center  md:space-x-8 space-y-2 text-white mx-auto">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="about">
            <p>About</p>
          </Link>
          <Link to="/blog">
            <p>Blog</p>
          </Link>
          <Link to="/polls">
            <p>Polls</p>
          </Link>
        </div>

        {/* Mobile footer */}
        <div className="flex md:hidden flex-row items-center justify-center mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center  space-x-2  text-white mx-auto">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="about">
              <p>About</p>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center  space-x-2  text-white mx-auto">
            <Link to="/blog">
              <p>Blog</p>
            </Link>
            <Link to="/polls">
              <p>Polls</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-y-2 mx-auto md:space-x-6 text-[#C0C0C0]">
          <a href="www.twitter.com/wepollnow">
            <TwitterIcon />
          </a>
          <a href="www.instagram.com/wepollnow">
            <InstagramIcon />
          </a>
          <a href="www.facebook.com/wepollnow">
            <FaceBookIcon />
          </a>
          <div>
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-black py-8 px-12 text-white">
        <p className="text-center">
          WepollNow copyright {copy} 2022. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
