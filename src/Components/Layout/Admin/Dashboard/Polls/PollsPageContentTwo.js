import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ArrowUpward, CalendarMonthOutlined, People, Save } from "@mui/icons-material";
import Header from "../../Header";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import PieChart2 from "../Charts/PieChart2";
import DropDown from "../DropDown/DropDown";
import Grid from "./Grid";
import Data from "../../Data.json";
import { NavLink } from "react-router-dom";
import VOTES from '../../assets/directbox-default.png'
import TableResult from "../Tables/TableResult/TableResult";
import TableStateResult from "../Tables/TableStateResult/TableStateResult";

const PollsPageContentTwo = () => {
  const [open, setOpen] = useState(false);

  /* View State */
  const [isTableState, setIsTableState] = useState(false);
  const [isBar, setIsBar] = useState(false);
  const [isPie, setIsPie] = useState(false);

  const handleGrid = () => {
    setIsTableState(true);
    setIsBar(false);
    setIsPie(false);
  };

  const handleList = () => {
    setIsTableState(false);
    setIsBar(false);
    setIsPie(false);
  };

  const handleBar = () => {
    setIsTableState(false);
    setIsBar(true);
    setIsPie(false);
  };

  const handlePie = () => {
    setIsTableState(false);
    setIsPie(true);
    setIsBar(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

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
      <main className='max-h-screen w-full px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <div className='flex flex-row items-center justify-between pt-2'>
          <div className='flex flex-col mt-3 my-auto place-items-start items-start w-full'>
            <h2 className='font-extrabold text-xl lg:text-2xl md:text-[1.4rem] capitalize pt-4 pb-2 pl-0 w-full'>
              Polls Result
            </h2>
            <div className='flex flex-row items-center justify-start text-base'>
              <NavLink to='/admin/polls' activeClassName={null}>
                <p className='font-bold text-[#616b62]'>Manage Polls</p>
              </NavLink>
              <NavigateNextIcon
                sx={{ fontSize: "0.8rem", margin: "auto .7rem" }}
              />
              <p className='font-bold text-[#082b0e]'>Poll Result</p>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full mx-auto my-9'>
          {/* First Card */}
          {data.map((data) => (
            <>
              <div className='flex flex-col flex-1 relative border-2 border-gray-400 bg-white rounded-lg px-5 py-2 w-full h-[9rem]'>
                <div className='w-full whitespace'>
                  <h2 className='text-base font-bold whitespace-nowrap'>
                    Presidential Poll
                  </h2>
                  <span className='font-bold text-gray-500 text-[.75rem] capitalize'>
                    National
                  </span>
                </div>

                <div className='flex justify-between w-full mt-auto'>
                  <h3 className='text-[.9rem]'>
                    <CalendarMonthOutlined
                      sx={{
                        fontSize: "0.9rem",
                        margin: "auto .2rem .2rem auto",
                      }}
                    />
                    22/22/2022
                  </h3>
                  <h3 className='text-base relative after:content-[""] after:absolute after:w-[.6rem] after:h-[.6rem] after:rounded-full after:bg-red-400 after:-left-3 after:top-1/2 after:-translate-y-1/2'>{data.status[1]}</h3>
                </div>
              </div>

              {/* Second Card  */}
              <div className='flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]'>
                <span className='rounded-2xl bg-[#e7f9ea] p-4 mr-4 items-start'>
                  <img
                    src={VOTES}
                    alt='Votes'
                    className='w-[3.5rem] h-[3.5rem] bg-[#e7f9ea]'
                  />
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
                <PieChart />
              </div>
            </>
          ))}
        </div>

        {/* ===============   Chart Table ========================*/}

        <div className='px-2 md:px-4 w-full'>
          <div className='flex flex-col p-4 border rounded-lg'>
            <div className='flex flex-row items-center justify-between mb-10'>
              <p className='font-[800] text-[#082b0e]'>
                Presidential Poll Result
              </p>

              <div className='flex gap-2'>
                <span className='border rounded-md my-auto flex w-auto p-2 font-[500] text-[#616b62]'>
                  Total: {Data.length}
                </span>
                <DropDown
                  handleBar={handleBar}
                  handlePie={handlePie}
                  handleGrid={handleGrid}
                  handleList={handleList}
                />

                <span
                  download
                  className='border rounded-md my-auto flex w-auto hover:cursor-pointer p-2 font-[500] text-[#616b62]'
                >
                  CSC
                  <Save sx={{ fontSize: "1.2rem", marginLeft: "1rem" }} />
                </span>
              </div>
            </div>

            <div className='max-w-full'>
              {isTableState ? (
                <TableStateResult />
              ) : isBar ? (
                <BarChart />
              ) : isPie ? (
                <PieChart2 />
              ) : (
                <TableResult />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PollsPageContentTwo;


// Add candidate
// Remove LGA | Replace Party dropdown & Main candidate checkbox
// Create poll
// Remove LGA

