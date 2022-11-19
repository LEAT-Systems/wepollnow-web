import React from "react";
import Nav from "../Layout/Landing/mainNav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import errorIcon from "../../images/errorImg.png";

const Message = (props) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [phoneErrorMessage, setPhoneErrorMessage] = useState();
  const [httpErrorMessage, setHttpErrorMessage] = useState();
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    setErrorState(props.state);
    setPhoneErrorMessage(props.messageOne);
    setEmailErrorMessage(props.messageTwo);
    setHttpErrorMessage(props.httpError);
  }, [props.state, props.messageOne, props.messageTwo, props.httpError]);

  //
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-8 mx-auto">
        <div className="z-10 flex flex-row w-full p-1 border border-gray-200 rounded-lg shadow-xl md:w-1/3">
          {errorState && (
            <div className="flex flex-col items-center justify-center px-24 py-24 mx-auto space-y-4 md:space-y-8 md:py-12">
              <div>
                <img src={errorIcon} />
              </div>
              <h1 className="max-w-3xl text-xl font-semibold text-center text-red-500 md:text-lg ">
                {httpErrorMessage}.<br />
                {emailErrorMessage || ""}
                <br />
                {phoneErrorMessage || ""}
              </h1>
              <div className="flex flex-row items-center justify-center space-x-4">
                <Link to="/getting-started-six">
                  <button className="p-3 px-6 text-white bg-[#08c127] border rounded-lg animate">
                    Try Again
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
