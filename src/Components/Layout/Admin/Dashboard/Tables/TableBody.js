/** @format */

import { DeleteOutline, Inventory2Outlined, NoteAltOutlined } from "@mui/icons-material";
import React from "react";

const TableBody = ({ tableData }) => {
  console.log(tableData);
  return (
      <tr className='table-row'>
        <th
          scope='row'
          className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
        >
          <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem]'>
            {tableData.symbol}
          </span>{" "}
          {tableData.poll}
        </th>
        <td className='px-6 py-4'>{tableData.location}</td>
        <td className='px-6 py-4'>{tableData.date__created}</td>
        <td className='px-6 py-4'>{tableData.poll__date}</td>
        <td className='px-6 py-4'>{tableData.status}</td>
        <td className='flex flex-row px-6 py-4 space-x-2'>
          <div className='text-blue-500 cursor-pointer'>
            <span className='material-symbols-outlined text-[1.1rem] md:text-[1.5rem]'>
              <NoteAltOutlined fontSize='initial' />
            </span>
          </div>
          <div className='text-black cursor-pointer'>
            <span className='material-symbols-outlined text-[1rem] md:text-[1.4rem]'>
              <Inventory2Outlined fontSize='initial' />
            </span>
          </div>
          <div className='text-red-500 cursor-pointer'>
            <span className='material-symbols-outlined text-[1.16rem] md:text-[1.55rem]'>
              <DeleteOutline fontSize='initial' />
            </span>
          </div>
        </td>
      </tr>
  );
};

export default TableBody;
