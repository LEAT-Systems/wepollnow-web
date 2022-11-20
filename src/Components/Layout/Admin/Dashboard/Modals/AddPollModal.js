/** @format */

import React, { useState, useEffect } from "react";
import { Close } from "@mui/icons-material";
import { Modal } from "@mui/material";
import APC from '../../../../../images/apc.png'


const data = [
  {
    id: 1,
    party__name: "All Progressive Congress (APC)",
    party__image: APC,
    candidates: ['Jane Doe', 'John Doe'],
    running__mate: ['Jane Doe', 'John Doe'],
  },
];


const AddPollModal = ( openModal, handleCloseAddPoll) => {
  const [candidateName, setCandidateName] = useState("");
  const [runningMate, setRunningMate] = useState("");

  console.log("Candidate Name: ", candidateName);
  console.log("Running Mate: ", runningMate);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className='w-full'>
      <Modal
        open={openModal}
        onClose={handleCloseAddPoll}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          outline: "none",
          ":focus": {
            outline: "none",
            border: "none",
          },
        }}
      >
        <div className='flex flex-col items-start justify-start px-6 py-4 my-auto mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/6 bg-white rounded-lg overflow-y-auto focus:outline-none'>
          <header className='flex justify-between items-center w-full border-b-2 border-solid border-gray-300 mb-3 py-2'>
            <h2 className='font-extrabold text-lg md:text-xl text-[#082a0f] capitalize'>
              Add Candidate
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500'
              onClick={handleCloseAddPoll}
            >
              <Close />
            </button>
          </header>

          <form
            onSubmit={handleSubmit}
            className='flex flex-row justify-between items-center w-full my-2 hover:bg-transparent'
          >
            {/* First Form */}

            {data?.map((data) => {
              return (
                <div
                  className='flex flex-col md:flex-col my-2 justify-center items-center w-full gap-3 md:gap-5 border rounded-md p-3'
                  key={data.id}
                >
                  <div className='flex items-center w-full border-b my-auto pb-2'>
                    <img
                      src={data.party__image}
                      alt='Political Party'
                      className='w-[3rem] aspect-square rounded-sm'
                    />
                    <h2 className='text-lg px-4'>{data.party__name}</h2>
                  </div>
                  <div className='flex items-center w-full border-b my-auto pb-2'>
                    <label className='custom__select__container'>
                      <select
                        name='candidate__name'
                        id='candidate__name'
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        className='custom__select'
                      >
                        <option value='Select Candidate'>
                          Select Poll Candidate
                        </option>
                        {data.candidates.map((candidate) => {
                          return (
                            <option key={candidate.id}>{candidate}</option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                  <div className='flex items-center w-full border-b my-auto pb-2'>
                    <label className='custom__select__container'>
                      <select
                        name='running__mate'
                        id='running__mate'
                        value={runningMate}
                        onChange={(e) => setRunningMate(e.target.value)}
                        className='custom__select'
                      >
                        <option value='Select Running Mate'>
                          Select Poll Running Mate
                        </option>
                        {data.running__mate.map((candidate) => {
                          return (
                            <option key={candidate.id}>{candidate}</option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                </div>
              );
            })}
          </form>

          {/* Buttons */}
          <div className='flex justify-end items-center w-full my-2'>
            <button
              className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
              onClick={handleCloseAddPoll}
            >
              cancel
            </button>
            <button
              className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
              onClick={() => handleCloseAddPoll()}
            >
              continue
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default AddPollModal;
