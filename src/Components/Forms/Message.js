import React from "react";
import Nav from "../Layout/Landing/mainNav";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Message = (props) => {
  const [message, setMessage] = useState();
  const [errorState, setErrorState] = useState("");
  const history = useHistory();

  useEffect(() => {
    setErrorState(props.state);
    setMessage(props.message);
  }, [props.state, props.message]);

  const handler = () => {
    history.push("/polls", { replace: true });
  };
  //
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-8 mx-auto">
        <div className="z-10 flex flex-row w-full p-1 border border-gray-200 rounded-lg shadow-xl md:w-1/3">
          {!errorState ? (
            <div className="flex flex-col items-center justify-center py-24 mx-auto space-y-4 md:py-24">
              <h1 className="text-xl font-semibold text-center text-black md:text-lg ">
                You were successfully registered
                <br /> Proceed to vote below.
              </h1>
              <div className="flex flex-row items-center justify-center space-x-4">
                <button
                  onClick={handler}
                  className="p-3 px-6 text-white bg-[#08c127] border rounded-lg animate"
                >
                  Proceed
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 mx-auto space-y-4 md:py-24">
              <h1 className="text-xl font-semibold text-center text-red-500 md:text-lg ">
                {message} error occured.
                <br /> Check internet connection.
              </h1>
              <div className="flex flex-row items-center justify-center space-x-4">
                <Link to="/getting-started-one">
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
