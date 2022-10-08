import React from "react";
import Timer from "../../UI/Timer";
import { Link } from "react-router-dom";
import { Polls } from "./pollsObject";

const PollsSingle = () => {
  return (
    <div className="space-y-4">
      <p className="md:px-12 ml-4 font-bold text-xl underline underline-offset-2 decoration-yellow-500 decoration-4">
        Upcoming Polls
      </p>
      <Link to="/getting-started-three">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
          {Polls.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center space-x-4 space-y-2 p-4 px-4 md:px-0 ">
                <div className="bg-polls-pattern items-center justify-center flex flex-col py-12 space-y-2 px-4 md:px-0 rounded-lg">
                  <p className="font-bold text-xl text-white">
                    {item.description}
                  </p>
                  <label className="bg-gray-200 px-4 rounded-lg">
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
        <Link to="/all-polls-qwe23124dfs24328667">
          <button className="bg-green-500 p-4 rounded-lg px-8 font-semibold text-white hover:bg-black">
            View All Polls
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PollsSingle;
