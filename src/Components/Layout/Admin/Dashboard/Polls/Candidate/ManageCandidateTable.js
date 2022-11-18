/** @format */

import ManageCandidateTableRow from "./ManageCandidateTableRow.js";

const ManageCandidateTable = ({ data }) => {
  const results = data.map((data) => {
    return <ManageCandidateTableRow key={data.id} id={data.id} tableData={data} />;
  });
  return (
    <div className='relative overflow-auto scrollable w-full'>
      <div className='relative shadow-md'>
        {results?.length ? (
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase'>
              <tr>
                <th scope='col' className='table-head'>
                  Candidate
                </th>
                <th scope='col' className='table-head'>
                  Poll
                </th>
                <th scope='col' className='table-head'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{results}</tbody>
          </table>
        ) : (
          <div className='flex justify-center items-center font-bold text-lg md:text-xl text-[#333] capitalize py-5'>
            No result found!
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCandidateTable;
