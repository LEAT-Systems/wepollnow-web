import React from "react";
import { Link } from "react-router-dom";
import FaceBookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import logo from "../../../images/logo_white.png";

const copy = <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />;
const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-[#2C2123] py-16 md:py-[75px] px-8 md:px-[100px] mt-12">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white">
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
        <div className="flex flex-col md:flex-row items-start justify-center space-y-2 md:space-y-0 md:space-x-6 text-[#C0C0C0]">
          <a
            href="https://twitter.com/wepollnow"
            className="flex flex-row space-x-2"
          >
            <TwitterIcon />
            <span>Twitter</span>
          </a>
          <a
            href="https://instagram.com/wepollnow"
            className="flex flex-row space-x-2"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com/wepollnow"
            className="flex flex-row space-x-2"
          >
            <FaceBookIcon />
            <span>Facebook</span>
          </a>
          <a
            href="https://linkedin.com/wepollnow"
            className="flex flex-row space-x-2"
          >
            <LinkedinIcon />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-[#E2345A] py-8 px-12 text-white">
        <p>WepollNow copyright {copy} 2022. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
