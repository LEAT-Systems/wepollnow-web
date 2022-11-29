import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Timer from "../../UI/Timer";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import calendar from "../../images/calendar.png";

//
//

const PollsSwiper = (props) => {
  const [data, setData] = useState([]);

  // TO check if API data contents is empty
  const isEmpty = data.length === 0;

  let uniqueID;
  useEffect(() => {
    uniqueID = localStorage.getItem("uniqueID");
  });

  // Setting data from API here
  useEffect(() => {
    let formData = new FormData();
    formData.append("user_id", `${uniqueID}`);
    const requestOptions = {
      method: "POST",
      body: null,
    };
    const getData = async () => {
      const response = await fetch(
        "https://wepollnow.azurewebsites.net/poll/user_polls/",
        requestOptions
      );
      const result = await response.text();
      const JSONdata = await JSON.parse(result);
      setData(JSONdata);
    };
    getData();
  }, [uniqueID]);

  return (
    <div className="relative">
      <div className="container flex flex-col mx-auto mt-12 md:mt-0 md:px-16">
        <p className="text-[16px] px-4 md:px-1 font-bold underline underline-offset-2 decoration-yellow-500 decoration-4">
          Upcoming Polls
        </p>

        {/* Rendering the empty container */}
        {isEmpty && (
          <div className="flex flex-row items-center justify-center mt-12">
            <div className="border-8 border-[#EAB308] w-2/3 p-12">
              <p className="text-sm md:text-2xl">
                No polls available at the moment...
              </p>
            </div>
          </div>
        )}

        {/* If not empty, swiper with all poll shows */}
        <Swiper
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            1025: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          loop={false}
          loopFillGroupWithBlank={false}
          modules={[Navigation]}
          navigation={true}
        >
          {data.map((item) => {
            // Here, I'm calculating the poll date from the current date so i could render poll items conditionally
            let due;
            const now = new Date().getTime();
            const distance = new Date(item.poll_date).getTime() - now;
            due = distance < 0;

            // Storing Polltype clicked on button into local storage
            const poll_name = item.poll_name;
            const poll_id = item.id;
            const handler = () => {
              localStorage.setItem(
                "poll_details",
                JSON.stringify({
                  poll_id: poll_id,
                  poll_name: poll_name,
                })
              );
            };

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center justify-center p-4 space-y-2 md:flex-row md:px-0">
                  <div className="flex flex-col items-center justify-center w-full py-12 space-y-4 transition duration-200 rounded-lg h-72 bg-polls-pattern hover:-translate-y-1">
                    {!due && (
                      <p className="text-xl font-bold text-center text-white">
                        {item.poll_name}
                      </p>
                    )}
                    <div
                      className={`flex flex-row items-center justify-center space-x-2 px-4 p-1 ${
                        due
                          ? "bg-[#EDFFF0] border-[#08c127]"
                          : "bg-[#FFFAED] border-[#f9c833]"
                      } border rounded-md`}
                    >
                      {!due && <img src={calendar} alt="calendarIcon" />}
                      <label className="text-[14px]">
                        <p className="font-normal">
                          {due
                            ? "Ongoing"
                            : new Date(`${item.poll_date}`)
                                .toISOString()
                                .substring(0, 10)}
                        </p>
                      </label>
                    </div>
                    {due && (
                      <p className="text-xl font-bold text-center text-white">
                        {item.poll_name}
                      </p>
                    )}
                    <div className="px-2">
                      {!due ? (
                        <Timer
                          date={item.poll_date}
                          size="2xl"
                          pcolor="white"
                          color="white"
                        />
                      ) : (
                        // Im forwarding the onPop property to ...component when the button is clicked
                        <button
                          onClick={props.onPop}
                          className="btn-stay animate"
                          onBlur={handler}
                        >
                          Vote Now
                        </button>
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
            <button className="p-4 px-8 font-semibold text-white bg-[#08C127] rounded-lg animate">
              View All Polls
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PollsSwiper;
