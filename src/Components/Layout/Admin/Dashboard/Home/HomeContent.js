import React, { useEffect } from "react";
import { useState } from "react";
import Tables from "../Tables/Tables";
import Header from "../../Header";
import { ArrowForwardIos, ArrowUpward } from "@mui/icons-material";
import Chart from "../../assets/Chart.jpg";
import People from "../../assets/People.jpg";
import axios from "../../../../../api/axios";
import { Link } from "react-router-dom";
import Container from "../Modals/Edit/Polls/Container";

const DashboardContent = () => {
  const [greeting, setGreeting] = useState("");
  const [modalData, setModalData] = useState([]);
  const [pollStatus, setPollStatus] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({ name: "", status: "" });
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

    const handleOpen = () => {
      setOpen(!open);
    };
  
    const handleClose = () => {
      setOpen(!open);
    };

  /////////////////////////////////  =====     PAGINATION    ===========   ////////////////////////////////
  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = [...modalData]
    ?.reverse()
    ?.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(modalData.length / postPerPage); i++) {
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
    const { name, status } = JSON.parse(localStorage?.getItem("loggedInUser"));
    const refinedName = name[0]?.toUpperCase() + name?.slice(1);
    setLoggedInUser({
      name: refinedName,
      status: status === true ? "Super Admin" : "Admin",
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      axios
        .get("/poll/get_polls/")
        .then((res) => {
          setModalData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      axios
        .get("/poll/poll_status/")
        .then((res) => {
          setPollStatus(res.data);
        })
        .catch((err) => console.log(err));
    };

    getData();
  }, []);

  const date = new Date();
  const hrs = date.getHours();

  useEffect(() => {
    if (hrs < 12) {
      setGreeting("Morning");
    }
    if (hrs >= 12 && hrs <= 17) {
      setGreeting("Afternoon");
    }
    if (hrs >= 17 && hrs <= 24) {
      setGreeting("Evening");
    }
  }, [hrs]);

  return (
    <>
      <Header />
      <main className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <div className='flex flex-row'>
          <div className='flex flex-col py-4 space-y-2'>
            <div className='flex flex-row'>
              <h2 className='text-xl font-semibold md:text-3xl'>
                Good {greeting}, {loggedInUser.name}.
              </h2>
              <div>
                <p className='text-xs md:text-[10px] font-semibold bg-green-500 px-2 rounded text-white'>
                  {loggedInUser.status}
                </p>
              </div>
            </div>

            <p className='font-medium texl-sm md:font-semibold'>
              Here is the latest update on Wepollnow
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className='grid w-full grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 place-items-center my-14'>
          {/* First Card */}
          <>
            <div className='flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]'>
              <span className='rounded-2xl bg-[#e7f9ea] mr-4 items-start'>
                <img
                  src={Chart}
                  alt='Account'
                  className='w-[3.5rem] h-[3.5rem] bg-transparent'
                />
              </span>
              <div className='flex flex-col items-start'>
                <span className='pb-1 text-2xl font-extrabold'>
                  {pollStatus[0]?.newUsers == null
                    ? 0
                    : pollStatus[0]?.newUsers}{" "}
                </span>
                <span className='font-bold text-gray-500 text-[.75rem] capitalize flex-1'>
                  Daily hits
                </span>
              </div>

              <div className='absolute bottom-4 right-4 flex bg-[#e7f9ea] text-green-500 p-1 rounded-lg border'>
                <ArrowUpward
                  sx={{ fontsize: "0.2rem", margin: "auto .1rem auto auto" }}
                  fontSize='0.1rem'
                />
                <h3 className='bg-[#e7f9ea] text-[.7rem] my-auto'>
                  +{" "}
                  {pollStatus[0]?.newUsers == null
                    ? 0
                    : pollStatus[0]?.newUsers}{" "}
                  today
                </h3>
              </div>
            </div>

            {/* Second Card  */}
            <div className='flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]'>
              <span className='rounded-2xl bg-[#e7f9ea] mr-4 items-start'>
                <img
                  src={People}
                  alt='Account'
                  className='w-[3.5rem] h-[3.5rem] bg-[#e7f9ea]'
                />
              </span>
              <div className='flex flex-col items-start'>
                <span className='pb-1 text-2xl font-extrabold'>
                  {pollStatus[0]?.allUsers == null
                    ? 0
                    : pollStatus[0]?.allUsers}
                </span>
                <span className='font-bold text-gray-500 text-[.75rem] capitalize flex-1'>
                  users
                </span>
              </div>

              <div className='absolute bottom-4 right-4 flex bg-[#e7f9ea] text-green-500 p-1 rounded-lg border'>
                <ArrowUpward
                  sx={{ fontsize: "0.2rem", margin: "auto .1rem auto auto" }}
                  fontSize='0.1rem'
                />
                <h3 className='bg-[#e7f9ea] text-[.7rem] my-auto'>
                  +{" "}
                  {pollStatus[0]?.newUsers == null
                    ? 0
                    : pollStatus[0]?.newUsers}{" "}
                  today
                </h3>
              </div>
            </div>

            {/* Third Card */}
            <div className='block border-2 border-gray-400 bg-white text-[#082a0f] rounded-lg px-4 py-3 w-full h-[9rem]'>
              <h2 className='pb-3 text-lg font-extrabold capitalize'>
                Polls info
              </h2>
              <div className='grid w-full grid-cols-4 gap-4'>
                <div className='flex flex-col justify-center items-center h-full bg-[#faffed] py-3 px-6 rounded-lg'>
                  <span className='text-2xl font-extrabold'>
                    {pollStatus[0]?.ongoingPolls +
                      pollStatus[0]?.scheduledPolls ==
                    null
                      ? 0
                      : pollStatus[0]?.ongoingPolls +
                        pollStatus[0]?.scheduledPolls}
                  </span>
                  <span className='text-sm capitalize'>Scheduled</span>
                </div>
                <div className='flex flex-col justify-center items-center h-full bg-[#edfff0] py-3 px-6 rounded-lg'>
                  <span className='text-2xl font-extrabold'>
                    {pollStatus[0]?.scheduledPolls == null
                      ? 0
                      : pollStatus[0]?.scheduledPolls}
                  </span>
                  <span className='text-sm capitalize'>Upcoming</span>
                </div>
                <div className='flex flex-col justify-center items-center h-full bg-[#fffaed] py-3 px-6 rounded-lg'>
                  <span className='text-2xl font-extrabold'>
                    {pollStatus[0]?.ongoingPolls == null
                      ? 0
                      : pollStatus[0]?.ongoingPolls}
                  </span>
                  <span className='text-sm capitalize'>Ongoing</span>
                </div>

                <div className='flex flex-col justgiify-center items-center h-full bg-[#ffedf1] py-3 px-6 rounded-lg'>
                  <span className='text-2xl font-extrabold'>
                    {pollStatus[0]?.concludedPolls == null
                      ? 0
                      : pollStatus[0]?.concludedPolls}
                  </span>
                  <span className='text-sm capitalize'>Concluded</span>
                </div>
              </div>
            </div>
          </>
        </div>

        {/* Data Table */}
        <div className='flex flex-col text-[#082a0f] border-2 rounded-lg px-6'>
          <div className='flex flex-row justify-between px-2 pt-4 mb-3'>
            <h2 className='font-extrabold text-[#082a0f] text-lg'>Polls</h2>
            <Link
              to='/admin/home/view_all'
              className='px-3 py-2 my-auto text-base font-bold capitalize border rounded-md w-fit'
            >
              View All
              <ArrowForwardIos
                sx={{
                  fontSize: "1rem",
                  margin: "-0.2rem 0 auto .6rem",
                  padding: ".15rem",
                  borderRadius: ".3rem",
                  border: "2px solid gray",
                }}
                fontSize='inherit'
              />
            </Link>
          </div>

          <Tables data={currentPosts} open={handleOpen} close={handleClose} />
          <div className='flex flex-row p-4 space-x-4 border-b border-l border-r shadow-xl'>
            {pagination}
          </div>
        </div>
        <Container
          open={open}
          handleClose={handleClose}
          modalData={modalData}
        />
      </main>
    </>
  );
};

export default DashboardContent;
