import React from "react";
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
        </p>
      </div>
    </>
  );
};

export default AboutPage;
