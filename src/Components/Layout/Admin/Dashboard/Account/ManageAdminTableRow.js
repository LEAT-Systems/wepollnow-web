import React from "react";
import Edit from "../../assets/edit@2x.png";
import Delete from "../../assets/trash@2x.png";

const ManageAdminTableRow = ({ tableData }) => {
  return (
    <tr className='table-row' onClick={(e) => console.log(e.currentTarget)}>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
      >
        <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem] cursor-pointer'>
          {tableData.symbol}
        </span>{" "}
        {tableData.name}
      </th>
      <td className='px-6 py-4 cursor-pointer'>{tableData.email}</td>
      <td className='px-6 py-4 cursor-pointer'>{tableData.role}</td>
      <td className='px-6 py-4 cursor-pointer'>{tableData.status}</td>
      <td className='flex flex-row px-6 py-4 space-x-2'>
        <div className='text-blue-500 cursor-pointer'>
          <img src={Edit} alt='Edit' className='w-[1.1rem] h-[1.1rem]' />
        </div>
        <div className='text-red-500 cursor-pointer'>
          <img src={Delete} alt='Trash' className='w-[1.1rem] h-[1.1rem]' />
        </div>
      </td>
    </tr>
  );
};

export default ManageAdminTableRow;
