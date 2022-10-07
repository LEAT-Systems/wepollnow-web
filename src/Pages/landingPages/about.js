import React from "react";
import Footer from "../../Components/Layout/Landing/Footer";
import Nav from "../../Components/Layout/Landing/mainNav";
import vote from "../../images/vote.svg";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-between md:px-24 px-6 py-8 mx-auto bg-gray-100">
        <div className="flex flex-col space-y-2 ">
          <p className="text-xs font-bold underline">About Pollit</p>
          <h1 className="max-w-xl text-5xl font-bold">
            Creating a better Society by making every vote count.
          </h1>
        </div>
        <div className="hidden md:flex">
          <img src={vote} className="w-[20rem] h-[20rem]" alt={"Voter"} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center max-w-4xl mx-auto mt-24 px-8">
        <p className="text-lg text-justify">
          We are a dedicated group that is passionate about making the society a
          better place by ensuring that we simulate polls and ensure that all
          your votes count. We liase with civil bodies in the real world to also
          monitor the electoral processes at your polling Units and stations to
          ensure a free and fair election for everyone.
          <br /> Together, We can make Nigeria Great!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
