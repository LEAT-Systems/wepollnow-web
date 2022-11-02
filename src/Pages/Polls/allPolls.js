import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import { Polls } from "./pollsObject";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/pollsBanner.png";
import Timer from "../../UI/Timer";

const AllPolls = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Nav bg="FCEBEE" bgImg="hero-container-pattern" />
      <div className="flex flex-row items-center justify-between mx-auto bg-[#FCEBEE] bg-hero-container-pattern">
        <div className="flex flex-col px-4 md:px-24 space-y-2">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            Upcoming Polls
          </p>
          <h1 className="max-w-full md:max-w-xl leading-none md:leading-tight text-[16px] md:text-5xl font-extrabold">
            Be abreast with all upcoming polls
          </h1>
        </div>
        <div className="z-10 md:-mt-36 flex">
          <img src={image} className="w-full md:h-[500px]" alt={"Voter"} />
        </div>
      </div>

      {/* ==============   GRID FOR ARRANGING ITEMS  ===================*/}

      <div className="grid gap-y-4 gap-x-12 md:px-24  md:gap-x-12 grid-cols-1 md:grid-cols-3 mt-12 pb-12">
        {Polls.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-4 space-x-4 space-y-2"
            >
              <div className="flex flex-col items-center justify-center px-4 py-12 space-y-2 rounded-lg bg-polls-pattern md:px-0">
                <p className="text-xl font-bold text-white">
                  {item.description}
                </p>
                <label className="px-4 bg-gray-200 rounded-lg">
                  {item.date}
                </label>
                <Timer
                  size="xl"
                  sizeMD="3xl"
                  date={item.date}
                  pcolor="white"
                  color="white"
                />
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
