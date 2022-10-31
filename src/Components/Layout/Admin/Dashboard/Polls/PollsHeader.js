/** @format */

import { FilterList, Tune } from "@mui/icons-material";
import React from "react";
import SearchBar from "../Search/SearchBar";

const PollsHeader = ({ setSearchResult, tableData }) => {

  return (
    <div>
      <>
        <header className='flex flex-row justify-between mt-4 my-auto place-items-center px-6 items-center'>
          <h3 className='font-bold text-2xl capitalize p-4'>Manage polls</h3>
          <div className='flex '>
            <SearchBar
              placeholder='Search'
              tableData={tableData}
              setSearchResult={setSearchResult}
            />
            <nav className='pl-3 pr-4 h-full m-auto'>
              <span
                className={`icons bg-blue-100 border border-1 p-3 cursor-pointer rounded-xl text-xl w-[2rem] h-full mr-2`}
              >
                <Tune/>
              </span>
              <span
                className={`icons border border-1 rounded-xl p-3 cursor-pointer text-xl w-[2rem] h-full`}
              >
                <FilterList />
              </span>
            </nav>

            <nav className='pl-3 h-full m-auto'>
              <span
                className={`icons border border-1 rounded-xl p-3 cursor-pointer text-xl w-[2rem] h-full mr-2`}
              >
                <Tune />
              </span>
              <span
                className={`icons border border-1 rounded-xl p-3 cursor-pointer text-xl w-[2rem] h-full`}
              >
                <FilterList />
              </span>
            </nav>
          </div>
        </header>
      </>
    </div>
  );
};

export default PollsHeader;
