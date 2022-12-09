import React from "react";

const Badge = (props) => {
  return (
    <div
      className={`flex flex-row items-center justify-center space-x-2 px-2 border-[#${props.border}] border md:text-lg font-semibold text-black bg-[#${props.bg}] rounded-md`}
    >
      {props.children}
    </div>
  );
};

export default Badge;
