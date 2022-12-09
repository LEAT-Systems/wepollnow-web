import React from "react";
import { useState } from "react";

const ToolTip = (props) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      onMouseEnter={() => setTooltipStatus(2)}
      onMouseLeave={() => setTooltipStatus(0)}
      {tooltipStatus === 2 && (
        <div
          role="tooltip"
          className="absolute left-0 z-20 w-56 p-4 ml-8 -mt-20 text-center text-white transition duration-150 ease-in-out bg-blue-400 rounded shadow-lg"
        >
          <p className="pb-1 text-sm font-bold">{props.header}</p>
          <p className="pb-3 text-xs leading-4 ">{props.body}</p>
        </div>
      )}
    </>
  );
};

export default ToolTip;
