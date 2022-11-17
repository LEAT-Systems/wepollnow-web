import {
  FilterListRounded,
  GridViewRounded,
  TuneRounded,
  ViewColumnRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";
import LinkIcon from '../../assets/Filter@2x.png'
import FilterIcon from '../../assets/Filter@2x-1.png'
import GridIcon from '../../assets/grid-2.png'
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
    "hover:bg-blue-100 bg-blue-100 cursor-pointer  mr-1 w-[2.2rem]";

  const filterNotActive =
    "hover:bg-blue-100 cursor-pointer mr-1 w-[2.2rem]";

  const viewActive =
    "bg-blue-100 hover:bg-blue-100 cursor-pointer mr-1 w-[2.2rem] border rounded-sm p-2";

  const viewNotActive =
    "hover:bg-blue-100 cursor-pointer mr-1 w-[2.2rem] border rounded-sm p-2";

  return (
    <div>
      <>
        <header className='flex flex-col md:flex-row justify-start md:justify-between mt-4 my-auto place-items-start md:place-items-center items-start w-full md:items-center'>
          <h3 className='font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full'>
            Manage polls
          </h3>
          <div className='flex w-full justify-between md:justify-end items-center'>
            <div className='w-[90%] sm:w-3/4'>
              <SearchBar
                placeholder='Search'
                tableData={tableData}
                setSearchResult={setSearchResult}
              />
            </div>

            <div className='flex w-full justify-end items-end h-full'>
              <nav className='flex w-full h-full ml-3 mr-2 md:mr-2 my-auto'>
                <span title='Filter Result' className={filterNotActive}>
                  <img src={LinkIcon} alt='Account' className='w-full' />
                </span>
                <span
                  className={
                    filterIsActive === 2 ? filterActive : filterNotActive
                  }
                  onClick={() => {
                    handleFilterActive(2);
                    handleOpenRefineResult();
                  }}
                >
                  <img src={FilterIcon} alt='Account' className='w-full' />
                </span>
              </nav>

              <nav className='flex'>
                <span
                  className={active === 0 ? viewActive : viewNotActive}
                  onClick={() => {
                    handleActive(0);
                    handleList();
                  }}
                >
                  <img src={GridIcon} alt='Account' className='w-full' />
                </span>
                <span
                  className={active === 1 ? viewActive : viewNotActive}
                  onClick={() => {
                    handleActive(1);
                    handleGrid();
                  }}
                >
                  <img src={GridIcon} alt='Account' className='w-full p-1' />
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
