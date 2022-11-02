/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import Tables from "../Tables/Tables";
import Header from "../../Header";
import Data from "../../Data.json";
import {
  ArrowForward,
  ArrowForwardIos,
  ArrowUpward,
  People,
  PieChart,
} from "@mui/icons-material";
import Grid from "../Polls/Grid";

const DashboardContent = () => {
  const data = [
    {
      id: 3,
      status: ["Upcoming", "Scheduled", "Concluded"],
      users: "235,436",
      daily_hits: 45,
      total_hits: 523,
      daily_users: 89,
    },
  ];

  console.log(data);

  const [greeting, setGreeting] = useState("");
  const date = new Date();
  const hrs = date.getHours();

  useEffect(() => {
    if (hrs < 12) {
      setGreeting("Morning");
    }
    if (hrs >= 12 && hrs <= 17) {
      setGreeting("Afternoon");
    }
    if (hrs >= 17 && hrs <= 24) {
      setGreeting("Evening");
    }
  }, [hrs, date]);

  return (
    <>
      <Header />
      <main className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <div className='flex flex-row'>
          <div className='flex flex-col py-4 space-y-2'>
            <h2 className='text-xl md:text-3xl font-semibold'>
              Good {greeting}
            </h2>
            <p className='texl-sm font-medium md:font-bold'>
              Here is the latest update on Wepollnow
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className='grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-8 place-items-center w-full mx-auto my-14'>
          {/* First Card */}
          {data.map((data) => (
            <>
              <div className='flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]'>
                <span className='rounded-2xl bg-[#e7f9ea] p-4 mr-4 items-start'>
                  <PieChart sx={{ color: "green", fontSize: "3rem" }} />
                </span>
                <div className='flex flex-col items-start'>
                  <span className='text-2xl font-extrabold pb-1'>
                    {JSON.stringify(data.total_hits)}
                    {console.log(data?.hits)}
                  </span>
                  <span className='font-bold text-gray-500 text-[.75rem] capitalize flex-1'>
                    Daily hits
                  </span>
                </div>

                <div className='absolute bottom-4 right-4 flex bg-[#e7f9ea] text-green-500 p-1 rounded-lg border'>
                  <ArrowUpward
                    sx={{ fontsize: "0.2rem", margin: "auto .1rem auto auto" }}
                    fontSize='0.1rem'
                  />
                  <h3 className='bg-[#e7f9ea] text-[.7rem] my-auto'>
                    + {data.daily_hits} today
                  </h3>
                </div>
              </div>

              {/* Second Card  */}
              <div className='flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]'>
                <span className='rounded-2xl bg-[#e7f9ea] p-4 mr-4 items-start'>
                  <People sx={{ color: "green", fontSize: "3rem" }} />
                </span>
                <div className='flex flex-col items-start'>
                  <span className='text-2xl font-extrabold pb-1'>
                    {data.users}
                  </span>
                  <span className='font-bold text-gray-500 text-[.75rem] capitalize flex-1'>
                    users
                  </span>
                </div>

                <div className='absolute bottom-4 right-4 flex bg-[#e7f9ea] text-green-500 p-1 rounded-lg border'>
                  <ArrowUpward
                    sx={{ fontsize: "0.2rem", margin: "auto .1rem auto auto" }}
                    fontSize='0.1rem'
                  />
                  <h3 className='bg-[#e7f9ea] text-[.7rem] my-auto'>
                    + {data.daily_users} today
                  </h3>
                </div>
              </div>

              {/* Third Card */}
              <div className='block border-2 border-gray-400 bg-white text-[#082a0f] rounded-lg px-4 py-3 w-full h-[9rem]'>
                <h2 className='capitalize font-extrabold text-lg pb-3'>
                  Polls info
                </h2>
                <div className='grid grid-cols-3 gap-4 w-full'>
                  <div className='flex flex-col justify-center items-center h-full bg-[#ebf5ed] py-3 px-6 rounded-lg'>
                    <span className='font-extrabold text-2xl'>
                      {data.status.length}
                    </span>
                    <span className='capitalize text-sm'>{data.status[0]}</span>
                  </div>

                  <div className='flex flex-col justify-center items-center h-full bg-[#ebf5ed] py-3 px-6 rounded-lg'>
                    <span className='font-extrabold text-2xl'>
                      {data.users.toString().length}
                    </span>
                    <span className='capitalize text-sm'>{data.status[1]}</span>
                  </div>

                  <div className='flex flex-col justgiify-center items-center h-full bg-[#ebf5ed] py-3 px-6 rounded-lg'>
                    <span className='font-extrabold text-2xl'>
                      {data.status.length - 1}
                    </span>
                    <span className='capitalize text-sm'>{data.status[2]}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        {/* Data Table */}
        <div className='flex flex-col text-[#082a0f] border-2 rounded-lg px-6'>
          <div className='flex flex-row justify-between pt-4 px-2'>
            <h2 className='font-extrabold text-[#082a0f] text-lg'>Polls</h2>
            <button className='capitalize font-bold px-4 py-3 text-base w-fit border rounded-md my-auto'>
              View All
              <ArrowForwardIos
                sx={{
                  fontSize: "1rem",
                  margin: "-0.2rem 0 auto .6rem",
                  padding: ".15rem",
                  borderRadius: ".3rem",
                  border: "2px solid gray",
                }}
                fontSize='inherit'
              />
            </button>
          </div>
          <Tables data={Data} />
        </div>
      </main>
    </>
  );
};

export default DashboardContent;
