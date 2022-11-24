/** @format */

import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import AddPollModal from "./AddPollModal";
import CreatePollModal from "./CreatePollModal";
import axios from "axios";

const CreatePollsContainer = ({ open, handleClose, modalData }) => {
  const [page, setPage] = useState(1);

  // const CreatePoll = async () => {
  //   axios
  //     .post("https://wepollnow.azurewebsites.net/poll/poll_category_party/")
  //     .then((res) => {
  //       console.log(res);
  //       setCreatePollinfo(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const Forms = () => {
    if (page === 1)
      return (
        <CreatePollModal
          open={open}
          modalData={modalData}
          handleClose={handleClose}
          nextPage={nextPage}
        />
      );

    if (page === 2)
      return (
        <AddPollModal
          open={open}
          modalData={modalData}
          handleClose={handleClose}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      );
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        <main className='flex flex-col items-center justify-center px-6 py-4 my-auto mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg overflow-y-auto'>
          <header className='flex justify-between items-center w-full border-b-2 border-solid border-gray-300 py-2'>
            <h2 className='font-extrabold text-lg md:text-xl text-[#082a0f] capitalize'>
              create poll
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500'
              onClick={handleClose}
            >
              <Close />
            </button>
          </header>

          {Forms()}
        </main>
      </Modal>
    </>
  );
};

export default CreatePollsContainer;
