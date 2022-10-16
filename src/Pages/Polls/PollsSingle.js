import React from "react";
import Timer from "../../UI/Timer";
import { Link } from "react-router-dom";
import { Polls } from "./pollsObject";

const PollsSingle = () => {
  return (
    <div className="space-y-4">
      <p className="ml-4 text-xl font-bold underline md:px-12 underline-offset-2 decoration-yellow-500 decoration-4">
        Upcoming Polls
      </p>
      <Link to="/getting-started-three">
        <div className="flex flex-col items-center justify-between px-4 md:flex-row md:px-12">
          {Polls.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center p-4 px-4 space-x-4 space-y-2 md:px-0 "
              >
                <div className="flex flex-col items-center justify-center px-4 py-12 space-y-2 rounded-lg bg-polls-pattern md:px-0">
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
        </div>
      </Link>
      <div className="flex flex-row items-center justify-center">
        <Link to="/polls">
          <button className="p-4 px-8 font-semibold text-white bg-green-500 rounded-lg hover:bg-black">
            View All Polls
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PollsSingle;
