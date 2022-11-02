import React from "react";
import Nav from "../Layout/Landing/mainNav";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Message = (props) => {
  const history = useHistory();
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-8 mx-auto">
        <div className="z-10 flex flex-row p-12 border rounded-lg shadow-xl w-1/3 border-gray-200">
          {!props.state ? (
            history.push("/vote", { replace: true })
          ) : (
            <div className="flex flex-col items-center justify-center mx-auto space-y-4">
              <h1 className="text-xl md:text-lg font-semibold text-center text-red-500 ">
                {props.message}. An Error Occured.
                <br /> Check internet connection.
              </h1>
              <div className="flex flex-row items-center justify-center space-x-4">
                <Link to="/getting-started-three">
                  <button className="p-3 px-6 text-white bg-green-500 border rounded-lg hover:bg-green-600">
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
