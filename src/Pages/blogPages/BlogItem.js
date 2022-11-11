import React from "react";
import calendar from "../../images/calendar.png";
import anchor from "../../images/anchor.png";
import eye from "../../images/eye.png";
import time from "../../images/time.png";
import { DUMMY_DATA } from "./DummyData";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className=" w-full md:w-[1410px] m-auto ">
      <div className="flex flex-col items-start justify-start px-4 mx-auto md:px-24">
        <p className="text-[16px]  font-bold underline underline-offset-2 decoration-yellow-500 decoration-4">
          Latest Update
        </p>
      </div>
      {/* ITEMS */}
      <div className="grid grid-cols-1 px-4 mt-4  md:space-y-0 gap-y-12 md:gap-y-0 gap-x-12 md:px-24 md:gap-x-12 md:grid-cols-3">
        {DUMMY_DATA.map((data) => {
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
    </div>
  );
};

export default BlogItem;
