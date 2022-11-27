import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const TestForm = () => {
    const [pollType, setPollType] = useState();
    const [pollTypeData, setPollTypeData] = useState([]);
    const [name, setName] = useState("");
    const [state, setState] = useState([]);
    const [selectedState, setSelectedState] = useState();
    const [district, setDistrict] = useState();
    const [districtData, setDistrictData] = useState([]);
    const [candidateImage, setCandidateImage] = useState('');
    const [zone, setZone] = useState([]);
    const [partyData, setPartyData] = useState([]);
    const [party, setParty] = useState([]);
    const [zoneData, setZoneData] = useState([]);
    const [percentage, setPercentage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [mainCandidate, setMainCandidate] = useState(false);


   useEffect(() => {
     const getState = async () => {
       await Axios.get("https://wepollnow.azurewebsites.net/utilities/states/")
         .then((res) => setState(res.data))
         .catch((err) => console.log(err));
     };
     getState();
   }, [setState]);

   /* Get Senetorial District */
   useEffect(() => {
     const getSenetorial = async () => {
       await Axios.get(
         `https://wepollnow.azurewebsites.net/utilities/senatorial/`
       )
         .then((res) => setDistrictData(res.data))
         .catch((err) => console.log(err));
     };
     getSenetorial();
   }, [setDistrictData]);

   /* Get Poll Type */
   useEffect(() => {
     const getPollType = async () => {
       await Axios.get(
         `https://wepollnow.azurewebsites.net/poll/poll_category/`
       )
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
       await Axios.get(
         `https://wepollnow.azurewebsites.net/utilities/party_list/`
       )
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
  
  const handleImageChange = (e) => {
    const target = e.target.files[0]
    console.log(e.target.files);
    setCandidateImage(target)
  }
    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("candidateImage", candidateImage);
 
      await Axios.post(
        "https://wepollnow.azurewebsites.net/utilities/candidates/",
        {
          name: name,
          poll: 2,
          poll_category_id: pollType,
          state_id: selectedState,
          senatorial_id: district,
          party_id: party,
          main_candidate: mainCandidate,
          candidate_picture: formData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then((res) => {
          console.log(res);
          setSuccessMessage(true);
        })
        .catch((err) => {
          if (!err?.response) {
            setErrorMessage("No Connection");
          } else if (err.response?.status === 400) {
            setErrorMessage("Email and Password are required");
          } else if (err.response?.status === 401) {
            setErrorMessage("Unauthorized");
          } else {
            setErrorMessage("Add Candidate Failed");
          }
        });
    };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='py-2'>
          <label className='my-6 h-auto  w-full relative'>
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

        <div className='py-2'>
          <label className='my-6 h-auto  custom__select__container w-full'>
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

        <div className='py-2'>
          <label className='my-6 h-auto  w-full relative'>
            Candidate Image
            <input
              name='image'
              id='image'
              type='file'
              accept='image/jpeg,image/png,image/gif'
              onChange={(e) => {
                handleImageChange(e);
              }}
              placeholder='Enter Candidate Name'
              filename={candidateImage}
              className='font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-3 px-3 placeholder:text-[#616b62]'
            />
          </label>
        </div>

        <div className='py-2'>
          <label className='my-6 h-auto  custom__select__container w-full'>
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
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        <div className='py-2'>
          <label className='my-6 h-auto  custom__select__container w-full'>
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

        <div className='py-2'>
          <label className='my-6 h-auto  custom_select_container w-full'>
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

        <FormControl sx={{ width: "100%" }}>
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

        <div className='py-2'>
          <label className='my-6 h-auto  custom__select__container w-full'>
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

        <div className='flex justify-end items-center w-full my-2'>
          <button
            className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
            // onClick={handleCloseAddCandidate}
            type='button'
          >
            cancel
          </button>
          <button
            className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
            type='submit'
            // onClick={handleCloseAddCandidate}
          >
            continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default TestForm
