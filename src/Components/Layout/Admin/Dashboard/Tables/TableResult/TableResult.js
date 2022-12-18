import React from "react";
import TableResultBody from "./TableResultBody";

// const data = [
//   {
//     id: 0,
//     symbol: "AB",
//     party: 'All progressive Congress (APC)',
//     candidate: 'Bola Ahmed Tinubu',
//     running_mate: 'Kashim Shettima',
//     votes: 43536765,
//     percentage: "50%"
//   },
//   {
//     id: 1,
//     symbol: "GP",
//     party: 'All progressive Congress (APC)',
//     candidate: 'Bola Ahmed Tinubu',
//     running_mate: 'Kashim Shettima',
//     votes: 43536765,
//     percentage: "50%"
//   },
//   {
//     id: 2,
//     symbol: "AC",
//     party: 'All progressive Congress (APC)',
//     candidate: 'Bola Ahmed Tinubu',
//     running_mate: 'Kashim Shettima',
//     votes: 43536765,
//     percentage: "50%"
//   }
// ]
const TableResult = ({data}) => {
  const results =
    (typeof data !== "object" ||
    data.length === 0) &&
      data?.map((data) => {
        return (
          <TableResultBody key={data?.id} id={data?.id} tableData={data} />
        );
      });

  return (
    <div className='relative overflow-auto scrollable sm:rounded-lg w-full'>
      <div className='relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase'>
            <tr>
              <th scope='col' className='table-head'>
                Party
              </th>
              <th scope='col' className='table-head'>
                Candidate
              </th>
              <th scope='col' className='table-head'>
                Running Mate
              </th>
              <th scope='col' className='table-head'>
                Votes
              </th>
              <th scope='col' className='table-head'>
                Percentage
              </th>
            </tr>
          </thead>
          <tbody className='border-t border-b'>{results}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TableResult;
