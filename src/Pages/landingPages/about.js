import React from "react";
import Footer from "../../Components/Layout/Landing/Footer";
import Nav from "../../Components/Layout/Landing/mainNav";
import image from "../../images/image_2.png";

const AboutPage = () => {
  return (
    <div className="w-screen h-screen">
      <Nav bg="FCEBEE" bgImg="hero-container-pattern" hamburgerBg="FCEBEE" />
      <div className="flex flex-row items-center justify-between mx-auto bg-[#FCEBEE] bg-hero-container-pattern">
        <div className="flex flex-col px-4 space-y-2 md:px-24">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            About Wepollnow
          </p>
          <h1 className="max-w-full md:max-w-xl text-[16px] md:text-5xl font-extrabold">
            Creating a better Society by making every vote count.
          </h1>
        </div>
        <div className="z-10 flex md:-mt-36">
          <img src={image} className="w-[100%] h-[85%]" alt={"Voter"} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-3xl px-8 pb-12 mx-auto mt-24 space-y-4">
        <div className="flex flex-col space-y-2">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            Who We Are
          </p>
          <p className="text-sm md:text-[16px] text-justify md:font-extralight ">
            WePollNow is an independent research and analytics group dedicated
            to bringing data into the conversations that help African citizens
            make informed decisions that affect policy in multi-sectors.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            Our Vision
          </p>
          <p className="text-sm md:text-[16px] text-justify md:font-extralight ">
            Our vision is for WePollNow data to be a highly valued and
            significant public resource that will be used by millions of people
            - in Africa and the rest of the world - to aid in having informed
            public discourse and making intelligent business decisions.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            Our Mission
          </p>
          <p className="text-sm md:text-[16px] text-justify md:font-extralight ">
            Our mission is to be a continuous source of highly accurate data,
            supplying valuable insights into what the people of Africa are
            thinking, and helping to shape what the world thinks of African
            people as a whole.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
