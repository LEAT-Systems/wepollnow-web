import React, { useState, useEffect } from "react";
import calendar from "../../images/calendar.png";
import anchor from "../../images/anchor.png";
import eye from "../../images/eye.png";
import time from "../../images/time.png";
import image from "../../images/blankImg.png";
import avatar from "../../images/avartar.png";
import { Link } from "react-router-dom";

const BlogItem = () => {
  const [data, setData] = useState([]);

  // Setting data from API here
  useEffect(() => {
    const getData = async () => {
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(
        "https://wepollnow.azurewebsites.net/blog/",
        requestOptions
      );
      const apiData = await response.json();

      let renderData = [];
      apiData.forEach((item) => {
        const aData = {
          id: item.id,
          title: item.title,
          image: item.image !== undefined ? item.image : { image },
          content: item.content !== undefined ? item.content : null,
          date_posted:
            item.date_posted !== undefined
              ? new Date(`${item.date_posted}`).toISOString().substring(0, 10)
              : null,
          time_posted:
            item.date_posted !== undefined
              ? new Date(`${item.date_posted}`).toLocaleTimeString("en", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })
              : null,
        };
        renderData.push(aData);
        setData(renderData);
      });
    };
    getData();
  }, []);

  // TO check if contents are empty
  const isEmpty = data.length === 0;
  return (
    <div className=" w-full md:w-[1410px] m-auto ">
      <div className="flex flex-col items-start justify-start px-4 mx-auto md:px-24">
        <p className="text-[16px]  font-bold underline underline-offset-2 decoration-yellow-500 decoration-4">
          Latest Update
        </p>
      </div>
      {/* ITEMS */}
      <div className="grid grid-cols-1 px-4 mt-4 md:space-y-0 gap-y-12 md:gap-y-0 gap-x-12 md:px-24 md:gap-x-12 md:grid-cols-3">
        {isEmpty && <p className="text-sm md:text-lg">No posts to show</p>}
        {data
          .slice(-3)
          .reverse()
          .map((data) => {
            return (
              <div
                className="w-full transition duration-150 hover:brightness-50"
                key={data.id}
              >
                <Link
                  to={"/blog-single"}
                  onClick={() =>
                    localStorage.setItem("blog_article_id", `${data.id}`)
                  }
                >
                  <div className="flex flex-col w-full space-y-2 md:h-full">
                    <div className="relative">
                      <img
                        src={data.image}
                        alt="Voter"
                        className="w-full h-[250px] rounded md:object-cover "
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
                        src={avatar}
                        alt=""
                      />
                      <p className="font-normal">Administrator</p>
                    </div>

                    <p className="max-w-sm font-bold text-md">{data.title}</p>
                    <div className="flex flex-row space-x-4">
                      <div className="flex flex-row items-center justify-start space-x-2">
                        <img src={eye} alt="eyeIcon" />
                        <p className="text-xs">0</p>
                      </div>
                      <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                        <img src={time} alt="timeIcon" />
                        <p className="text-xs">{data.time_posted}</p>
                      </div>
                      <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                        <img
                          src={calendar}
                          alt="calendarIcon"
                          className="w-3 h-3"
                        />
                        <p className="text-xs">{data.date_posted}</p>
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
