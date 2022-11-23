import React, { useState } from "react";
import APC from "../../../../../images/apc.png";

const data = [
  {
    id: 1,
    Symbol: "AP",
    party__name: "All Progressive Congress (APC)",
    party__image: APC,
    candidate: ["Jane Doe", "John Doe"],
    running__mate: ["Jane Doe", "John Doe"],
  },
];

const AddPollModal = ({ open, handleClose, nextPage, prevPage, modalData }) => {
  const [candidateName, setCandidateName] = useState("");
  const [runningMate, setRunningMate] = useState("");

  console.log("Candidate Name: ", candidateName);
  console.log("Running Mate: ", runningMate);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-between items-center w-full my-2 hover:bg-transparent'
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
                    {data.candidate.map((candidate) => {
                      return <option key={candidate.id}>{candidate}</option>;
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
                      return <option key={candidate.id}>{candidate}</option>;
                    })}
                  </select>
                </label>
              </div>
            </div>
          );
        })}

        {/* Buttons */}
        <div className='flex justify-end items-center w-full my-2'>
          <button
            className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm text-green-500 capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
            onClick={() => {
              prevPage();
            }}
          >
            Back
          </button>
          <button
            className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
            onClick={handleClose}
          >
            cancel
          </button>
          <button
            className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
            onClick={() => {
              handleClose();
            }}
          >
            continue
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPollModal;
