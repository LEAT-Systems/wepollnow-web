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
import { baseUrl } from "../../store/baseUrl";

const BlogSingle = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [blogId, setBlogId] = useState();
  const [fullContent, setFullContent] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  // Go back to previous page
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

  // Get post
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
          title: item.title,
          author: item.author,
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

  // Check if data from API is empty
  useEffect(() => {
    if (data.length === 0) {
      setIsEmpty(true);
    }
  }, [data.length]);

  // Get article contents for latest post
  const getContent = async (id) => {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetch(baseUrl + `blog/${id}`, requestOptions);
    const data = await response.json();
    let fetchedData;
    if (!response.ok) {
      alert("We are sorry. We could not fetch your selected post");
    } else {
      fetchedData = {
        id: data.id,
        author: data.author,
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
  /////////////////////////////////  =====     PAGINATION    ===========   ////////////////////////////////
  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
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

  //
  return (
    <div className="space-y-3 overflow-x-hidden">
      <div>
        <Nav />
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <section className="flex flex-col items-center justify-center w-full px-8 mx-auto">
          <div className="flex flex-col items-start justify-start space-y-4 md:space-x-24 md:px-24 md:mt-4 md:flex-row">
            <div className="flex flex-col items-start w-full md:w-[65%] md:h-fit space-y-4 pb-12">
              <div className="p-2">
                <button
                  onClick={backHandler}
                  className="flex flex-row space-x-2"
                >
                  <img src={backarrow} alt="back_button" />
                  <p>Back</p>
                </button>
              </div>

              <div className="w-full h-[246px] md:h-[400px] ">
                <img
                  src={fullContent?.image}
                  className="w-full h-full rounded-md"
                  alt="post_image"
                />
              </div>
              <div className="flex flex-row space-x-2">
                <img src={avatar} alt="avatar" className="w-6 h-6" />
                <p>{fullContent.author}</p>
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
              <div className="md:pt-8">
                <p
                  className="text-justify"
                  dangerouslySetInnerHTML={createMarkup(fullContent.content)}
                ></p>
              </div>
            </div>

            <div className="w-full md:w-[35%] md:h-fit pb-12 md:pb-0 space-y-4">
              <div>
                <header className="pt-4">
                  {isEmpty && (
                    <p className="font-bold text-[18px]">Latest Posts</p>
                  )}
                  {!isEmpty && (
                    <div className="flex flex-row justify-center mb-8 md:-pt-98">
                      <div className="border-8 border-[#EAB308] w-2/3 p-12">
                        <p className="text-sm md:text-2xl">
                          Latest posts not available at the moment...
                        </p>
                      </div>
                    </div>
                  )}
                </header>
              </div>
              {currentPosts.reverse().map((data) => {
                return (
                  <div
                    className="w-full pb-6"
                    key={data.id}
                    onClick={() => {
                      localStorage.setItem("blog_article_id", data.id);
                      window.location.reload();
                    }}
                  >
                    <Link to={"/blog-single"}>
                      <div className="flex flex-col w-full space-y-1 md:h-full">
                        <div className="relative">
                          <div className="w-full">
                            <img
                              src={data.image}
                              alt="Voter"
                              className="w-full h-[200px] hover:brightness-50 rounded md:object-cover"
                            />
                          </div>
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
                          <p className="font-normal">{fullContent.author}</p>
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

              {/* PAgination */}

              <div className="flex flex-row p-4 space-x-4 border-[#EAB308] border-4 rounded">
                {pagination}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogSingle;
