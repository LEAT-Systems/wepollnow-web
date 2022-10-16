import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Nav from "../../Layout/Landing/mainNav";
import errorIcon from "../../../images/errorImg.png";

const Confirm = (props) => {
  //   const [hasError, sethasError] = useState(false);
  //   const handleSubmit = (values) => {
  //     props.next(values, true);
  //   };
  //   const { castedVote } = props.data;

  //   useEffect(() => {
  //     if (castedVote === "") {
  //       sethasError(true);
  //     }
  //   });

  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg shadow-lg md:w-[500px]">
          <header className="w-full p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img src={errorIcon} alt="error" />
              <p className="px-4 p-1 text-xl text-black font-extrabold text-center md:text-2xl">
                Confirm Action
              </p>

              <p className="text-center">
                You are attempting to cast your vote for{" "}
                <span className="font-bold">
                  All Progressive Congress (APC)
                </span>{" "}
                Kindly confirm your action
              </p>
            </div>
          </header>

          <section>
            <div className="flex flex-row items-end justify-end w-full p-2 space-x-4 md:p-6">
              <button
                type="button"
                //   onClick={() => props.prev(values)}
                className="p-2 px-6 ml-6 text-black bg-transparent border border-black rounded-md hover:border-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="p-2 px-6 bg-green-500 hover:bg-green-600 text-white rounded-md hover:-translate-y-1"
              >
                {`Confirm`}
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Confirm;
