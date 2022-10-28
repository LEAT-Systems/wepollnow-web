import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Polls } from "./pollsObject";
import Timer from "../../UI/Timer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function PollsSwiper() {
  return (
    <div className="container flex flex-col mt-12 md:mt-0  mx-auto">
      <p className="text-[16px] px-1 font-bold underline underline-offset-2 decoration-yellow-500 decoration-4">
        Upcoming Polls
      </p>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        slidesPerGroup={3}
        spaceBetween={20}
        loop={false}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Polls.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center justify-center p-4 px-12 space-x-12 space-y-2 md:px-0">
                <div className="flex flex-col items-center justify-center px-4  w-full py-12 space-y-2 rounded-lg bg-polls-pattern md:px-0">
                  <p className="text-xl font-bold text-white">
                    {item.description}
                  </p>
                  <label className="px-4 bg-gray-200 rounded-lg">
                    {item.date}
                  </label>
                  <div className="px-2">
                    <Timer
                      date={item.date}
                      size="3xl"
                      pcolor="white"
                      color="white"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex flex-row items-center justify-center mt-6">
        <Link to="/polls">
          <button className="p-4 px-8 font-semibold text-white bg-green-500 rounded-lg animate">
            View All Polls
          </button>
        </Link>
      </div>
    </div>
  );
}
