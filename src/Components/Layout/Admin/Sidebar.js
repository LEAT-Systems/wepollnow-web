/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "./assets/grid-5@2x-1.png";
import PollIcon from "./assets/chart-2@2x-1.png";
import SurveyIcon from "./assets/note@2x-1.png";
import AccountIcon from "./assets/profile-circle@2x-1.png";
import AccountIcon2 from "./assets/profile-circle@2x.png";
import BlogIcon from "./assets/document-text@2x-1.png";

const SideBar = () => {
  return (
    <div className="hidden lg:flex flex-col w-[89px] h-screen bg-deepgray border-r border-gray-200 fixed pt-20">
      {/*  */}
      <NavLink to="/admin/home" activeClassName="active" className="py-3">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-md">
            <img
              src={HomeIcon}
              alt="Account"
              className="w-[1.3rem] h-[1.3rem] sidebar-icons"
            />
          </div>
          <p className="text-[0.76rem] pt-1 text-white">Home</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to='/admin/polls/' className='py-3'>
        <div className='flex flex-col items-center justify-center transition duration-700 ease-in-out'>
          <div className='rounded-md'>
            <img
              src={PollIcon}
              alt="Account"
              className="w-[1.3rem] h-[1.3rem] sidebar-icons"
            />
          </div>
          <p className="text-[0.76rem] pt-1 text-white">Polls</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to="/admin/surveys" className="py-3">
        <div className="flex flex-col items-center justify-center transition duration-700 ease-in-out">
          <div className="rounded-md">
            <img
              src={SurveyIcon}
              alt="Account"
              className="w-[1.3rem] h-[1.3rem] sidebar-icons"
            />
          </div>
          <p className="text-[0.76rem] pt-1 text-white">Surveys</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to="/admin/blog" className="py-3">
        <div className="flex flex-col items-center justify-center transition duration-700 ease-in-out">
          <div className="rounded-md">
            <img
              src={BlogIcon}
              alt="Account"
              className="w-[1.3rem] h-[1.3rem] sidebar-icons"
            />
          </div>
          <p className="text-[0.76rem] pt-1 text-white">Blog</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to="/admin/account" className="py-3">
        <div className="flex flex-col items-center justify-center transition duration-700 ease-in-out">
          <div className="rounded-md">
            <img
              src={AccountIcon}
              alt="Account"
              className="w-[1.6rem] h-[1.6rem] sidebar-icons"
            />
          </div>
          <p className="text-[0.76rem] pt-1 text-white">Account</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
