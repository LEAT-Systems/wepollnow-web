import React, {useContext} from "react";
import Edit from "../../../assets/edit@2x.png";
import Delete from "../../../assets/trash@2x.png";
import swal from "sweetalert";
import axios from "axios";
import ModalFormContext from "../../../../../../ModalFormContextAdmin/ModalFormContext";

const ManageCandidateTableRow = ({ tableData, open }) => {

  const { candidateID, setCandidateID } = useContext(ModalFormContext);
  const getSymbol = () => {
    const string = tableData.name;
    const wordArray = string.split(" ", 2);
    const symbol = wordArray[0].slice(0, 2);
    // + wordArray[1].slice(0, 1)
    return symbol;
  };

   const parentTarget = (e) =>
     e.currentTarget.parentNode.parentNode.getAttribute("data-id");

   const handleDelete = async () => {
     await axios
       .delete(
         `https://wepollnow.azurewebsites.net/poll/rud_candidate/${candidateID}`
       )
       .then((res) => {
         console.log(res.data);
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
            console.log(parentTarget(e))
            setCandidateID(parentTarget(e))
            open();
          }}
        >
          <img src={Edit} alt='Edit' className='w-[1.1rem] h-[1.1rem]' />
        </div>
        <div
          className='text-red-500 cursor-pointer'
          onClick={(e) => {
            console.log(parentTarget(e));
            setCandidateID(parentTarget(e));
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
