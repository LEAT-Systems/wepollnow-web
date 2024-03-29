import React, { useState, useEffect, useRef } from "react";
import { Close } from "@mui/icons-material";
import { Checkbox, Modal } from "@mui/material";
// import { FileUploader } from "react-drag-drop-files";
import { FormControl, FormControlLabel } from "@mui/material";
import axios from "../../../../../api/axios";
import swal from "sweetalert";

const AddCandidateModal = ({ addCandidate, handleCloseAddCandidate }) => {
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
  const [partyData, setPartyData] = useState([]);
  const [party, setParty] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [mainCandidate, setMainCandidate] = useState(false);
  // newly added states
  const [file, setFile] = useState(null);


  // // Newly added: Handler to listen to file change
  // const handleFileChange = (file) => {
  //   setFile(file);
  // };

  // // Newly added: Allowable file types
  // const fileTypes = ["JPG", "PNG", "JPEG"];

  const [enableState, setEnabledState] = useState(false);
  const [enabledSenetorial, setEnabledSenetorial] = useState(false);
  const [enabledZone, setEnabledZone] = useState(false);
  const [confirmBtn, setConfirmBtn] = useState(true);
  const adminRef = useRef();

  useEffect(() => {
    adminRef?.current?.focus();
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

        var presidentID = {
          name: name,
          poll: "",
          poll_category_id: pollType,
          party_id: party,
          main_candidate: mainCandidate,
        };
        var governorshipID = {
          name: name,
          poll: "",
          poll_category_id: pollType,
          state_id_id: selectedState,
          party_id: party,
          main_candidate: mainCandidate,
        };
        var senatorialID = {
          name: name,
          poll: "",
          poll_category_id: pollType,
          state_id_id: selectedState,
          senatorial_id_id: district,
          party_id: party,
          main_candidate: mainCandidate,
        };
        var zoneID = {
          name: name,
          poll: "",
          poll_category_id: pollType,
          state_id_id: selectedState,
          zone_id_id: district,
          party_id: party,
          main_candidate: mainCandidate,
        };

    
    
        const config = () => {
          if (pollType === "1") {
            return presidentID;
          } else if (pollType === "2") {
            return governorshipID;
          } else if (pollType === "3") {
            return senatorialID;
          } else if (pollType === "4") { 
            return zoneID;
          } else {
            return presidentID;
          }
    };
    
    await axios
      .post(
        "/utilities/candidates/",
        /* {
        name: name,
        poll: 2,
        poll_category_id: pollType ,
        state_id_id: selectedState,
        senatorial_id_id: district,
        party_id: party,
        main_candidate: mainCandidate,
        // candidate_picture: file,
      } */ config()
      )
      .then((res) => {
        console.log(res);
        swal({
          title: "Success",
          text: "New Candidate Added!",
          icon: "success",
          button: "Ok",
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
            title: "Error",
            text: "Check Your Internet Connection",
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
          setSuccessMessage("Something went wrong");
          console.log(err);
          swal({
            title: "Error",
            text: "Something went wrong",
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
          setSuccessMessage("Unauthorized");
          console.log(err);
          swal({
            title: "Error",
            text: "Check Your Internet Connection",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else if (err.response?.status === 500) {
          setSuccessMessage("Internal server error");
          console.log(err);
          swal({
            title: "Error",
            text: "Internal server error",
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
            title: "Error",
            text: "Add Candidate Failed",
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

    window.location.reload()
  };

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

  // const token = async () => {
  //   try {
  //     const response = await axios.post(
  //       "/utilities/candidates/",
  //       {
  //         name: name,
  //         poll: null,
  //         poll_category: pollType,
  //         state_id: selectedState,
  //         senatorial_id: district,
  //         main_candidate: mainCandidate,
  //         candidate_picture: candidateImage,
  //       },
  //       {
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     // clear state and controlled inputs
  //     setName("");
  //     setPollType("");
  //     setCandidateImage("");
  //     setSelectedState("");
  //     setDistrict("");
  //     setSuccessMessage(true);
  //     return response;
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrorMessage("No Connection");
  //     } else if (err.response?.status === 400) {
  //       setErrorMessage("Email and Password are required");
  //     } else if (err.response?.status === 401) {
  //       setErrorMessage("Unauthorized");
  //     } else {
  //       setErrorMessage("Add Candidate Failed");
  //     }
  //     errRef.current.focus();
  //   }
  // };

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <Modal
        open={addCandidate}
        onClose={() => {
          handleCloseAddCandidate();
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
        <div className='flex flex-col items-start justify-start px-6 py-4 my-auto mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/6 bg-white rounded-lg overflow-y-auto focus:outline-none'>
          <header className='flex items-center justify-between w-full py-2 mb-3 border-b-2 border-gray-300 border-solid'>
            <h2 className='font-extrabold text-lg md:text-xl text-[#082a0f] capitalize'>
              Add Candidate
            </h2>
            <button
              className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500'
              onClick={() => {
                handleCloseAddCandidate();
                setName("");
                setPollType("");
                setSelectedState("");
                setDistrict("");
                setParty("");
                setMainCandidate(false);
              }}
              type='button'
            >
              <Close />
            </button>
          </header>

          {/*  */}
          <div className='w-full'>
            <div className='py-2'>
              <label className='relative w-full h-auto my-6'>
                Name
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Candidate Name'
                  required
                  aria-required
                  value={name}
                  ref={adminRef}
                  onChange={(e) => setName(e.target.value)}
                  className='font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-3 px-3 placeholder:text-[#616b62]'
                />
              </label>
            </div>

            <div className='py-2'>
              <label className='w-full h-auto my-6 custom__select__container'>
                Poll Type
                <select
                  name='poll__type'
                  id='poll__type'
                  required
                  aria-required
                  value={pollType}
                  onChange={(e) => {
                    setPollType(e.target.value);
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

            {/* <div className="py-2">
              <label className="relative w-full h-auto my-6">
                Candidate Image (Max size 2MB (png, jpg, jpeg))
                <FileUploader
                  onTypeError={(err) => setFileError(err)}
                  onDrop={(file) => setFileName(file.name)}
                  onSelect={(file) => setFileName(file.name)}
                  handleChange={handleFileChange}
                  name="file"
                  types={fileTypes}
                  maxSize={2}
                >
                  <div className="font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-3 px-3 placeholder:text-[#616b62]">
                    <div className="flex flex-row space-x-2">
                      <button className="px-2 border">Select a file</button>{" "}
                      <p>{fileName === "" ? "No File Selected" : fileName}</p>
                      <p className="p-1 text-red-500 rounded">
                        {fileName === "" && fileError !== "" && fileError}
                      </p>
                    </div>
                  </div>
                </FileUploader>
              </label>
            </div> */}

            <div className='py-2'>
              <label className='w-full h-auto my-6 custom__select__container'>
                State
                <select
                  name='state'
                  id='state'
                  className='custom__select disabled:bg-gray-200 disabled:cursor-not-allowed'
                  required
                  aria-required
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                  }}
                  disabled={enableState}
                >
                  <option>Select State</option>
                  {state.map((state) => {
                    return (
                      <option
                        key={state.id}
                        data-id={state.id}
                        value={state.id}
                      >
                        {state.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div className='py-2'>
              <label className='w-full h-auto my-6 custom__select__container'>
                Senetorial District
                <select
                  name='district'
                  id='district'
                  className='custom__select disabled:bg-gray-200 disabled:cursor-not-allowed'
                  required
                  aria-required
                  value={district}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                  disabled={enabledSenetorial}
                >
                  <option>Select Senetorial District</option>
                  {districtData.map((data) => {
                    return (
                      <option key={data.id} data-id={data.id} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div className='py-2'>
              <label className='w-full h-auto my-6 custom__select__container'>
                Zone
                <select
                  name='zone'
                  id='zone'
                  className='custom_select disabled:bg-gray-200 disabled:cursor-not-allowed'
                  value={zone}
                  onChange={(e) => {
                    setZone(e.target.value);
                  }}
                  disabled={enabledZone}
                >
                  <option>Select Zone</option>
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

            <div className='py-2'>
              <label className='w-full h-auto my-6 custom_select_container'>
                Party
                <select
                  name='party'
                  id='party'
                  className='custom_select'
                  value={party}
                  onChange={(e) => {
                    setParty(e.target.value);
                  }}
                >
                  <option>Select Party</option>
                  {partyData.map((data) => {
                    return (
                      <option key={data.id} data-id={data.id} value={data.id}>
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
                    value={!mainCandidate}
                    onChange={(e) => {
                      setMainCandidate(e.target.checked);
                    }}
                  />
                }
                label='Running Mate'
              />
            </FormControl>
          </div>
          <div className='flex items-center justify-end w-full my-2'>
            <button
              className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full '
              onClick={() => {
                handleCloseAddCandidate();
                setName("");
                setPollType("");
                setSelectedState("");
                setDistrict("");
                setParty("");
                setMainCandidate(false);
              }}
              type='button'
            >
              cancel
            </button>
            <button
              className='flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out bg-green-500 rounded-md cursor-pointer duration-400 hover:bg-green-500 hover:text-white hover:rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed'
              type='submit'
              disabled={confirmBtn}
              onClick={(e) => {
                handleSubmit(e);
                handleCloseAddCandidate();
              }}
            >
              continue
            </button>
          </div>
        </div>
      </Modal>
    </form>
  );
};

export default AddCandidateModal;
