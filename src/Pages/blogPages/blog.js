import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/blogImg.png";
import anchor from "../../images/anchor.png";
import { DUMMY_DATA } from "./DummyData";

const BlogPage = () => {
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

      {/* ITEMS */}
      <div className="flex flex-col items-center justify-between max-w-6xl pb-48 mx-auto mt-24 md:px-0 md:space-x-4 md:space-y-0 md:flex-row">
        {DUMMY_DATA.map((data) => {
          return (
            <div className="flex flex-col h-64 space-y-2" key={data.id}>
              <div className="relative">
                <img
                  src={data.articleImg}
                  alt="Voter"
                  className="w-full rounded"
                />
                <div className="absolute bottom-0 right-0 z-30">
                  <img src={anchor} alt="anchorIcon" className="rounded-br" />
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <img
                  className="w-6 h-6 rounded-full"
                  src={data.authorImg}
                  alt=""
                />
                <p className="font-bold">{data.author}</p>
              </div>

              <h4 className="max-w-sm font-bold text-md">{data.postCaption}</h4>
              <div className="flex flex-row space-x-4">
                <div className="flex flex-row items-start justify-start space-x-2">
                  <CommentIcon />
                  <p>{data.comment}</p>
                </div>
                <div className="flex flex-row items-start justify-start space-x-2">
                  <AccessTimeIcon />
                  <p className="text-sm">{data.timePosted}</p>
                </div>
                <div className="flex flex-row items-start justify-start space-x-2">
                  <CalendarMonthIcon />
                  <p>{data.datePosted}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
