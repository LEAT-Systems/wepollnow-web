import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import votingg from "../../images/votingg.jpg";
import avatar from "../../images/avatar.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Footer from "../../Components/Layout/Landing/Footer";

const BlogPage = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row items-center justify-between px-24 py-8 mx-auto bg-gray-100">
        <div className="flex flex-col space-y-2 ">
          <p className="text-xs font-bold underline">Our Blog</p>
          <h1 className="md:max-w-xl text-5xl md:text-6xl font-bold">
            We keep you informed with the latest update.
          </h1>
        </div>
        <div className="hidden md:block">
          <img
            src={votingg}
            className="w-[20rem] h-[20rem] rounded-full"
            alt={"Voter"}
          />
        </div>
      </div>

      {/* ITEM 1 */}
      <div className="container flex flex-col space-y-6 md:space-y-0 md:flex-row items-center justify-between max-w-5xl mx-auto mt-24 space-x-4">
        <div className="flex flex-col space-y-2 px-4">
          <img
            src={votingg}
            className="w-[20rem] h-[20rem] rounded-xl"
            alt={"Voter"}
          />
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
          <img src={votingg} className="w-[20rem] h-[20rem]" alt={"Voter"} />
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
          <img src={votingg} className="w-[20rem] h-[20rem]" alt={"Voter"} />
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
