import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import votingg from "../../images/image_5.png";
import avatar from "../../images/image_4.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/blogImg.png";

const BlogPage = () => {
  return (
    <>
      <Nav bg="FCEBEE" bgImg="hero-container-pattern" />
      <div className="flex flex-row items-center justify-between mx-auto bg-[#FCEBEE] bg-hero-container-pattern">
        <div className="flex flex-col px-4 md:px-24 space-y-2">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[5px]">
            Our Blog
          </p>
          <h1 className="max-w-full md:max-w-xl leading-none md:leading-tight text-[16px] md:text-5xl font-extrabold">
            We keep you informed with the latest update.
          </h1>
        </div>
        <div className="z-10 md:-mt-36 flex">
          <img src={image} className="w-[100%] h-[80%]" alt={"Voter"} />
        </div>
      </div>

      {/* ITEMS */}
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto px-4 md:px-0 pb-12  mt-24 md:space-x-4 space-y-6 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-2">
          <img src={votingg} alt={"Voter"} className="rounded" />
          <div className="flex flex-row space-x-4">
            <img className="w-6 h-6 rounded-full" src={avatar} alt="" />
            <p className="font-bold">Olumide Adebayo</p>
          </div>

          <h4 className="max-w-sm font-bold text-md">
            Welcome! This is the INEC Continuous Voter Registration Portal.
          </h4>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-start justify-start space-x-2">
              <CommentIcon />
              <p>56</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <AccessTimeIcon />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <CalendarMonthIcon />
              <p>Oct, 22 2019</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <img src={votingg} alt={"Voter"} className="rounded" />
          <div className="flex flex-row space-x-4">
            <img className="w-6 h-6 rounded-full" src={avatar} alt={"Voter"} />
            <p className="font-bold">Olumide Adebayo</p>
          </div>

          <h4 className="max-w-sm font-bold text-md">
            Welcome! This is the INEC Continuous Voter Registration Portal.
          </h4>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-start justify-start space-x-2">
              <CommentIcon />
              <p>56</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <AccessTimeIcon />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <CalendarMonthIcon />
              <p>Oct, 22 2019</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <img src={votingg} alt={"Voter"} className="rounded" />
          <div className="flex flex-row space-x-4">
            <img className="w-6 h-6 rounded-full" src={avatar} alt={"Voter"} />
            <p className="font-bold">Olumide Adebayo</p>
          </div>

          <h4 className="max-w-sm font-bold text-md">
            Welcome! This is the INEC Continuous Voter Registration Portal.
          </h4>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-start justify-start space-x-2">
              <CommentIcon />
              <p>56</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <AccessTimeIcon />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <CalendarMonthIcon />
              <p>Oct, 22 2019</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
