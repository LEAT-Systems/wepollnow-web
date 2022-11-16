import React from "react";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

//
const SideBar = () => {
  return (
    <div className='hidden lg:flex flex-col w-[82px] h-screen bg-deepgray border-r border-gray-200 space-y-8 fixed'>
      {/*  */}
      <NavLink to='/dashboard/home' activeClassName='active'>
        <div className='flex flex-col items-center justify-center mt-4'>
          <div className='rounded-md'>
            <AutoAwesomeMosaicIcon className='sidebar-icons' />
          </div>
          <p className='font-semibold text-sm text-white'>Home</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to='/dashboard/polls'>
        <div className='flex flex-col items-center justify-center transition duration-700 ease-in-out'>
          <div className='rounded-md'>
            <AssessmentIcon className='sidebar-icons' />
          </div>
          <p className='font-semibold text-sm text-white'>Polls</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to='/dashboard/surveys'>
        <div className='flex flex-col items-center justify-center transition duration-700 ease-in-out'>
          <div className='rounded-md'>
            <AssignmentIcon className='sidebar-icons' />
          </div>
          <p className='font-semibold text-sm text-white'>Surveys</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to='/dashboard/account'>
        <div className='flex flex-col items-center justify-center transition duration-700 ease-in-out'>
          <div className='rounded-md'>
            <AccountCircleIcon className='sidebar-icons' />
          </div>
          <p className='font-semibold text-sm text-white'>Account</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
