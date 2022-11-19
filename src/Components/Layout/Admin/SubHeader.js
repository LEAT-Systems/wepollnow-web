/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const SubHeader = ({ data }) => {
  return (
    <header className='flex items-center border-b w-full'>
      <ul>
        {data.map(({ id, route, linkText }) => {
          return (
            <li
              className='font-bold text-[#082b0e] inline-block p-4 mr-1 relative'
              key={id}
            >
              <NavLink
                to={route}
                activeClassName='bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
              >
                {linkText}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default SubHeader;

{
  /* 
<li className='font-bold text-[#082b0e] inline-block p-5 mr-1 relative'>
  <NavLink
    to='/admin/manageAdmin'
    activeClassName='bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
  >
    Admins
  </NavLink>
</li>
<li className='font-bold text-[#082b0e] inline-block p-5 ml-1 relative'>
  <NavLink
    to='/admin/password'
    activeClassName='bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
  >
    Password
    </NavLink>
  </li> */
}
