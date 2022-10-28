import React from "react";
import { useState, useRef, useEffect } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Polls } from "./pollsObject";
import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/polls_banner.png";

const AllPolls = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [due, setIsDue] = useState(false);

  // Would be gotten from DB

  //
  let interval = useRef();

  function startTimer() {
    const countdownDate = new Date().getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // Stop timer
        clearInterval(interval.current);
        setIsDue(true);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }

  // Component mounted
  useEffect(() => {
    const clean = interval.current;
    startTimer();
    return () => {
      clearInterval(clean);
    };
  });
  return (
    <>
      <Nav bg="EDFFF0" />
      <div className=" flex flex-row items-center justify-between mx-auto bg-[#EDFFF0]">
        <div className="flex flex-col px-12 space-y-2">
          <p className="text-xs md:text-lg font-bold underline underline-offset-4 decoration-yellow-500 decoration-[5px]">
            Upcoming Polls
          </p>
          <h1 className="max-w-xl text-5xl font-extrabold">
            Be abreast with all upcoming polls
          </h1>
        </div>
        <div className="z-10 hidden md:flex -mt-36">
          <img src={image} className="w-full h-[500px]" alt={"Voter"} />
        </div>
      </div>
      <Link to="/getting-started-phone-required">
        <div className="flex flex-col items-center justify-between px-8 mt-12 md:flex-row">
          {Polls.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center p-4 space-x-4 space-y-2 ">
                <div className="flex flex-col items-center justify-center px-4 py-12 space-y-2 rounded-lg bg-polls-pattern md:px-0">
                  <p className="text-xl font-bold text-white">
                    {item.description}
                  </p>
                  <label className="px-4 bg-gray-200 rounded-lg">
                    {item.date}
                  </label>
                  <div className="flex flex-row items-center justify-center space-x-4">
                    <div className="flex flex-col items-center p-4 space-y-2 border-r border-gray-300 w-full">
                      <h1
                        className={`text-sm  font-extrabold md:text-lg text-white`}
                      >
                        {timerDays}
                      </h1>
                      <p className={`text-white`}>Days</p>
                    </div>
                    <div className="flex flex-col items-center p-4 space-y-2 border-r border-gray-300">
                      <h1
                        className={`text-sm font-extrabold md:text-lg text-white`}
                      >
                        {timerHours}
                      </h1>
                      <p className={`text-white`}>Hours</p>
                    </div>
                    <div className="flex flex-col items-center p-4 space-y-2 border-r border-gray-300">
                      <h1
                        className={`text-sm font-extrabold md:text-lg text-white`}
                      >
                        {timerMinutes}
                      </h1>
                      <p className={`text-white`}>Minutes</p>
                    </div>
                    <div className="flex flex-col items-center p-4 space-y-2">
                      <h1
                        className={`text-sm font-extrabold md:text-lg text-white`}
                      >
                        {timerSeconds}
                      </h1>
                      <p className={`text-white`}>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
      <Footer />
    </>
  );
};

export default AllPolls;
