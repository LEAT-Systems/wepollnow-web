import React from "react";
import loading from "../images/loader.mp4";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <video src={loading} alt="Loading" width={"200px"} height="100px" />
    </div>
  );
};
export default Loading;
