import React from "react";
import doneIcon from "../images/doneIcon.png";
import { Slide } from "@mui/material";

const SuccessToast = (props) => {
  return (
    <Slide direction="down" in={props.enter} mountOnEnter unmountOnExit>
      <div className="flex flex-row items-center justify-center px-4 mx-auto mt-24 md:px-0">
        <div
          className={`flex flex-row items-center justify-between p-3 px-4 w-full md:w-1/3 border border-green-500 rounded-md`}
        >
          <div className="flex flex-row items-center space-x-3">
            {props.children}
          </div>
          <div>
            <img src={doneIcon} alt="success" />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default SuccessToast;
