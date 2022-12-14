/** @format */

import axios from "axios";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Edit from "../../assets/edit@2x.png";
// import Archive from "../../assets/archive@2x.png";
import Delete from "../../assets/trash@2x.png";
import ModalFormContext from "../../../../../ModalFormContextAdmin/ModalFormContext";
import swal from "sweetalert";

const TableBody = ({ tableData, open }) => {
  const { tableRowID, setTableRowID } = useContext(ModalFormContext);
  const getSymbol = () => {
    const string = tableData.poll_name;
    const wordArray = string.split(" ", 2);
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
    return string.split("T", 10).join()
  }

  const statusColors =
    tableData.status === 1
      ? "after:bg-blue-500"
      : tableData.status === 2
      ? "after:bg-green-500"
      : "after:bg-red-400";

  const parentTarget = (e) =>
    e.currentTarget.parentNode.parentNode.getAttribute("data-id");

  const handleDelete = async () => {
    await axios
      .delete(
        `https://wepollnow.azurewebsites.net/poll/rud_poll/${tableRowID}`)
      .then((res) => {
        console.log(res.data)
        swal({
          title: "Success",
          text: "Poll Deleted!",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((err) => {
        console.log(err);
        if (!err?.response) {
          swal({
            title: "Success",
            text: "No Internet Connection",
            icon: "error",
            button: "Ok",
          });
        } else if (err.response?.status === 400) {
          swal({
            title: "Failure",
            text: "Something went wrong!",
            icon: "error",
            button: "Ok",
          });
        } else if (err.response?.status === 401) {
          swal({
            title: "Failure",
            text: "Unauthorized",
            icon: "error",
            button: "Ok",
          });
        } else {
          swal({
            title: "Failure",
            text: "Poll Deletion Failed",
            icon: "error",
            button: "Ok",
          });
        }
      });
    
    window.location.reload();
  };
  return (
    <tr className='table-row' data-id={tableData.id}>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-sm'
      >
        <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem]'>
          {getSymbol()}
        </span>{" "}
        <NavLink to='/admin/polls/poll_result' activeClassName={null}>
          {tableData.poll_name}
        </NavLink>
      </th>
      <td className='px-6 py-4 cursor-pointer'>
        <NavLink to='/admin/polls/poll_result' activeClassName={null}>
          {tableData.poll_state_name}
        </NavLink>
      </td>
      <td className='px-6 py-4 cursor-pointer'>
        <NavLink to='/admin/polls/poll_result' activeClassName={null}>
          {formatDate(tableData.poll_startDate)}
        </NavLink>
      </td>
      <td className='px-6 py-4 cursor-pointer'>
        <NavLink to='/admin/polls/poll_result' activeClassName={null}>
          {formatDate(tableData.poll_endDate)}
        </NavLink>
      </td>
      <td className='px-6 py-4 cursor-pointer'>
        <NavLink to='/admin/polls/poll_result' activeClassName={null}>
          <h3
            className={`relative after:content-[''] after:absolute after:w-[.6rem] after:h-[.6rem] after:rounded-full ${statusColors} after:-left-3 after:top-1/2 after:-translate-y-1/2`}
          >
            {tableData.status === 1
              ? "Upcoming"
              : tableData.status === 2
              ? "Scheduled"
              : "Concluded"}
          </h3>
        </NavLink>
      </td>
      <td className='flex flex-row px-6 py-4 space-x-2'>
        <div
          className='text-blue-500 cursor-pointer'
          onClick={(e) => {
            setTableRowID(parentTarget(e));
            console.log(parentTarget(e));
            open();
          }}
        >
          <img src={Edit} alt='Edit' className='w-[1.1rem] h-[1.1rem]' />
        </div>
        {/* <div className='text-black cursor-pointer'>
          <img src={Archive} alt='Archive' className='w-[1.1rem] h-[1.1rem]' />
        </div> */}
        <div
          className='text-red-500 cursor-pointer'
          onClick={(e) => {
            setTableRowID(parentTarget(e));
            handleDelete();
            console.log(parentTarget(e));
          }}
        >
          <img src={Delete} alt='Trash' className='w-[1.1rem] h-[1.1rem]' />
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
