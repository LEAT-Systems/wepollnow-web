/** @format */

import React, { useEffect, useState } from "react";
import Tables from "../Tables/Tables";
import FilteredTable from "../Tables/FilteredTable";
import Header from "../../Header";
import Data from "../../Data.json";
import PollsHeader from "./PollsHeader";
import Grid from "./Grid";
import { AddOutlined, Close, Delete } from "@mui/icons-material";
import { Modal } from "@mui/material";
// import { getTableData } from "../api";

const PollsPageContentOne = () => {
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  /* View State */
  const [isGrid, setIsGrid] = useState(false);

  const handleGrid = () => {
    setIsGrid(true);
  };

  const handleList = () => {
    setIsGrid(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const isActiveClass =
    "flex items-center justify-center rounded-full py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full";

  const isNotActiveClass =
    "flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full";

  useEffect(() => {
    /* For the api */
    // getTableData().then(json => {
    //   setTableData(json)
    //   return json
    // }).then(json => {
    //   setSearchResult(json)
    // })

    /* For our demo json object */
    setTableData(Data);
    setSearchResult(Data);
  }, []);

  return (
    <main className='flex flex-col justify-center w-[98%]'>
      <Header />

      <div className='px-4 md:px-6 lg:px-12'>
        <div className='px-2 md:px-6 pr-0 sm:pr-14 md:pr-20 w-full'>
          <PollsHeader
            setSearchResult={setSearchResult}
            tableData={tableData}
            handleGrid={handleGrid}
            handleList={handleList}
          />
        </div>

        {/* Data Table */}
        <div className='flex flex-col text-[#082a0f] border-2 rounded-lg px-6 my-8 md:mt-14 mb-6'>
          <div className='flex flex-row justify-between pt-4 px-2'>
            <h2 className='font-extrabold text-[#082a0f] text-lg'>Polls</h2>
            <button
              className={open ? isActiveClass : isNotActiveClass}
              onClick={handleOpen}
            >
              create poll
            </button>
          </div>

          {isGrid ? (
            <Grid data={searchResult} handleOpen={handleOpen} />
          ) : (
            <Tables data={searchResult} />
          )}
        </div>

        {/* <FilteredTable searchResult={searchResult} /> */}
        {/* <Tables data={Data} /> */}

        {/* Overlay */}
        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "auto",
          }}
        >
          <div className='flex flex-col items-center justify-center px-6 py-4 my-auto mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg overflow-y-auto'>
            <header className='flex justify-between items-center w-full border-b-2 border-solid border-gray-300 mb-3 py-2'>
              <h2 className='font-extrabold text-lg md:text-xl text-[#082a0f] capitalize'>
                create poll
              </h2>
              <button
                className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500'
                onClick={handleClose}
              >
                <Close />
              </button>
            </header>

            <form className='flex flex-col justify-between items-center w-full my-2 hover:bg-transparent'>
              {/* First Form */}
              <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
                <label className='custom__select__container'>
                  Poll Type
                  <select
                    name='poll__type'
                    id='poll__type'
                    className='custom__select'
                  >
                    <option value='Select Poll Type'>Select Poll Type</option>
                    <option>President Poll</option>
                    <option>Gubernational Poll</option>
                    <option>Governorship Poll</option>
                  </select>
                </label>

                <label className='w-full relative'>
                  Date
                  <input
                    type='date'
                    name='date'
                    id='date'
                    className='font-medium text-base text-[#616b62] uppercase h-full w-full border-2 border-gray-300 rounded-md py-3 px-3'
                    placeholder='DD/MM/YY'
                  />
                </label>
              </div>

              {/* Second Form */}
              <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
                <label className='custom__select__container'>
                  State
                  <select name='state' id='state' className='custom__select'>
                    <option value='Select state'>Select State</option>
                    <option>Abia</option>
                    <option>Adamawa</option>
                    <option>Akwa Ibom</option>
                    <option>Anambra</option>
                    <option>Bauchi</option>
                    <option>Bayelsa</option>
                    <option>Benue</option>
                    <option>Borno</option>
                    <option>Cross River</option>
                    <option>Delta</option>
                    <option>Ebonyi</option>
                    <option>Edo</option>
                    <option>Ekiti</option>
                    <option>Enugu</option>
                    <option>Fct</option>
                    <option>Gombe</option>
                    <option>Imo</option>
                    <option>Jigawa</option>
                    <option>Kaduna</option>
                    <option>Kano</option>
                    <option>Katsina</option>
                    <option>Kebbi</option>
                    <option>Kogi</option>
                    <option>Kwara</option>
                    <option>Lagos</option>
                    <option>Nasarawa</option>
                    <option>Niger</option>
                    <option>Ogun</option>
                    <option>Ondo</option>
                    <option>Osun</option>
                    <option>Oyo</option>
                    <option>Plateau</option>
                    <option>Rivers</option>
                    <option>Sokoto</option>
                    <option>Taraba</option>
                    <option>Yobe</option>
                    <option>Zamfara</option>
                  </select>
                </label>
              </div>

              {/* Third Form */}
              <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
                <label className='custom__select__container'>
                  Senetorial District
                  <select
                    name='poll__type'
                    id='poll__type'
                    className='custom__select'
                  >
                    <option value='Select Poll Type'>
                      Select Senetorial District
                    </option>
                    <option>This is a Senetorial District</option>
                    <option>This is a Senetorial District</option>
                    <option>This is a Senetorial District</option>
                  </select>
                </label>

                <label className='custom__select__container'>
                  LGA
                  <select name='lga' id='lga' className='custom__select'>
                    <option value='Select Poll Type'>Select LGA</option>
                    <option>This is an LGA</option>
                    <option>This is an LGA</option>
                    <option>This is an LGA</option>
                  </select>
                </label>
              </div>

              {/* Final Form */}
              <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
                <label className='custom__select__container'>
                  Zone
                  <select name='zone' id='zone' className='custom__select'>
                    <option value='Select Zone'>Select Zone</option>
                    <option>1</option>
                    <option>2</option>
                    <option>2</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </label>
              </div>
            </form>

            {/* Buttons */}
            <div className='flex justify-end items-center w-full my-2'>
              <button
                className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
                onClick={handleClose}
              >
                cancel
              </button>
              <button className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'>
                confirm
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </main>
  );
};

export default PollsPageContentOne;

// <Modal open={open}>
//   <div className='flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0'>
//     <div className='w-full px-4 py-4 bg-white border border-gray-500 rounded-lg md:w-2/4'>
//       <div className='flex flex-row items-center justify-between p-3 border-b'>
//         <p className='text-lg font-bold'>Create Poll</p>
//         <button
//           onClick={handleClose}
//           type='button'
//           className='flex flex-row items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full'
//         >
//           <CloseIcon fontSize='small' />
//         </button>
//       </div>
//       <div className='flex flex-row p-4'>
//         {/*  */}
//         {/*========================  CREATE POLL FORM ================================*/}
//         <form className='w-full space-y-4'>
//           <div className='flex flex-row space-x-4'>
//             {/*  */}
//             {/* Poll type TYPE => Select*/}
//             <select className='w-full p-3 border rounded-lg'>
//               <option>1</option>
//               <option>2</option>
//             </select>

//             {/* Poll date : TYPE => Datepicker */}
//             <input className='w-full p-3 border rounded-lg' />
//           </div>

//           {/* State : TYPE => Select */}
//           <div className='flex flex-row space-x-4'>
//             <select className='w-full p-3 border rounded-lg'>
//               <option>1</option>
//               <option>2</option>
//             </select>
//           </div>

//           {/* Senatorial District : TYPE => Select */}
//           <div className='flex flex-row space-x-4'>
//             <select className='w-full p-3 border rounded-lg'>
//               <option>1</option>
//               <option>2</option>
//             </select>

//             {/* LGA TYPE => Select */}
//             <select className='w-full p-3 border rounded-lg'>
//               <option>1</option>
//               <option>2</option>
//             </select>
//           </div>

//           {/* Zone */}
//           <div className='flex flex-row space-x-4'>
//             <select className='w-full p-3 border rounded-lg'>
//               <option>1</option>
//               <option>2</option>
//             </select>
//           </div>

//           {/* Cancel and Submit button */}
//           <div className='flex flex-row items-end justify-end space-x-4'>
//             <button
//               onClick={handleClose}
//               type='button'
//               className='p-2 px-4 text-white bg-red-500 rounded-md'
//             >
//               Cancel
//             </button>
//             <button className='p-2 px-4 text-white bg-green-500 rounded-md'>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </Modal>;
// {
//   /* ========================================================= */
// }

// <div className='flex flex-row items-center justify-between p-6 pt-2'>
//   <div className='flex flex-col space-y-2'>
//     <Link>
//       <h2 className='text-2xl font-bold'>Manage Polls</h2>
//     </Link>

//     <div className='relative flex flex-row items-center justify-start px-2 space-x-2 border border-yellow-500 rounded'>
//       <p className='font-bold'>Manage Polls</p>
//       <NavigateNextIcon />
//       <Link to='/wepollnow/polls/polls_result'>
//         <p className='font-bold text-gray-300'>Polls Result</p>
//       </Link>
//     </div>
//   </div>

//   <div className='flex flex-row items-center space-x-4'>
//     <form>
//       <input
//         className='p-2 border-b border-gray-200 fontAwesome'
//         placeholder='&#xf002; Search'
//       />
//     </form>
//     <div className='flex flex-row space-x-1'>
//       <div className='p-2 bg-gray-200 rounded-full'></div>
//       <div className='p-2 bg-gray-200 rounded-full'></div>
//     </div>

//     <div className='flex flex-row space-x-1'>
//       <div className='p-2 bg-gray-200 rounded-full'></div>
//       <div className='p-2 bg-gray-200 rounded-full'></div>
//     </div>
//   </div>
// </div>;

// {
//   /* Data Table */
// }
// <div className='px-6'>
//   <div className='flex flex-col p-4 border rounded-lg'>
//     <div className='flex flex-row items-center justify-between p-2'>
//       <p>Created Polls</p>
//       <button
//         onClick={modalHandler}
//         className='flex flex-row items-center p-1 px-2 border border-green-200 rounded animate hover:bg-green-200'
//       >
//         <AddIcon />
//         <p>Create Poll</p>
//       </button>
//     </div>
//     <Tables />
//   </div>
// </div>;
