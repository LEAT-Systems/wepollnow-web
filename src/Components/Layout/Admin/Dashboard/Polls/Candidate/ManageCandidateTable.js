import ManageCandidateTableRow from "./ManageCandidateTableRow.js";

const ManageCandidateTable = ({ data, open }) => {
  const results = data?.map((data) => {
    return <ManageCandidateTableRow key={data.id} id={data.id} tableData={data} open={open} />;
  });
  return (
    <div className='relative overflow-auto scrollable w-full'>
      <div className='relative shadow-md'>
        {results?.length ? (
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase'>
              <tr>
                <th scope='col' className='table-head'>
                  Candidates
                </th>
                <th scope='col' className='table-head'>
                  Polls
                </th>
                <th scope='col' className='table-head'>
                  Actions
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
