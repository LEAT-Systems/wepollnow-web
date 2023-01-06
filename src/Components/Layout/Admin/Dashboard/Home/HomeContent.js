import React, { useEffect } from "react";
import { useState } from "react";
import Tables from "../Tables/Tables";
import Header from "../../Header";
import { ArrowForwardIos, ArrowUpward } from "@mui/icons-material";
import Chart from "../../assets/Chart.jpg";
import People from "../../assets/People.jpg";
import axios from "../../../../../api/axios";

const DashboardContent = () => {
  const data = [
    {
      id: 3,
      status: ["Upcoming", "Scheduled", "Concluded"],
      users: "235,436",
      daily_hits: 45,
      total_hits: 523,
      daily_users: 89,
    },
  ];

  const [greeting, setGreeting] = useState("");
  const [modalData, setModalData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({ name: "", status: "" });

  useEffect(() => {
    const { name, status } = JSON.parse(localStorage.getItem("loggedInUser"));
    const refinedName = name[0]?.toUpperCase() + name?.slice(1);
    setLoggedInUser({
      name: refinedName,
      status: status === true ? "Super Admin" : "Admin",
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      axios.get("/poll/get_polls/")
        .then((res) => {
          console.log(res);
          setModalData(res.data);
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
      <main className="max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]">
        <div className="flex flex-row">
          <div className="flex flex-col py-4 space-y-2">
            <div className="flex flex-row">
              <h2 className="text-xl md:text-3xl font-semibold">
                Good {greeting}, {loggedInUser.name}.
              </h2>
              <div>
                <p className="text-xs md:text-[10px] font-semibold bg-green-500 px-2 rounded text-white">
                  {loggedInUser.status}
                </p>
              </div>
            </div>

            <p className="texl-sm font-medium md:font-semibold">
              Here is the latest update on Wepollnow
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center w-full mx-auto my-14">
          {/* First Card */}
          {data.map((data) => (
            <>
              <div className="flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]">
                <span className="rounded-2xl bg-[#e7f9ea] mr-4 items-start">
                  <img
                    src={Chart}
                    alt="Account"
                    className="w-[3.5rem] h-[3.5rem] bg-transparent"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-extrabold pb-1">
                    {JSON.stringify(data.total_hits)}
                    {console.log(data?.hits)}
                  </span>
                  <span className="font-bold text-gray-500 text-[.75rem] capitalize flex-1">
                    Daily hits
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex bg-[#e7f9ea] text-green-500 p-1 rounded-lg border">
                  <ArrowUpward
                    sx={{ fontsize: "0.2rem", margin: "auto .1rem auto auto" }}
                    fontSize="0.1rem"
                  />
                  <h3 className="bg-[#e7f9ea] text-[.7rem] my-auto">
                    + {data.daily_hits} today
                  </h3>
                </div>
              </div>

              {/* Second Card  */}
              <div className="flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]">
                <span className="rounded-2xl bg-[#e7f9ea] mr-4 items-start">
                  <img
                    src={People}
                    alt="Account"
                    className="w-[3.5rem] h-[3.5rem] bg-[#e7f9ea]"
                  />
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-extrabold pb-1">
                    {data.users}
                  </span>
                  <span className="font-bold text-gray-500 text-[.75rem] capitalize flex-1">
                    users
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex bg-[#e7f9ea] text-green-500 p-1 rounded-lg border">
                  <ArrowUpward
                    sx={{ fontsize: "0.2rem", margin: "auto .1rem auto auto" }}
                    fontSize="0.1rem"
                  />
                  <h3 className="bg-[#e7f9ea] text-[.7rem] my-auto">
                    + {data.daily_users} today
                  </h3>
                </div>
              </div>

              {/* Third Card */}
              <div className="block border-2 border-gray-400 bg-white text-[#082a0f] rounded-lg px-4 py-3 w-full h-[9rem]">
                <h2 className="capitalize font-extrabold text-lg pb-3">
                  Polls info
                </h2>
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="flex flex-col justify-center items-center h-full bg-[#edfff0] py-3 px-6 rounded-lg">
                    <span className="font-extrabold text-2xl">
                      {data.status.length}
                    </span>
                    <span className="capitalize text-sm">{data.status[0]}</span>
                  </div>

                  <div className="flex flex-col justify-center items-center h-full bg-[#fffaed] py-3 px-6 rounded-lg">
                    <span className="font-extrabold text-2xl">
                      {data.users.toString().length}
                    </span>
                    <span className="capitalize text-sm">{data.status[1]}</span>
                  </div>

                  <div className="flex flex-col justgiify-center items-center h-full bg-[#ffedf1] py-3 px-6 rounded-lg">
                    <span className="font-extrabold text-2xl">
                      {data.status.length - 1}
                    </span>
                    <span className="capitalize text-sm">{data.status[2]}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        {/* Data Table */}
        <div className="flex flex-col text-[#082a0f] border-2 rounded-lg px-6">
          <div className="flex flex-row justify-between pt-4 px-2 mb-3">
            <h2 className="font-extrabold text-[#082a0f] text-lg">Polls</h2>
            <button className="capitalize font-bold px-3 py-2 text-base w-fit border rounded-md my-auto">
              View All
              <ArrowForwardIos
                sx={{
                  fontSize: "1rem",
                  margin: "-0.2rem 0 auto .6rem",
                  padding: ".15rem",
                  borderRadius: ".3rem",
                  border: "2px solid gray",
                }}
                fontSize="inherit"
              />
            </button>
          </div>
          <Tables data={modalData} />
        </div>
      </main>
    </>
  );
};

export default DashboardContent;
