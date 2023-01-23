/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Edit from "../../assets/edit@2x.png";
// import Archive from "../../assets/archive@2x.png";
import Delete from "../../assets/trash@2x.png";
import ModalFormContext from "../../../../../ModalFormContextAdmin/ModalFormContext";
import swal from "sweetalert";
import axios from "../../../../../api/axios";

const TableBody = ({ tableData, open }) => {
  const { tableRowID, setTableRowID } = useContext(ModalFormContext);

  useEffect(() => {
    setTableRowID(tableData?.id);
  }, [setTableRowID, tableData?.id]);

  const history = useHistory();

  const redirect = () => {
    history.push("/admin/polls/poll_result");
  };
  const getSymbol = () => {
    const string = tableData.poll_name;
    const wordArray = string?.split(" ", 2);
    let symbol;

    if (wordArray.length === 1) {
      symbol = string.slice(0, 2);
    }

    if (wordArray.length === 2) {
      symbol = string.slice(0, 1) + wordArray[1].slice(0, 1);
    }
    return symbol;
  };

  const formatDate = (string) => {
    return string.slice(0, 10); /* string.split("T", 10).join() */
  };

  const statusColors =
    tableData?.poll_startDate > Date.now
      ? "after:bg-blue-500"
      : tableData?.poll_startDate <= Date.now
      ? "after:bg-green-500"
      : tableData?.poll_endDate < Date.now
      ? "after:bg-red-400"
      : "";

  const parentTarget = (e) =>
    e.currentTarget.parentNode.parentNode.getAttribute("data-id");

  const target = (e) => e.target.getAttribute("data-id");

  const handleDelete = async () => {
    try {
      await axios
        .delete(`/poll/rud_poll/${tableRowID}`, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          swal({
            title: "Success",
            text: "Poll deleted successfully",
            icon: "success",
            buttons: [
              {
                color: "success",
                label: "OK",
              },
            ],
          });
        });
    } catch (err) {
      if (err.status === 400) {
        swal({
          title: "Oops!",
          text: "That poll does not exist",
          icon: "error",
          buttons: [
            {
              color: "error",
              label: "OK",
              isCancel: true,
            },
          ],
        });
      } else if (err.status === 401) {
        swal({
          title: "Oops!",
          text: "Check your token",
          icon: "error",
          buttons: [
            {
              color: "error",
              label: "OK",
              isCancel: true,
            },
          ],
        });
      } else if (err.status === 404) {
        swal({
          title: "Oops!",
          text: "Poll does not exist",
          icon: "error",
          buttons: [
            {
              color: "error",
              label: "OK",
              isCancel: true,
            },
          ],
        });
      } else if (err.status === 500) {
        swal({
          title: "Oops!",
          text: "Internal server error",
          icon: "error",
          buttons: [
            {
              color: "error",
              label: "OK",
              isCancel: true,
            },
          ],
        });
      } else {
        swal({
          title: "Oops!",
          text: "Something went wrong!",
          icon: "error",
          buttons: [
            {
              color: "error",
              label: "OK",
              isCancel: true,
            },
          ],
        });
      }
    }
    window.location.reload();
  };

  // await axios
  //   .delete(`/poll/rud_poll/${id}`)
  //   .then((res) => {
  //     console.log(res.data);
  //     swal({
  //       title: "Success",
  //       text: "Poll Deleted!",
  //       icon: "success",
  //       button: "Ok",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     if (!err?.response) {
  //       swal({
  //         title: "Success",
  //         text: "No Internet Connection",
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     } else if (err.response?.status === 400) {
  //       swal({
  //         title: "Failure",
  //         text: "Something went wrong!",
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     } else if (err.response?.status === 401) {
  //       swal({
  //         title: "Failure",
  //         text: "Unauthorized",
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     } else {
  //       swal({
  //         title: "Failure",
  //         text: "Poll Deletion Failed",
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     }
  //   });

  // window.location.reload();
  // }

  return (
    <tr
      className="table-row cursor-pointer"
      data-id={tableData.id}
      onClick={(e) => {
        setTableRowID(tableData.id);
        // setId(target(e));
        redirect();
      }}
    >
      <th
        scope="row"
        className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
      >
        <span className="text-white font-bold uppercase bg-green-900 mr-4 rounded-xl p-[.6rem]">
          {getSymbol()}
        </span>{" "}
        {tableData?.poll_name}
      </th>
      <td className="px-6 py-4 text-sm cursor-pointer">
        {tableData?.poll_state?.name}
      </td>
      <td className="px-6 py-4 text-sm cursor-pointer">
        {formatDate(tableData?.poll_startDate)}
      </td>
      <td className="px-6 py-4 text-sm cursor-pointer">
        {formatDate(tableData?.poll_endDate)}
      </td>
      <td className="px-6 py-4 cursor-pointer">
        <h3
          className={`relative after:content-[''] after:absolute after:w-[.6rem] after:h-[.6rem] after:rounded-full ${statusColors} after:-left-3 after:top-1/2 after:-translate-y-1/2`}
        >
          {tableData?.poll_startDate <= Date.now
            ? "Ongoing"
            : tableData?.poll_startDate > Date.now
            ? "Upcoming"
            : tableData?.poll_endDate < Date.now
            ? "Concluded"
            : ""}
        </h3>
      </td>
      <td
        className="flex flex-row px-6 py-4 space-x-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="text-blue-500 cursor-pointer"
          onClick={(e) => {
            setTableRowID(tableData.id);
            // setId(parentTarget(e));
            open();
          }}
        >
          <img src={Edit} alt="Edit" className="w-[1.1rem] h-[1.1rem]" />
        </div>
        {/* <div className='text-black cursor-pointer'>
          <img src={Archive} alt='Archive' className='w-[1.1rem] h-[1.1rem]' />
        </div> */}
        <div
          className="text-red-500 cursor-pointer delete-button"
          onClick={(e) => {
            setTableRowID(tableData.id);
            // setId(
            // e.currentTarget.parentNode.parentNode.getAttribute("data-id")
            // );
            handleDelete();
          }}
        >
          <img src={Delete} alt="Trash" className="w-[1.1rem] h-[1.1rem]" />
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
