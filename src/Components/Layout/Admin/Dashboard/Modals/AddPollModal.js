/** @format */

import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import APC from "../../../../../images/apc.png";
import { ArrowBack } from "@mui/icons-material";

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
        className='flex justify-start flex-col items-center w-full hover:bg-transparent'
      >
        <div className='w-full'>
          <button
            className='flex items-center justify-start rounded-md py-3 h-full cursor-pointer text-sm font-bold capitalize'
            onClick={() => {
              prevPage();
            }}
          >
            <ArrowBack
              sx={{ width: "1.5rem", height: "1.2rem", background: "#EDFFF0", padding: ".2rem", marginRight: '.5rem', borderRadius: "2rem" }}
            />{" "}
            Back
          </button>
        </div>

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
                  className='w-[2.3rem] aspect-square rounded-sm'
                />
                <h2 className='text-base px-4 text-[#616b62]'>
                  {data.party__name}
                </h2>
              </div>

              {/* Second Form */}
              <div className='flex flex-col my-2 justify-start items-start w-full gap-3'>
                <div className='w-full'>
                  {/* Title */}
                  <FormControl
                    onChange={(e) => console.log(e.target.value)}
                    sx={{ width: "100%" }}
                  >
                    <RadioGroup>
                      <div className='flex justify-between align-center'>
                        <FormControlLabel
                          value='first__time'
                          className='text-[#616b62] font-medium'
                          sx={{ width: "100%" }}
                          control={
                            <Radio
                              sx={{
                                color: "#616b62",
                                "&.Mui-checked": {
                                  color: "#616b62",
                                },
                              }}
                            />
                          }
                          label='Jane Doe'
                        />
                        <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                          Main
                        </h3>
                      </div>
                      <div className='flex justify-between align-center'>
                        <FormControlLabel
                          value='returning__voter'
                          className='text-[#616b62] font-medium'
                          sx={{ width: "100%" }}
                          control={
                            <Radio
                              sx={{
                                color: "#616b62",
                                "&.Mui-checked": {
                                  color: "#616b62",
                                },
                              }}
                            />
                          }
                          label='John Doe'
                        />

                        <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                          Running Mate
                        </h3>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
          );
        })}

        {/* Buttons */}
        <div className='flex justify-end items-center w-full my-2'>
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
