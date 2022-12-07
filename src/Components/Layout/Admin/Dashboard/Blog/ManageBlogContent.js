import React, { useState, useEffect } from "react";
import Header from "../../Header";
import bannerImage from "../../../../../images/image_3.png";
import eye from "../../../../../images/eye.png";
import calendar from "../../../../../images/calendar.png";
import time from "../../../../../images/time.png";
import image from "../../../../../images/blankImg.png";
import Delete from "../../assets/trash@2x.png";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

/* Not used by Vincent */

const ManageBlogContent = () => {
  const [data, setData] = useState([]);
  const [id, setID] = useState();
  const [articleId, setArticleId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  const [rightContent, setRightContent] = useState({
    id: "Sample001",
    title: "Article title preview",
    date: "00-00-00",
    time: "00:00:00",
    image: image,
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

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  //
  //
  //
  //
  //
  // =================================== Get post content based on the selected ID

  const getContent = async () => {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetch(
      `https://wepollnow.azurewebsites.net/blog/${articleId}`,
      requestOptions
    );
    let data = await response.json();

    data = {
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
    setRightContent(data);

    if (!response.ok) {
      alert("Could not fetch data");
    }
  };

  useEffect(() => {
    if (articleId !== undefined) {
      getContent();
    }
  }, [articleId]);

  //
  //
  // ========================================    Delete article post
  const deleteHandler = async (e) => {
    e.preventDefault();
    // Send API request
    const requestOptions = {
      method: "DELETE",
    };
    const response = await fetch(
      `https://wepollnow.azurewebsites.net/blog/${id}`,
      requestOptions
    );
    if (!response.ok) {
      alert("Could not perform operation");
    } else {
      window.location.reload();
    }
  };

  // ====================================    Get All blog data from API
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
          title: item.title.split(" ").splice(0, 5).join(" ") + "...",
          content:
            item.content !== undefined
              ? item.content.split(" ").splice(0, 15).join(" ") + "..."
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

  return (
    <>
      <Header />
      <main className="px-4 my-4 md:px-6 lg:px-12">
        <header className="flex flex-row justify-between w-full py-4">
          <div>
            <h2 className="font-extrabold text-2xl text-[#082a0f] capitalize">
              Manage Blog
            </h2>
          </div>

          <nav className="flex h-full pl-3 my-auto text-gray-500">
            <span className="mr-1 w-[2.6rem]"></span>
            <Link
              to={"/admin/blog/manageBlog"}
              className="p-3 rounded-md bg-[#08c127] text-white px-5 animate"
            >
              New Post
            </Link>
          </nav>
        </header>
        <section className="w-full pt-6">
          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-12">
            {/*  */}

            {/* Left sidebar */}
            <div className="w-full md:w-[35%] md:h-screen pb-12 md:pb-0">
              <div className="border border-gray-200 rounded">
                <header className="p-4 border-b">
                  <p className="font-bold text-[18px]">All Posts</p>
                </header>
                {currentPosts.length === 0 && (
                  <p className="p-12">No post available</p>
                )}
                {currentPosts.reverse().map((data) => {
                  return (
                    <form
                      onSubmit={deleteHandler}
                      className="flex flex-col space-y-2 border-b hover:cursor-pointer"
                      key={data.id}
                    >
                      <div
                        className="p-6 hover:bg-green-100"
                        onClick={() => setArticleId(data.id)}
                      >
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-col space-y-2">
                            <p className="font-bold text-md">{data.title}</p>
                            <div className="flex flex-row items-center justify-start space-x-1">
                              <p>{data.date_posted}</p>
                              <span className="w-2 h-2 bg-black rounded-full "></span>
                              <p>{data.time_posted}</p>
                            </div>
                          </div>
                          <button
                            className="hover:bg-[#eee]"
                            type="submit"
                            onClick={() => setID(data.id)}
                          >
                            <img src={Delete} alt="trash" className="w-5 h-5" />
                          </button>
                        </div>
                        <p
                          dangerouslySetInnerHTML={createMarkup(data.content)}
                        ></p>
                      </div>
                    </form>
                  );
                })}
              </div>
              <div className="flex flex-row p-4 space-x-4 border-b border-l border-r">
                {pagination}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col items-center w-full md:w-[65%] md:h-screen">
              <div className="border border-gray-200 rounded">
                <div className="flex flex-col p-4 space-y-2 md:p-8">
                  <img
                    src={rightContent.image}
                    alt="headerImage"
                    className="w-full md:w-[1000px] md:h-[600px] md:object-cover"
                  />
                  <div className="flex flex-row space-x-2">
                    <img
                      src={bannerImage}
                      alt="avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    <p>Administrator</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold">
                      {rightContent.title}
                    </p>
                  </div>
                  <div className="flex flex-row space-x-4 ">
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <img src={eye} alt="eyeIcon" className="w-4 h-4" />
                      <p className="text-sm">0</p>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <img src={time} alt="timeIcon" className="w-4 h-4" />
                      <p className="text-sm">{rightContent.time_posted}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <img
                        src={calendar}
                        alt="calendarIcon"
                        // className="w-3 h-3"
                      />
                      <p className="text-sm">{rightContent.date_posted}</p>
                    </div>
                  </div>
                  <div>
                    <p
                      dangerouslySetInnerHTML={createMarkup(
                        rightContent.content
                      )}
                    ></p>
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
