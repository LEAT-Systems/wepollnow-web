import React, { useState, useEffect } from "react";
import Header from "../../Header";
import bannerImage from "../../../../../images/image_3.png";
import eye from "../../../../../images/eye.png";
import calendar from "../../../../../images/calendar.png";
import time from "../../../../../images/time.png";
import Delete from "../../assets/trash@2x.png";
import { articleData } from "../../../../../Pages/blogPages/blogData";
import { Link } from "react-router-dom";

/* Not used by Vincent */

const ManageBlogContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(articleData);
  }, []);
  return (
    <>
      <Header />
      <main className="px-4 md:px-6 lg:px-12 my-4">
        <header className="flex flex-row justify-between py-4 w-full">
          <div>
            <h2 className="font-extrabold text-2xl text-[#082a0f] capitalize">
              Manage Blog
            </h2>
          </div>

          <nav className="pl-3 h-full my-auto flex text-gray-500">
            <span className="mr-1 w-[2.6rem]">
              {/* <img src={LinkIcon} alt="Account" className="w-full" /> */}
            </span>
            <Link
              to={"/admin/blog/manageBlog"}
              className="p-3 rounded-md bg-[#08c127] text-white px-5 animate"
            >
              New Post
            </Link>
          </nav>
        </header>
        <section className="w-full pt-6">
          <div className="flex flex-row justify-center items-center space-x-12">
            {/*  */}

            {/* Left sidebar */}
            <div className="w-[35%] h-screen">
              <div className="border border-gray-200 rounded">
                <header className="border-b p-4">
                  <p className="font-bold text-[18px]">All Posts</p>
                </header>
                {data.slice(0, 3).map((data) => {
                  return (
                    <div
                      className="flex flex-col space-y-2 border-b"
                      key={data.id}
                    >
                      <div className="p-6">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-col space-y-2">
                            <p className="text-md font-bold">
                              {data.postTitle}
                            </p>
                            <div className="flex flex-row space-x-4">
                              <p>{data.date}</p>
                              <p>{data.time}</p>
                            </div>
                          </div>
                          <button>
                            <img src={Delete} alt="trash" className="w-6 h-6" />
                          </button>
                        </div>
                        <div>
                          <p>{data.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="w-[65%] h-screen">
              <div className="border border-gray-200 rounded">
                <div className="flex flex-col space-y-2 p-8">
                  <img
                    src={bannerImage}
                    alt="headerImage"
                    className="w-full md:object-cover"
                  />
                  <div className="flex flex-row space-x-2">
                    <img
                      src={bannerImage}
                      alt="avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    <p>Olumide Adebayo</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold">
                      FEC approves N27.4b contracts for Works, Housing, FCT
                      ministries
                    </p>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <img src={eye} alt="eyeIcon" className="w-3 h-3" />
                      <p className="text-xs">56</p>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <img src={time} alt="timeIcon" className="w-3 h-3" />
                      <p className="text-xs">4 mins</p>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <img
                        src={calendar}
                        alt="calendarIcon"
                        className="w-3 h-3"
                      />
                      <p className="text-xs">Oct, 22 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ManageBlogContent;
