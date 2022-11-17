import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from './assets/grid-5@2x-1.png'
import PollIcon from './assets/chart-2@2x.png'
import SurveyIcon from './assets/note@2x-1.png'
import AccountIcon from './assets/profile-circle@2x.png';
import BlogIcon from './assets/document-text@2x-1.png';

//
const SideBar = () => {
  return (
    <div className='hidden lg:flex flex-col w-[82px] h-screen bg-deepgray border-r border-gray-200 space-y-8 fixed'>
      {/*  */}
      <NavLink to='/dashboard/home' activeClassName='active'>
        <div className='flex flex-col items-center justify-center mt-4'>
          <div className='rounded-md'>
            <img
              src={HomeIcon}
              alt='Account'
              className='w-[1.5rem] h-[1.5rem] sidebar-icons'
            />
          </div>
          <p className='font-semibold text-sm text-white'>Home</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to='/dashboard/polls'>
        <div className='flex flex-col items-center justify-center transition duration-700 ease-in-out'>
          <div className='rounded-md'>
            <img
              src={PollIcon}
              alt='Account'
              className='w-[1.5rem] h-[1.5rem] sidebar-icons'
            />
          </div>
          <p className='font-semibold text-sm text-white'>Polls</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to='/dashboard/surveys'>
        <div className='flex flex-col items-center justify-center transition duration-700 ease-in-out'>
          <div className='rounded-md'>
            <img
              src={SurveyIcon}
              alt='Account'
              className='w-[1.5rem] h-[1.5rem] sidebar-icons'
            />
          </div>
          <p className='font-semibold text-sm text-white'>Surveys</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to='/dashboard/account'>
        <div className='flex flex-col items-center justify-center transition duration-700 ease-in-out'>
          <div className='rounded-md'>
            <img
              src={AccountIcon}
              alt='Account'
              className='w-[1.6rem] h-[1.6rem] sidebar-icons'
            />
          </div>
          <p className='font-semibold text-sm text-white'>Account</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
