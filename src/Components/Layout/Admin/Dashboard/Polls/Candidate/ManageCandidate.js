/** @format */

import React from "react";
import SubHeader, { PollHeader } from "../../../SubHeader";
import { useState, useEffect } from "react";
import SearchBar from "../../Search/SearchBar";
import LinkIcon from "../../../assets/Filter@2x.png";
import FilterIcon from "../../../assets/Filter@2x-1.png";
import Header from "../../../Header";
import AddCandidateModal from "../../Modals/AddCandidateModal";
import FilterModal from "../../Modals/FilterModal";
import axios from "../../../../../../api/axios";
import EditCandidate from "../../Modals/Edit/Candidate/EditCandidate";
const ManageCandidateTable = React.lazy(() => import("./ManageCandidateTable"));

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
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(70);

  /////////////////////////////////  =====     PAGINATION    ===========   ////////////////////////////////
  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = [...searchResult]
    ?.reverse()
    ?.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tableData.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (i) => setCurrentPage(i);
  const pagination = pageNumbers.map((i) => (
    <button
      key={i}
      onClick={() => paginate(i)}
      className="px-4 py-2 text-sm font-medium text-black border border-[#000]  focus:bg-green-200"
    >
      {i}
    </button>
  ));

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
        setTableData(res?.data);
        setSearchResult(res?.data);
      })
      .catch((err) => console.log(err));
  }, [setTableData, setSearchResult]);

  return (
    <main className="flex flex-col justify-center w-[98%]">
      <Header />
      <div className="max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]">
        <PollHeader data={SubHeaderData} />
        <header className="flex flex-col items-start justify-start w-full my-4 md:flex-row md:justify-between place-items-start md:place-items-center md:items-center">
          <h3 className="font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full">
            Manage Candidates
          </h3>
          <div className="flex items-center justify-start md:justify-end">
            <div className="w-[90%] sm:w-3/4 flex justify-start">
              <SearchBar
                placeholder="Search"
                tableData={currentPosts}
                setSearchResult={setSearchResult}
              />
            </div>
          </div>
        </header>

        {/* Data Table */}
        <div className="flex flex-col text-[#082a0f] my-1">
          <div className="flex flex-row justify-between px-2 pt-4 mb-2">
            <h2 className="font-extrabold text-[#082a0f] text-lg">
              All Candidates
            </h2>
            <button
              className="flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out bg-green-500 rounded-md cursor-pointer duration-400 hover:bg-green-500 hover:text-white hover:rounded-full"
              onClick={handleOpenAddCandidate}
            >
              Add candidate
            </button>
          </div>
          <ManageCandidateTable data={currentPosts} open={handleOpenEdit} />

          {/* TABLE PAGINATION CONTROL */}
          <div className="flex flex-row p-4 space-x-4 border-b border-l border-r shadow-xl">
            {pagination}
          </div>
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
