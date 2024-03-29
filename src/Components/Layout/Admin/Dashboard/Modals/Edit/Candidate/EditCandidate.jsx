/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";
import { Close } from "@mui/icons-material";
import { Checkbox, Modal } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { FormControl, FormControlLabel } from "@mui/material";
import axios from "../../../../../../../api/axios";
import swal from "sweetalert";
import ModalFormContext from "../../../../../../../ModalFormContextAdmin/ModalFormContext";

const EditCandidate = ({ open, close }) => {
  /* Handling the form input and data */
  const [pollType, setPollType] = useState();
  const [pollTypeData, setPollTypeData] = useState([]);
  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [district, setDistrict] = useState();
  const [districtData, setDistrictData] = useState([]);
  const [candidateImage, setCandidateImage] = useState(null);
  const [zone, setZone] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [partyData, setPartyData] = useState([]);
  const [party, setParty] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [mainCandidate, setMainCandidate] = useState(false);
  const { candidateID, setCandidateID } = useContext(ModalFormContext);
  const [editData, setEditData] = useState([]);


  // Newly added: Handler to listen to file change
  // const handleFileChange = (file) => {
  //   setFile(file);
  // };

  // Newly added: Allowable file types
  const fileTypes = ["JPG", "PNG", "JPEG"];

  const [enableState, setEnabledState] = useState(false);
  const [enabledSenetorial, setEnabledSenetorial] = useState(false);
  const [enabledZone, setEnabledZone] = useState(false);
  const [confirmBtn, setConfirmBtn] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  if (selectedState === undefined) {
    setSelectedState("");
  }

  useEffect(() => {
    const getState = async () => {
      await axios
        .get("/utilities/states/")
        .then((res) => setState(res.data))
        .catch((err) => console.log(err));
    };
    getState();
  }, [setState]);

  /* Get Senetorial District */
  useEffect(() => {
    const getSenetorial = async () => {
      await axios
        .get(`/utilities/senatorial/${selectedState}`, {
          state_id: selectedState,
        })
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
        })
        .catch((err) => console.log(err));
    };
    getParty();
  }, [setPartyData]);

  /* Submit Form */
  useEffect(() => {
    setErrorMessage("");
  }, [name, candidateImage, selectedState, district, pollType]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`/utilities/rud_candidate/${candidateID}`, {
        name: name,
        poll: 2,
        poll_category_id: pollType,
        state_id_id: selectedState,
        senatorial_id_id: district,
        party_id: party,
        main_candidate: mainCandidate,
        // candidate_picture: file,
      })
      .then((res) => {
        console.log(res);
        swal({
          title: "Success",
          text: "Candidate Details Modified!",
          icon: "success",
          buttons: [
            {
              color: "success",
              label: "OK",
              isCancel: true,
            },
          ],
        });
        setName("");
        setPollType("");
        setSelectedState("");
        setDistrict("");
        setParty("");
        setMainCandidate(false);
        setSuccessMessage(true);
      })
      .catch((err) => {
        if (!err?.response) {
          setErrorMessage("No Connection");
          swal({
            title: "Failure",
            text: "No Internet Connection",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else if (err.response?.status === 400) {
          setErrorMessage("Email and Password are required");
          swal({
            title: "Failure",
            text: "All Fields Are Required!",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else if (err.response?.status === 401) {
          setErrorMessage("Unauthorized");
          swal({
            title: "Failure",
            text: "Action Unauthorized!",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else {
          setErrorMessage("Add Candidate Failed");
          swal({
            title: "Failure",
            text: "Candidate Details Modification Failed",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        }
      });

    // window.location.reload();
  };

  useEffect(() => {
    var onDisabled = () => {
      if (pollType === "1" || pollType === 1) {
        setEnabledState(true);
        setEnabledSenetorial(true);
        setEnabledZone(true);
      } else if (pollType === "2" || pollType === 2) {
        setEnabledState(false);
        setEnabledSenetorial(true);
        setEnabledZone(true);
      } else if (pollType === "3" || pollType === 3) {
        setEnabledState(false);
        setEnabledSenetorial(false);
        setEnabledZone(true);
      } else {
        setEnabledSenetorial(true);
        setEnabledZone(false);
        setEnabledState(false);
      }
    };

    onDisabled();

    if (name !== "" || pollType !== "") {
      setConfirmBtn(false);
    } else {
      setConfirmBtn(true);
    }
  }, [name, pollType]);

  // Fetch Data For Table Row Based on Table Row Selected
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`/utilities/rud_candidate/${candidateID}`)
        .then((res) => {
          console.log(res);
          setEditData(res?.data);
          setName(res?.data?.name);
          setPollType(res?.data?.poll_category?.id);
          setSelectedState(res?.data?.state_id?.id);
          setDistrict(res?.data?.senatorial_id?.id);
          setParty(res?.data?.party?.id);
          setMainCandidate(res?.data?.main_candidate);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, [
    setEditData,
    setName,
    setDistrict,
    setParty,
    setPollType,
    pollType,
    party,
    district,
    name,
    mainCandidate,
    candidateID,
  ]);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Modal
        open={open}
        onClose={() => {
          close();
          setName("");
          setPollType("");
          setSelectedState("");
          setDistrict("");
          setParty("");
          setMainCandidate(false);
        }}
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
        <div className="flex flex-col items-start justify-start px-6 py-4 my-auto mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/6 bg-white rounded-lg overflow-y-auto focus:outline-none">
          <header className="flex items-center justify-between w-full py-2 mb-3 border-b-2 border-gray-300 border-solid">
            <h2 className="font-extrabold text-lg md:text-xl text-[#082a0f] capitalize">
              Edit Candidate Details
            </h2>
            <button
              className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500"
              onClick={() => {
                close();
                setName("");
                setPollType("");
                setSelectedState("");
                setDistrict("");
                setParty("");
                setMainCandidate(false);
              }}
              type="button"
            >
              <Close />
            </button>
          </header>

          {/*  */}
          <div className="w-full">
            <div className="py-2">
              <label className="relative w-full h-auto my-6">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Candidate Name"
                  required
                  aria-required
                  value={name}
                  ref={inputRef}
                  onChange={(e) => setName(e.target.value)}
                  className="font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-3 px-3 placeholder:text-[#616b62]"
                />
              </label>
            </div>

            <div className="py-2">
              <label className="w-full h-auto my-6 custom__select__container">
                Poll Type
                <select
                  name="poll__type"
                  id="poll__type"
                  required
                  aria-required
                  value={pollType}
                  onChange={(e) => {
                    setPollType(e.target.value);
                  }}
                  className="custom__select"
                >
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

            <div className="py-2">
              <label className="w-full h-auto my-6 custom__select__container">
                State
                <select
                  name="state"
                  id="state"
                  className="custom__select disabled:bg-gray-200 disabled:cursor-not-allowed"
                  required
                  aria-required
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                  }}
                  disabled={enableState}
                >
                  {state.map((state) => {
                    return (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div className="py-2">
              <label className="w-full h-auto my-6 custom__select__container">
                Senetorial District
                <select
                  name="district"
                  id="district"
                  className="custom__select disabled:bg-gray-200 disabled:cursor-not-allowed"
                  required
                  aria-required
                  value={district}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                  disabled={enabledSenetorial}
                >
                  <option value={editData?.senatorial_id?.id}>
                    {editData?.senatorial_id?.name}
                  </option>
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

            <div className="py-2">
              <label className="w-full h-auto my-6 custom__select__container">
                Zone
                <select
                  name="zone"
                  id="zone"
                  className="custom_select disabled:bg-gray-200 disabled:cursor-not-allowed"
                  value={zone}
                  onChange={(e) => {
                    setZone(e.target.value);
                  }}
                  disabled={enabledZone}
                >
                  {zoneData.map((data) => {
                    return (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div className="py-2">
              <label className="w-full h-auto my-6 custom_select_container">
                Party
                <select
                  name="party"
                  id="party"
                  className="custom_select"
                  value={party}
                  onChange={(e) => {
                    setParty(e.target.value);
                  }}
                >
                  {partyData.map((data) => {
                    return (
                      <option key={data.id} value={data.id}>
                        {`${data.name}  (${data.abbr})`}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <FormControl sx={{ width: "100%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#616b62",
                      "&.Mui-checked": {
                        color: "#616b62",
                      },
                    }}
                    checked={mainCandidate}
                    value={mainCandidate}
                    onChange={(e) => {
                      setMainCandidate(e.target.checked);
                    }}
                  />
                }
                label="Main Candidate"
              />
            </FormControl>
          </div>
          <div className="flex items-center justify-end w-full my-2">
            <button
              className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full "
              onClick={() => {
                close();
                setName("");
                setPollType("");
                setSelectedState("");
                setDistrict("");
                setParty("");
                setMainCandidate(false);
              }}
              type="button"
            >
              cancel
            </button>
            <button
              className="flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out bg-green-500 rounded-md cursor-pointer duration-400 hover:bg-green-500 hover:text-white hover:rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed"
              type="submit"
              disabled={confirmBtn}
              onClick={(e) => {
                close();
                handleSubmit(e);
              }}
            >
              Edit Candidate
            </button>
          </div>
        </div>
      </Modal>
    </form>
  );
};

export default EditCandidate;
