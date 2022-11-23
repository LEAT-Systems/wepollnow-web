/** @format */

import React from "react";

const TableStateResultBody = ({ tableData }) => {
  return (
    <tr className='table-row' onClick={(e) => console.log(e.currentTarget.id)}>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
      >
        <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem] cursor-pointer'>
          Aa
        </span>{" "}
        Abia
      </th>
      <td className='px-6 py-4 cursor-pointer'>325,345</td>
      <td className='px-6 py-4 cursor-pointer'>26%</td>
      <td className='px-6 py-4 cursor-pointer'>325,345</td>
      <td className='px-6 py-4 cursor-pointer'>34%</td>
      <td className='px-6 py-4 cursor-pointer'>325,345</td>
      <td className='px-6 py-4 cursor-pointer'>34%</td>
      <td className='px-6 py-4 cursor-pointer'>325,345</td>
      <td className='px-6 py-4 cursor-pointer'>34%</td>
      <td className='px-6 py-4 cursor-pointer'>325,345</td>
      <td className='px-6 py-4 cursor-pointer'>34%</td>
    </tr>
  );
};

export default TableStateResultBody;
