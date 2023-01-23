/** @format */

import React from "react";
import TableResultBody from "./TableResultBody";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
const TableResult = ({ data }) => {
  const history = useHistory();
  const results = Array.isArray(data) ? (
    data?.map((data) => {
      return <TableResultBody key={data?.id} id={data?.id} tableData={data} />;
    })
  ) : data?.length <= 0 ? (
    <div className="flex flex-row items-center justify-center w-full h-full mx-auto my-4 text-sm font-bold text-center">
      <h2 className="mr-8 text-center">No vote was made!</h2>
    </div>
  ) : (
    <tr className="flex flex-row items-center justify-center w-full h-full mx-auto my-4 text-sm font-bold text-center">
      <td className="mr-8 text-center text-red-500">
        Something went wrong. Go back and try again.
      </td>
      <td>
        <button
          className="p-2 font-bold text-gray-600 bg-transparent border rounded hover:bg-gray-100"
          onClick={() => history.push("./polls")}
        >
          Go Back
        </button>
      </td>
    </tr>
  );

  return (
    <div className="relative w-full overflow-auto scrollable sm:rounded-lg">
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="table-head">
                Party
              </th>
              <th scope="col" className="table-head">
                Candidate
              </th>
              <th scope="col" className="table-head">
                Running Mate
              </th>
              <th scope="col" className="table-head">
                Votes
              </th>
              <th scope="col" className="table-head">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody className="border-t border-b">{results}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TableResult;
