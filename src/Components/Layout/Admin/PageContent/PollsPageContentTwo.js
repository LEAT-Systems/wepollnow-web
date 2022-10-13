import React, { useEffect } from "react";
import { useState } from "react";
import Tables from "../Components/Tables";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

//
//
//
const PollsPageContentTwo = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between p-6 pt-4">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">Polls Result</h2>
          <div className="relative flex flex-row items-center justify-start px-2 space-x-2 border border-yellow-500 rounded">
            <Link to="/wepollnow/polls">
              <p className="font-bold text-gray-300">Manage Polls</p>
            </Link>
            <NavigateNextIcon />
            <p className="font-bold">Polls Result</p>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <form>
            <input
              className="p-2 border-b border-gray-200 fontAwesome"
              placeholder="&#xf002; Search"
            />
          </form>
          <div className="flex flex-row space-x-1">
            <div className="p-2 bg-gray-200 rounded-full"></div>
            <div className="p-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start justify-between w-full p-8 mx-auto -mt-6 space-x-12">
        <div className="flex flex-col items-start justify-center w-1/3 h-[150px] space-y-2 bg-yellow-500 rounded-lg shadow-2xl">
          <div className="flex flex-col items-start justify-start px-3 space-y-3">
            <div>
              <p className="font-bold text-md">Presidential Poll</p>
              <p className="text-xs">National</p>
            </div>

            <div className="flex flex-row items-center justify-center space-x-1">
              <CalendarMonth fontSize="small" />
              <p>23/07/2022</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-xs">Concluded</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-1/3 h-[150px] space-y-2 bg-green-500 rounded-lg shadow-2xl">
          <div className="flex flex-row items-center justify-center px-3 space-x-3">
            <div className="p-2 bg-white rounded-lg">
              <PeopleOutlineIcon fontSize="large" />
            </div>
            <div className="flex flex-col items-start justify-start ">
              <p className="text-2xl font-bold">709,346 </p>
              <p className="text-xs">Total Votes</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-1/3 h-[150px] space-y-2 bg-transparent-800 rounded-lg shadow-2xl">
          <div></div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <p className="text-xs">Labour Party - 60%</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <p className="text-xs">All Progressive Congress (APC) - 20%</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <p className="text-xs">Peoples Democratic Party (PDP) - 20%</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <p className="text-xs">Others - 20%</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===============   Data Table ========================*/}

      <div className="px-6">
        <div className="flex flex-col p-4 border rounded-lg">
          <div className="flex flex-row items-center justify-between p-2">
            <p>Presidential Poll Result</p>
            <div className="flex flex-row space-x-4">
              <div className="p-2 border rounded-md">
                <p>Total: 72 </p>
              </div>
              <div className=""></div>
              <div className="p-4 bg-gray-200 rounded"></div>
            </div>
          </div>
          <Tables />
        </div>
      </div>
    </>
  );
};

export default PollsPageContentTwo;
