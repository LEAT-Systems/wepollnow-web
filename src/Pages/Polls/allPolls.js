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
      <div className=" flex flex-row items-center justify-between md:px-24 px-6 py-8 mx-auto bg-[#EDFFF0]">
        <div className="flex flex-col space-y-2 ">
          <p className="text-xs md:text-lg font-bold underline underline-offset-4 decoration-yellow-500 decoration-[5px]">
            Upcoming Polls
          </p>
          <h1 className="max-w-xl text-5xl font-extrabold">
            Be abreast with all upcoming polls
          </h1>
        </div>
        <div className="z-10 hidden md:flex">
          <img src={image} className="w-[30rem] h-[20rem]" alt={"Voter"} />
        </div>
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
