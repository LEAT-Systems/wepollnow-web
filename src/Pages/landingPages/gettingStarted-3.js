import React, { useState } from "react";
import { useRef } from "react";
import Done from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
import Nav from "../../Components/Layout/Landing/mainNav";

const GettingStartedThree = () => {
  const [hasError, setHasError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const numberRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = numberRef.current.value.trim();
    if (!(val.length === 11)) {
      setHasError(true);
      return;
    }
    localStorage.setItem("phoneNumber", val);
    setHasSubmitted(true);
    setHasError(false);
    numberRef.current.value = "";
  };
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen mx-auto space-y-4 bg-center bg-no-repeat bg-hero-pattern">
        <div className="flex flex-col items-center justify-center p-8 space-y-12 border border-green-500 rounded-lg ">
          {hasSubmitted && (
            <div className="p-8 border border-green-500 rounded-full">
              <Done
                className="text-center text-green-500 animate-pulse"
                fontSize="large"
              />
            </div>
          )}
          {!hasSubmitted && (
            <p className="text-xl font-semibold">
              Input your phone number to proceed
            </p>
          )}

          <form className="space-y-8 text-center" onSubmit={handleSubmit}>
            {hasError && (
              <p className="text-red-500">
                Enter 11 digits of your Phone Number
              </p>
            )}
            {hasSubmitted && (
              <p className="font-bold text-black">
                Successfully Submitted. Proceed by Clicking the button below.
              </p>
            )}
            {!hasSubmitted && (
              <input
                type="number"
                name="phone"
                ref={numberRef}
                required
                placeholder="Enter Phone Number"
                className={`${
                  hasError
                    ? "border border-red-500 w-full p-4 rounded focus:border-0 bg-transparent"
                    : "w-full p-4 border-b border-gray-400 focus:border-0 bg-transparent"
                } `}
              />
            )}
            {!hasSubmitted && (
              <button
                type="submit"
                className="w-full p-4 text-white bg-green-500 rounded-lg hover:bg-green-600 hover:-translate-y-1"
              >
                Submit
              </button>
            )}
            {hasSubmitted && (
              <Link to="/getting-started-four">
                <button className="w-full p-4 px-8 mt-8 text-white bg-green-500 rounded-lg hover:bg-green-600 hover:-translate-y-1">
                  Continue
                </button>
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default GettingStartedThree;
