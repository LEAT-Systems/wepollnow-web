/** @format */

import React from "react";
import logo from "../../../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import Close from "../../../images/CloseButton.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full px-3 py-4 border-b md:px-4">
        <Link to="/admin/home">
          <img src={logo} alt="logo" className="pl-4" />
        </Link>
        <button
          onClick={handleOpen}
          className="flex flex-row items-center justify-center py-3 px-3 md:px-4 border border-gray-200 rounded-lg cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500 my-auto"
        >
          <LogoutIcon
            sx={{
              color: "text-red-500",
              fontSize: "1.2rem",
              marginRight: ".2rem",
            }}
          />

          <p className="text-red-500">Logout</p>
        </button>
      </div>

      {/* LOGOUT MODAL */}
      <Modal open={open}>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
          <div className="w-full px-4 py-12 bg-white border-gray-500 rounded-lg md:w-1/3">
            <div className="flex flex-row items-center justify-between p-3 border-b">
              <p className="text-lg font-bold">
                Are you sure you want to leave?
              </p>
              <button onClick={handleClose} type="button">
                <img src={Close} alt="closeIcon" />
              </button>
            </div>
            <div className="flex flex-row items-center justify-center pt-12 space-x-4 ">
              <button
                onClick={handleClose}
                className="p-3 bg-[#08c127] rounded px-12 text-white animate"
              >
                Stay
              </button>
              <button className="p-3 px-10 text-black border rounded ">
                Leave
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
