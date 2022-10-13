import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Polls } from "./pollsObject";
import Timer from "../../UI/Timer";
import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Landing/Footer";

const AllPolls = () => {
  return (
    <>
      <Nav bg="EDFFF0" />
      <div className="flex flex-col items-center justify-center space-y-8 p-[60px] bg-[#EDFFF0]">
        <h2 className="text-4xl max-w-3xl font-extrabold text-center">
          Select the Polls You Want to Participate in...
        </h2>
        <input
          className="border-b bg-transparent fontAwesome border-gray-500  w-1/2 p-4"
          placeholder="&#xf002; Search for Poll by state or Poll type. Example: Osun Guber or Presidential..."
        />
      </div>
      <Link to="/getting-started-phone-required">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 mt-12">
          {Polls.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center space-x-4 space-y-2 p-4 ">
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
      <Footer />
    </>
  );
};

export default AllPolls;
