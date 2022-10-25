import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <div className="w-full px-4 py-4 text-lg text-gray-700 border border-gray-500 rounded-lg shadow-2xl md:w-98 shadow-gray-200">
          <div className="p-6 space-y-4">
            <h1 className="text-2xl text-center">Login</h1>
            <p className="text-sm text-center md:text-lg">
              Enter your credentials below to access your account
            </p>
            <form className="space-y-4">
              <input
                className="w-full p-3 bg-transparent border border-black rounded"
                placeholder="Enter Email"
              />
              <input
                className="w-full p-3 bg-transparent border border-black rounded"
                placeholder="Enter Password"
              />
              <button className="w-full p-3 text-white bg-green-500 rounded-lg hover:opacity-90 cursor-pointer">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
