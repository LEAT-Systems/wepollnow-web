/** @format */

import React, { useContext, useEffect, useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import ModalFormContext from "../../../../../ModalFormContextAdmin/ModalFormContext";
import axios from "axios";
import swal from "sweetalert";

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

const AddPollModal = ({
  open,
  handleClose,
  nextPage,
  prevPage,
  modalData,
  setPage,
}) => {
  const {
    pollType,
    selectedState,
    district,
    startDate,
    endDate,
    parties,
    setSuccessMessage,
    setPollType,
    setSelectedState,
    setDistrict,
    setStartDate,
    setEndDate,
  } = useContext(ModalFormContext);

  const [parti, setParti] = useState([]);
  const [candi, setCandi] = useState([]);

  useEffect(() => {
    let newNameArray = [];
    let newPartyArray = [];

    parties?.forEach((element) => {
      for (var i = 0; i < element.partyCandidate.length; i++) {
        let name = element.partyCandidate[i].id;
        // Object.keys(name);
        newNameArray.push(name);
      }

      // var name1 = element.partyCandidate[0].id;
      // var name2 = element.partyCandidate[1].id;
      var par = element.id;

      // Object.keys(name1);
      // Object.keys(name2);

      // newNameArray.push(name1, name2);
      newPartyArray.push(par);

      // if (name1.length === 0 && name2.length >= 1) {
      //   var names = [name1, ...name2];
      // } else if (name1.length >= 1 && name2.length === 0) {
      //   names = [...name1, name2];
      // } else if (name1.length >= 1 && name2.length >= 1) {
      //   names = [...name1, ...name2];
      // } else {
      //   names = [name1, name2];
      // }
    });
    setCandi(newNameArray);
    setParti(newPartyArray);
  }, [parties]);

  console.log("Parties: ", parti);
  console.log("Candidates: ", candi);

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
    party: parti,
    candidate: candi,
    poll_name: `Presidential Poll`,
  };
  var governorshipID = {
    poll_category_id: pollType,
    poll_state: selectedState,
    poll_startDate: startDate,
    poll_endDate: endDate,
    status: 1,
    party: parti,
    candidate: candi,
    poll_name: `Governorship Poll`,
  };
  var senatorialID = {
    poll_category_id: pollType,
    poll_senatorial_district: district,
    poll_startDate: startDate,
    poll_endDate: endDate,
    status: 1,
    party: parti,
    candidate: candi,
    poll_name: `Senatorial Poll`
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`https://wepollnow.azurewebsites.net/poll/create_poll/`, config())
      // .then((res) => {
      //   setSuccessMessage(res.status);
      //   console.log(res.data);
      // })
      // .catch((err) => console.log(err));
      .then((res) => {
        console.log(res);
        swal({
          title: "Success",
          text: "New Poll Added Successfully!",
          icon: "success",
          button: "Ok",
        });
        setPollType("");
        setSelectedState("");
        setDistrict("");
        setStartDate("");
        setEndDate("");
        setSuccessMessage(true);
      })
      .catch((err) => {
        if (!err?.response) {
          setSuccessMessage("No Connection");
          console.log(err);
          swal({
            title: "Success",
            text: "No Internet Connection",
            icon: "error",
            button: "Ok",
          });
        } else if (err.response?.status === 400) {
          setSuccessMessage("Email and Password are required");
          console.log(err);
          swal({
            title: "Failure",
            text: "All fields are required!",
            icon: "error",
            button: "Ok",
          });
        } else if (err.response?.status === 401) {
          setSuccessMessage("Unauthorized");
          console.log(err);
          swal({
            title: "Failure",
            text: "Unauthorized",
            icon: "error",
            button: "Ok",
          });
        } else {
          setSuccessMessage("Add Candidate Failed");
          console.log(err);
          swal({
            title: "Failure",
            text: "Adding New Poll Failed",
            icon: "error",
            button: "Ok",
          });
        }
      });
    
    window.location.reload();
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
        {parties.length < 1 ? (
          <h3 className='w-full font-base text-red-400 text-center'>
            No candidate exist for intended poll!
          </h3>
        ) : (
          <>
            {parties?.map((data) => {
              return (
                <div
                  className='flex flex-col md:flex-col my-2 justify-center items-center w-full gap-3 md:gap-5 border rounded-md p-3'
                  key={data.id}
                  value={data.id}
                >
                  <div className='flex items-center w-full border-b my-auto pb-2'>
                    {/* Party Logo */}
                    <img
                      src={`https://wepollnow.azurewebsites.net${data.logo}`}
                      alt='Political Party'
                      className='w-[2.3rem] aspect-square rounded-sm'
                    />
                    {/* Party Name */}
                    <h2 className='text-base px-4 text-[#616b62]'>
                      {data.name}
                    </h2>
                  </div>

                  {/* Second Form */}

                  <div className='w-full'>
                    <div className='flex justify-between align-center'>
                      <h3 className='font-bold my-auto text-base text-[#000] whitespace-nowrap'>
                        {data?.partyCandidate[0].name}
                      </h3>
                      <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                        Main
                      </h3>
                    </div>
                    {data.partyCandidate.length > 1 && (
                      <div className='flex justify-between align-center'>
                        <h3 className='font-bold my-auto text-base text-[#000] whitespace-nowrap'>
                          {data?.partyCandidate[1]?.name}
                        </h3>
                        <h3 className='font-bold my-auto text-sm text-[#616b62] whitespace-nowrap'>
                          Running Mate
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}

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
            className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
            onClick={(e) => {
              handleClose();
              handleSubmit(e);
              setPage(1);
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
