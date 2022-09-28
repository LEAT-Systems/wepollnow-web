import React, { useState } from "react";
import Badge from "../../../UI/Badge";
import SwipeDownIcon from "@mui/icons-material/SwipeDown";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import loading from "../../../images/loading.gif";
import DoneComponent from "../../../UI/Done";
import { countDownDate } from "../../../UI/MagicVars";
const Timer = React.lazy(() => import("../../../UI/Timer"));
//

const Controls = () => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <div className="absolute z-10 flex flex-col items-center justify-center px-4 mt-24 space-y-4 md:px-12 lg:px-24">
        <div className="p-2 mx-auto bg-blue-400 rounded-full animate-ping">
          <SwipeDownIcon />
        </div>
        <div className="flex flex-col space-y-4">
          <NavLink activeClassName="active" to="/getting-started-one">
            <button className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-gray-200 rounded-full focus:shadow-outline hover:bg-blue-400">
              1
            </button>
          </NavLink>
          <NavLink activeClassName="active" to="/getting-started-two">
            <button className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-gray-200 rounded-full focus:shadow-outline hover:bg-blue-400">
              2
            </button>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/getting-started-three"
            onMouseEnter={() => setTooltipStatus(2)}
            onMouseLeave={() => setTooltipStatus(0)}
          >
            <button className="relative inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-gray-200 rounded-full text-dark focus:shadow-outline hover:bg-blue-400 hover:text-white">
              3
            </button>
          </NavLink>
          {tooltipStatus === 2 && (
            <div
              role="tooltip"
              className="absolute left-0 z-20 w-56 p-4 ml-8 -mt-20 text-center text-white transition duration-150 ease-in-out bg-blue-400 rounded shadow-lg"
            >
              <p className="pb-1 text-sm font-bold">
                Click this button to register
              </p>
              <p className="pb-3 text-xs leading-4 ">
                You have to register before you can cast your vote.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const Item1 = (
  <div className="relative flex flex-col">
    {<Controls />}
    <div className="relative flex flex-col items-center justify-center space-y-8">
      <p className="font-bold">Gubernatorial Poll</p>
      <Badge>{countDownDate}</Badge>
      <Timer />
      <div>
        <p className="max-w-xs text-center md:max-w-md">
          We would love to keep you informed as the date draws closer
        </p>
      </div>
      <div className="relative text-gray-700">
        <input
          className="w-[300px] md:w-[500px] pl-4 h-10 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder="Enter Email Address"
        />
        <button className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-gray-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">
          Notify Me
        </button>
      </div>
      <div className="absolute hidden lg:flex flex-col items-start justify-center ml-[1200px] space-y-4 md:pt-[100px]">
        <div className="p-2 bg-gray-600 rounded"></div>
        <div className="flex flex-col items-center justify-center px-1 space-y-4">
          <span className="inline-block w-2 h-2 mr-2 bg-black rounded-full"></span>
          <span className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"></span>
          <span className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"></span>
        </div>
        <div className="p-2 bg-gray-600 rounded"></div>
      </div>
    </div>

    <div className="flex flex-row items-center justify-center md:-mt-2 ">
      <h1 className="text-8xl text-center md:text-[200px] lg:text-[350px] font-bold text-gray-300 md:ml-8">
        POLLIT
      </h1>
    </div>
  </div>
);

export const Item2 = (
  <div className="relative flex flex-col">
    {<Controls />}
    <div className="relative flex flex-col items-center justify-center space-y-4">
      <p className="font-bold">Presidential Poll</p>
      <Badge>{countDownDate}</Badge>
      <div className="flex flex-row items-center justify-center">
        <h2 className="max-w-4xl p-8 text-5xl font-bold text-center">
          Let's change the narrative.
          <br /> Make your vote count.
        </h2>
      </div>
      <div className="md:pt-8">
        <Link
          to="/getting-started-three"
          className="w-full p-4 px-8 text-white bg-gray-900 rounded-xl"
        >
          Vote Now
        </Link>
      </div>

      <div className="absolute hidden lg:flex flex-col items-start justify-center ml-[1200px] space-y-4 md:pt-[100px]">
        <div className="p-2 bg-gray-600 rounded"></div>
        <div className="flex flex-col items-center justify-center px-1 space-y-4">
          <span className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"></span>
          <span className="inline-block w-2 h-2 mr-2 bg-black rounded-full"></span>
          <span className="inline-block w-2 h-2 mr-2 bg-gray-200 rounded-full"></span>
        </div>
        <div className="p-2 bg-gray-600 rounded"></div>
      </div>
    </div>

    <div className="flex flex-row items-center justify-center mt-4">
      <h1 className="text-8xl text-center md:text-[200px] lg:text-[350px] font-bold text-gray-300 md:ml-8">
        POLLIT
      </h1>
    </div>
  </div>
);

export const Item3 = (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto space-y-4">
      <div>{<img src={loading} className="w-56 h-56" alt="loading" />}</div>
      <div className="flex flex-col space-y-4">
        <h2 className="max-w-3xl text-5xl font-bold text-center">
          Preparing the registration area...
          <br />
          This will take a few minutes...
        </h2>
      </div>
    </div>
  </>
);

export const Item4 = (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto space-y-2">
      <div>{<DoneComponent />}</div>
      <div className="">
        <h2 className="max-w-4xl p-8 text-5xl font-bold text-center">
          Registration Area ready. <br />
          Kindly Proceed.
        </h2>
      </div>
      <div>
        <Link to="/register">
          <button className="w-full p-4 px-8 text-white bg-blue-600 rounded-xl">
            Let's Proceed
          </button>
        </Link>
      </div>
    </div>
  </>
);
