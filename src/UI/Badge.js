import React from "react";

const Badge = (props) => {
  return (
    <span className="inline-flex items-center justify-center px-4 py-1 text-lg font-semibold leading-none text-white bg-gray-600 rounded-full">
      {props.children}
    </span>
  );
};

export default Badge;
