import React from "react";
import SwipeDownIcon from "@mui/icons-material/SwipeDown";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/Facebook";
import { Tooltip } from "@mui/material";

//
const Socials = () => {
  return (
    <>
      <div className="absolute z-10 hidden md:flex flex-col items-center justify-center px-4 mt-24 space-y-4 md:px-12 lg:px-24">
        <div className="flex flex-col space-y-4 text-[#707070]">
          <a href="https://instagram.com/wepollnow">
            <Instagram />
          </a>
          <a href="https://youtube.com/wepollnow">
            <YouTube />
          </a>
          <a href="https://facebook.com/wepollnow">
            <Facebook />
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
