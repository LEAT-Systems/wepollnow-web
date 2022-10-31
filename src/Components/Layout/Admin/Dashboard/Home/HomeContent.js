import React, { useEffect } from "react";
import { useState } from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import InsightsIcon from "@mui/icons-material/Insights";
import Tables from "../Tables/Tables";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Header from "../../Header";
import Data from "../../Data.json"

const DashboardContent = () => {
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
      <div className='flex flex-row max-h-screen'>
        <div className='flex flex-col p-4 space-y-2'>
          <h2 className='text-2xl font-bold'>Good {greeting}</h2>
          <p className='texl-sm'>Here is the latest update on Wepollnow</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between w-full p-8 mx-auto -mt-6 space-x-12'>
        <div className='flex flex-col items-start justify-center w-1/3 h-[150px] space-y-2 bg-yellow-500 rounded-lg shadow-2xl'>
          <div className='flex flex-row items-center justify-center px-3 space-x-3'>
            <div className='p-2 bg-white rounded-lg'>
              <PeopleOutlineIcon fontSize='large' />
            </div>
            <div className='flex flex-col items-start justify-start '>
              <p className='text-2xl font-bold'>523 </p>
              <p className='text-xs'>Daily Hits</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center w-1/3 h-[150px] space-y-2 bg-green-500 rounded-lg shadow-2xl'>
          <div className='flex flex-row items-center justify-center px-3 space-x-3'>
            <div className='p-2 bg-white rounded-lg'>
              <PeopleOutlineIcon fontSize='large' />
            </div>
            <div className='flex flex-col items-start justify-start '>
              <p className='text-2xl font-bold'>709,346 </p>
              <p className='text-xs'>Users</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start px-12 py-8 text-white bg-[#EF4444] rounded-lg shadow-2xl'>
          <p className='font-bold underline'>Polls Info</p>
          <div className='flex flex-row items-center justify-center space-x-4'>
            <div className='flex flex-col text-center'>
              <p className='text-2xl font-bold'>2</p>
              <p>Ongoing</p>
            </div>
            <div className='flex flex-col px-2 text-center border-l border-gray-200'>
              <p className='text-2xl font-bold'>36</p>
              <p>Scheduled</p>
            </div>
            <div className='flex flex-col px-2 text-center border-l border-gray-200'>
              <p className='text-2xl font-bold'>53</p>
              <p>Concluded</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className='w-full px-8'>
        <div className='flex flex-col p-8 border rounded-lg '>
          <div className='flex flex-row items-center justify-between p-2'>
            <p>Polls</p>
            <div className='flex flex-row items-center justify-center px-2 space-x-1 border border-gray-200 rounded-lg'>
              <div className='p-1'>View All</div>
              <VisibilityIcon />
            </div>
          </div>
          <Tables data={Data} />
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
