import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Polls } from "./pollsObject";
import Timer from "../../UI/Timer";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

//
//
//

const PollsSwiper = () => {
  return (
    <div className="relative">
      <div className="container flex flex-col mt-12 md:mt-0 md:px-16 mx-auto">
        <p className="text-[16px] px-4 md:px-1 font-bold underline underline-offset-2 decoration-yellow-500 decoration-4">
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
          spaceBetween={20}
          loop={false}
          loopFillGroupWithBlank={false}
          modules={[Navigation]}
          navigation={true}
        >
          {Polls.map((item) => {
            // Here, I'm calculating the poll date from the current date so i could render items conditionally
            let due;
            const now = new Date().getTime();
            const distance = new Date(item.date).getTime() - now;
            due = distance < 0;

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col md:flex-row items-center justify-center p-4 space-y-2 md:px-0">
                  <div className="flex flex-col items-center justify-center w-full py-12 h-72 space-y-4 rounded-lg bg-polls-pattern">
                    <p className="text-xl font-bold text-white">
                      {item.description}
                    </p>
                    <label className="px-4 bg-gray-200 rounded-lg">
                      {due ? "Ongoing" : item.date}
                    </label>
                    <div className="px-2">
                      {!due ? (
                        <Timer
                          date={item.date}
                          size="3xl"
                          pcolor="white"
                          color="white"
                        />
                      ) : (
                        <button className="btn-stay">Vote Now</button>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-row items-center justify-center mt-6">
          <Link to="/polls">
            <button className="p-4 px-8 font-semibold text-white bg-[#08BC26]  rounded-lg animate">
              View All Polls
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PollsSwiper;
