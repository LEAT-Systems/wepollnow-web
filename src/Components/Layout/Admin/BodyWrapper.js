// import { useSlotProps } from "@mui/base";
import React from "react";

const Wrapper = (props) => {
  return (
    <div className='flex flex-row items-start justify-start max-w-full'>
      {props.children}
    </div>
  );
};

export default Wrapper;
