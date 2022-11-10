import React from "react";
import Nav from "../Layout/Landing/mainNav";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Message = (props) => {
  const [message, setMessage] = useState();
  const [state, setState] = useState("");
  const history = useHistory();

  useEffect(() => {
    setState(props.state);
    setMessage(props.message);
  }, []);

  //
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-8 mx-auto">
        <div className="z-10 flex flex-row w-full p-1 border border-gray-200 rounded-lg shadow-xl md:w-1/3">
          {!state ? (
            history.push("/vote", { replace: true })
          ) : (
            <div className="flex flex-col items-center justify-center py-24 mx-auto space-y-4 md:py-12">
              <h1 className="text-xl font-semibold text-center text-red-500 md:text-lg ">
                An error occured.
                <br /> Check internet connection.
              </h1>
              <div className="flex flex-row items-center justify-center space-x-4">
                <Link to="/getting-started-one">
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
