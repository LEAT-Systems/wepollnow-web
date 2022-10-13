import React from "react";
import logo from "../../../../images/logo_white.png";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
      <div className="flex flex-row items-center justify-between w-full p-6 px-8 bg-green-700 border-b">
        <Link to="/wepollnow/dashboard">
          <img src={logo} alt="" className="ml-4" />
        </Link>
        <button
          onClick={handleOpen}
          className="flex flex-row p-2 px-2 border border-2 border-white rounded-lg animate "
        >
          <PowerSettingsNewIcon sx={{ color: "#fff" }} />
          <p className="text-white">Logout</p>
        </button>
      </div>

      {/* LOGOUT MODAL */}
      <Modal open={open}>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
          <div className="w-full px-4 py-4 bg-white border border-gray-500 rounded-lg md:w-1/4">
            <div className="flex flex-row items-center justify-between p-3 border-b">
              <p className="text-lg font-bold">
                Are you sure you want to leave?
              </p>
              <button
                onClick={handleClose}
                type="button"
                className="flex flex-row items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
            <div className="flex flex-row items-center justify-center p-4 space-x-4">
              <button className="btn-stay">Stay</button>
              <button className="btn-leave">Leave</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
