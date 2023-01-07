/** @format */

import ManageAdminTableRow from "./ManageAdminTableRow";

const ManageAdminTable = ({ data }) => {
  const results = data.map((data) => {
    return <ManageAdminTableRow key={data.id} id={data.id} tableData={data} />;
  });
  return (
    <div>
      <div className='relative shadow-md sm:rounded-lg'>
        {results?.length ? (
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase'>
              <tr>
                <th scope='col' className='table-head'>
                  Name
                </th>
                <th scope='col' className='table-head'>
                  Email
                </th>
                <th scope='col' className='table-head'>
                  Roles
                </th>
                <th scope='col' className='table-head'>
                  Status
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

export default ManageAdminTable;
