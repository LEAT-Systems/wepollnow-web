import React from "react";
const FormLabel = (props) => {
  return (
    <div className="font-bold text-sm lg:text-[16px]">
      <p>{props.title}</p>
    </div>
  );
};

export default FormLabel;
