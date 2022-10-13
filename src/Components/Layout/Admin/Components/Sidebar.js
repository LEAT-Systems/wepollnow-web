import React from "react";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PollIcon from "@mui/icons-material/Poll";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from "react-router-dom";

//
const SideBar = () => {
  return (
    <div className="flex flex-col w-[100px] min-h-screen bg-white border-r border-gray-200 space-y-8">
      {/*  */}
      <NavLink to="/wepollnow/dashboard" activeClassName="active">
        <div className="flex flex-col items-center justify-center mt-4 animate">
          <div className="p-2 bg-green-200 rounded-md">
            <SpeedIcon />
          </div>
          <p>Dashboard</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to="/wepollnow/polls">
        <div className="flex flex-col items-center justify-center animate">
          <div className="p-2 bg-green-200 rounded-md">
            <PollIcon />
          </div>
          <p>Polls</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to="/wepollnow/surveys">
        <div className="flex flex-col items-center justify-center animate">
          <div className="p-2 bg-green-200 rounded-md">
            <CoPresentIcon />
          </div>
          <p>Surveys</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to="/wepollnow/blog">
        <div className="flex flex-col items-center justify-center animate">
          <div className="p-2 bg-green-200 rounded-md">
            <MenuBookIcon />
          </div>
          <p>Blog</p>
        </div>
      </NavLink>

      {/*  */}
      <NavLink to="/wepollnow/account">
        <div className="flex flex-col items-center justify-center animate">
          <div className="p-2 bg-green-200 rounded-md">
            <SettingsSuggestIcon />
          </div>
          <p>Account</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
