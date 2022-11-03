import React, { useEffect, useState } from "react";
import Tables from "../Tables/Tables";
import FilteredTable from "../Tables/FilteredTable"
import Header from "../../Header";
import Data from '../../Data.json'
import PollsHeader from "./PollsHeader";
import Grid from "./Grid";
import { AddOutlined, Close, Delete } from "@mui/icons-material";
import { Modal } from "@mui/material";
// import { getTableData } from "../api";



const PollsPageContentOne = () => {
  const [open, setOpen] = useState(false);
  const [ tableData, setTableData ] = useState([])
  const [searchResult, setSearchResult] = useState([])

  /* View State */
  const [isGrid, setIsGrid] = useState(false)

  const handleGrid = () => {
    setIsGrid(true)
  }

  const handleList = () => {
    setIsGrid(false)
  }
  
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
        <PollsHeader
          setSearchResult={setSearchResult}
          tableData={tableData}
          handleGrid={handleGrid}
          handleList={handleList}
        />

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
            <Grid handleOpen={handleOpen} />
          ) : (
            <Tables data={Data} />
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
          }}
        >
          <div className='flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg'>
            <header className='flex justify-between items-center w-full pb-3 border-b-2 border-solid border-gray-300 mb-3'>
              <h2 className='font-extrabold text-lg md:text-xl text-[#082a0f] capitalize'>
                edit survey
              </h2>
              <button
                className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500'
                onClick={handleClose}
              >
                <Close />
              </button>
            </header>

            <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
              <h2 className='font-[600] text-base text-gray-400 capitalize'>
                Transportation
              </h2>
              <button
                className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
                onClick={handleClose}
              >
                <Delete />
              </button>
            </div>

            <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
              <h2 className='font-[600] text-base text-gray-400 capitalize'>
                Education
              </h2>
              <button
                className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
                onClick={handleClose}
              >
                <Delete />
              </button>
            </div>

            <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
              <h2 className='font-[600] text-base text-gray-400 capitalize'>
                Security
              </h2>
              <button
                className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
                onClick={handleClose}
              >
                <Delete />
              </button>
            </div>

            <div className='flex justify-between items-center w-full py-3 px-3 my-2 border-2 border-solid border-gray-300 rounded-lg'>
              <h2 className='font-[600] text-base text-gray-400 capitalize'>
                Finance & Economy
              </h2>
              <button
                className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400'
                onClick={handleClose}
              >
                <Delete />
              </button>
            </div>

            <form className='flex justify-between items-center w-full my-2 '>
              <input
                className='font-[600] text-base text-gray-400 capitalize h-full w-full border-y-2 border-l-2 border-r-0 border-solid border-gray-300 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none py-4 px-3'
                placeholder='Add New Survey'
              />

              <button
                className='flex items-center justify-center border border-1 py-4 px-3 h-full cursor-pointer text-sm md:text-base bg-green-500 text-white rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg'
                onClick={handleClose}
              >
                <AddOutlined sx={{ marginRight: ".3rem" }} />
                Add
              </button>
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
