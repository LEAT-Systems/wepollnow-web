import React from "react";

const TableResultBody = ({ tableData }) => {
  return (
    <tr className='table-row' onClick={(e) => console.log(e.currentTarget.id)}>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
      >
        <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem] cursor-pointer'>
          {tableData.symbol}
        </span>{" "}
          {tableData.party}
      </th>
      <td className='px-6 py-4 cursor-pointer'>
          {tableData.candidate}
      </td>
      <td className='px-6 py-4 cursor-pointer'>
          {tableData.running_mate}
      </td>
      <td className='px-6 py-4 cursor-pointer'>
          {tableData.votes}
      </td>
      <td className='px-6 py-4 cursor-pointer'>
          {tableData.percentage}
      </td>
    </tr>
  );
};

export default TableResultBody;