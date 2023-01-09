import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "@mui/material";
import { Slide } from "@mui/material";
import FaceBookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import logo from "../../../images/logo_white.png";
import Close from "../../../images/closeCredits.png";
import exportIcon from "../../../images/export.png";

const copy = <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />;
const Footer = () => {
  const [open, setOpen] = useState(false);

  const modalContent = (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 mx-auto space-y-4 md:px-0">
        <div className="flex flex-col justify-center w-full p-4 space-y-6 bg-white rounded-lg md:w-1/3 ">
          <div className="flex flex-row items-center justify-between p-4 bg-[#2C2123] rounded-lg">
            <p className="text-white">Credits</p>
            <button type="button" onClick={() => setOpen(false)}>
              <img src={Close} alt="close" />
            </button>
          </div>
          <div className="flex flex-col items-start justify-start space-y-2 bg-[#ffedf1] p-4 rounded-lg">
            <div>
              <a
                className="flex flex-row items-center space-x-2"
                target="_blank"
                href="https://www.freepik.com/free-photo/cropped-shot-pleased-female-copywriter-reads-positive-information-smart-phone-sits-front-opened-laptop-computer-drinks-aromatic-coffee_9591287.htm#query=african%20person%20reading&position=12&from_view=search&track=sph"
              >
                <p className="text-[16px] font-normal underline underline-offset-4">
                  Image by DCStudio on Freepik
                </p>
                <img src={exportIcon} className="w-4 h-4" alt="exportIcon" />
              </a>
            </div>
            <div>
              <a
                className="flex flex-row items-center justify-center justify"
                target="_blank"
                href="https://www.freepik.com/free-photo/team-business-people-collaborating-plan-financial-strategy-doing-teamwork-create-sales-report-laptop-office-employees-working-project-strategy-analyze-career-growth_24732590.htm#query=black%20people%20having%20meeting&position=24&from_view=search&track=ais"
              >
                <p className="text-[16px] font-normal underline underline-offset-4">
                  Image by wayhomestudio on Freepik
                </p>
                <img src={exportIcon} className="w-4 h-4" alt="exportIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );

  return (
    <>
      <Modal open={open} children={modalContent} />
      <div className="flex space-y-12 md:space-y-0 flex-col md:flex-row items-center justify-between bg-[#0A290F] py-16 md:py-[75px] px-8 md:px-[100px]">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex flex-row items-center justify-center space-x-12 text-white md:space-y-0">
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
        <div className="flex flex-row items-start justify-center space-x-8 md:space-x-8 md:space-y-0 text-[#C0C0C0]">
          <a
            href="https://instagram.com/wepollnow"
            className="flex flex-row space-x-2"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com/wepollnow"
            className="flex flex-row space-x-2"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#08C127] py-8 px-12 md:px-[100px] text-white">
        <p className="text-center">
          WepollNow {copy} 2022. All rights reserved.
        </p>
        <button onClick={() => setOpen(true)}>
          <p className="underline underline-offset-4">Credits</p>
        </button>
      </div>
    </>
  );
};

export default Footer;
