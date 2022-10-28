import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigateNext from "@mui/icons-material/NavigateNext";
import Header from "../Components/Header";

const SurveyContent = () => {
  return (
    <>
      <Header />
      <div className='flex flex-row'>
        <div className='flex flex-col p-8 space-y-2'>
          <h2 className='text-2xl font-bold'>Survey</h2>
          <div className='relative flex flex-row items-center justify-start px-2 space-x-2 border border-yellow-500 rounded'>
            <Link to='/wepollnow/surveys'>
              <p className='font-bold'>Survey</p>
            </Link>
            <NavigateNext />
            <Link to='/wepollnow/surveys/manageSurvey'>
              <p className='font-bold text-gray-300'>Manage Survey</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between w-full p-8 mx-auto -mt-6 space-x-12'></div>
      <div className='w-full px-8'></div>
    </>
  );
};

export default SurveyContent;
