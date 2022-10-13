import React from "react";
import Footer from "../../Components/Layout/Landing/Footer";
import Nav from "../../Components/Layout/Landing/mainNav";
import image from "../../images/image_2.png";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-between px-6 py-8 mx-auto bg-gray-100 md:px-24">
        <div className="flex flex-col space-y-2 ">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            About Wepollnow
          </p>
          <h1 className="max-w-xl text-5xl font-extrabold">
            Creating a better Society by making every vote count.
          </h1>
        </div>
        <div className="z-10 hidden md:flex">
          <img
            src={image}
            className="w-[600px] h-[400px] rounded-lg"
            alt={"Voter"}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center max-w-3xl px-8 mx-auto mt-24">
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
