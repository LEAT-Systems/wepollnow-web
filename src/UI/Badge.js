import React from "react";
import CalendarMonth from "@mui/icons-material/CalendarMonth";

const Badge = (props) => {
  return (
    <span className="inline-flex items-center justify-center space-x-1 px-4 py-1 text-lg font-semibold leading-none text-black bg-yellow-200 rounded-full">
      {CalendarMonth}
      {props.children}
    </span>
  );
};

export default Badge;
