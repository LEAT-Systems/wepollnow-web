import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const FormIndicator = (props) => (
  <header className="flex flex-col w-full p-6 space-y-4 border-b md:space-y-2">
    <div className="flex flex-row items-center justify-center space-x-4">
      {props.isCompletedOne ? (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-green-600 rounded-full">
          <DoneIcon />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
          1
        </div>
      )}

      <hr className="w-12 border-black border-dashed border-1" />
      {props.isCompletedTwo && (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-green-600 rounded-full">
          <DoneIcon />
        </div>
      )}
      {props.isCompletedTwo ? (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
          2
        </div>
      ) : (
        ""
      )}
      <hr className="w-12 border-black border-dashed border-1" />
      {props.isCompletedThree ? (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-green-600 rounded-full">
          <DoneIcon />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-gray-400 rounded-full">
          3
        </div>
      )}
      <hr className="w-12 border-black border-dashed border-1" />
      {props.isCompletedFour ? (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-green-600 rounded-full">
          <DoneIcon />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-gray-400 rounded-full">
          4
        </div>
      )}
    </div>
    <p className="font-semibold text-center">
      <span className="px-4 text-white bg-gray-400 rounded-full ">
        {props.title}
      </span>{" "}
    </p>
  </header>
);

export default FormIndicator;
