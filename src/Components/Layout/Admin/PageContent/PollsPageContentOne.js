import React, { useEffect } from "react";
import { useState } from "react";
import Tables from "../Components/Tables";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

//
const PollsPageContentOne = () => {
  const [open, setOpen] = useState(false);

  const modalHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* ===========  Modal: This is a MUI Component   =========== */}

      <Modal open={open}>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
          <div className="w-full px-4 py-4 bg-white border border-gray-500 rounded-lg md:w-2/4">
            <div className="flex flex-row items-center justify-between p-3 border-b">
              <p className="text-lg font-bold">Create Poll</p>
              <button
                onClick={handleClose}
                type="button"
                className="flex flex-row items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
            <div className="flex flex-row p-4">
              {/*  */}
              {/*========================  CREATE POLL FORM ================================*/}
              <form className="w-full space-y-4">
                <div className="flex flex-row space-x-4">
                  {/*  */}
                  {/* Poll type TYPE => Select*/}
                  <select className="w-full p-3 border rounded-lg">
                    <option>1</option>
                    <option>2</option>
                  </select>

                  {/* Poll date : TYPE => Datepicker */}
                  <input className="w-full p-3 border rounded-lg" />
                </div>

                {/* State : TYPE => Select */}
                <div className="flex flex-row space-x-4">
                  <select className="w-full p-3 border rounded-lg">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>

                {/* Senatorial District : TYPE => Select */}
                <div className="flex flex-row space-x-4">
                  <select className="w-full p-3 border rounded-lg">
                    <option>1</option>
                    <option>2</option>
                  </select>

                  {/* LGA TYPE => Select */}
                  <select className="w-full p-3 border rounded-lg">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>

                {/* Zone */}
                <div className="flex flex-row space-x-4">
                  <select className="w-full p-3 border rounded-lg">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>

                {/* Cancel and Submit button */}
                <div className="flex flex-row items-end justify-end space-x-4">
                  <button
                    onClick={handleClose}
                    type="button"
                    className="p-2 px-4 text-white bg-red-500 rounded-md"
                  >
                    Cancel
                  </button>
                  <button className="p-2 px-4 text-white bg-green-500 rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      {/* ========================================================= */}

      <div className="flex flex-row items-center justify-between p-6 pt-2">
        <div className="flex flex-col space-y-2">
          <Link>
            <h2 className="text-2xl font-bold">Manage Polls</h2>
          </Link>

          <div className="relative flex flex-row items-center justify-start px-2 space-x-2 border border-yellow-500 rounded">
            <p className="font-bold">Manage Polls</p>
            <NavigateNextIcon />
            <Link to="/wepollnow/polls/polls_result">
              <p className="font-bold text-gray-300">Polls Result</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <form>
            <input
              className="p-2 border-b border-gray-200 fontAwesome"
              placeholder="&#xf002; Search"
            />
          </form>
          <div className="flex flex-row space-x-1">
            <div className="p-2 bg-gray-200 rounded-full"></div>
            <div className="p-2 bg-gray-200 rounded-full"></div>
          </div>

          <div className="flex flex-row space-x-1">
            <div className="p-2 bg-gray-200 rounded-full"></div>
            <div className="p-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="px-6">
        <div className="flex flex-col p-4 border rounded-lg">
          <div className="flex flex-row items-center justify-between p-2">
            <p>Created Polls</p>
            <button
              onClick={modalHandler}
              className="flex flex-row items-center p-1 px-2 border border-green-200 rounded animate hover:bg-green-200"
            >
              <AddIcon />
              <p>Create Poll</p>
            </button>
          </div>
          <Tables />
        </div>
      </div>
    </>
  );
};

export default PollsPageContentOne;
