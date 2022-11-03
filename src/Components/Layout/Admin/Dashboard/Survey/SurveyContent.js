/** @format */
import React, { useState } from "react";
import { AddOutlined, BorderColorOutlined, Close, Delete, DeleteForever, DeleteOutline, DeleteOutlined, Tune } from "@mui/icons-material";
import Header from "../../Header";
import Progress from "./Progress";
import { Modal } from "@mui/material";
import { useEffect } from "react";

const SurveyContent = () => {
  useEffect(() => {});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const EditActiveStyle =
    "bg-green-500 text-white flex items-center justify-center py-2 px-5 border border-gray-200 rounded-full cursor-pointer  text-sm md:text-base my-auto transition-all duration-700 ease hover:bg-green-500 hover:text-white hover:rounded-full";

  const EditNotActiveStyle =
    "flex items-center justify-center py-2 px-5 border border-gray-200 rounded-md cursor-pointer  text-sm md:text-base my-auto transition-all duration-700 ease  hover:bg-green-500 hover:text-white hover:rounded-full";
  
  return (
    <>
      <Header />
      <main className='px-4 md:px-6 lg:px-12 my-4'>
        <header className='flex flex-row justify-between py-4 w-full'>
          <div>
            <h2 className='font-extrabold text-2xl text-[#082a0f] capitalize'>
              survey
            </h2>
          </div>

          <nav className='pl-3 h-full my-auto flex text-gray-500'>
            <span className='border border-1 flex rounded-lg items-center justify-center py-2 px-3 cursor-pointer text-sm md:text-base h-full mr-3 hover:bg-blue-100'>
              <Tune />
            </span>
            <button
              className={open ? EditActiveStyle : EditNotActiveStyle}
              onClick={handleOpen}
            >
              Edit
              <BorderColorOutlined
                sx={{
                  fontSize: "1rem",
                  margin: "auto auto auto 0.4rem",
                }}
              />
            </button>
          </nav>
        </header>

        <div className='block text-[#082a0f]'>
          <h4 className='text-lg font-medium leading-10 mb-3'>
            How users responded to issues that are most important to them.
          </h4>

          <div className='border border-gray-200 px-6 py-6 rounded-md'>
            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Transportation
                </h3>
              </div>

              <Progress percentage='67' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Education
                </h3>
              </div>

              <Progress percentage='73' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Security
                </h3>
              </div>

              <Progress percentage='65' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>
                  Finance & Economy
                </h3>
              </div>

              <Progress percentage='90' />
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center py-0 md:py-3 px-2'>
              <div className='w-[20rem]'>
                <h3 className='leading-10 font-bold capitalize py-2'>Others</h3>
              </div>

              <Progress percentage='55' />
            </div>
          </div>
        </div>
      </main>

      {/* Overlay */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className='flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg'>
          <header className='flex justify-between items-center w-full pb-3 border-b-2 border-solid border-gray-300 mb-3'>
            <h2 className='font-extrabold text-lg md:text-xl text-[#082a0f] capitalize'>
              edit survey
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500'
              onClick={handleClose}
            >
              <Close />
            </button>
          </header>

          <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
            <h2 className='font-[600] text-base text-gray-400 capitalize'>
              Transportation
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
              onClick={handleClose}
            >
              <Delete />
            </button>
          </div>

          <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
            <h2 className='font-[600] text-base text-gray-400 capitalize'>
              Education
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
              onClick={handleClose}
            >
              <Delete />
            </button>
          </div>

          <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
            <h2 className='font-[600] text-base text-gray-400 capitalize'>
              Security
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
              onClick={handleClose}
            >
              <Delete />
            </button>
          </div>

          <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
            <h2 className='font-[600] text-base text-gray-400 capitalize'>
              Finance & Economy
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
              onClick={handleClose}
            >
              <Delete />
            </button>
          </div>

          <form className='flex justify-between items-center w-full my-2 '>
            <input
              className='font-[600] text-base text-gray-400 capitalize h-full w-full border-y-2 border-l-2 border-r-0 border-solid border-gray-300 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none py-4 px-3'
              placeholder='Add New Survey'
            />

            <button
              className='flex items-center justify-center border border-1 py-4 px-3 h-full cursor-pointer text-sm md:text-base bg-green-500 text-white rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg'
              onClick={handleClose}
            >
              <AddOutlined sx={{ marginRight: ".3rem" }} />
              Add
            </button>
          </form>

          {/* Buttons */}
          <div className='flex justify-end items-center w-full my-2'>
            <button
              className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
              onClick={handleClose}
            >
              cancel
            </button>
            <button className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'>
              confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SurveyContent;

/* 
      <div className='flex flex-row'>
        <div className='flex flex-col p-8 space-y-2'>
          <h2 className='text-2xl font-bold'>Survey</h2>
          <div className='relative flex flex-row items-center justify-start px-2 space-x-2 border border-yellow-500 rounded'>
            <Link to='/wepollnow/surveys'>
              <p className='font-bold'>Survey</p>
            </Link>
            <NavigateNext />
            <Link to='/wepollnow/surveys/manageSurvey'>
              <p className='font-bold text-gray-300'>Manage Survey</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between w-full p-8 mx-auto -mt-6 space-x-12'></div>
      <div className='w-full px-8'></div>
       */
