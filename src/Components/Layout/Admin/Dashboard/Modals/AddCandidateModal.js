/** @format */

import React, { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";
import { Modal } from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Axios from "axios";

const AddCandidateModal = ({ addCandidate, handleCloseAddCandidate }) => {
  const errRef = useRef();
  /* Handling the form input and data */
  const [pollType, setPollType] = useState();
  const [pollTypeData, setPollTypeData] = useState([]);
  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [district, setDistrict] = useState();
  const [districtData, setDistrictData] = useState([]);
  const [candidateImage, setCandidateImage] = useState();
  const [zone, setZone] = useState([]);
  const [partyData, setPartyData] = useState([]);
  const [party, setParty] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [percentage, setPercentage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [mainCandidate, setMainCandidate] = useState(false);

  console.log("State: ", state);
  console.log("District: ", district);
  console.log("Zone: ", zone);
  console.log("Poll Type: ", pollType);
  console.log("Candidate Name: ", name);
  console.log("Candidate Image: ", candidateImage);

  useEffect(() => {
    const getState = async () => {
      await Axios
        .get("https://wepollnow.azurewebsites.net/utilities/states/")
        .then((res) => setState(res.data))
        .catch((err) => console.log(err));
    };
    getState();
  }, [setState]);

  /* Get Senetorial District */
  useEffect(() => {
    const getSenetorial = async () => {
      await Axios
        .get(`https://wepollnow.azurewebsites.net/utilities/senatorial/`)
        .then((res) => setDistrictData(res.data))
        .catch((err) => console.log(err));
    };
    getSenetorial();
  }, [setDistrictData]);

  /* Get Poll Type */
  useEffect(() => {
    const getPollType = async () => {
      await Axios
        .get(`https://wepollnow.azurewebsites.net/poll/poll_category/`)
        .then((res) => {
          setPollTypeData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    getPollType();
  }, [setPollTypeData]);

  /* Get Party */
  useEffect(() => {
    const getParty = async () => {
      await Axios
        .get(`https://wepollnow.azurewebsites.net/utilities/party_list/`)
        .then((res) => {
          setPartyData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    getParty();
  }, [setPartyData]);

  /* Submit Form */
  useEffect(() => {
    setErrorMessage("");
  }, [name, candidateImage, selectedState, district, pollType]);

  const token = async () => {
    try {
      const response = await Axios.post(
        "https://wepollnow.azurewebsites.net/utilities/candidates/",
        {
          name: name,
          poll: null,
          poll_category: pollType,
          state_id: selectedState,
          senatorial_id: district,
          main_candidate: mainCandidate,
          candidate_picture: candidateImage,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // clear state and controlled inputs
      setName("");
      setPollType("");
      setCandidateImage("");
      setSelectedState("");
      setDistrict("");
      setSuccessMessage(true);
      return response;
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Connection");
      } else if (err.response?.status === 400) {
        setErrorMessage("Email and Password are required");
      } else if (err.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Add Candidate Failed");
      }
      errRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Axios.post("https://wepollnow.azurewebsites.net/utilities/candidates/", {
      name: name,
      poll: null,
      poll_category: pollType,
      state_id: selectedState,
      senatorial_id: district,
      main_candidate: mainCandidate,
      candidate_picture: candidateImage,
    },
    ).then(res => {
      console.log(res.data.status)
      setSuccessMessage(true)
    }).catch(err => {
      if (!err?.response) {
        setErrorMessage("No Connection");
      } else if (err.response?.status === 400) {
        setErrorMessage("Email and Password are required");
      } else if (err.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Add Candidate Failed");
      }
      errRef.current.focus();
    }
    )
  };

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
              type='button'
            >
              <Close />
            </button>
          </header>

          {/*  */}
          <section>
            <p
              ref={errRef}
              className={
                errorMessage
                  ? " p-4 w-full font-bold text-red-500 block text-center"
                  : "hidden"
              }
              aria-live='assertive'
            >
              {errorMessage}
            </p>
          </section>

          {/*  */}
          <form
            encType="multipart/form-data"
            onSubmit={(e) => handleSubmit(e)}
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
                  required
                  aria-required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  required
                  aria-required
                  value={pollType}
                  onChange={(e) => {
                    setPollType(e.target.value);
                    console.log(e.target.value);
                  }}
                  className='custom__select'
                >
                  <option>Select Poll Type</option>
                  {pollTypeData.map((poll) => {
                    return (
                      <option key={poll.id} id={poll.id} value={poll.id}>
                        {poll.title}
                      </option>
                    );
                  })}
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
                  required
                  aria-required
                  filename={candidateImage}
                  onChange={(e) => setCandidateImage(e.target.files[0])}
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
                  required
                  aria-required
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option>Select State</option>
                  {state.map((state) => {
                    return (
                      <option key={state.id} id={state.id} value={state.id}>
                        {state.name}
                      </option>
                    );
                  })}
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
                  required
                  aria-required
                  value={district}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option>Select Senetorial District</option>
                  {districtData.map((data) => {
                    return (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            {/* Fourth Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='custom_select_container'>
                Party
                <select
                  name='party'
                  id='party'
                  className='custom_select'
                  value={party}
                  onChange={(e) => {
                    setParty(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option>Select Party</option>
                  {partyData.map((data) => {
                    return (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            {/* Fifth Form */}
            <div className='flex flex-col my-2 justify-start items-start w-full gap-3'>
              <div className='w-full'>
                {/* Title */}
                <FormControl
                  sx={{ width: "100%" }}
                >
                  <RadioGroup
                    value={mainCandidate}
                    onChange={(e) => {
                      setMainCandidate(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <div className='flex justify-between align-center'>
                      <FormControlLabel
                        value='true'
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
                        label='Yes'
                      />
                      <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                        Main Candidate
                      </h3>
                    </div>
                    <div className='flex justify-between align-center'>
                      <FormControlLabel
                        value='false'
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
                        label='No'
                      />

                      <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                        Main Candidate
                      </h3>
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* Final Form */}
            <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
              <label className='custom__select__container'>
                Zone
                <select
                  name='zone'
                  id='zone'
                  className='custom_select disabled:bg-gray-200 disabled:cursor-not-allowed'
                  disabled={true}
                  value={zone}
                  onChange={(e) => {
                    setZone(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option>Select Zone</option>
                  <option>1</option>
                  <option>2</option>
                  <option>2</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </label>
            </div>

            {/* Buttons */}
            <div className='flex justify-end items-center w-full my-2'>
              <button
                className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
                onClick={handleCloseAddCandidate}
                type='button'
              >
                cancel
              </button>
              <button
                className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
                type='submit'
                onClick={handleCloseAddCandidate}
              >
                continue
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCandidateModal;
