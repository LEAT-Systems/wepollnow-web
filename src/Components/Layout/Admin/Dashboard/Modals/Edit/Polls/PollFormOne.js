import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "../../../../../../../api/axios";
import ModalFormContext from "../../../../../../../ModalFormContextAdmin/ModalFormContext";

const PollFormOne = ({ open, handleClose, nextPage, setPage }) => {
  const {
    pollType,
    setPollType,
    state,
    setState,
    selectedState,
    setSelectedState,
    district,
    setDistrict,
    zone,
    setZone,
    zoneData,
    setZoneData,
    pollTypeData,
    setPollTypeData,
    districtData,
    setDistrictData,
    setPartyData,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setPollName,

    tableRowID,
    editPollData,
    setEditPollData,
    editEndDate,
    setEditEndDate,
    editStartDate,
    setEditStartDate,

    presidentialName,
    setPresidentialName,
    senatorialName,
    setSenatorialName,
    gubernationalName,
    setGubernationalName,
    zonelName,
    setZonelName,
    setParties,

    /* Edit Data's Based of Table Row Selected */
    editableID,
    setEditableID,
    editablePollData,
    setEditablePollData,
    editableStartDate,
    setEditableStartDate,
    editableEndDate,
    setEditableEndDate,
    editableState,
    setEditableState,
    editableDistrict,
    setEditableDistrict,
    editableZone,
    setEditableZone,
  } = useContext(ModalFormContext);

  const [enableState, setEnabledState] = useState(false);
  const [enabledSenetorial, setEnabledSenetorial] = useState(false);
  const [enabledZone, setEnabledZone] = useState(false);
  const [confirmBtn, setConfirmBtn] = useState(true);

  const formatDate = (string) => {
    return string.slice(0, 10); /* string.split("T", 10).join() */
  };

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
      if (pollType === "1" || editablePollData === "Presidential Poll") {
        setEnabledState(true);
        setEnabledSenetorial(true);
        setEnabledZone(true);
      } else if (
        pollType === "2" ||
        editablePollData === "Gubernatorial Poll"
      ) {
        setEnabledState(false);
        setEnabledSenetorial(true);
        setEnabledZone(true);
      } else if (pollType === "3" || editablePollData === "Senatorial Poll") {
        setEnabledState(false);
        setEnabledSenetorial(false);
        setEnabledZone(true);
      } else if (
        pollType === "4" ||
        editablePollData === "House Of Assembly Poll"
      ) {
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
    if (pollType === "1" || editablePollData === "Presidential Poll") {
      setConfirmBtn(false);
    } else if (pollType === "2" || editablePollData === "Gubernatorial Poll") {
      setConfirmBtn(false);
    } else if (pollType === "3" || editablePollData === "Senatorial Poll") {
      setConfirmBtn(false);
    } else if (
      pollType === "4" ||
      editablePollData === "House Of Assembly Poll"
    ) {
      setConfirmBtn(false);
    } else {
      setConfirmBtn(true);
    }
  }, [startDate, endDate, pollType, editablePollData]);
  console.log("Disable Button: ", confirmBtn);
  // Get Selected Poll To Edit Data
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`/poll/get_polls/${tableRowID}`)
        .then((res) => {
          console.log(res);
          setEditPollData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [setEditPollData, tableRowID]);

  console.log("Edit Start Date: ", editableStartDate);
  console.log("Edit End Date: ", editableEndDate);
  // Fetch Data For Table Row Based on Table Row Selected
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`/poll/rud_poll/${tableRowID}`)
        .then((res) => {
          console.log(res);
          setEditableID(res?.data?.id);
          setEditablePollData(res?.data?.poll_category?.title);

          setEditableStartDate(
            res?.data?.poll_date !== null && formatDate(res?.data?.poll_date)
          );
          setEditableEndDate(
            res?.data?.[0]?.poll_endDate !== null &&
              formatDate(res?.data?.poll_endDate)
          );
          setEditableState(
            res?.data?.poll_state?.name !== null && res?.data?.poll_state?.name
          );
          setGubernationalName(
            res?.data?.poll_state?.name !== null && res?.data?.poll_state?.name
          );
          setSenatorialName(
            res?.data?.poll_senatorial_district !== null &&
              res?.data?.poll_senatorial_district?.name
          );
          setEditableDistrict(
            res?.data?.poll_senatorial_district !== null &&
              res?.data?.poll_senatorial_district?.name
          );
          /* setEditableZone("") 
          setEditPollData(res.data); */

          // Set default values to the state
          setPollType(res?.data?.poll_category?.id);
          setSelectedState(
            res?.data?.poll_state?.id !== null && res?.data?.poll_state?.id
          );
          setDistrict(
            res?.data?.poll_senatorial_district !== null &&
              res?.data?.poll_senatorial_district?.id
          );
          setStartDate(res?.data?.poll_date !== null && res?.data?.poll_date);
          setEndDate(
            res?.data?.[0]?.poll_endDate !== null && res?.data?.poll_endDate
          );
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [
    setEditableID,
    setEditableState,
    setEditableEndDate,
    setEditableDistrict,
    tableRowID,
    setEditableStartDate,
    setEditablePollData,
  ]);

  console.log("Edit Poll Data : ", editPollData);

  useEffect(() => {
    if (pollType === "1" || pollType === 1) {
      setPollName(presidentialName);
    } else if (pollType === "2" || pollType === 2) {
      setPollName(`${gubernationalName} State Gubernatorial Poll`);
    } else if (pollType === "3" || pollType === 3) {
      setPollName(`${senatorialName} Senatorial Poll`);
    } else {
      setPollName(`${zonelName} House of Assembly Poll`);
    }
  }, [
    presidentialName,
    gubernationalName,
    senatorialName,
    zonelName,
    setPollName,
    pollType,
  ]);

  console.log("Git Poll Type : ", pollType);
  console.log("Poll Name" + presidentialName);
  console.log("Poll Name: " + gubernationalName);
  console.log("Poll Name: " + senatorialName);
  console.log("Poll Name: " + zonelName);
  return (
    <>
      <div className="flex flex-col justify-between items-center w-full my-2 hover:bg-transparent">
        {/* First Form */}
        <div className="flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5">
          <label className="custom_select_container">
            Poll Type
            <select
              name="poll_type"
              id="poll_type"
              className="custom_select"
              value={pollType} /* empty string > 1, 2, 3, 4, 5 */
              required
              ref={adminRef}
              aria-required
              onChange={(e) => {
                setPollType(e.target.value);
                setPresidentialName(
                  e.target.options[e.target.selectedIndex].getAttribute(
                    "data-valuename"
                  )
                );
                console.log(e.target.value);
              }}
            >
              {pollTypeData.map((poll) => {
                return (
                  <option
                    key={poll.id}
                    id={poll.id}
                    value={poll.id}
                    data-valuename={poll.title}
                  >
                    {poll.title}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/*  */}
        <div className="flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5">
          <label className="w-full relative">
            Start Date
            <input
              type="date"
              name="start_data"
              id="start_data"
              className="font-medium text-base text-[#616b62] uppercase h-full w-full border-2 border-gray-300 rounded-md py-3 px-3"
              placeholder="DD/MM/YY"
              value={editableStartDate}
              required
              aria-required
              onChange={(e) => {
                setEditableStartDate(e.target.value);
                console.log("Edit Start Date: ", editStartDate);
                console.log(e.target.value);
              }}
            />
          </label>
          <label className="w-full relative">
            End Date
            <input
              type="date"
              name="end_date"
              id="end_date"
              className="font-medium text-base text-[#616b62] uppercase h-full w-full border-2 border-gray-300 rounded-md py-3 px-3"
              placeholder="DD/MM/YY"
              value={editableEndDate}
              required
              aria-required
              onChange={(e) => {
                setEditableEndDate(e.target.value);
                console.log("Edit End Date:", editEndDate);
                console.log(e.target.value);
              }}
            />
          </label>
        </div>

        {/* Second Form */}
        <div className="flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5">
          <label className="custom_select_container">
            State
            <select
              name="state"
              id="state"
              className="custom_select disabled:bg-gray-200 disabled:cursor-not-allowed"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setGubernationalName(
                  e.target.options[e.target.selectedIndex].getAttribute(
                    "data-valuename"
                  )
                );
                console.log(e.target.value);
              }}
              disabled={enableState}
            >
              {state?.map((state) => {
                return (
                  <option
                    key={state.id}
                    data-id={state.id}
                    data-valuename={state.name}
                    value={state.id}
                  >
                    {state.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Third Form */}
        <div className="flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5">
          <label className="custom_select_container">
            Senetorial District
            <select
              name="senetorial_district"
              id="senetorial_district"
              className="custom_select disabled:bg-gray-200 disabled:cursor-not-allowed"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                setSenatorialName(
                  e.target.options[e.target.selectedIndex].getAttribute(
                    "data-valuename"
                  )
                );
                console.log(e.target.value);
              }}
              disabled={enabledSenetorial}
            >
              {districtData.map((data) => {
                return (
                  <option
                    key={data.id}
                    value={data.id}
                    data-valuename={data.name}
                  >
                    {data.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Final Form */}
        <div className="flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5">
          <label className="custom_select_container">
            Zone
            <select
              name="zone"
              id="zone"
              className="custom_select disabled:bg-gray-200 disabled:cursor-not-allowed"
              disabled={enabledZone}
              value={zone}
              onChange={(e) => {
                setZone(e.target.value);
                setZonelName(
                  e.target.options[e.target.selectedIndex].getAttribute(
                    "data-valuename"
                  )
                );
                console.log(e.target.value);
              }}
            >
              {zoneData?.map((data) => {
                return (
                  <option
                    key={data.id}
                    value={data.id}
                    data-valuename={data.name}
                  >
                    {data.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center w-full my-2">
          <button
            className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full"
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
            className="flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed"
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

export default PollFormOne;
