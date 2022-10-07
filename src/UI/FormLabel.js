import React from "react";
const FormLabel = (props) => {
  return (
    <label className="font-bold ml-2 text-sm lg:text-lg">
      <div className="inline-flex items-center justify-center w-4 h-4 p-3 text-white italic bg-gray-400 rounded-full hover:bg-black">
        {props.no}
      </div>{" "}
      {props.title}
    </label>
  );
};

export default FormLabel;
