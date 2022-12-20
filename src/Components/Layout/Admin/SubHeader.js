import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AccountHeader = ({ data }) => {
  const [isActive, setIsActive] = useState("Admins");

  return (
    <header className='flex items-center border-b w-full'>
      <ul>
        <li
          className='font-bold text-[#082b0e] inline-block p-4 mr-1 relative'
          onClick={() => {
            setIsActive("Admins");
          }}
        >
          <NavLink
            to={"/admin/account/settings"}
            activeClassName={
              isActive === "Admins"
                ? 'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
                : "null"
            }
          >
            Admins
          </NavLink>
        </li>
        <li
          className='font-bold text-[#082b0e] inline-block p-4 mr-1 relative'
          onClick={() => {
            setIsActive("Password");
          }}
        >
          <NavLink
            to={"/admin/account/managePassword"}
            activeClassName={
              isActive === "Password"
                ? 'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
                : "null"
            }
          >
            Password
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

const PollHeader = () => {
  const [pollSubNav, setPollSubNav] = useState("Polls");

  return (
    <header className='flex items-center border-b w-full'>
      <ul>
        <li
          className='font-bold text-[#082b0e] inline-block p-4 mr-1 relative'
          onClick={() => {
            setPollSubNav("Polls");
          }}
        >
          <NavLink
            to='/admin/polls/polls'
            activeClassName={
              pollSubNav === "Polls"
                ? 'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
                : "null"
            }
          >
            Polls
          </NavLink>
        </li>
        <li
          className='font-bold text-[#082b0e] inline-block p-4 mr-1 relative'
          onClick={() => {
            setPollSubNav("Candidates");
          }}
        >
          <NavLink
            to='/admin/polls/candidates'
            activeClassName={
              pollSubNav === "Candidates"
                ? 'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
                : "null"
            }
          >
            Candidates
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export { PollHeader, AccountHeader };

/* 

{data.map(({ id, route, linkText }) => {
          return (
            <li
              className='font-bold text-[#082b0e] inline-block p-4 mr-1 relative'
              key={id}
            >
              <NavLink
                to={route}
                className={
                  isActive === linkText
                    ? 'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
                    : "null"
                }
                onClick={handleClick(linkText)}
              >
                {linkText}
              </NavLink>
            </li>
          );
        })}

*/
