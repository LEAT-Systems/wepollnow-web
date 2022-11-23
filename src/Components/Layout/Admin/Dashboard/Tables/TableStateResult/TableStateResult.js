/** @format */

import React from "react";
import TableStateResultBody from "./TableStateResultBody";

const data = [
  {
    id: 0,
    symbol: "AB",
    party: "All progressive Congress (APC)",
    candidate: "Bola Ahmed Tinubu",
    running_mate: "Kashim Shettima",
    votes: 43536765,
    percentage: "50%",
  },
  {
    id: 1,
    symbol: "GP",
    party: "All progressive Congress (APC)",
    candidate: "Bola Ahmed Tinubu",
    running_mate: "Kashim Shettima",
    votes: 43536765,
    percentage: "50%",
  },
  {
    id: 2,
    symbol: "AC",
    party: "All progressive Congress (APC)",
    candidate: "Bola Ahmed Tinubu",
    running_mate: "Kashim Shettima",
    votes: 43536765,
    percentage: "50%",
  },
  {
    id: 3,
    symbol: "AC",
    party: "All progressive Congress (APC)",
    candidate: "Bola Ahmed Tinubu",
    running_mate: "Kashim Shettima",
    votes: 43536765,
    percentage: "50%",
  },
  {
    id: 4,
    symbol: "AC",
    party: "All progressive Congress (APC)",
    candidate: "Bola Ahmed Tinubu",
    running_mate: "Kashim Shettima",
    votes: 43536765,
    percentage: "50%",
  },
];
const TableStateResult = () => {
  const results = data.map((data) => {
    return <TableStateResultBody key={data.id} id={data.id} tableData={data} />;
  });

  return (
    <div className='relative overflow-auto scrollable sm:rounded-lg w-full'>
      <div className='relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 tableStateResult' border='10' cellPadding='4'>
          <thead className='text-xs text-gray-700 uppercase'>
            <tr>
              <th rowSpan='2' className='table-head'>
                State
              </th>
              <th colSpan='2' className='table-head'>
                APC (Tinubu)
              </th>
              <th colSpan='2' className='table-head'>
                APC (Tinubu)
              </th>
              <th colSpan='2' className='table-head'>
                APC (Tinubu)
              </th>
              <th colSpan='2' className='table-head'>
                APC (Tinubu)
              </th>
              <th colSpan='2' className='table-head'>
                APC (Tinubu)
              </th>
            </tr>
            <tr>
              <th align="center">Value</th>
              <th align="center">%</th>
              <th align="center">Value</th>
              <th align="center">%</th>
              <th align="center">Value</th>
              <th align="center">%</th>
              <th align="center">Value</th>
              <th align="center">%</th>
              <th align="center">Value</th>
              <th align="center">%</th>
            </tr>

          </thead>
          <tbody className='border-t border-b'>
            {results}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableStateResult;
