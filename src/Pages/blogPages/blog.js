import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Layout/Landing/mainNav";
import calendar from "../../images/calendar.png";
import eye from "../../images/eye.png";
import time from "../../images/time.png";
import Footer from "../../Components/Layout/Landing/Footer";
import image from "../../images/blogImg.png";
import anchor from "../../images/anchor.png";
import avatar from "../../images/avartar.png";
import { baseUrl } from "../../store/baseUrl";

const BlogPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);

  /////////////////////////////////  =========     PAGINATION    ===========   ////////////////////////////////
  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = [...data]
    ?.reverse()
    ?.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (i) => setCurrentPage(i);
  const pagination = pageNumbers.map((i) => (
    <button
      key={i}
      onClick={() => paginate(i)}
      className="px-4 py-2 text-sm font-medium text-black border border-[#000]  focus:bg-green-200"
    >
      {i}
    </button>
  ));
  //////////////////////////////////////////////////////////////////////////////////////////
  // Setting data from API here
  // ====================================    Get All blog data from API
  useEffect(() => {
    const getData = async () => {
      const requestOptions = {
        method: "GET",
      };
      const response = await fetch(baseUrl + `blog/`, requestOptions);
      const apiData = await response.json();

      let renderData = [];
      apiData.forEach((item) => {
        const aData = {
          id: item.id,
          author: item.author,
          image: item.image,
          title: item.title.split(" ").splice(0, 7).join(" ") + "...",
          content:
            item.content !== undefined
              ? item.content.split(" ").splice(0, 20).join(" ") + "..."
              : null,
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

  // TO check if API data contents is empty
  const isEmpty = currentPosts.length === 0;

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Nav bg="FCEBEE" bgImg="hero-container-pattern" hamburgerBg="FCEBEE" />
      <div className="flex flex-row items-center justify-between mx-auto bg-[#EDFFF0] md:bg-[#FCEBEE] bg-hero-container-pattern">
        <div className="flex flex-col px-4 space-y-2 md:px-24">
          <p className="text-xs md:text-lg font-bold underline underline-2 underline-offset-4 decoration-yellow-500 decoration-[5px]">
            Our Blog
          </p>
          <h1 className="max-w-full md:max-w-xl leading-none md:leading-tight text-[16px] md:text-5xl font-extrabold">
            We keep you informed with the latest update.
          </h1>
        </div>
        <div className="z-10 flex md:-mt-36">
          <img
            src={image}
            className="w-[100%] h-[80%]"
            alt={"Voter"}
            loading="lazy"
          />
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
      <div className="grid grid-cols-1 px-4 mt-12 mb-12 h-fit md:mb-24 md:space-y-0 gap-y-12 md:gap-y-12 gap-x-12 md:px-24 md:gap-x-12 md:grid-cols-3 md:mt-24">
        {currentPosts?.map((data) => {
          return (
            <div className="w-full hover:brightness-50" key={data.id}>
              <Link
                to={"/blog-single"}
                onClick={() => localStorage.setItem("blog_article_id", data.id)}
              >
                <div className="flex flex-col w-full space-y-2 md:h-full">
                  <div className="relative">
                    <img
                      loading="lazy"
                      src={data.image}
                      alt="Voter"
                      className="w-full h-[246px] rounded md:object-cover"
                    />
                    <div className="absolute bottom-0 right-0 z-30">
                      <img
                        loading="lazy"
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
                      loading="lazy"
                    />
                    <p className="font-normal">{data.author}</p>
                  </div>

                  <p className="max-w-sm font-bold text-md">{data.title}</p>
                  <div className="flex flex-row space-x-4">
                    <div className="flex flex-row items-center justify-start space-x-2">
                      <img src={eye} alt="calendarIcon" loading="lazy" />
                      <p className="text-xs">0</p>
                    </div>
                    <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                      <img src={time} alt="calendarIcon" loading="lazy" />
                      <p className="text-xs">{data.time_posted}</p>
                    </div>
                    <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                      <img src={calendar} alt="calendarIcon" loading="lazy" />
                      <p className="text-xs">{data.date_posted}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <div className="flex flex-row items-center justify-center p-4 space-x-4 border-[#F5C946] mb-4 border-4">
          {pagination}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
