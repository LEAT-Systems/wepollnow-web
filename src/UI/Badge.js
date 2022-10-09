import React from "react";

const Badge = (props) => {
  return (
    <span className="inline-flex items-center justify-center space-x-1 px-4 py-1 text-xs md:text-lg font-semibold leading-none text-black bg-yellow-100 rounded-full">
      {props.children}
    </span>
  );
};

export default Badge;
