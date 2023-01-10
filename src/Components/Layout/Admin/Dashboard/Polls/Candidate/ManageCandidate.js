/** @format */

import React from "react";
import SubHeader, { PollHeader } from "../../../SubHeader";
import { useState, useEffect } from "react";
import SearchBar from "../../Search/SearchBar";
import LinkIcon from "../../../assets/Filter@2x.png";
import FilterIcon from "../../../assets/Filter@2x-1.png";
import ManageCandidateTable from "./ManageCandidateTable";
import Header from "../../../Header";
import AddCandidateModal from "../../Modals/AddCandidateModal";
import FilterModal from "../../Modals/FilterModal";
import axios from "../../../../../../api/axios";
import EditCandidate from "../../Modals/Edit/Candidate/EditCandidate";

const SubHeaderData = [
  {
    id: 1,
    route: "/admin/polls/polls",
    linkText: "Polls",
  },
  {
    id: 2,
    route: "/admin/polls/candidates",
    linkText: "Candidates",
  },
];

const Candidate = () => {
  const [openCandidateModal, setOpenCandidateModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  /* handle for create new Candidate */
  const handleOpenAddCandidate = () => {
    setOpenCandidateModal(!openCandidateModal);
  };

  const handleCloseAddCandidate = () => {
    setOpenCandidateModal(!openCandidateModal);
  };

  /* handle for editing poll */
  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };
  const handleCloseEdit = () => {
    setOpenEdit(!openEdit);
  };

  /* Request Data from Endpoint */

  useEffect(() => {
    axios
      .get("/utilities/candidates/")
      .then((res) => {
        console.log(res);
        setTableData(res?.data?.results);
        setSearchResult(res?.data?.results);
      })
      .catch((err) => console.log(err));
  }, [setTableData, setSearchResult]);

  return (
    <main className='flex flex-col justify-center w-[98%]'>
      <Header />
      <div className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <PollHeader data={SubHeaderData} />
        <header className='flex flex-col md:flex-row justify-start md:justify-between my-4 place-items-start md:place-items-center items-start w-full md:items-center'>
          <h3 className='font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full'>
            Manage Candidates
          </h3>
          <div className='flex justify-start md:justify-end items-center'>
            <div className='w-[90%] sm:w-3/4 flex justify-start'>
              <SearchBar
                placeholder='Search'
                tableData={tableData}
                setSearchResult={setSearchResult}
              />
            </div>
          </div>
        </header>

        {/* Data Table */}
        <div className='flex flex-col text-[#082a0f] my-1'>
          <div className='flex flex-row justify-between pt-4 px-2 mb-2'>
            <h2 className='font-extrabold text-[#082a0f] text-lg'>
              All Candidates
            </h2>
            <button
              className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
              onClick={handleOpenAddCandidate}
            >
              Add candidate
            </button>
          </div>
          <ManageCandidateTable data={searchResult} open={handleOpenEdit} />
        </div>

        <AddCandidateModal
          addCandidate={openCandidateModal}
          handleCloseAddCandidate={handleCloseAddCandidate}
        />

        <EditCandidate open={openEdit} close={handleCloseEdit} />
      </div>
    </main>
  );
};

export default Candidate;
