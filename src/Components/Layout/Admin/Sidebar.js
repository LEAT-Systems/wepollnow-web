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


/* 


import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;







// Nav styles 
nav {
  // Display the nav as a side nav on larger screens
  display: flex;
  flex-direction: column;
  width: 200px;

  // Hide the nav on smaller screens 
  @media (max-width: 600px) {
    display: none;
  }
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  // Style the nav items 
  color: white;
  background-color: black;
  padding: 10px;
}

// Menu bar styles
.menu-bar {
  // Display the menu bar as a top nav on smaller screens 
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 10px;
  }
}

.menu-bar .menu-bar-items {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-bar .menu-bar-items li {
  // Style the menu bar items
  color: white;
  padding: 10px;
}

.menu-bar .menu-button {
  // Style the menu button 
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  padding: 10px;
}














*/