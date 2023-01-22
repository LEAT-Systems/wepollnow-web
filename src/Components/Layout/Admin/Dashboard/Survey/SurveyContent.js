/** @format */
import React, { useEffect, useState } from "react";
import {
  AddOutlined,
  BorderColorOutlined,
  Close,
  Delete,
} from "@mui/icons-material";
import Header from "../../Header";
import Progress from "./Progress";
import { Modal } from "@mui/material";
import tooltipIcon from "../../../../../images/tooltip.png";
import down from "../../../../../images/down.png";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../../../store/baseUrl";
import { CSVLink } from "react-csv";

const SurveyContent = () => {
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [polls, setPolls] = useState([]);
  const [show, setShow] = useState(false);
  const [surveyType, setSurveyType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [title, setTitle] = useState("");
  const [surveyData, setSurveyData] = useState([]);
  const [tooltipStatus, setTooltipStatus] = useState(0);

  // get current date
  let currentDate = new Date().toJSON().slice(0, 10);

  // This handles pagination on the poll items
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = [...polls]
    ?.reverse()
    ?.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(polls.length / postPerPage); i++) {
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

  // This handles the deletion of added SURVEYS
  const handleDelete = (id) => {
    try {
      const getData = async () => {
        const response = await fetch(
          baseUrl + `poll/rud_survey_category/${id}`,
          { method: "DELETE" }
        );
        if (response.ok === true) {
          swal({
            title: "Action was Successful",
            icon: "success",
            buttons: {
              confirm: {
                text: "Close",
                className: "swalButton",
              },
            },
          }).then(() => handleClose());
        }
      };
      getData();
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
      });
    }
  };

  // This gets all the polls to render on page so we can get the surveys on each of them
  useEffect(() => {
    try {
      const getPollData = async () => {
        const response = await fetch(baseUrl + `poll/get_polls/`, {
          method: "GET",
        });

        const result = await response.json();
        setPolls(result);
      };
      getPollData();
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
      });
    }
  }, []);

  // This gets all the survey category so i could display percentages on the survey modal

  const getPollSurvey = (id) => {
    try {
      const getData = async () => {
        const response = await fetch(
          baseUrl + `poll/poll_survey_category/${id}`,
          {
            method: "GET",
          }
        );
        const result = await response.json();
        if (response.ok) {
          setSurveyData(result);
        }
      };
      getData();
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
      });
    }
  };

  // This gets all the surveys items from the API endpoint.
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(baseUrl + `poll/survey_category/`, {
          method: "GET",
        });
        const result = await response.json();
        if (response.ok) {
          setData(result);
        }
      };
      getData();
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
      });
    }
  });

  // Add Item Handler in to-do list
  const addHandler = (e) => {
    e.preventDefault();
    setList((prevUserList) => {
      //new state snapshot. The spread operator copies all elements from prev snapshot
      const updatedItem = [
        ...prevUserList,
        {
          id: (Math.random() + 1).toString(36).substring(7),
          title: title,
        },
      ];
      return updatedItem;
    });
    setTitle("");
  };

  // Submit Hanlder to send to-do list items to API endpoint
  const submitHandler = async () => {
    setTitle("");
    try {
      const items = list.map((item) => item.title);
      const finalData = { survey_name: items };
      const requestOptions = {
        body: JSON.stringify(finalData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      };

      const response = await fetch(
        baseUrl + `poll/poll_survey_category/`,
        requestOptions
      );
      if (response.ok === true) {
        swal({
          title: "Action Successful",
          icon: "success",
          buttons: {
            confirm: {
              text: "Close",
              className: "swalButton",
            },
          },
        }).then(() => handleClose());
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
      });
    }
  };

  // Delete Item Handler of todo list
  const deleteHandler = (id) => {
    const filtered = list.filter((el) => el.id !== id);
    setList(filtered);
  };

  // Open and close modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAdd(false);
  };

  const isEmpty = polls.length === 0;
  const EditActiveStyle =
    "bg-green-500 text-white flex items-center justify-center py-2 px-5 border border-gray-200 rounded-full cursor-pointer  text-sm md:text-base my-auto transition-all duration-700 ease hover:bg-green-500 hover:text-white hover:rounded-full";

  const EditNotActiveStyle =
    "flex items-center justify-center py-2 px-5 border border-gray-200 rounded-md cursor-pointer  text-sm md:text-base my-auto transition-all duration-700 ease  hover:bg-green-500 hover:text-white hover:rounded-full";

  return (
    <>
      <Header />
      <main className="px-4 my-4 md:px-6 lg:px-12">
        <header className="flex flex-row justify-between w-full py-4">
          <div>
            <h2 className="font-extrabold text-2xl text-[#082a0f] capitalize">
              survey
            </h2>
          </div>

          <nav className="flex h-full pl-3 my-auto space-x-2 text-gray-500">
            {/* <span className="mr-1 w-[2.6rem]">
              <img src={LinkIcon} alt="Account" className="w-full" />
            </span> */}

            <button
              className={open ? EditActiveStyle : EditNotActiveStyle}
              onClick={handleOpen}
            >
              Add New
              <AddOutlined sx={{ marginRight: ".3rem" }} />
            </button>
            <button
              className={EditNotActiveStyle}
              onClick={() => setOpenAdd(true)}
            >
              Edit
              <BorderColorOutlined
                sx={{
                  fontSize: "1rem",
                  margin: "auto auto auto 0.4rem",
                }}
              />
            </button>
            {/* <CSVLink
              filename={`survey_data_exported_on_${currentDate}.csv`}
              data={surveyData}
              className="p-2 px-4 text-center text-black transition duration-150 border rounded-md hover:rounded-full"
            >
              <div className="flex flex-row items-center justify-center space-x-2">
                <p>CSV</p>
                <span>
                  <img src={down} alt="export" className="w-6 h-6" />
                </span>
              </div>
            </CSVLink> */}
          </nav>
        </header>

        <div className="block text-[#082a0f]">
          <div className="flex flex-row items-center justify-between pb-4">
            <div className="flex flex-row items-center space-x-2">
              <h4 className="mb-3 text-lg font-medium leading-10">
                How users responded to issues that are most important to them
              </h4>
              <img
                src={tooltipIcon}
                className="w-4 h-4 mb-3"
                alt="tooltipIcon"
                onMouseEnter={() => setTooltipStatus(1)}
                onMouseLeave={() => setTooltipStatus(0)}
              />
              {tooltipStatus === 1 && (
                <div
                  role="tooltip"
                  className="absolute -mt-24 text-white transition duration-150 ease-in-out bg-black rounded shadow-lg"
                >
                  <p className="p-2 text-xs font-normal md:text-lg">
                    Click on a poll title to view more details about a poll.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/*General COntainer with Polls information  */}
          <div className="px-6 py-6 space-y-4 border border-gray-200 rounded-md">
            {isEmpty && <p>No data to show</p>}
            {currentPosts?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-start justify-between w-full p-2 px-4 border rounded hover:bg-green-50 md:flex-row md:items-center"
                >
                  <Link to="/admin/polls/polls" className="w-[20rem]">
                    <h3 className="py-2 font-bold leading-10 capitalize">
                      {item.poll_name}
                    </h3>
                  </Link>
                  <div className="w-[20rem]">
                    <h3 className="py-2 leading-10 capitalize">
                      <span className="font-bold">Date Created: </span>
                      {new Date(`${item.poll_date}`).toLocaleDateString(
                        "en-EN",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </h3>
                  </div>
                  <button
                    className="flex items-center justify-center px-3 py-2 text-sm text-white bg-[#08c127] border rounded-md shadow-xl cursor-pointer border-1 md:text-base animate"
                    onClick={() => {
                      setShow(true);
                      setSurveyType(item.poll_name);
                      getPollSurvey(item.id);
                    }}
                  >
                    View Results
                  </button>
                </div>
              );
            })}
            <div className="flex flex-row p-4 space-x-4 border border-l border-r">
              {pagination}
            </div>
          </div>
        </div>
      </main>

      {/* ADD SURVEY MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg">
          <header className="flex items-center justify-between w-full pb-3 mb-3 border-b-2 border-gray-300 border-solid">
            <h2 className="font-extrabold text-lg md:text-xl text-[#082a0f] capitalize">
              Add New survey
            </h2>
            <button
              className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500"
              onClick={handleClose}
            >
              <Close />
            </button>
          </header>

          {list?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full px-3 py-3 my-2 border-2 border-gray-300 border-solid rounded-lg"
            >
              <h2 className="font-[600] text-base text-gray-400 capitalize">
                {item.title}
              </h2>
              <button
                className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400"
                onClick={() => deleteHandler(item.id)}
              >
                <Delete />
              </button>
            </div>
          ))}

          <form
            onSubmit={addHandler}
            className="flex items-center justify-between w-full my-2 "
          >
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-[600] text-base text-gray-400 capitalize h-full w-full border-y-2 border-l-2 border-r-0 border-solid border-gray-300 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none py-4 px-3"
              placeholder="Add New Survey"
            />

            <button
              className="flex items-center justify-center h-full px-3 py-4 text-sm text-white bg-green-500 border rounded-tl-none rounded-tr-lg rounded-bl-none rounded-br-lg cursor-pointer border-1 md:text-base"
              type="submit"
            >
              <AddOutlined sx={{ marginRight: ".3rem" }} />
              Add
            </button>
          </form>

          {/* Buttons */}
          <div className="flex items-center justify-end w-full my-2">
            <button
              className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full"
              onClick={handleClose}
            >
              cancel
            </button>
            <button
              onClick={() => submitHandler()}
              className="flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out bg-green-500 rounded-md cursor-pointer duration-400 hover:bg-green-500 hover:text-white hover:rounded-full"
            >
              confirm
            </button>
          </div>
        </div>
      </Modal>

      {/* EDIT SURVEY MODAL */}
      <Modal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg">
          <header className="flex items-center justify-between w-full pb-3 mb-3 border-b-2 border-gray-300 border-solid">
            <h2 className="font-extrabold text-lg md:text-xl text-[#082a0f] capitalize">
              Edit survey
            </h2>
            <button
              className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500"
              onClick={() => setOpenAdd(false)}
            >
              <Close />
            </button>
          </header>
          {data.length === 0 && <p>No data available</p>}
          {data?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-full px-3 py-3 my-2 border-2 border-gray-300 border-solid rounded-lg"
            >
              <h2 className="font-[600] text-base text-gray-400 capitalize">
                {item.surveyName}
              </h2>
              <button
                className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base text-red-400"
                onClick={() => handleDelete(item.id)}
              >
                <Delete />
              </button>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex items-center justify-end w-full my-2">
            <button
              className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* How users reacted modal */}
      <Modal
        open={show}
        onClose={() => setShow(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-4/5 bg-white rounded-lg">
          <header className="flex items-center justify-between w-full pb-3 mb-3 border-b-2 border-gray-300 border-solid">
            <h2 className="font-extrabold text-lg md:text-xl text-[#082a0f] capitalize">
              How users responded to issues in the {surveyType}
            </h2>
            <button
              className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500"
              onClick={() => setShow(false)}
            >
              <Close />
            </button>
          </header>

          {surveyData?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between w-full px-2 py-3 md:flex-row md:items-center"
            >
              <div className="w-[20rem]">
                <h3 className="py-2 font-bold leading-10 capitalize">
                  {item.surveyName}
                </h3>
              </div>

              <Progress percentage={item.percentage} />
            </div>
          ))}

          {/* Buttons */}
          <div className="flex items-center justify-end w-full my-2">
            <button
              className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SurveyContent;
