/** @format */

import { FilterListRounded, GridViewRounded, TuneRounded, ViewColumnRounded } from "@mui/icons-material";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";

const PollsHeader = ({
  setSearchResult,
  tableData,
  handleGrid,
  handleList,
}) => {
  const [active, setActive] = useState(0)
  const [filterIsActive, setFilterIsActive] = useState(0);

  const handleActive = (index) => {
    setActive(index)
  }

  const handleFilterActive = (index) => {
    setFilterIsActive(index);
    console.log(index);
  }

  const filterActive =
    "icons hover:bg-blue-100 bg-blue-100 border border-1 p-2 cursor-pointer rounded-xl text-sm md:text-xl h-full mr-2";
  
  const filterNotActive =
    "icons hover:bg-blue-100 border border-1 p-2 cursor-pointer rounded-xl text-sm md:text-xl h-full mr-2";
  
  const viewActive =
    "bg-blue-100 hover:bg-blue-100 border border-1 rounded-xl p-2 cursor-pointer text-sm md:text-xl  h-full mr-2";
  
  const viewNotActive =
    "hover:bg-blue-100 border border-1 rounded-xl p-2 cursor-pointer text-sm md:text-xl  h-full mr-2";

  return (
    <div>
      <>
        <header className='flex flex-row justify-between mt-4 my-auto place-items-center px-6 items-center'>
          <h3 className='font-bold text-lg md:text-2xl capitalize p-4'>
            Manage polls
          </h3>
          <div className='flex'>
            <SearchBar
              placeholder='Search'
              tableData={tableData}
              setSearchResult={setSearchResult}
            />
            <nav className='pl-3 pr-4 h-full m-auto hidden md:flex'>
              <span
                className={
                  filterIsActive === 1 ? filterActive : filterNotActive
                }
                onClick={() => {
                  handleFilterActive(1);
                }}
              >
                <TuneRounded sx={{ fontSize: "1.9rem" }} />
              </span>
              <span
                className={
                  filterIsActive === 2 ? filterActive : filterNotActive
                }
                onClick={() => {
                  handleFilterActive(2);
                }}
              >
                <FilterListRounded sx={{ fontSize: "1.9rem" }} />
              </span>
            </nav>

            <nav className='pl-3 h-full m-auto hidden md:flex'>
              <span
                className={active === 0 ? viewActive : viewNotActive}
                onClick={() => {
                  handleActive(0);
                  handleList();
                }}
              >
                <ViewColumnRounded sx={{ fontSize: "1.9rem" }} />
              </span>
              <span
                className={active === 1 ? viewActive : viewNotActive}
                onClick={() => {
                  handleActive(1);
                  handleGrid();
                }}
              >
                <GridViewRounded sx={{ fontSize: "1.7rem" }} />
              </span>
            </nav>
          </div>
        </header>
      </>
    </div>
  );
};

export default PollsHeader;
