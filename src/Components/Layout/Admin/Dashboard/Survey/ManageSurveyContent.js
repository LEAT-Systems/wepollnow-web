import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ManageSurveyContent = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col p-8 space-y-2">
          <h2 className="text-2xl font-bold">Manage Survey</h2>
          <div className="relative flex flex-row items-center justify-start px-2 space-x-2 border border-yellow-500 rounded">
            <Link to="/wepollnow/surveys">
              <p className="font-bold">Manage Survey</p>
            </Link>
            <NavigateNextIcon />
            <Link to="/wepollnow/surveys">
              <p className="font-bold text-gray-300"> Survey</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full px-8 mx-auto space-y-4 md:space-y-0 md:space-x-12 md:flex-row">
        <div className="flex flex-col items-center justify-center w-full px-8 py-8 space-y-4 border-4 border-green-600 rounded md:w-2/4">
          <div className="flex flex-row items-center justify-between w-full p-4 border border-black rounded">
            <p>Education</p>
            <button className="bg-red-500 rounded ">
              <RemoveIcon sx={{ color: "white" }} />
            </button>
          </div>
          <div className="flex flex-row items-center justify-between w-full p-4 border border-black rounded">
            <p>Transportation</p>
            <button className="bg-red-500 rounded ">
              <RemoveIcon sx={{ color: "white" }} />
            </button>
          </div>
          <div className="flex flex-row items-center justify-between w-full p-4 border border-black rounded">
            <p>Security</p>
            <button className="bg-red-500 rounded ">
              <RemoveIcon sx={{ color: "white" }} />
            </button>
          </div>
          <div className="flex flex-row items-center justify-between w-full p-4 border border-black rounded">
            <p>Finance and Economy</p>
            <button className="bg-red-500 rounded ">
              <RemoveIcon sx={{ color: "white" }} />
            </button>
          </div>
        </div>

        {/* Add new survey */}
        <div className="flex flex-col items-center justify-center w-full md:w-2/4 border-yellow-500 border-4 h-[330px] md:px-4">
          <div className="flex flex-col items-center justify-center w-full p-6 space-y-8">
            <textarea
              required
              type="text"
              className="w-full h-48 p-4 text-black placeholder-black border border-gray-200 rounded"
              placeholder="Add New Survey (Let it be as short as possible...)"
            />
            <button className="w-full p-3 font-bold text-white rounded-md bg-gradient-to-r from-green-600 to-yellow-600 animate">
              Add New Survey
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageSurveyContent;
