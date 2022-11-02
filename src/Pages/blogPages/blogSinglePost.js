import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import avatar from "../../images/avatar.svg";
import anchor from "../../images/anchor.png";
import img_2 from "../../images/image_3.png";
import backarrow from "../../images/backArrow.png";
import Footer from "../../Components/Layout/Landing/Footer";

const BlogSingle = () => {
  return (
    <>
      <Nav />
      <div className="w-screen flex flex-col items-center justify-between space-x-8 md:px-24 md:flex-row">
        {/* Main Reading Bar */}
        <div className="flex flex-col items-start justify-start w-2/3 pt-4 space-y-4">
          <div className="flex flex-row space-x-2">
            <img src={backarrow} alt="back_button" />
            <p>Back</p>
          </div>
          <img src={img_2} className="w-[700px] md:h-[460px]" />
          <div className="flex flex-row space-x-2">
            <img src={avatar} alt="avatar" className="w-6 h-6" />
            <p>Olumide Adebayo</p>
          </div>
          <h3 className="max-w-2xl text-xl md:text-3xl font-bold ">
            FEC approves N27.4b contracts for Works, Housing, FCT ministries
          </h3>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center justify-center space-x-2">
              <CommentIcon />
              <p>56</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <AccessTimeIcon />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <CalendarMonthIcon />
              <p>Oct, 22 2019</p>
            </div>
          </div>
          <div>
            <p className="max-w-2xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              quam adipiscing sed nibh congue lectus tempor ut at. Etiam
              nascetur non eget non sed. Mauris, pretium volutpat lorem facilisi
              in. Nisl erat nulla et convallis. Nullam molestie mauris vitae
              lectus tincidunt. Sed pellentesque tempus ultrices faucibus
              viverra dictum. Tortor amet, nullam enim vel lectus tristique nunc
              faucibus eu. Dictum placerat magna adipiscing pellentesque nullam
              scelerisque. Purus dui odio tortor velit elementum nec, cursus ut.
              Quam et nec ac ipsum, ante et. Lobortis dictum scelerisque vel,
              interdum pulvinar libero. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vitae quam adipiscing sed nibh congue lectus
              tempor ut at. Etiam nascetur non eget non sed. Mauris, pretium
              volutpat lorem facilisi in. Nisl erat nulla et convallis. Nullam
              molestie mauris vitae lectus tincidunt. Sed pellentesque tempus
              ultrices faucibus viverra dictum. Tortor amet, nullam enim vel
              lectus tristique nunc faucibus eu.
            </p>
          </div>
        </div>
        {/* Side Bar */}
        <div className="flex flex-col items-center justify-center w-full mx-auto space-y-4 md:justify-start md:px-0 md:w-1/3 md:-mt-24 ">
          <div className="pt-12 space-y-2 md:pt-0">
            <p className="font-bold">Latest Posts</p>
            <div className="relative">
              <img src={img_2} className="rounded-xl" />
              <img
                src={anchor}
                className="absolute bottom-0 w-8 h-8 mr-6 rounded-br-lg right-1 md:right-0"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <img src={avatar} alt="avatar" className="w-6 h-6" />
              <p>Olumide Adebayo</p>
            </div>
            <h3 className="max-w-sm font-bold md:max-w-2xl md:text-xl">
              FEC approves N27.4b contracts for Works, Housing, FCT ministries
            </h3>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row items-center justify-center space-x-2">
                <CommentIcon />
                <p>56</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-2">
                <AccessTimeIcon />
                <p className="text-sm">4 mins</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-2">
                <CalendarMonthIcon />
                <p>Oct, 22 2019</p>
              </div>
            </div>
          </div>
          <div className="pt-12 space-y-2 md:pt-0">
            <div className="relative">
              <img src={img_2} className="rounded-lg" />
              <img
                src={anchor}
                className="absolute bottom-0 w-8 h-8 mr-6 rounded-br-lg right-1 md:right-0"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <img src={avatar} alt="avatar" className="w-6 h-6" />
              <p>Olumide Adebayo</p>
            </div>
            <h3 className="max-w-sm font-bold md:max-w-2xl md:text-xl">
              FEC approves N27.4b contracts for Works, Housing, FCT ministries
            </h3>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row items-center justify-center space-x-2">
                <CommentIcon />
                <p>56</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-2">
                <AccessTimeIcon />
                <p className="text-sm">4 mins</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-2">
                <CalendarMonthIcon />
                <p>Oct, 22 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogSingle;
