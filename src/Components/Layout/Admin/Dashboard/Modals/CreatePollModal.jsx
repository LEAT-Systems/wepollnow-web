/** @format */

import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "../../../../../api/axios";
import ModalFormContext from "../../../../../ModalFormContextAdmin/ModalFormContext";

const CreatePollModal = ({ open, handleClose, nextPage, setPage }) => {
  const {
    pollType,
    setPollType,
    state,
    setState,
    selectedState,
    setSelectedState,
    district,
    setDistrict,
    party,
    setParty,
    zone,
    setZone,
    pollTypeData,
    setPollTypeData,
    districtData,
    setDistrictData,
    partyData,
    setPartyData,
    zoneData,
    setZoneData,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setPollName,
    pollTypeName,

    presidentialName,
    setPresidentialName,
    senatorialName,
    setSenatorialName,
    gubernationalName,
    setGubernationalName,
    zonelName,
    setZonelName,
    setParties,
  } = useContext(ModalFormContext);

  const stateRef = useRef()
  const presidentialRef = useRef()
  const senatorialRef = useRef()

  const [enableState, setEnabledState] = useState(false);
  const [enabledSenetorial, setEnabledSenetorial] = useState(false);
  const [enabledZone, setEnabledZone] = useState(false);
  const [confirmBtn, setConfirmBtn] = useState(true);
  const adminRef = useRef();

  useEffect(() => {
    adminRef.current.focus();
  }, []);
  /* Get State */
  useEffect(() => {
    const getState = async () => {
      await axios
        .get("/utilities/states/")
        .then((res) => setState(res.data))
        .catch((err) => console.log(err));
    };
    getState();
  }, [setState]);

  console.log(selectedState);
  /* Get Senetorial District */
  useEffect(() => {
    const getSenetorial = async () => {
      await axios
        .get(`/utilities/senatorial/${selectedState}`)
        .then((res) => setDistrictData(res.data))
        .catch((err) => console.log(err));
    };
    getSenetorial();
  }, [selectedState, setDistrictData]);

  /* Get Zones */
  useEffect(() => {
    const getZones = async () => {
      await axios
        .get(`/utilities/constituency/${selectedState}`)
        .then((res) => setZoneData(res.data))
        .catch((err) => console.log(err));
    };
    getZones();
  }, [selectedState, setZoneData]);

  /* Get Poll Type */
  useEffect(() => {
    const getPollType = async () => {
      await axios
        .get(`/poll/poll_category/`)
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
      await axios
        .get(`/utilities/party_list/`)
        .then((res) => {
          setPartyData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    getParty();
  }, [setPartyData]);

  /* Get Party */
  useEffect(() => {
    var presidentID = {
      pollcategory_id: pollType,
    };
    var governorshipID = {
      pollcategory_id: pollType,
      state_id: selectedState,
    };
    var senatorialID = {
      pollcategory_id: pollType,
      senatorial_id: district,
    };
    const config = () => {
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

    console.log(config());
    const getParties = async () => {
      await axios
        .post(`/poll/poll_category_party/`, config())
        .then((res) => {
          setParties(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    getParties();
    config();
  }, [setParties, pollType, district, selectedState]);

  useEffect(() => {
    var onDisabled = () => {
      if (pollType === "1") {
        setEnabledState(true);
        setEnabledSenetorial(true);
        setEnabledZone(true);
      } else if (pollType === "2") {
        setEnabledState(false);
        setEnabledSenetorial(true);
        setEnabledZone(true);
      } else if (pollType === "3") {
        setEnabledState(false);
        setEnabledSenetorial(false);
        setEnabledZone(true);
      } else if (pollType === "4") {
        setEnabledSenetorial(true);
        setEnabledZone(false);
        setEnabledState(false);
      } else {
        setEnabledSenetorial(true);
        setEnabledZone(true);
        setEnabledState(true);
      }
    };

    onDisabled();

    if (startDate !== "" && pollType === "1" && endDate !== "") {
      setConfirmBtn(false);
    } else if (startDate !== "" && pollType === "2" && selectedState !== "" && endDate !== "") { 
      setConfirmBtn(false);
    } else if (
      startDate !== "" &&
      pollType === "3" &&
      selectedState !== "" &&
      district !== "" &&
      endDate !== ""
    ) {
      setConfirmBtn(false);
    } else if (
      startDate !== "" &&
      pollType === "3" &&
      selectedState !== "" &&
      zone !== "" &&
      endDate !== ""
    ) {
      setConfirmBtn(false);
    } else {
      setConfirmBtn(true);
    }
  }, [startDate, endDate, pollType, district, selectedState, zone]);

  useEffect(() => {
    if (pollType === "1") {
      setPollName(presidentialName);
    } else if (pollType === "2") {
      setPollName(`${gubernationalName} State Gubernational Poll`);
    } else if (pollType === "3") {
      setPollName(`${senatorialName} Senatorial Poll`);
    } else {
      setPollName(`${zonelName} Zonal Poll`);
    }
  }, [
    presidentialName,
    gubernationalName,
    senatorialName,
    zonelName,
    setPollName,
    pollType,
  ]);

  // console.log('poll name: ' pollTypeName)
  // // polltype = 1 >>> pollTypeData.title[0]

  // presidentialName,
  // setPresidentialName,
  // senatorialName,
  // setSenatorialName,
  // gubernationalName,
  // setGubernationalName,
  return (
    <>
      <div className='flex flex-col justify-between items-center w-full my-2 hover:bg-transparent'>
        {/* First Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom_select_container'>
            Poll Type
            <select
              name='poll_type'
              id='poll_type'
              className='custom_select'
              value={pollType}
              required
              aria-required
              ref={adminRef}
              onChange={(e) => {
                setPollType(e.target.value);
                setPresidentialName(e.target.getAttribute("data-valueName"));
                console.log(presidentialName);
                console.log(e.target.value);
              }}
            >
              <option value='Select Poll Type'>Select Poll Type</option>
              {pollTypeData.map((poll) => {
                return (
                  <option
                    key={poll.id}
                    id={poll.id}
                    value={poll.id}
                    data-valueName={poll.title}
                  >
                    {poll.title}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/*  */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='w-full relative'>
            Start Date
            <input
              type='date'
              name='start_data'
              id='start_data'
              className='font-medium text-base text-[#616b62] uppercase h-full w-full border-2 border-gray-300 rounded-md py-3 px-3'
              placeholder='DD/MM/YY'
              value={startDate}
              required
              aria-required
              onChange={(e) => {
                setStartDate(e.target.value);
                console.log(e.target.value);
              }}
            />
          </label>
          <label className='w-full relative'>
            End Date
            <input
              type='date'
              name='end_date'
              id='end_date'
              className='font-medium text-base text-[#616b62] uppercase h-full w-full border-2 border-gray-300 rounded-md py-3 px-3'
              placeholder='DD/MM/YY'
              value={endDate}
              required
              aria-required
              onChange={(e) => {
                setEndDate(e.target.value);
                console.log(e.target.value);
              }}
            />
          </label>
        </div>

        {/* Second Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom_select_container'>
            State
            <select
              name='state'
              id='state'
              className='custom_select disabled:bg-gray-200 disabled:cursor-not-allowed'
              ref={stateRef}
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setGubernationalName(stateRef.current.attribute);
                console.log(stateRef.current.attribute);
                console.log("ref: ", gubernationalName);
                console.log(e.target.value);
                console.log("ref 2: ", e.target.dataset.valueName);
              }}
              disabled={enableState}
            >
              <option>Select State</option>
              {state.map((state) => {
                return (
                  <option
                    key={state.id}
                    value={state.id}
                    data-valueName={state.name}
                  >
                    {state.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Third Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom_select_container'>
            Senetorial District
            <select
              name='senetorial_district'
              id='senetorial_district'
              className='custom_select disabled:bg-gray-200 disabled:cursor-not-allowed'
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                setSenatorialName(e.target.getAttribute("data-valueName"));
                console.log(senatorialName);
                console.log(e.target.value);
              }}
              disabled={enabledSenetorial}
            >
              <option>Select Senetorial District</option>
              {districtData.map((data) => {
                return (
                  <option
                    key={data.id}
                    value={data.id}
                    data-valueName={data.name}
                  >
                    {data.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Final Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom_select_container'>
            Zone
            <select
              name='zone'
              id='zone'
              className='custom_select disabled:bg-gray-200 disabled:cursor-not-allowed'
              disabled={enabledZone}
              value={zone}
              onChange={(e) => {
                setZone(e.target.value);
                setZonelName(e.target.getAttribute("data-valueName"));
                console.log(zonelName);
                console.log(e.target.value);
              }}
            >
              <option value='Select Zone' data-valueName={"Zone 2"}>
                Select Zone
              </option>
              {zoneData?.map((data) => {
                return (
                  <option
                    key={data.id}
                    value={data.id}
                    data-valueName={data.name}
                  >
                    {data.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Buttons */}
        <div className='flex justify-end items-center w-full my-2'>
          <button
            className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
            onClick={() => {
              handleClose();
              setPollType("");
              setSelectedState("");
              setDistrict("");
              setStartDate("");
              setEndDate("");
              setPage(1);
            }}
          >
            cancel
          </button>
          <button
            className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed'
            disabled={confirmBtn}
            onClick={() => {
              nextPage();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePollModal;
