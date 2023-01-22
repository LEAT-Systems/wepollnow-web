/** @format */

import React, { useContext, useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { ArrowUpward, CalendarMonthOutlined, Save } from "@mui/icons-material";
import Header from "../../Header";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import PieChart2 from "../Charts/PieChart2";
import DropDown from "../DropDown/DropDown";
import { NavLink } from "react-router-dom";
import VOTES from "../../assets/directbox-default.png";
import TableResult from "../Tables/TableResult/TableResult";
import TableStateResult from "../Tables/TableStateResult/TableStateResult";
import axios from "../../../../../api/axios";
import ModalFormContext from "../../../../../ModalFormContextAdmin/ModalFormContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PollsHeader from "./PollsHeader";
import FilterModal from "../Modals/FilterModal";
import { CSVLink } from "react-csv";
import down from "../../../../../images/down.png";

// POll RESULT DATA TEMPLATE

const PollsPageContentTwo = () => {
  const [open, setOpen] = useState(false);

  /* View State */
  const [isTableState, setIsTableState] = useState(false);
  const [isBar, setIsBar] = useState(false);
  const [isPie, setIsPie] = useState(false);
  const [refineResult, setRefineResult] = useState(false);
  const [isData, setIsData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { tableRowID } = useContext(ModalFormContext);
  const [pollStatus, setPollStatus] = useState([]);
  const [csvData, setCsvData] = useState([
    {
      CANDIDATE: "n/a",
      RUNNING_MATE: "n/a",
      VOTE_COUNT: "n/a",
      VOTE_PERCENTAGE: "n/a",
    },
  ]);

  let currentDate = new Date().toJSON().slice(0, 10);

  useEffect(() => {
    setTableData(isData);
    setSearchResult(isData);
  }, [isData]);

  let finalData = [];
  const exportData = () => {
    if (searchResult.length !== 0) {
      searchResult?.forEach((item) => {
        const listdata = {
          PARTY: item.name,
          ABBREVIATION: item.abbr,
          CANDIDATE: item.partyCandidate[0].name,
          RUNNING_MATE: item.partyCandidate[1].name,
          VOTE_COUNT: item.voteCount,
          VOTE_PERCENTAGE: item.votePercent,
        };
        finalData.push(listdata);
        setCsvData(finalData);
      });
    }
  };

  const dataforCSV = () => csvData;

  const history = useHistory();
  const handleGrid = () => {
    setIsTableState(true);
    setIsBar(false);
    setIsPie(false);
  };

  const handleList = () => {
    setIsTableState(false);
    setIsBar(false);
    setIsPie(false);
  };

  const handleBar = () => {
    setIsTableState(false);
    setIsBar(true);
    setIsPie(false);
  };

  const handlePie = () => {
    setIsTableState(false);
    setIsPie(true);
    setIsBar(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  /* handle for refine results */
  const handleOpenRefineResult = () => {
    setRefineResult(!refineResult);
  };

  const handleCloseRefineResult = () => {
    setRefineResult(!refineResult);
  };

  useEffect(() => {
    axios
      .post("/poll/poll_result/", {
        poll_id: tableRowID,
      })
      .then((res) => {
        setIsData(res?.data);
        setSearchResult(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tableRowID]);

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

  const formatDate = (string) => {
    return string?.slice(0, 10); /* string.split("T", 10).join() */
  };

  useEffect(() => {
    const today = new Date();

    // Get the start and end dates from props or state
    const startDate = new Date(
      formatDate(tableData[0]?.poll_details?.poll_date)
    );
    const endDate = new Date(
      formatDate(tableData[0]?.poll_details?.poll_endDate)
    );

    if (startDate < today && endDate < today) {
      setStatus("Concluded");
    }
    // Check if startDate is equal or greater than today and endDate is greater than today
    else if (startDate >= today && endDate > today) {
      setStatus("Ongoing");
    }
    // Check if both startDate and endDate are greater than today
    else if (startDate > today && endDate > today) {
      setStatus("Upcoming");
    } else {
      setStatus("Concluded");
    }
  }, [
    tableData[0]?.poll_details?.poll_date,
    tableData[0]?.poll_details?.poll_endDate,
    tableData,
  ]);

  const statusColors =
    status === "Upcoming"
      ? "after:bg-blue-500"
      : status === "Ongoing"
      ? "after:bg-green-500"
      : "after:bg-red-400";

  return (
    <>
      <Header />
      <main className="max-h-screen w-full px-4 md:px-6 lg:px-12 text-[#082a0f]">
        <div className="flex flex-row items-center justify-between pt-2">
          <div className="flex flex-col items-start w-full my-auto mt-3 place-items-start">
            <h2 className="font-extrabold text-xl lg:text-2xl md:text-[1.4rem] capitalize pt-4 pb-2 pl-0 w-full">
              Polls Result
            </h2>
            <div className="flex flex-row items-center justify-start text-base">
              <NavLink to="/admin/polls" activeClassName={null}>
                <p className="font-bold text-[#616b62]">Manage Polls</p>
              </NavLink>
              <NavigateNextIcon
                sx={{ fontSize: "0.8rem", margin: "auto .7rem" }}
              />
              <p className="font-bold text-[#082b0e]">Poll Result</p>
            </div>
          </div>

          <div className="w-full">
            <PollsHeader
              setSearchResult={setSearchResult}
              tableData={tableData}
              handleGrid={handleGrid}
              handleList={handleList}
              handleOpenRefineResult={handleOpenRefineResult}
              showFilter={true}
              showViews={false}
              showLabel={false}
            />
          </div>
        </div>
        {/* CARDS */}
        <div className="grid w-full grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 place-items-center my-9">
          {/* First Card */}

          <>
            <div className="flex flex-col flex-1 relative border-2 border-gray-400 bg-white rounded-lg px-5 py-2 w-full h-[9rem]">
              <div className="w-full whitespace">
                <h2 className="text-base font-bold text-black whitespace-nowrap">
                  {tableData?.[0]?.poll_details?.poll_name}
                </h2>
                <span className="font-bold text-gray-500 text-[.75rem] capitalize">
                  {tableData[0]?.poll_details?.poll_category?.title}
                </span>
              </div>

              <div className="flex justify-between w-full mt-auto">
                <h3 className="text-[.9rem]">
                  <CalendarMonthOutlined
                    sx={{
                      fontSize: "0.9rem",
                      margin: "auto .2rem .2rem auto",
                    }}
                  />
                  {tableData[0]?.poll_details?.poll_date.slice(0, 10)}
                </h3>
                <h3
                  className={`text-base relative after:content-[""] after:absolute after:w-[.6rem] after:h-[.6rem] after:rounded-full ${statusColors} after:-left-3 after:top-1/2 after:-translate-y-1/2`}
                >
                  {status === "Upcoming"
                    ? "Upcoming"
                    : status === "Ongoing"
                    ? "Ongoing"
                    : "Concluded"}
                </h3>
              </div>
            </div>

            {/* Second Card  */}
            <div className="flex flex-row items-center relative border-2 border-gray-400 bg-white rounded-lg p-5 w-full h-[9rem]">
              <span className="rounded-2xl bg-[#e7f9ea] p-4 mr-4 items-start">
                <img
                  src={VOTES}
                  alt="Votes"
                  className="w-[3.5rem] h-[3.5rem] bg-[#e7f9ea]"
                />
              </span>
              <div className="flex flex-col items-start">
                <span className="pb-1 text-2xl font-extrabold">
                  {pollStatus[0]?.allUsers == null
                    ? 0
                    : pollStatus[0]?.allUsers}
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
                  +{" "}
                  {pollStatus[0]?.newUsers == null
                    ? 0
                    : pollStatus[0]?.newUsers}{" "}
                  today
                </h3>
              </div>
            </div>

            {/* Third Card */}
            <div className="border-2 border-gray-400 bg-white text-[#082a0f] rounded-lg px-4 py-3 w-full h-[9rem]">
              <PieChart />
            </div>
          </>
        </div>

        {/* ===============   Chart Table ========================*/}

        <div className="w-full px-2 md:px-4">
          <div className="flex flex-col p-4 border rounded-lg">
            <div className="flex flex-row items-center justify-between mb-10">
              <p className="font-[800] text-[#082b0e]">
                {`${tableData[0]?.poll_details?.poll_category?.title} Result`}
              </p>

              <div className="flex gap-2">
                <span className="border rounded-md my-auto flex w-auto p-2 font-[500] text-[#616b62]">
                  Total: {tableData?.length}
                </span>
                <DropDown
                  handleBar={handleBar}
                  handlePie={handlePie}
                  handleGrid={handleGrid}
                  handleList={handleList}
                />
                <CSVLink
                  filename={`${tableData?.[0]?.poll_details?.poll_name}_result_exported_on_${currentDate}.csv`}
                  data={dataforCSV()}
                  asyncOnClick={true}
                  onClick={() => exportData()}
                  className="p-2 px-3 text-center text-black transition duration-150 border rounded-md hover:bg-gray-50"
                >
                  <div className="flex flex-row items-center justify-center space-x-2">
                    <p>CSV</p>
                    <span>
                      <img src={down} alt="export" className="w-6 h-6" />
                    </span>
                  </div>
                </CSVLink>
              </div>
            </div>

            <div className="max-w-full">
              {isTableState ? (
                <TableStateResult />
              ) : isBar ? (
                <BarChart />
              ) : isPie ? (
                <PieChart2 />
              ) : (
                <TableResult data={searchResult} />
              )}
            </div>
          </div>
        </div>
      </main>

      {/*************************** Filter Result Overlay *****************************/}
      <FilterModal
        refineResult={refineResult}
        handleCloseRefineResult={handleCloseRefineResult}
      />
    </>
  );
};

export default PollsPageContentTwo;

// Add candidate
// Remove LGA | Replace Party dropdown & Main candidate checkbox
// Create poll
// Remove LGA
