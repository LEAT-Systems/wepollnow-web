import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Layout/Landing/mainNav";
import calendar from "../../images/calendar.png";
import eye from "../../images/eye.png";
import time from "../../images/time.png";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/blogImg.png";
import anchor from "../../images/anchor.png";
import { DUMMY_DATA } from "./DummyData";

const BlogPage = () => {
  const [data, setData] = useState([]);

  // Setting data from API here
  useEffect(() => {
    setData(DUMMY_DATA);
  }, []);

  // TO check if API data contents is empty
  const isEmpty = data.length === 0;

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Nav bg="FCEBEE" bgImg="hero-container-pattern" hamburgerBg="FCEBEE" />
      <div className="flex flex-row items-center justify-between mx-auto bg-[#FCEBEE] bg-hero-container-pattern">
        <div className="flex flex-col px-4 space-y-2 md:px-24">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            Our Blog
          </p>
          <h1 className="max-w-full md:max-w-xl leading-none md:leading-tight text-[16px] md:text-5xl font-extrabold">
            We keep you informed with the latest update.
          </h1>
        </div>
        <div className="z-10 flex md:-mt-36">
          <img src={image} className="w-[100%] h-[80%]" alt={"Voter"} />
        </div>
      </div>
      {/* Rendering the empty container */}
      {isEmpty && (
        <div className="flex flex-row items-center justify-center mt-48">
          <div className="border-8 border-[#EAB308] w-2/3 p-12">
            <p className="text-sm md:text-2xl">
              No post available at the moment...
            </p>
          </div>
        </div>
      )}
      {/* ITEMS */}
      <div className="grid min-h-screen grid-cols-1 px-4 mt-12 mb-12 md:mb-24 md:space-y-0 gap-y-12 md:gap-y-12 gap-x-12 md:px-24 md:gap-x-12 md:grid-cols-3 md:mt-24">
        {data.map((data) => {
          return (
            <div className="w-full" key={data.id}>
              <Link to={"/blog-single"}>
                <div className="flex flex-col w-full space-y-2 md:h-full">
                  <div className="relative">
                    <img
                      src={data.articleImg}
                      alt="Voter"
                      className="w-full h-full rounded md:object-cover"
                    />
                    <div className="absolute bottom-0 right-0 z-30">
                      <img
                        src={anchor}
                        alt="anchorIcon"
                        className="rounded-br"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={data.authorImg}
                      alt=""
                    />
                    <p className="font-normal">{data.author}</p>
                  </div>

                  <p className="max-w-sm font-bold text-md">
                    {data.postCaption}
                  </p>
                  <div className="flex flex-row space-x-4">
                    <div className="flex flex-row items-center justify-start space-x-2">
                      <img src={eye} alt="calendarIcon" />
                      <p className="text-xs">{data.views}</p>
                    </div>
                    <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                      <img src={time} alt="calendarIcon" />
                      <p className="text-xs">{data.timePosted}</p>
                    </div>
                    <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                      <img src={calendar} alt="calendarIcon" />
                      <p className="text-xs">{data.datePosted}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
