import React from "react";
const FormLabel = (props) => {
  return (
    <div className="font-bold ml-2 text-sm lg:text-[16px]">
      <p>{props.title}</p>
    </div>
  );
};

export default FormLabel;
