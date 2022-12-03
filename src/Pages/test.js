import React from "react";
import Nav from "../Components/Layout/Landing/mainNav";
import backarrow from "../images/backArrow.png";
import image from "../images/blankImg.png";
import avatar from "../images/avartar.png";
import anchor from "../images/anchor.png";
import calendar from "../images/calendar.png";
import eye from "../images/eye.png";
import time from "../images/time.png";

const Test = () => (
  <>
    <Nav />
    <div className="flex flex-col items-center md:flex-row">
      <section className="items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center space-x-24 md:px-24 md:mt-4 md:flex-row">
          {/* Left Container */}
          <div className="flex flex-col items-start w-full md:w-[65%] md:h-screen">
            <button className="flex flex-row space-x-2">
              <img src={backarrow} alt="back_button" />
              <p>Back</p>
            </button>
            <div className="w-full h-[500px]">
              <img src={image} className="w-full h-full" alt="post_image" />
            </div>
            <div className="flex flex-row space-x-2">
              <img src={avatar} alt="avatar" className="w-6 h-6" />
              <p>Wepollnow Admin</p>
            </div>
            <h3 className="max-w-2xl text-xl font-bold md:text-3xl ">
              {/* {fullContent?.title} */}
              Post title
            </h3>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row items-center justify-center space-x-2">
                <img src={eye} alt="eyeIcon" />
                <p>0</p>
              </div>
              <div className="flex flex-row items-center justify-center space-x-2">
                <img src={time} alt="timeIcon" />
                {/* <p className="text-sm">{fullContent?.time_posted}</p> */}
              </div>
              <div className="flex flex-row items-center justify-center space-x-2">
                <img src={calendar} alt="calendarIcon" />
                {/* <p>{fullContent?.date_posted}</p> */}
                date
              </div>
            </div>
            <div>
              post content
              {/* <p
                dangerouslySetInnerHTML={createMarkup(fullContent.content)}
              ></p> */}
            </div>
          </div>
          {/* Right sidebar */}
          <div className="w-full md:w-[35%] md:h-screen pb-12 md:pb-0 border">
            <div className="rounded ">
              <header className="p-4">
                <p className="font-bold text-[18px]">All Posts</p>
              </header>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Test;
