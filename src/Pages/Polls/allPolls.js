import React, { useState, useEffect } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Polls } from "./pollsObject";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/pollsBanner.png";
import Timer from "../../UI/Timer";
import calendar from "../../images/calendar.png";
import { useHistory } from "react-router-dom";

const AllPolls = (props) => {
  const history = useHistory();
  const [data, setData] = useState([]);

  // Setting data from API here
  useEffect(() => {
    setData([]);
  }, []);

  // TO check if contents are empty
  const isEmpty = data.length === 0;
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Nav bg="FCEBEE" bgImg="hero-container-pattern" hamburgerBg="FCEBEE" />
      <div className="flex flex-row items-center justify-between mx-auto bg-[#FCEBEE] bg-hero-container-pattern">
        <div className="flex flex-col px-4 space-y-2 md:px-24">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[6px]">
            Available Polls
          </p>
          <h1 className="max-w-full md:max-w-xl leading-none md:leading-tight text-[16px] md:text-5xl font-extrabold">
            Select a poll you want to participate
          </h1>
        </div>
        <div className="z-10 flex md:-mt-36">
          <img src={image} className="w-full md:h-[500px]" alt={"Voter"} />
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
      <div className="grid grid-cols-1 pb-12 md:mb-12 mt-12 gap-y-4 gap-x-12 md:px-24 md:gap-x-12 md:grid-cols-3 h-screen">
        {data.map((item) => {
          // Here, I'm calculating the poll date from the current date so i could render items conditionally
          let due;
          const now = new Date().getTime();
          const distance = new Date(item.date).getTime() - now;
          due = distance < 0;

          // Storing Polltype clicked on button into local storage
          const setDescription = item.description;
          const handler = () => {
            localStorage.setItem("pollType", setDescription);
          };
          const handleRedirect = () => {
            history.push("/vote", { redirect: true });
          };

          return (
            <div className="flex flex-col items-center justify-center p-4 space-y-2 md:flex-row md:px-0">
              <div className="flex flex-col items-center justify-center w-full py-12 space-y-4 rounded-lg h-72 bg-polls-pattern">
                {!due && (
                  <p className="text-xl font-bold text-white">
                    {item.description}
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
                    <p className="font-normal">{due ? "Ongoing" : item.date}</p>
                  </label>
                </div>
                {due && (
                  <p className="text-xl font-bold text-white">
                    {item.description}
                  </p>
                )}
                <div className="px-2">
                  {!due ? (
                    <Timer
                      date={item.date}
                      size="2xl"
                      pcolor="white"
                      color="white"
                    />
                  ) : (
                    <button
                      onClick={handleRedirect}
                      className="btn-stay animate"
                      onBlur={handler}
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
