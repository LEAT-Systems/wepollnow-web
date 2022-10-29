// import { useSlotProps } from "@mui/base";
import React from "react";

const Wrapper = (props) => {
  return (
    <div className='flex flex-row items-start justify-start w-[100vw]'>
      {props.children}
    </div>
  );
};

export default Wrapper;
