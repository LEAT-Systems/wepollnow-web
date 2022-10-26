import React from "react";
import LOGO from "../../../../images/logo.png";
const Login = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0'>
        <img src={LOGO} alt='LOGO' className='w-44 pb-9' />
        <div className='w-full px-4 py-4 text-lg text-gray-700 border border-gray-500 rounded-lg shadow-2xl md:w-98 shadow-gray-200'>
          <div className='p-6 space-y-4'>
            <h1 className='text-2xl md:text-3xl text-center font-extrabold text-black'>
              Welcome Back
            </h1>
            <p className='text-lg text-center md:text-xl text-gray-600 font-semibold'>
              Enter your credentials below to Login
            </p>
            <form className='py-4'>
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              <input
                type='email'
                className='w-full py-3 px-4 bg-transparent border border-black rounded mb-4 mt-1 font-semibold'
                placeholder='Enter Email'
                required
                aria-required
              />
              <label htmlFor='password' className='font-semibold'>
                Password
              </label>
              <input
                type='password'
                className='w-full py-3 px-4 bg-transparent border border-black rounded mb-6 mt-1 font-semibold'
                placeholder='Enter Password'
                id='password'
                required
                aria-required
              />
              <button className='w-full p-3 text-white bg-green-500 rounded-xl cursor-pointer transition-all duration-200 ease-linear delay-100 hover:rounded-full focus:outline-none'>
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
