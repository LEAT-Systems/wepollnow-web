import React from "react";
import Nav from "../Components/Layout/Landing/mainNav";
import backarrow from "../images/backArrow.png";
import image from "../images/blankImg.png";
import avatar from "../images/avartar.png";
import anchor from "../images/anchor.png";
import calendar from "../images/calendar.png";
import eye from "../images/eye.png";
import time from "../images/time.png";

const Test = () => (
  <>
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center justify-between">
        <nav className="inline-flex -space-x-px rounded-md shadow-sm isolate">
          <button className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-black border border-[#08c127] bg-green-50 focus:z-20">
            1
          </button>
        </nav>
      </div>
    </div>
  </>
);

export default Test;
