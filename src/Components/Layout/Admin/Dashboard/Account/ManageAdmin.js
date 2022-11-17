/** @format */

import * as React from "react";
import { useState, useEffect } from "react";
import SubHeader from "../../SubHeader";
import { TuneRounded, FilterListRounded } from "@mui/icons-material";
import SearchBar from "../Search/SearchBar";
import FilterModal from "../Modals/FilterModal";
import ManageAdminTable from "./ManageAdminTable";

const data = [
  {
    id: 1,
    route: "/dashboard/account/settings",
    linkText: "Admins",
  },
  {
    id: 2,
    route: "/dashboard/account/managePassword",
    linkText: "Password",
  },
];

const dataTable = [
  {
    id: 1,
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Super Admin",
    status: "active",
    symbol: "RM",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "Johndoe@gmail.com",
    role: "Super Admin",
    status: "active",
    symbol: "RM",
  },
  {
    id: 3,
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Super Admin",
    status: "active",
    symbol: "RM",
  },
];

const ManageAdmin = () => {
  const [filterIsActive, setFilterIsActive] = useState(0);
  const [refineResult, setRefineResult] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  /* handle for refine results */
  const handleOpenRefineResult = () => {
    setRefineResult(!refineResult);
  };
  const handleCloseRefineResult = () => {
    setRefineResult(!refineResult);
  };

  useEffect(() => {
    /* For our demo json object */
    setTableData(dataTable);
    setSearchResult(dataTable);
  }, []);

  const handleFilterActive = (index) => {
    setFilterIsActive(index);
    console.log(index);
  };

  const filterActive =
    "hover:bg-blue-100 bg-blue-100 border border-1 py-2 px-2 cursor-pointer rounded-xl text-sm md:text-xl mr-1";

  const filterNotActive =
    "hover:bg-blue-100 border border-1 py-2 px-2 cursor-pointer rounded-xl text-sm md:text-xl mr-1";

  return (
    <main className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
      <SubHeader data={data} />
      <header className='flex flex-col md:flex-row justify-start md:justify-between mt-4 my-auto place-items-start md:place-items-center items-start w-full md:items-center'>
        <h3 className='font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full'>
          Manage Admins
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
            <div className='flex w-full justify-end items-center mr-6'>
              <nav className='pl-3 pr-2 md:pr-2 flex'>
                <span
                  title='Filter Result'
                  className='border border-1 py-1 px-1 rounded-xl text-sm md:text-xl mr-1'
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
                        fontSize: "1.8rem",
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
                    handleOpenRefineResult();
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
            </div>
          </div>
        </div>
      </header>

      <div>
        <ManageAdminTable data={searchResult} />
      </div>

      <FilterModal
        refineResult={refineResult}
        handleCloseRefineResult={handleCloseRefineResult}
      />
    </main>
  );
};

export default ManageAdmin;
