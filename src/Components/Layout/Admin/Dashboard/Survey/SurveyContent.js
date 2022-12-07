/** @format */
import React, { useState } from "react";
import {
  AddOutlined,
  BorderColorOutlined,
  Close,
  Delete,
} from "@mui/icons-material";
import LinkIcon from "../../assets/Filter@2x.png";
import Header from "../../Header";
import Progress from "./Progress";
import { Modal } from "@mui/material";
import { useEffect, useRef } from "react";
import swal from "sweetalert";

const SurveyContent = () => {
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  // Add Item Handler
  const addHandler = (e) => {
    e.preventDefault();
    setList((prevUserList) => {
      //new state snapshot. The spread operator copies all elemrnts from prev snapshot
      const updatedItem = [
        ...prevUserList,
        {
          id: (Math.random() + 1).toString(36).substring(7),
          title: inputRef.current.value.trim(),
        },
      ];
      return updatedItem;
    });
    inputRef.current.value = "";
  };

  // Submit Hanlder
  const submitHandler = async () => {
    console.log(list);
    // const requestOptions = {
    //   body: list,
    //   method: "POST",
    // };

    // const response = await fetch(
    //   "https://www.azurewebsites.net/opinions/",
    //   requestOptions
    // );
    // const result = await response.json();

    // if (!response.ok) {
    //   swal("An Error Occured");
    // } else {
    //   swal("Action was Successful");
    // }
    setOpen(false);
  };

  // Delete Item Handler
  const deleteHandler = (id) => {
    console.log(id);
    const filtered = list.filter((el) => el.id !== id);
    setList(filtered);
  };

  // Open and close modal
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
      <main className="px-4 my-4 md:px-6 lg:px-12">
        <header className="flex flex-row justify-between w-full py-4">
          <div>
            <h2 className="font-extrabold text-2xl text-[#082a0f] capitalize">
              survey
            </h2>
          </div>

          <nav className="flex h-full pl-3 my-auto text-gray-500">
            <span className="mr-1 w-[2.6rem]">
              <img src={LinkIcon} alt="Account" className="w-full" />
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

        <div className="block text-[#082a0f]">
          <h4 className="mb-3 text-lg font-medium leading-10">
            How users responded to issues that are most important to them.
          </h4>

          <div className="px-6 py-6 border border-gray-200 rounded-md">
            <div className="flex flex-col items-start justify-between w-full px-2 py-3 md:flex-row md:items-center">
              <div className="w-[20rem]">
                <h3 className="py-2 font-bold leading-10 capitalize">
                  Transportation
                </h3>
              </div>

              <Progress percentage="67" />
            </div>

            <div className="flex flex-col items-start justify-between w-full px-2 py-0 md:flex-row md:items-center md:py-3">
              <div className="w-[20rem]">
                <h3 className="py-2 font-bold leading-10 capitalize">
                  Education
                </h3>
              </div>

              <Progress percentage="73" />
            </div>

            <div className="flex flex-col items-start justify-between w-full px-2 py-0 md:flex-row md:items-center md:py-3">
              <div className="w-[20rem]">
                <h3 className="py-2 font-bold leading-10 capitalize">
                  Security
                </h3>
              </div>

              <Progress percentage="65" />
            </div>

            <div className="flex flex-col items-start justify-between w-full px-2 py-0 md:flex-row md:items-center md:py-3">
              <div className="w-[20rem]">
                <h3 className="py-2 font-bold leading-10 capitalize">
                  Finance & Economy
                </h3>
              </div>

              <Progress percentage="90" />
            </div>

            <div className="flex flex-col items-start justify-between w-full px-2 py-0 md:flex-row md:items-center md:py-3">
              <div className="w-[20rem]">
                <h3 className="py-2 font-bold leading-10 capitalize">Others</h3>
              </div>

              <Progress percentage="55" />
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
        <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg">
          <header className="flex items-center justify-between w-full pb-3 mb-3 border-b-2 border-gray-300 border-solid">
            <h2 className="font-extrabold text-lg md:text-xl text-[#082a0f] capitalize">
              Edit survey
            </h2>
            <button
              className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500"
              onClick={handleClose}
            >
              <Close />
            </button>
          </header>

          {list?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full px-3 py-3 my-2 border-2 border-gray-300 border-solid rounded-lg"
            >
              <h2 className="font-[600] text-base text-gray-400 capitalize">
                {item.title}
              </h2>
              <button
                className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400"
                onClick={() => deleteHandler(item.id)}
              >
                <Delete />
              </button>
            </div>
          ))}

          <form
            onSubmit={addHandler}
            className="flex items-center justify-between w-full my-2 "
          >
            <input
              required
              ref={inputRef}
              className="font-[600] text-base text-gray-400 capitalize h-full w-full border-y-2 border-l-2 border-r-0 border-solid border-gray-300 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none py-4 px-3"
              placeholder="Add New Survey"
            />

            <button
              className="flex items-center justify-center h-full px-3 py-4 text-sm text-white bg-green-500 border rounded-tl-none rounded-tr-lg rounded-bl-none rounded-br-lg cursor-pointer border-1 md:text-base"
              type="submit"
            >
              <AddOutlined sx={{ marginRight: ".3rem" }} />
              Add
            </button>
          </form>

          {/* Buttons */}
          <div className="flex items-center justify-end w-full my-2">
            <button
              className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full"
              onClick={handleClose}
            >
              cancel
            </button>
            <button
              onClick={() => submitHandler()}
              className="flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out bg-green-500 rounded-md cursor-pointer duration-400 hover:bg-green-500 hover:text-white hover:rounded-full"
            >
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
