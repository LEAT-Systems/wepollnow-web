import React from "react";
import loading from "../images/preloader.gif";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <img src={loading} alt="Loading" width={"200px"} height="100px" />
    </div>
  );
};
export default Loading;
