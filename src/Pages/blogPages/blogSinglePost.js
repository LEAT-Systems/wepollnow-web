import React, { useState, useEffect } from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import anchor from "../../images/anchor.png";
import calendar from "../../images/calendar.png";
import eye from "../../images/eye.png";
import time from "../../images/time.png";
import avatar from "../../images/avartar.png";
import image from "../../images/blankImg.png";
import backarrow from "../../images/backArrow.png";
import Footer from "../../Components/Layout/Landing/Footer";
import { useHistory, Link } from "react-router-dom";
import DOMPurify from "dompurify";

const BlogSingle = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [blogId, setBlogId] = useState();
  const [fullContent, setFullContent] = useState({});
  const backHandler = () => {
    history.goBack();
  };

  ////////////////// Call this function to get the article ID
  useEffect(() => {
    let id;
    id = localStorage.getItem("blog_article_id");
    setBlogId(id);
  }, []);
  ///////////////////////////////////////////////////////////////

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

  useEffect(() => {
    if (data.length === 0) {
      setIsEmpty(true);
    }
  }, [data.length]);

  // Get article contents
  const getContent = async (id) => {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetch(
      `https://wepollnow.azurewebsites.net/blog/${id}`,
      requestOptions
    );
    const data = await response.json();
    let fetchedData;
    if (!response.ok) {
      alert("We are sorry. We could not fetch your selected post");
    } else {
      fetchedData = {
        id: data.id,
        title: data.title,
        image: data.image !== undefined ? data.image : { image },
        content: data.content !== undefined ? data.content : null,
        date_posted:
          data.date_posted !== undefined
            ? new Date(`${data.date_posted}`).toISOString().substring(0, 10)
            : null,
        time_posted:
          data.date_posted !== undefined
            ? new Date(`${data.date_posted}`).toLocaleTimeString("en", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
            : null,
      };
      setFullContent(fetchedData);
    }
  };

  // Purify the Text
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  // Call this function to load the article data

  useEffect(() => {
    if (blogId !== undefined) {
      getContent(blogId);
    }
  });

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center md:px-16 md:flex-row ">
        <div className="h-[1500px] px-16 pt-6">
          {/* Main Reading Bar */}
          <div className="flex flex-col md:flex-row max-w-[1410px] items-center justify-center space-x-24">
            <div className="flex md:max-w-[80%] md:min-w-[50%] h-screen flex-col items-start justify-start w-full pb-12 space-y-2">
              <button onClick={backHandler} className="flex flex-row space-x-2">
                <img src={backarrow} alt="back_button" />
                <p>Back</p>
              </button>
              <div className="w-full h-[400px]">
                <img
                  src={fullContent?.image}
                  className="w-full h-full"
                  alt="post_image"
                />
              </div>
              <div className="flex flex-row space-x-2">
                <img src={avatar} alt="avatar" className="w-6 h-6" />
                <p>Wepollnow Admin</p>
              </div>
              <h3 className="max-w-2xl text-xl font-bold md:text-3xl ">
                {fullContent?.title}
              </h3>
              <div className="flex flex-row space-x-4">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <img src={eye} alt="eyeIcon" />
                  <p>0</p>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <img src={time} alt="timeIcon" />
                  <p className="text-sm">{fullContent?.time_posted}</p>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2">
                  <img src={calendar} alt="calendarIcon" />
                  <p>{fullContent?.date_posted}</p>
                </div>
              </div>

              {/* Blog text contents displayed as HTML */}
              <div>
                <p
                  dangerouslySetInnerHTML={createMarkup(fullContent.content)}
                ></p>
              </div>
            </div>

            {/* Side Bar */}
            <div className="grid w-full md:w-[45%] h-screen grid-cols-1 pb-24 space-y-6 md:space-y-4 md:gap-y-0 md:pb-0">
              {isEmpty && <p className="text-[14px] font-bold">Latest Posts</p>}
              {!isEmpty && (
                <div className="flex flex-row justify-center mb-8 md:-pt-98">
                  <div className="border-8 border-[#EAB308] w-2/3 p-12">
                    <p className="text-sm md:text-2xl">
                      Latest posts not available at the moment...
                    </p>
                  </div>
                </div>
              )}
              {data.slice(0, 3).map((data) => {
                return (
                  <div
                    className="w-full"
                    key={data.id}
                    onClick={() => {
                      localStorage.setItem("blog_article_id", data.id);
                      window.location.reload();
                    }}
                  >
                    <Link to={"/blog-single"}>
                      <div className="flex flex-col w-full space-y-1 md:h-full">
                        <div className="relative">
                          <img
                            src={data.image}
                            alt="Voter"
                            className="w-full h-[200px] hover:brightness-50 rounded md:object-cover"
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
                            alt="authorImg"
                          />
                          <p className="font-normal">Wepollnow Admin</p>
                        </div>

                        <p className="max-w-sm font-bold text-md">
                          {data.title}
                        </p>
                        <div className="flex flex-row space-x-4">
                          <div className="flex flex-row items-center justify-start space-x-2">
                            <img src={eye} alt="calendarIcon" />
                            <p className="text-xs">0</p>
                          </div>
                          <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                            <img src={time} alt="calendarIcon" />
                            <p className="text-xs">{data.time_posted}</p>
                          </div>
                          <div className="flex flex-row items-center justify-start space-x-2 text-xs">
                            <img src={calendar} alt="calendarIcon" />
                            <p className="text-xs">{data.date_posted}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
              <Link to="/blog" className="w-full pt-8">
                <button className="w-full p-3 px-4 rounded bg-[#08c127] text-white animate">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogSingle;
