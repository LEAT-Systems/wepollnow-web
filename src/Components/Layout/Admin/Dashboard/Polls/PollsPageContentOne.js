import React, { useEffect, useState } from "react";
import Tables from "../Tables/Tables";
import Header from "../../Header";
import PollsHeader from "./PollsHeader";
import Grid from "./Grid";
import FilterModal from "../Modals/FilterModal";
import CreatePollsContainer from "../Modals/CreatePollsContainer";
import Container from "../Modals/Edit/Polls/Container";
import { PollHeader } from "../../SubHeader";
import axios from "../../../../../api/axios";

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

const PollsPageContentOne = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [refineResult, setRefineResult] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

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

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("/poll/get_polls/")
        .then((res) => {
          setModalData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, []);

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

  /* handle for editing poll */
  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };
  const handleCloseEdit = () => {
    setOpenEdit(!openEdit);
  };

  const isActiveClass =
    "flex items-center justify-center rounded-full py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full";

  const isNotActiveClass =
    "flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full";

  useEffect(() => {
    setTableData(modalData);
    setSearchResult(modalData);
  }, [modalData]);
  return (
    <main className="flex flex-col justify-center w-[98%]">
      <Header />

      <div className="px-4 md:px-6 lg:px-12">
        <PollHeader data={SubHeaderData} />
        <div className="w-full">
          <PollsHeader
            setSearchResult={setSearchResult}
            tableData={tableData}
            handleGrid={handleGrid}
            handleList={handleList}
            handleOpenRefineResult={handleOpenRefineResult}
            showFilter={false}
            showLabel={true}
            showViews={true}
          />
        </div>

        {/* Data Table */}
        <div className="flex flex-col text-[#082a0f] my-1">
          <div className="flex flex-row justify-between px-2 pt-4 mb-3">
            <h2 className="font-extrabold text-[#082a0f] text-lg">Polls</h2>
            <button
              className={open ? isActiveClass : isNotActiveClass}
              onClick={handleOpen}
            >
              create poll
            </button>
          </div>

          {isGrid ? (
            <Grid
              data={searchResult}
              handleOpen={handleOpen}
              open={handleOpenEdit}
            />
          ) : (
            <Tables data={currentPosts} open={handleOpenEdit} />
          )}

          {/* TABLE PAGINATION */}
          <div className="flex flex-row p-4 space-x-4 border-b border-l border-r shadow-xl">
            {pagination}
          </div>
        </div>

        {/*************************** Create Poll Overlay *****************************/}
        <CreatePollsContainer
          open={open}
          handleClose={handleClose}
          modalData={modalData}
        />
        <Container
          open={openEdit}
          handleClose={handleCloseEdit}
          modalData={modalData}
        />

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
