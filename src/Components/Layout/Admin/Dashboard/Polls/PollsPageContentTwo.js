import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ArrowUpward, CalendarMonthOutlined, People, PieChart as Pie } from "@mui/icons-material";
import Header from "../../Header";
import PieChart from "../Charts/PieChart";
import LabelPluginProvider from "../Charts/LabelPluginProvider";
import BarChart from "../Charts/BarChart";

//
//
//
const PollsPageContentTwo = () => {

  const day = new Date().getDate;
  const month = new Date().getMonth;
  const year = new Date().getFullYear;

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
  return (
    <>
      <Header />
      <main className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <div className='flex flex-row items-center justify-between pt-2'>
          <div className='flex flex-col mt-3 my-auto place-items-start items-start w-full'>
            <h2 className='font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize pt-4 pb-2 pl-0 w-full'>
              Polls Result
            </h2>
            <div className='flex flex-row items-center justify-start'>
              <Link to='/dashboard/polls'>
                <p className='font-bold '>Manage Polls</p>
              </Link>
              <NavigateNextIcon />
              <p className='font-bold'>Poll Result</p>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full mx-auto my-9'>
          {/* First Card */}
          {data.map((data) => (
            <>
              <div className='flex flex-col relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]'>
                <div className='w-full whitespace'>
                  <h2 className='text-base font-extrabold pb-1 whitespace-nowrap'>
                    Presidential Poll
                  </h2>
                  <span className='font-bold text-gray-500 text-[.75rem] capitalize flex-1'>
                    National
                  </span>
                </div>

                <div className='flex justify-between git add src/p-1 w-full'>
                  <h3 className='text-[.7rem]'>
                    <CalendarMonthOutlined sx={{ fontSize: '0.7rem', margin: "auto" }} />
                    22/22/2022
                  </h3>
                  <h3 className='text-[.7rem]'>
                    {data.status[2]}
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
              <div className='border-2 border-gray-400 bg-white text-[#082a0f] rounded-lg px-4 py-3 w-full h-[9rem]'>
                <LabelPluginProvider>
                 <PieChart /> 
                </LabelPluginProvider>
                  
                </div>
            </>
          ))}
        </div>

        {/* ===============   Chart Table ========================*/}

        <div className='px-2 md:px-4'>
          <div className='flex flex-col p-4 border rounded-lg'>
            <div className='flex flex-row items-center justify-between'>
              <p>Presidential Poll Result</p>
            </div>

            <div className=''>
              <BarChart />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PollsPageContentTwo;
