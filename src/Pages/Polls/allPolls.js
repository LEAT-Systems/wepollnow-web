import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Polls } from "./pollsObject";
import Timer from "../../UI/Timer";
import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/polls_banner.png";

const AllPolls = () => {
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
