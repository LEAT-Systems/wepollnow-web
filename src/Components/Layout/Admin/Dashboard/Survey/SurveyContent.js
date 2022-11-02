/** @format */

import { BorderColorOutlined, Tune } from "@mui/icons-material";
import React from "react";
import Header from "../../Header";
import Progress from "./Progress";


const SurveyContent = () => {
  return (
    <>
      <Header />
      <main className='px-4 md:px-6 lg:px-12 my-4'>
        <header className='flex flex-row justify-between py-4 w-full'>
          <div>
            <h2 className='font-extrabold text-2xl text-[#082a0f] capitalize'>
              survey
            </h2>
          </div>

          <nav className='pl-3 h-full my-auto flex text-gray-500'>
            <span className='border border-1 flex rounded-xl items-center justify-center py-2 px-3 cursor-pointer text-sm md:text-base h-full mr-3'>
              <Tune />
            </span>
            <button className='flex items-center justify-center py-2 px-3 border border-gray-200 rounded-xl cursor-pointer text-sm md:text-base my-auto'>
              Edit
              <BorderColorOutlined
                sx={{
                  fontSize: "1rem",
                  margin: "auto auto auto 0.4rem",
                }}
              />
            </button>
          </nav>
        </header>

        <div className='block text-[#082a0f]'>
          <h4 className='text-lg font-medium leading-10 mb-3'>
            How users responded to issues that are most important to them.
          </h4>

          <div className='border border-gray-200 px-6 py-6'>
            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Transportation
                </h3>
              </div>

              <Progress percentage='67' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Education
                </h3>
              </div>

              <Progress percentage='73' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Security
                </h3>
              </div>

              <Progress percentage='65' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Finance & Economy
                </h3>
              </div>

              <Progress percentage='90' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>Others</h3>
              </div>

              <Progress percentage='55' />
            </div>
          </div>
        </div>

      </main>
    </>
  );
};

export default SurveyContent;

/* 
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
       */
