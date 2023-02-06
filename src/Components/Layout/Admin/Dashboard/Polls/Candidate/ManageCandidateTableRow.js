/** @format */

import React, { useContext, useEffect } from "react";
import Edit from "../../../assets/edit@2x.png";
import Delete from "../../../assets/trash@2x.png";
import swal from "sweetalert";
import axios from "../../../../../../api/axios";
import ModalFormContext from "../../../../../../ModalFormContextAdmin/ModalFormContext";

const ManageCandidateTableRow = ({ tableData, open }) => {
  const { candidateID, setCandidateID } = useContext(ModalFormContext);
  const getSymbol = () => {
    const string = tableData?.name;
    const wordArray = string?.split(" ", 2);
    const symbol = wordArray[0]?.slice(0, 2);
    return symbol;
  };


  const handleDelete = async () => {
    await axios
      .delete(`/utilities/rud_candidate/${candidateID}`)
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Success",
          text: "Candidate deleted successfully",
          icon: "success",
          buttons: [
            {
              color: "success",
              label: "OK",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
        if (!err?.response) {
          swal({
            title: "Oops!",
            text: "No Internet Connection",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else if (err.response?.status === 400) {
          swal({
            title: "Failure",
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
        } else if (err.response?.status === 401) {
          swal({
            title: "Failure",
            text: "Unauthorized",
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
            text: "Candidate does not exist",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
          console.log(err);
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
          console.log(err);
        } else {
          swal({
            title: "Failure",
            text: "Candidate deletion Failed",
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
      });

    window.location.reload();
  };

  useEffect(() => {
    setCandidateID(localStorage?.getItem("tableData"));
  }, [setCandidateID, tableData?.id]);

  return (
    <tr className='table-row' data-id={tableData.id}>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
      >
        <span className='text-white text-sm font-bold uppercase bg-green-900 mr-4 rounded-xl p-[.45rem] min-w-[3rem] md:p-[.6rem] cursor-pointer'>
          {getSymbol()}
        </span>{" "}
        {tableData?.name}
      </th>
      <td className='px-6 py-4 cursor-pointer'>{tableData?.poll}</td>
      <td className='flex flex-row px-6 py-4 space-x-2'>
        <div
          className='text-blue-500 cursor-pointer'
          onClick={(e) => {
            localStorage.setItem("tableData", JSON.stringify(tableData.id));
            setCandidateID(localStorage.getItem("tableData"));
            console.log("ID: ", candidateID);
            open();
          }}
        >
          <img src={Edit} alt='Edit' className='w-[1.1rem] h-[1.1rem]' />
        </div>
        <div
          className='text-red-500 cursor-pointer'
          onClick={(e) => {
            localStorage.setItem("tableData", JSON.stringify(tableData.id));
            setCandidateID(localStorage.getItem("tableData"));
            console.log("ID: ", candidateID);
            handleDelete();
          }}
        >
          <img src={Delete} alt='Trash' className='w-[1.1rem] h-[1.1rem]' />
        </div>
      </td>
    </tr>
  );
};

export default ManageCandidateTableRow;
