import React from "react";
import { useEffect, useRef, useState } from "react";
import Timer from "../../UI/Timer";
import { Link } from "react-router-dom";
import { Polls } from "./pollsObject";
import prevButton from "../../images/prev.png";
import nextButton from "../../images/next.png";

const PollsSingle = () => {
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
    <div className="space-y-4">
      <p className="ml-12 text-xl font-bold underline md:px-12 underline-offset-2 decoration-yellow-500 decoration-4">
        Upcoming Polls
      </p>

      <div className="grid gap-y-4 gap-x-12 grid-cols-3 mt-12 px-16">
        {Polls.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center p-4 space-x-4 space-y-2">
              <div className="flex flex-col items-center justify-center px-4 py-12 space-y-2 rounded-lg bg-polls-pattern md:px-0 w-full">
                <p className="text-xl font-bold text-white">
                  {item.description}
                </p>
                {due ? (
                  <label className="px-4 bg-[#EDFFF0] border-green-500 rounded">
                    <p>Ongoing</p>
                  </label>
                ) : (
                  <label className="px-4 bg-gray-200 rounded-lg">
                    {item.date}
                  </label>
                )}

                {/*===========     Timer Begins Here ===================*/}

                {due ? (
                  <button className="p-3 px-8 font-semibold text-white bg-[#08C127] rounded-lg animate">
                    Vote Now
                  </button>
                ) : (
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center p-4 space-y-2 border-r border-gray-300 w-full">
                      <h1
                        className={`text-sm  font-extrabold md:text-[34px] text-white`}
                      >
                        {timerDays}
                      </h1>
                      <p className={`text-white`}>Days</p>
                    </div>
                    <div className="flex flex-col items-center p-4 space-y-2 border-r border-gray-300">
                      <h1
                        className={`text-sm font-extrabold md:text-[34px] text-white`}
                      >
                        {timerHours}
                      </h1>
                      <p className={`text-white`}>Hours</p>
                    </div>
                    <div className="flex flex-col items-center p-4 space-y-2 border-r border-gray-300">
                      <h1
                        className={`text-sm font-extrabold md:text-[34px] text-white`}
                      >
                        {timerMinutes}
                      </h1>
                      <p className={`text-white`}>Minutes</p>
                    </div>
                    <div className="flex flex-col items-center p-4 space-y-2">
                      <h1
                        className={`text-sm font-extrabold md:text-[34px] text-white`}
                      >
                        {timerSeconds}
                      </h1>
                      <p className={`text-white`}>Seconds</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {/* <button>
          <img src={nextButton} alt="prev" className="absolute -mt-4" />
        </button> */}
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link to="/polls">
          <button className="p-4 px-8 font-semibold text-white bg-green-500 rounded-lg animate">
            View All Polls
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PollsSingle;
