import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ModalContent = (
  <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
    <div className="w-full px-4 py-4 bg-white border border-gray-500 rounded-lg md:w-2/4">
      <div className="flex flex-row items-center justify-between p-3 border-b">
        <p className="text-lg font-bold">Create Poll</p>
        <button
          type="button"
          className="flex flex-row items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full animate"
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
);

export default ModalContent;
