import React from "react";
const FormLabel = (props) => {
  return (
    <label className="font-bold ml-2 text-sm lg:text-[16px]">
      <div className="inline-flex items-center justify-center w-2 h-2 p-2 text-white italic bg-gradient-to-r from-green-500 to-blue-500 text-xs rounded-full hover:bg-black">
        {props.no}
      </div>{" "}
      {props.title}
    </label>
  );
};

export default FormLabel;
