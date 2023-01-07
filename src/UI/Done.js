import React from "react";
import done from "../images/done-2.gif";

const DoneComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <img src={done} alt="Loading" width={"200px"} height="100px" />
    </div>
  );
};
export default DoneComponent;
