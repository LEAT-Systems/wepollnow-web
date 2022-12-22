/** @format */

import * as React from "react";
import { useState, useEffect } from "react";
import SubHeader, { AccountHeader } from "../../SubHeader";
import SearchBar from "../Search/SearchBar";
import FilterModal from "../Modals/FilterModal";
import ManageAdminTable from "./ManageAdminTable";
import LinkIcon from "../../assets/Filter@2x.png";
import FilterIcon from "../../assets/Filter@2x-1.png";
import Header from "../../Header";
import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useRef } from "react";

const data = [
  {
    id: 1,
    route: "/admin/account/settings",
    linkText: "Admins",
  },
  {
    id: 2,
    route: "/admin/account/managePassword",
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
  const [open, setOpen] = useState(false);
  const [zone, setZone] = useState("");
  const [status, setStatus] = useState("");
  const [disable, setDisable] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();

  /* handle open and close */
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (zone !== "" && status !== "") {
      setDisable(false);
    }
  }, [zone, status]);

  console.log("isDisabled:", disable);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(nameRef.current.value, emailRef.current.value, status, zone);
  };
  const filterActive =
    "hover:bg-blue-100 bg-blue-100 cursor-pointer  mr-1 w-[2.2rem]";

  const filterNotActive = "hover:bg-blue-100 cursor-pointer mr-1 w-[2.2rem]";

  return (
    <main className='flex flex-col justify-center w-[98%]'>
      <Header />
      <div className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <AccountHeader data={data} />
        <header className='flex flex-col items-start justify-start w-full my-4 md:flex-row md:justify-between place-items-start md:place-items-center md:items-center'>
          <h3 className='font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full'>
            Manage Admins
          </h3>
          <div className='flex items-center justify-start md:justify-end'>
            <div className='w-[90%] sm:w-3/4 flex justify-start'>
              <SearchBar
                placeholder='Search'
                tableData={tableData}
                setSearchResult={setSearchResult}
              />
            </div>

            <div className='flex items-end justify-start h-12 md:justify-end'>
              <nav className='flex'>
                <span title='Search' className='mr-1 w-[2.2rem]'>
                  <img src={LinkIcon} alt='Account' className='w-full' />
                </span>
                <span
                  title='Filter Table'
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
            </div>
          </div>
        </header>

        {/* Data Table */}
        <div className='flex flex-col text-[#082a0f] my-1'>
          <div className='flex flex-row justify-between px-2 pt-4 mb-2'>
            <h2 className='font-extrabold text-[#082a0f] text-lg'>Admin</h2>
            <button
              className='flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out bg-green-500 rounded-md cursor-pointer duration-400 hover:bg-green-500 hover:text-white hover:rounded-full'
              onClick={handleOpen}
            >
              Add Admin
            </button>
          </div>
          <ManageAdminTable data={searchResult} />
        </div>

        <FilterModal
          refineResult={refineResult}
          handleCloseRefineResult={handleCloseRefineResult}
        />

        {/* Add Admin Modal */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg space-y-6'
          >
            <header className='flex items-center justify-between w-full pb-3 mb-3 border-b-2 border-gray-300 border-solid'>
              <h2 className='font-extrabold text-lg md:text-xl text-[#082a0f] capitalize'>
                Add Admin
              </h2>
              <button
                className='flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500'
                onClick={() => setOpen(false)}
              >
                <Close />
              </button>
            </header>
            <div className='flex flex-col items-center justify-center w-full'>
              <label className='relative w-full font-semibold'>
                Name
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Name'
                  ref={nameRef}
                  required
                  aria-required
                  className='font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-4 px-3 placeholder:text-[#616b62]'
                />
              </label>
            </div>
            <div className='flex flex-col items-center justify-center w-full'>
              <label className='relative w-full font-semibold'>
                Email Address
                <input
                  type='email'
                  id='email'
                  ref={emailRef}
                  placeholder='Enter Email Address'
                  required
                  aria-required
                  className='font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-4 px-3 placeholder:text-[#616b62]'
                />
              </label>
            </div>

            {/* ZONE */}
            <div className='flex flex-col items-center justify-center w-full gap-3 my-2 md:flex-row md:gap-5'>
              <label className='font-semibold custom_select_container'>
                <span className='font-semibold'>Role</span>
                <select
                  onChange={(e) => setZone(e.target.value)}
                  defaultValue={"DEFAULT"}
                  name='zone'
                  id='zone'
                  required
                  className='custom_select disabled:bg-gray-200 disabled:cursor-not-allowed'
                >
                  <option value='DEFAULT' disabled>
                    Select Role
                  </option>
                  <option value='admin'>admin</option>
                  <option value='superadmin'>superadmin</option>
                </select>
              </label>
            </div>

            {/* STATUS */}
            <div className='flex flex-col items-center justify-center w-full gap-3 my-2 md:flex-row md:gap-5'>
              <label className='custom_select_container'>
                <span className='font-semibold'>Status</span>
                <select
                  defaultValue={"DEFAULT"}
                  name='zone'
                  id='zone'
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className='custom_select disabled:bg-gray-200 disabled:cursor-not-allowed'
                >
                  <option value='DEFAULT' disabled>
                    Select Status
                  </option>
                  <option>active</option>
                  <option>inactive</option>
                </select>
              </label>
            </div>
            {/* Buttons */}

            <div className='flex items-center justify-end w-full my-2'>
              <button
                className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                disabled={!disable ? false : true}
                type='submit'
                className={`flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out ${
                  !disable ? "bg-green-500" : "bg-gray-500"
                }  rounded-md cursor-pointer duration-400 ${
                  !disable ? "hover:bg-green-500" : "hover:bg-gray-500"
                } hover:text-white hover:rounded-full ${
                  disable && "hover:cursor-not-allowed"
                }`}
              >
                confirm
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default ManageAdmin;
