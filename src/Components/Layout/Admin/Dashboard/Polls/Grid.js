/** @format */
import React from "react";
import { AddOutlined, CalendarMonthOutlined } from "@mui/icons-material";
import Edit from "../../assets/edit@2x.png";
import Archive from "../../assets/archive@2x.png";
import Delete from "../../assets/trash@2x.png";

const Grid = ({ handleOpen, data }) => {
  const getSymbol = (data) => {
      const string = data?.poll_name;
      const wordArray = string.split(" ", 2);
      let symbol;
      if (wordArray.length === 1) {
        symbol = string.slice(0, 2);
      }
      if (wordArray.length === 2) {
        symbol = string.slice(0, 1) + wordArray[1].slice(0, 1);
      }
      return symbol;
  };

  const formatDate = (string) => {
    return string.slice(0, 10); /* string.split("T", 10).join() */
  };



  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 mb-4 gap-6'>
      {/* Button to create new poll */}
      <div
        className='flex flex-col justify-center items-center hover:cursor-pointer text-3xl-font-bold border-2 border-gray-300 py-2  gap-4 rounded-lg transition duration-700 ease-in-out hover:scale-90'
        onClick={handleOpen}
      >
        <span className='text-[1.1rem] ml-2 hover:cursor-pointer p-3 border-4 border-solid border- border-[#082a0f] rounded-full'>
          <AddOutlined className='text-[#082a0f]' fontSize='large' />
        </span>
        <h1 className='font-[700] text-xl capitalize font-serif'>
          Create Poll
        </h1>
      </div>

      {/* existing polls from API */}
      {data.map((data) => (
        <div
          className='border-2 border-gray-300 py-2 block gap-4 rounded-lg'
          key={data?.id}
        >
          {/* First Section of Card */}
          <div className='justify-between items-center flex p-2'>
            <button className='border border-gray-100 text-[.8rem] px-2 py-1 fit-content rounded-sm'>
              {formatDate(data?.poll_startDate)}
            </button>
            <div className='flex my-auto'>
              <span className='text-[1rem] mr-2 hover:cursor-pointer'>
                <img src={Edit} alt='Edit' className='w-[1.1rem] h-[1.1rem]' />
              </span>
              <span className='text-[1rem] mx-2 hover:cursor-pointer'>
                <img
                  src={Archive}
                  alt='Archive'
                  className='w-[1.1rem] h-[1.1rem]'
                />
              </span>
              <span className='text-[1.1rem] ml-2 hover:cursor-pointer'>
                <img
                  src={Delete}
                  alt='Trash'
                  className='w-[1.1rem] h-[1.1rem]'
                />
              </span>
            </div>
          </div>

          {/* Second Section of Card */}
          <div className='flex h-36 w-full bg-[#b3bab4] tracking-wider font-serif text-[#082a0f] items-center justify-center text-4xl font-bold sm:font-[900] uppercase'>
            {getSymbol(data)}
          </div>

          {/* Third Section of Card */}
          <div className='justify-between items-center flex px-2'>
            <div className='block p-2'>
              <h2 className='font-[700] text-[.9rem] md:text-[.8rem] text-[#082a0f] capitalize'>
                {data?.poll_name}
              </h2>
              <h4 className='font-[500] text-[.9rem] md:text-[.9rem] text-[#082a0f] capitalize'>
                {data?.poll_state?.name}
              </h4>
            </div>

            <div className='block text-[#082a0f] py-3'>
              <div className='flex items-center m-auto px-2'>
                <span className='text-[.9rem] mr-2 hover:cursor-pointer my-auto'>
                  <CalendarMonthOutlined
                    className='text-[#082a0f] font-[500]'
                    fontSize='inherit'
                  />
                </span>
                <h2 className='font-[400] text-[.8rem] md:text-[.8rem] my-auto pt-1'>
                  {formatDate(data?.poll_endDate)}
                </h2>
              </div>
              <div className='flex justify-center-items-center'>
                <div
                  className={`${
                    data.status === 1
                      ? "bg-blue-500"
                      : data.status === 2
                      ? "bg-green-500"
                      : "bg-red-400"
                  } rounded-full h-2 w-2 m-auto`}
                >
                  {" "}
                </div>

                <h2 className='font-[400] text-base md:text-base my-auto capitalize'>
                  {data.status === 1
                    ? "Upcoming"
                    : data.status === 2
                    ? "Scheduled"
                    : "Concluded"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Grid;
