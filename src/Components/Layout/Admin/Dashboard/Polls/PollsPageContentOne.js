import React, { useEffect, useState } from "react";
import Tables from "../Tables/Tables";
import Header from "../../Header";
import Data from "../../Data.json";
import PollsHeader from "./PollsHeader";
import Grid from "./Grid";
import FilterModal from "../Modals/FilterModal";
import CreatePollModal from "../Modals/CreatePollModal";
// import { getTableData } from "../api";

const PollsPageContentOne = () => {
  const [open, setOpen] = useState(false);
  const [refineResult, setRefineResult] = useState(false);
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

  /* handle for refine results */
  const handleOpenRefineResult = () => {
    setRefineResult(!refineResult);
  };
  const handleCloseRefineResult = () => {
    setRefineResult(!refineResult);
  };

  /* handle for create new poll */
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
            handleOpenRefineResult={handleOpenRefineResult}
          />
        </div>

        {/* Data Table */}
        <div className='flex flex-col text-[#082a0f] border-2 rounded-lg px-6 my-8 md:mt-14 mb-6'>
          <div className='flex flex-row justify-between pt-4 px-2 mb-10'>
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

        {/*************************** Create Poll Overlay *****************************/}
        <CreatePollModal open={open} handleClose={handleClose} />

        {/*************************** Filter Result Overlay *****************************/}
        <FilterModal
          refineResult={refineResult}
          handleCloseRefineResult={handleCloseRefineResult}
        />
      </div>
    </main>
  );
};

export default PollsPageContentOne;