import React from "react";
import Nav from "../Layout/Landing/mainNav";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Done from "@mui/icons-material/Done";
import { Link } from "react-router-dom";

const Message = (props) => {
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-8 mx-auto bg-hero-pattern bg-no-repeat bg-top bg-opacity-5">
        <div className="z-10 flex flex-row p-12 border rounded-lg shadow-xl max-w-xxl border-green-500">
          {!props.state ? (
            <div className="flex flex-col items-center space-y-12">
              <div className="p-6 bg-green-500 rounded-full animate-ping">
                <Done fontSize="large" />
              </div>
              <h1 className="text-5xl font-bold text-center text-green-500 ">
                Submitted Successfully
              </h1>
              <div className="flex flex-row items-center justify-center space-x-4">
                <Link to="/vote">
                  <button className="p-2 border bg-green-500 rounded-lg md:px-6 text-white hover:bg-green-600">
                    Proceed to Vote
                  </button>
                </Link>
                <Link to="/">
                  <button className="p-2 text-black rounded-lg md:px-6 bg-transparent border border-green-500">
                    Back to Homepage
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <div className="p-8 bg-red-500 rounded-full animate-ping">
                <ErrorOutlineIcon color="red" />
              </div>
              <h1 className="text-xl md:text-3xl font-semibold text-center text-red-500 ">
                {props.message}. An Error Occured.
                <br /> Check internet connection.
              </h1>
              <div className="flex flex-row items-center justify-center space-x-4">
                <Link to="/getting-started-three">
                  <button className="p-2 px-6 text-white bg-green-500 border rounded-lg hover:bg-green-600">
                    Start Over
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
