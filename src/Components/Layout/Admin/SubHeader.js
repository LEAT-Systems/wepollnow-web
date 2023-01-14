import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

const AccountHeader = ({ data }) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/admin/account") {
      history.push("/admin/account/settings");
    }

    if (location.pathname === "/admin/account/") {
      history.push("/admin/account/settings");
    }
  }, [history, location.pathname]);

  const activeClass =
    'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]';
  return (
    <header className="flex items-center w-full border-b">
      <ul>
        <li className="font-bold text-[#082b0e] inline-block p-4 mr-1 relative">
          <NavLink
            to="/admin/account/settings"
            activeClassName={
              location.pathname === "/admin/account/settings"
                ? activeClass
                : location.pathname === "/admin/account"
                ? activeClass
                : "null"
            }
          >
            Admins
          </NavLink>
        </li>
        <li className="font-bold text-[#082b0e] inline-block p-4 mr-1 relative">
          <NavLink
            to={"/admin/account/managePassword"}
            activeClassName={
              location.pathname === "/admin/account/managePassword"
                ? activeClass
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
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/admin/polls/") {
      history.push("/admin/polls/polls");
    }

    if (location.pathname === "/admin/polls") {
      history.push("/admin/polls/polls");
    }
  }, [history, location.pathname]);

  const activeClass =
    'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]';
  return (
    <header className="flex items-center w-full border-b">
      <ul>
        <li className="font-bold text-[#082b0e] inline-block p-4 mr-1 relative">
          <NavLink
            to="/admin/polls/polls"
            activeClassName={
              location.pathname === "/admin/polls/polls"
                ? activeClass
                : location.pathname === "/admin/polls/"
                ? activeClass
                : "null"
            }
          >
            Polls
          </NavLink>
        </li>
        <li className="font-bold text-[#082b0e] inline-block p-4 mr-1 relative">
          <NavLink
            to="/admin/polls/candidates"
            activeClassName={
              location.pathname === "/admin/polls/candidates"
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
const ContactHeader = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/admin/contact/contact") {
      history.push("/admin/contact");
    }
  }, [history, location.pathname]);

  const activeClass =
    'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]';
  return (
    <header className="flex items-center w-full border-b">
      <ul>
        <li className="font-bold text-[#082b0e] inline-block p-4 mr-1 relative">
          <NavLink
            to="/admin/contact"
            activeClassName={
              location.pathname === "/admin/contact"
                ? activeClass
                : location.pathname === "/admin/contact/messages"
                ? activeClass
                : "null"
            }
          >
            Messages
          </NavLink>
        </li>
        <li className="font-bold text-[#082b0e] inline-block p-4 mr-1 relative">
          <NavLink
            to="/admin/contact/subscribers"
            activeClassName={
              location.pathname === "/admin/contact/subscribers"
                ? 'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]'
                : "null"
            }
          >
            Subscribers
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export { PollHeader, AccountHeader, ContactHeader };

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
