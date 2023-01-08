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
import { baseUrl } from "../../../../../store/baseUrl";
import swal from "sweetalert";

//
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

const ManageAdmin = () => {
  const [filterIsActive, setFilterIsActive] = useState(0);
  const [refineResult, setRefineResult] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [role, setRone] = useState("");
  const [token, setToken] = useState();
  const [disable, setDisable] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();

  // Getting user authorized token from local storage
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  /* handle open and close */
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
    window.location.reload();
  };

  useEffect(() => {
    if (role !== "") {
      setDisable(false);
    }
  }, [role]);

  /* handle for refine results */
  const handleOpenRefineResult = () => {
    setRefineResult(!refineResult);
  };
  const handleCloseRefineResult = () => {
    setRefineResult(!refineResult);
  };

  useEffect(() => {
    tableDataResult();
  }, []);

  const handleFilterActive = (index) => {
    setFilterIsActive(index);
  };

  const tableDataResult = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(baseUrl + `user/admins/`, requestOptions);

      const result = await response.json();
      if (!response.ok) {
        throw new Error();
      } else {
        let data = [];
        result.forEach((item) => {
          const res = {
            id: item.id,
            name: item.name,
            email: item.email,
            active: item.is_active === true ? "Active" : "inActive",
            superUser: item.is_superuser === true ? "Super Admin" : "Admin",
            symbol: item.name[0].toUpperCase() + item.name[1].toUpperCase(),
          };
          data.push(res);
        });
        setTableData(data);
        setSearchResult(data);
      }
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    let formdata = new FormData();
    myHeaders.append("Authorization", `Bearer ${token}`);
    formdata.append("role", role.toUpperCase());
    formdata.append("email", emailRef.current.value);
    formdata.append("name", nameRef.current.value);
    try {
      const response = await fetch(baseUrl + `user/signup/`, {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      });

      const result = await response.json();
      if (response.ok === true) {
        setOpen(false);
        swal({
          closeOnClickOutside: false,
          title: result.Success,
          icon: "success",
          text: "Copy out the password for the created user below",
          content: {
            element: "input",
            attributes: {
              type: "text",
              value: result.password,
            },
          },
          buttons: {
            confirm: {
              text: "Close",
              className: "swalButton",
            },
          },
        });
      } else {
        throw new Error("You do not have permission to perform this action.");
      }
    } catch (error) {
      swal({
        title: error,
        icon: "error",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      }).then(() => handleClose());
    }
  };
  const filterActive =
    "hover:bg-blue-100 bg-blue-100 cursor-pointer  mr-1 w-[2.2rem]";

  const filterNotActive = "hover:bg-blue-100 cursor-pointer mr-1 w-[2.2rem]";

  return (
    <main className='flex flex-col justify-center w-[98%]'>
      <Header />
      <div className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <AccountHeader data={data} />
        <header className='flex flex-col md:flex-row justify-start md:justify-between my-4 place-items-start md:place-items-center items-start w-full md:items-center'>
          <h3 className='font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full'>
            Manage Admins
          </h3>
          <div className='flex justify-start md:justify-end items-center'>
            <div className='w-[90%] sm:w-3/4'>
              <SearchBar
                placeholder='Search'
                tableData={tableData}
                setSearchResult={setSearchResult}
              />
            </div>

            {/* <div className="flex items-end justify-start h-12 md:justify-end">
              <nav className="flex">
                <span title="Search" className="mr-1 w-[2.2rem]">
                  <img src={LinkIcon} alt="Account" className="w-full" />
                </span>
                <span
                  title="Filter Table"
                  className={
                    filterIsActive === 2 ? filterActive : filterNotActive
                  }
                  onClick={() => {
                    handleFilterActive(2);
                    handleOpenRefineResult();
                  }}
                >
                  <img src={FilterIcon} alt="Account" className="w-full" />
                </span>
              </nav>
            </div> */}
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

        {/* <FilterModal
          refineResult={refineResult}
          handleCloseRefineResult={handleCloseRefineResult}
        /> */}

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
                  onChange={(e) => setRone(e.target.value)}
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
            {/* <div className='flex flex-col items-center justify-center w-full gap-3 my-2 md:flex-row md:gap-5'>
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
            </div> */}
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
