/** @format */

import React, { useContext, useEffect, useState } from "react";
import APC from "../../../../../images/apc.png";
import { ArrowBack } from "@mui/icons-material";
import ModalFormContext from "../../../../../ModalFormContextAdmin/ModalFormContext";
import axios from "axios";

// const data = [
//   {
//     id: 1,
//     Symbol: "AP",
//     party__name: "All Progressive Congress (APC)",
//     party__image: APC,
//     candidate: ["Jane Doe", "John Doe"],
//     running__mate: ["Jane Doe", "John Doe"],
//   },
// ];

const AddPollModal = ({ open, handleClose, nextPage, prevPage, modalData }) => {
  const {
    mainCandidate,
    setMainCandidate,
    pollType,
    selectedState,
    district,
    startDate,
    endDate,
    partyData,
    runningMate,
    pollName,
    parties,
    setSuccessMessage,
  } = useContext(ModalFormContext);

  const [parti, setParti] = useState([])
  const [candi, setCandi] = useState([])


  console.log('Parties: ', parti)
  console.log('Candidates: ', candi)

parties?.forEach(element => {
  const name1 = element.partyCandidate[0].id;
  const name2 = element.partyCandidate[0].id;
  const par = element.name;
  const names = [...name1, ...name2]

  setCandi(names)
  setParti(par)
});

  /* Post Info */
    // const candidate = [];
    // const parti = [];

    // parties.map((item) => {
    //   const i = item.candidates[0].id;
    //   const j = item.candidates[1].id;
    //   console.log("i: ", i)
    //   console.log("i: ", j)

    //   return candidate.push(i, j);
    // });
    // parties.map((item) => {
    //   const p = item.id
    //   console.log("i: ", p)

    //   return parti.push(p)
    // });

    var presidentID = {
      poll_category_id: pollType,
      poll_startDate: startDate,
      poll_endDate: endDate,
      status: 1,
      // party: parti,
      // candidate: candidate,
    };
    var governorshipID = {
      poll_category_id: pollType,
      poll_state: selectedState,
      poll_startDate: startDate,
      poll_endDate: endDate,
      status: 1,
      // party: parti,
      // candidate: candidate,
    };
    var senatorialID = {
      poll_category_id: pollType,
      poll_senatorial_district: district,
      poll_startDate: startDate,
      poll_endDate: endDate,
      status: 1,
      // party: parti,
      // candidate: candidate,
    };

    var config = () => {
      if (pollType === "1") {
        return presidentID;
      } else if (pollType === "2") {
        return governorshipID;
      } else if (pollType === "3") {
        return senatorialID;
      } else {
        return presidentID;
      }
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getParties = async () => {
      await axios
        .post(`https://wepollnow.azurewebsites.net/poll/create_poll/`, config())
        .then((res) => {
          setSuccessMessage(res.status);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    getParties();
  };

  return (
    <>
      <div className='flex justify-start flex-col items-center w-full hover:bg-transparent'>
        <div className='w-full'>
          <button
            className='flex items-center justify-start rounded-md py-3 h-full cursor-pointer text-sm font-bold capitalize'
            onClick={() => {
              prevPage();
            }}
          >
            <ArrowBack
              sx={{
                width: "1.5rem",
                height: "1.2rem",
                background: "#EDFFF0",
                padding: ".2rem",
                marginRight: ".5rem",
                borderRadius: "2rem",
              }}
            />{" "}
            Back
          </button>
        </div>

        {/* First Form */}

        {parties?.map((data) => {
          return (
            <div
              className='flex flex-col md:flex-col my-2 justify-center items-center w-full gap-3 md:gap-5 border rounded-md p-3'
              key={data.id}
              value={data.id}
            >
              <div className='flex items-center w-full border-b my-auto pb-2'>
                <img
                  src={`https://wepollnow.azurewebsites.net${data.logo}`}
                  alt='Political Party'
                  className='w-[2.3rem] aspect-square rounded-sm'
                />
                <h2 className='text-base px-4 text-[#616b62]'>{data.name}</h2>
              </div>

              {/* Second Form */}

              <div className='w-full'>
                <div className='flex justify-between align-center'>
                  <h3 className='font-bold my-auto text-base text-[#000] whitespace-nowrap'>
                    {data.partyCandidate[0].name}
                  </h3>
                  <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                    Main
                  </h3>
                </div>
                <div className='flex justify-between align-center'>
                  <h3 className='font-bold my-auto text-base text-[#000] whitespace-nowrap'>
                    {data.partyCandidate[1].name}
                  </h3>
                  <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                    Running Mate
                  </h3>
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
            onClick={(e) => {
              handleClose();
              handleSubmit(e);
            }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPollModal;
