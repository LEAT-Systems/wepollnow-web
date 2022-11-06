/** @format */

import {
  FilterListRounded,
  GridViewRounded,
  TuneRounded,
  ViewColumnRounded,
} from "@mui/icons-material";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";

const PollsHeader = ({
  setSearchResult,
  tableData,
  handleGrid,
  handleList,
  handleOpenRefineResult,
}) => {
  const [active, setActive] = useState(0);
  const [filterIsActive, setFilterIsActive] = useState(0);

  const handleActive = (index) => {
    setActive(index);
  };

  const handleFilterActive = (index) => {
    setFilterIsActive(index);
    console.log(index);
  };

  const filterActive =
    "hover:bg-blue-100 bg-blue-100 border border-1 py-2 px-2 cursor-pointer rounded-xl text-sm md:text-xl mr-1";

  const filterNotActive =
    "hover:bg-blue-100 border border-1 py-2 px-2 cursor-pointer rounded-xl text-sm md:text-xl mr-1";

  const viewActive =
    "bg-blue-100 hover:bg-blue-100 border border-1 rounded-xl py-2 px-2 cursor-pointer text-sm md:text-xl mr-1";

  const viewNotActive =
    "hover:bg-blue-100 border border-1 rounded-xl py-2 px-2 cursor-pointer text-sm md:text-xl mr-1";

  return (
    <div>
      <>
        <header className='flex flex-col md:flex-row justify-start md:justify-between mt-4 my-auto place-items-start md:place-items-center items-start w-full md:items-center'>
          <h3 className='font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full'>
            Manage polls
          </h3>
          <div className='flex w-full justify-between md:justify-end'>
            <div className='w-[90%] sm:w-3/4'>
              <SearchBar
                placeholder='Search'
                tableData={tableData}
                setSearchResult={setSearchResult}
              />
            </div>

            <div className='flex w-full justify-end items-center mr-6'>
              <nav className='pl-3 pr-2 md:pr-2 flex'>
                <span
                  title='Filter Result'
                  className={
                    filterIsActive === 1 ? filterActive : filterNotActive
                  }
                  onClick={() => {
                    handleFilterActive(1);
                    handleOpenRefineResult()
                  }}
                >
                  <TuneRounded
                    sx={{
                      fontSize: "1.4rem",

                      /* Media Queries */
                      "@media screen and (min-width: 640px)": {
                        fontSize: "1.5rem",
                      },
                      "@media screen and (min-width: 768px)": {
                        fontSize: "1.7rem",
                      },
                      "@media screen and (min-width: 1024px)": {
                        fontSize: "1.9rem",
                      },
                    }}
                    sm
                  />
                </span>
                <span
                  className={
                    filterIsActive === 2 ? filterActive : filterNotActive
                  }
                  onClick={() => {
                    handleFilterActive(2);
                  }}
                >
                  <FilterListRounded
                    sx={{
                      fontSize: "1.4rem",

                      /* Media Queries */
                      "@media screen and (min-width: 640px)": {
                        fontSize: "1.5rem",
                      },
                      "@media screen and (min-width: 768px)": {
                        fontSize: "1.7rem",
                      },
                      "@media screen and (min-width: 1024px)": {
                        fontSize: "1.9rem",
                      },
                    }}
                  />
                </span>
              </nav>

              <nav className='pl-1 md:pl-3 flex sm:w-3'>
                <span
                  className={active === 0 ? viewActive : viewNotActive}
                  onClick={() => {
                    handleActive(0);
                    handleList();
                  }}
                >
                  <ViewColumnRounded
                    sx={{
                      fontSize: "1.4rem",

                      /* Media Queries */
                      "@media screen and (min-width: 640px)": {
                        fontSize: "1.5rem",
                      },
                      "@media screen and (min-width: 768px)": {
                        fontSize: "1.7rem",
                      },
                      "@media screen and (min-width: 1024px)": {
                        fontSize: "1.9rem",
                      },
                    }}
                  />
                </span>
                <span
                  className={active === 1 ? viewActive : viewNotActive}
                  onClick={() => {
                    handleActive(1);
                    handleGrid();
                  }}
                >
                  <GridViewRounded
                    sx={{
                      fontSize: "1.2rem",

                      /* Media Queries */
                      "@media screen and (min-width: 640px)": {
                        fontSize: "1.3rem",
                      },
                      "@media screen and (min-width: 768px)": {
                        fontSize: "1.5rem",
                      },
                      "@media screen and (min-width: 1024px)": {
                        fontSize: "1.7rem",
                      },
                    }}
                  />
                </span>
              </nav>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default PollsHeader;
