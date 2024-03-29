/** @format */

import React, { useState, useEffect } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/pollsBanner.png";
import Timer from "../../UI/Timer";
import calendar from "../../images/calendar.png";
import { useHistory } from "react-router-dom";
import ModalComponent from "../landingPages/GettingStartedModal";
import tooltipIcon from "../../images/tooltip.png";
import { baseUrl } from "../../store/baseUrl";

// Unique ID from local storage

const AllPolls = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [idExist, setIdExist] = useState("");
  const [tooltipStatus, setTooltipStatus] = useState(0);

  useEffect(() => {
    setIdExist(localStorage.getItem("uniqueID"));

    console.log(idExist);

    let requestOptions = {};
    if (idExist === null) {
      requestOptions = {
        method: "POST",
        //body: formData,
      };
    } else {
      let formData = new FormData();
      formData.append("voter_id", `${idExist}`);
      requestOptions = {
        method: "POST",
        body: formData,
      };
    }

    const getData = async () => {
      const response = await fetch(
        baseUrl + `poll/user_polls/`,
        requestOptions
      );
      const result = await response.text();
      const JSONdata = await JSON.parse(result);
      console.log(result, JSONdata);

      if (!response.ok) {
        alert("Error: Unable To Fetch Polls Data");
      } else {
        setData(JSONdata);
      }
    };
    getData();
  }, [idExist]);

  // ==================  To check if api data is empty
  const isEmpty = data.length === 0;

  // ================== Open and close modal
  const handleOpen = () => {
    if (idExist === null || idExist === undefined) {
      setOpen(true);
    } else {
      // make API request with unique ID
      history.push("/vote", { replace: true });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  // ===================    JSX    ==============================
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <ModalComponent open={open} handleClose={handleClose} />
      <Nav bg="FCEBEE" bgImg="hero-container-pattern" hamburgerBg="FCEBEE" />
      <div className="flex flex-row items-center justify-between mx-auto bg-[#EDFFF0] md:bg-[#FCEBEE] bg-hero-container-pattern">
        <div className="flex flex-col px-4 space-y-2 md:px-24">
          <div className="relative flex flex-row items-center justify-start space-x-2">
            <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[6px]">
              Available Polls
            </p>
            <img
              src={tooltipIcon}
              alt="tooltipIcon"
              onMouseEnter={() => setTooltipStatus(1)}
              onMouseLeave={() => setTooltipStatus(0)}
            />
            {tooltipStatus === 1 && (
              <div
                role="tooltip"
                className="absolute -mt-24 text-white transition duration-150 ease-in-out bg-black rounded shadow-lg"
              >
                <p className="p-2 text-xs font-normal md:text-lg">
                  Polls in this section have been sorted according to your
                  voting location.
                </p>
              </div>
            )}
          </div>
          <h1 className="max-w-full md:max-w-xl leading-none md:leading-tight text-[16px] md:text-5xl font-extrabold">
            Select a poll you want to participate
          </h1>
        </div>
        <div className="z-10 flex md:-mt-36">
          <img
            src={image}
            className="w-full md:h-[500px]"
            loading="lazy"
            alt={"Voter"}
          />
        </div>
      </div>
      {/* ==============   GRID FOR ARRANGING ITEMS  ===================*/}
      {isEmpty && (
        <div className="flex flex-row items-center justify-center mt-48">
          <div className="border-8 border-[#EAB308] w-2/3 p-12">
            <p className="text-sm md:text-2xl">
              No polls available at the moment...
            </p>
          </div>
        </div>
      )}
      <div className="grid min-h-[50vh] grid-cols-1 pb-12 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 md:px-24 md:gap-x-12 ">
        {data?.map((item) => {
          // Here, I'm calculating the poll date from the current date so i could render items conditionally
          let due;
          const now = new Date().getTime();
          const distance = new Date(item.poll_date).getTime() - now;
          due = distance < 0;

          // Storing Polltype clicked on button into local storage
          const poll_name = item.poll_name;
          const poll_id = item.id;
          const handler = () => {
            localStorage.setItem(
              "poll_details",
              JSON.stringify({
                poll_id: poll_id,
                poll_name: poll_name,
              })
            );
          };

          return (
            <div
              className="flex flex-col items-center justify-center p-4 space-y-2 md:flex-row md:px-0 hover:-translate-y-1"
              key={item.id}
            >
              <div className="flex flex-col items-center justify-center w-full py-12 space-y-4 rounded-lg h-72 bg-polls-pattern">
                {!due && (
                  <p className="text-xl font-bold text-center text-white">
                    {item.poll_name}
                  </p>
                )}
                <div
                  className={`flex flex-row items-center justify-center space-x-2 px-4 p-1 ${
                    due
                      ? "bg-[#EDFFF0] border-[#08c127]"
                      : "bg-[#FFFAED] border-[#f9c833]"
                  } border rounded-md`}
                >
                  {!due && <img src={calendar} alt="calendarIcon" />}
                  <label className="text-[14px]">
                    <p className="font-normal">
                      {due ? "Ongoing" : item.poll_date}
                    </p>
                  </label>
                </div>
                {due && (
                  <p className="text-xl font-bold text-center text-white">
                    {item.poll_name}
                  </p>
                )}
                <div className="px-2">
                  {!due ? (
                    <Timer
                      date={item.poll_date}
                      size="2xl"
                      pcolor="white"
                      color="white"
                    />
                  ) : (
                    <button
                      onClick={() => {
                        handleOpen();
                        handler();
                      }}
                      className="btn-stay animate"
                    >
                      Vote Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default AllPolls;
