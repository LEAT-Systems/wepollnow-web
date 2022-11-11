import React from "react";
import Nav from "../../Components/Layout/Landing/mainNav";
import anchor from "../../images/anchor.png";
import calendar from "../../images/calendar.png";
import eye from "../../images/eye.png";
import time from "../../images/time.png";
import img_2 from "../../images/image_3.png";
import backarrow from "../../images/backArrow.png";
import Footer from "../../Components/Layout/Landing/Footer";
import { useHistory, Link } from "react-router-dom";
import { DUMMY_DATA } from "./DummyData";

const BlogSingle = () => {
  const history = useHistory();
  const backHandler = () => {
    history.goBack();
  };
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center md:px-24 md:flex-row md:min-w-[80%]">
        {/* Main Reading Bar */}

        <div className="flex flex-col items-start justify-start w-full px-8 pt-4 pb-12 space-y-4 md:w-full">
          <button onClick={backHandler} className="flex flex-row space-x-2">
            <img src={backarrow} alt="back_button" />
            <p>Back</p>
          </button>
          <img src={img_2} className="w-[700px] md:h-[460px]" />
          <div className="flex flex-row space-x-2">
            <img src={img_2} alt="avatar" className="w-6 h-6" />
            <p>Olumide Adebayo</p>
          </div>
          <h3 className="max-w-2xl text-xl font-bold md:text-3xl ">
            FEC approves N27.4b contracts for Works, Housing, FCT ministries
          </h3>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-center justify-center space-x-2">
              <img src={eye} alt="eyeIcon" />
              <p>56</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <img src={time} alt="timeIcon" />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <img src={calendar} alt="calendarIcon" />
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
        <div className="grid grid-cols-1 -mt-16 md:space-y-4 md:gap-y-0">
          <p className="text-[14px] font-bold">Latest Posts</p>
          {DUMMY_DATA.map((data) => {
            return (
              <div className="w-full ">
                <Link to={"/blog-single"} key={data.id}>
                  <div className="flex flex-col w-full space-y-1 md:h-full">
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
        {/* <div className="grid grid-cols-1 pt-8 mx-auto md:space-y-4 w-full  md:pb-24 gap-y-12 md:gap-y-0">
          <p className="font-bold">Latest Posts</p>
          {DUMMY_DATA.map((data) => {
            return (
              <Link to={"/blog-single"} key={data.id}>
                <div className="flex flex-col space-y-1">
                  <div className="relative w-full">
                    <img
                      src={data.articleImg}
                      alt="Voter"
                      className="w-full rounded md:object-cover"
                    />
                    <div className="absolute bottom-0 right-0 z-30">
                      <img
                        src={anchor}
                        alt="anchorIcon"
                        className="rounded-br"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={data.authorImg}
                      alt=""
                    />
                    <p className="font-bold">{data.author}</p>
                  </div>

                  <h4 className="max-w-sm font-bold text-md">
                    {data.postCaption}
                  </h4>
                  <div className="flex flex-row space-x-4">
                    <div className="flex flex-row items-center justify-start space-x-2">
                      <CommentIcon />
                      <p>{data.comment}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <AccessTimeIcon />
                      <p className="text-sm">{data.timePosted}</p>
                    </div>
                    <div className="flex flex-row items-start justify-center space-x-2">
                      <CalendarMonthIcon />
                      <p>{data.datePosted}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default BlogSingle;
