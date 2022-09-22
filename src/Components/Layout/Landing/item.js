import React from "react";
import Badge from "../../../UI/Badge";
import SwipeDownIcon from "@mui/icons-material/SwipeDown";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../../../UI/Loading";
import DoneComponent from "../../../UI/Done";
const Timer = React.lazy(() => import("../../../UI/Timer"));
//
const controls = (
  <div className="absolute z-10 flex flex-col items-center justify-center space-y-4 px-4 md:px-12 lg:px-24 mt-24 ">
    <div className="p-2 bg-blue-400 rounded-full animate-ping mx-auto">
      <SwipeDownIcon />
    </div>
    <div className="space-y-4 flex flex-col">
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
      <NavLink activeClassName="active" to="/getting-started-three">
        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-gray-200 rounded-full focus:shadow-outline hover:bg-blue-400">
          3
        </button>
      </NavLink>
    </div>
  </div>
);

export const Item1 = (
  <div className="relative flex flex-col">
    {controls}
    <div className="relative flex flex-col items-center justify-center space-y-8">
      <p className="font-bold">Gubernatorial Poll</p>
      <Badge>12 November, 2022</Badge>
      <Timer />
      <div>
        <p className="max-w-xs md:max-w-md text-center">
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
    {controls}
    <div className="relative flex flex-col items-center justify-center space-y-4">
      <p className="font-bold">Presidential Poll</p>
      <Badge>12 November, 2022</Badge>
      <div className="flex flex-row items-center justify-center">
        <h2 className="max-w-4xl font-bold text-5xl text-center p-8">
          Let's change the narrative.
          <br /> Make your vote count.
        </h2>
      </div>
      <div className="md:pt-8">
        <Link
          to="/getting-started-three"
          className="w-full p-4 bg-gray-900 text-white rounded-xl px-8"
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
    <div className="flex flex-col items-center justify-center mx-auto min-h-screen space-y-4">
      <div>{<Loading />}</div>
      <div className="flex flex-col space-y-2">
        <h2 className="max-w-3xl font-bold text-5xl text-center">
          Staging the registration area.
        </h2>
        <h2 className="max-w-3xl font-bold text-5xl text-center">
          This will take a few minutes.
        </h2>
      </div>
    </div>
  </>
);

export const Item4 = (
  <>
    <div className="flex flex-col items-center justify-center mx-auto min-h-screen space-y-2">
      <div>{<DoneComponent />}</div>
      <div className="">
        <h2 className="max-w-4xl font-bold text-5xl text-center p-8">
          Registration Area ready. <br />
          Kindly Proceed.
        </h2>
      </div>
      <div>
        <Link to="/test">
          <button className="w-full p-4 bg-blue-600 rounded-xl px-8 text-white">
            Let's Proceed
          </button>
        </Link>
      </div>
    </div>
  </>
);
