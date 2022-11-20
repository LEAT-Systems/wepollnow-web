/** @format */

import React, { useState, useEffect } from "react";
import { Close } from "@mui/icons-material";
import { Modal } from "@mui/material";

import { getState, getLGA, getDistrict, getZone, getPollType, postImage } from "../api";

const AddCandidateModal = ({ addCandidate, handleCloseAddCandidate }) => {
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [lga, setLga] = useState("")
  const [zone, setZone] = useState("")
  const [pollType, setPollType] = useState("")
  const [candidateName, setCandidateName] = useState("")
  const [candidateImage, setCandidateImage] = useState("")
  const [percentage, setPercentage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("");

  console.log("State: ", state);
  console.log("District: ", district);
  console.log("LGA: ", lga);
  console.log("Zone: ", zone);
  console.log("Poll Type: ", pollType);
  console.log("Candidate Name: ", candidateName);
  console.log("Candidate Image: ", candidateImage);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='w-full'>
      <Modal
        open={addCandidate}
        onClose={handleCloseAddCandidate}
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
              onClick={handleCloseAddCandidate}
            >
              <Close />
            </button>
          </header>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-between items-center w-full my-2 hover:bg-transparent'
          >
            {/* First Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='w-full relative'>
                Name
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Candidate Name'
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className='font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-3 px-3 placeholder:text-[#616b62]'
                />
              </label>
            </div>

            {/* Second Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='custom__select__container'>
                Poll Type
                <select
                  name='poll__type'
                  id='poll__type'
                  value={pollType}
                  onChange={(e) => setPollType(e.target.value)}
                  className='custom__select'
                >
                  <option value='Select Poll Type'>Select Poll Type</option>
                  <option>This is a Poll Type</option>
                  <option>This is a Poll Type</option>
                  <option>This is a Poll Type</option>
                </select>
              </label>
            </div>

            {/* Third Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='w-full relative'>
                Candidate Image
                <input
                  type='file'
                  name='image'
                  id='image'
                  placeholder='Enter Candidate Name'
                  filename={candidateImage}
                  onChange={(e) => setCandidateImage(e.target.files)}
                  className='font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-3 px-3 placeholder:text-[#616b62]'
                />
              </label>
            </div>

            {/* Fourth Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='custom__select__container'>
                State
                <select
                  name='state'
                  id='state'
                  className='custom__select'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value='Select state'>Select State</option>
                  <option>Abia</option>
                  <option>Adamawa</option>
                  <option>Akwa Ibom</option>
                  <option>Anambra</option>
                  <option>Bauchi</option>
                  <option>Bayelsa</option>
                  <option>Benue</option>
                  <option>Borno</option>
                  <option>Cross River</option>
                  <option>Delta</option>
                  <option>Ebonyi</option>
                  <option>Edo</option>
                  <option>Ekiti</option>
                  <option>Enugu</option>
                  <option>Fct</option>
                  <option>Gombe</option>
                  <option>Imo</option>
                  <option>Jigawa</option>
                  <option>Kaduna</option>
                  <option>Kano</option>
                  <option>Katsina</option>
                  <option>Kebbi</option>
                  <option>Kogi</option>
                  <option>Kwara</option>
                  <option>Lagos</option>
                  <option>Nasarawa</option>
                  <option>Niger</option>
                  <option>Ogun</option>
                  <option>Ondo</option>
                  <option>Osun</option>
                  <option>Oyo</option>
                  <option>Plateau</option>
                  <option>Rivers</option>
                  <option>Sokoto</option>
                  <option>Taraba</option>
                  <option>Yobe</option>
                  <option>Zamfara</option>
                </select>
              </label>
            </div>

            {/* Fifth Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='custom__select__container'>
                Senetorial District
                <select
                  name='district'
                  id='district'
                  className='custom__select'
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option value='Select Poll Type'>
                    Select Senetorial District
                  </option>
                  <option>This is a Senetorial District</option>
                  <option>This is a Senetorial District</option>
                  <option>This is a Senetorial District</option>
                </select>
              </label>

              <label className='custom__select__container'>
                LGA
                <select
                  name='lga'
                  id='lga'
                  className='custom__select'
                  value={lga}
                  onChange={(e) => setLga(e.target.value)}
                >
                  <option value='Select Poll Type'>Select LGA</option>
                  <option>This is an LGA</option>
                  <option>This is an LGA</option>
                  <option>This is an LGA</option>
                </select>
              </label>
            </div>

            {/* Final Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='custom__select__container'>
                Zone
                <select
                  name='zone'
                  id='zone'
                  className='custom__select'
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                >
                  <option value='Select Zone'>Select Zone</option>
                  <option>1</option>
                  <option>2</option>
                  <option>2</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </label>
            </div>
          </form>

          {/* Buttons */}
          <div className='flex justify-end items-center w-full my-2'>
            <button
              className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
              onClick={handleCloseAddCandidate}
            >
              cancel
            </button>
            <button className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'>
              continue
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCandidateModal;
