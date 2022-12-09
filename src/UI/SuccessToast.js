import React from "react";
import { Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
//
const Toast = (props) => {
  return (
    <Slide direction="down" in={props.enter} mountOnEnter unmountOnExit>
      <div className="flex flex-row items-center justify-center px-4 mx-auto mt-24 md:px-0">
        <div
          className={`flex flex-row items-center justify-between p-3 px-4 w-full md:w-1/3 border border-${props.border} rounded-md`}
        >
          <div className="flex flex-row items-center space-x-3">
            <img src={props.img} alt="success" />
            {props.children}
          </div>
          <button onClick={props.onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default Toast;
