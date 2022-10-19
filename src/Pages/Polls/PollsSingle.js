import React from "react";
import Timer from "../../UI/Timer";
import { Link } from "react-router-dom";
import { Polls } from "./pollsObject";
import prevButton from "../../images/prev.png";
import nextButton from "../../images/next.png";

const PollsSingle = () => {
  return (
    <div className="space-y-4">
      <p className="ml-12 text-xl font-bold underline md:px-12 underline-offset-2 decoration-yellow-500 decoration-4">
        Upcoming Polls
      </p>

      <div className="relative flex flex-col items-center justify-center space-x-4 md:flex-row md:px-24">
        <button>
          <img
            src={prevButton}
            alt="prev"
            className="z-10 -ml-12 -mt-4 absolute"
          />
        </button>
        {Polls.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-4 px-4 space-x-12 space-y-2 md:px-0"
            >
              <div className="flex flex-col items-center justify-center px-4  w-full py-12 space-y-2 rounded-lg bg-polls-pattern md:px-0">
                <p className="text-xl font-bold text-white">
                  {item.description}
                </p>
                <label className="px-4 bg-gray-200 rounded-lg">
                  {item.date}
                </label>
                <div className="px-2">
                  <Timer
                    date={item.date}
                    size="4xl"
                    pcolor="white"
                    color="white"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <button>
          <img src={nextButton} alt="prev" className="absolute -mt-4" />
        </button>
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
