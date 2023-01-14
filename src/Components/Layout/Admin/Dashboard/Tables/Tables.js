import React from "react";
import TableBody from "./TableBody";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Tables = ({ data, close, open }) => {
  // const results = data.map((data) => {
  //   return (
  //     <TableBody key={data.id} id={data.id} tableData={data} open={open} />
  //   );
  // });

    const history = useHistory();
    const results = Array.isArray(data) ? (
      data?.map((data) => {
        return (
          <TableBody key={data.id} id={data.id} tableData={data} open={open} />
        );
      })
    ) : data?.length <= 0 ? (
      <div className='w-full h-full flex flex-row justify-center items-center text-center font-bold text-sm my-4 mx-auto'>
        <h2 className='text-center mr-8'>No vote was made!</h2>
      </div>
    ) : (
      <div className='w-full h-full flex flex-row justify-center items-center text-center font-bold text-sm my-4 mx-auto'>
        <h2 className='text-center mr-8 text-red-500'>Something went wrong!</h2>
        <button
          className='text-gray-600 font-bold p-2 border-none bg-transparent'
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
      </div>
    );   


  return (
    <div className='relative overflow-auto scrollable sm:rounded-lg w-full'>
      <div className='relative shadow-md sm:rounded-lg'>
        {results?.length ? (
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase'>
              <tr>
                <th scope='col' className='table-head'>
                  Poll
                </th>
                <th scope='col' className='table-head'>
                  State
                </th>
                <th scope='col' className='table-head'>
                  Poll Begins
                </th>
                <th scope='col' className='table-head'>
                  Poll Ends
                </th>
                <th scope='col' className='table-head'>
                  Status
                </th>
                <th scope='col' className='table-head'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='border-t border-b'>{results}</tbody>
          </table>
        ) : results === [] ? (
          <div className='flex justify-center items-center font-bold text-lg md:text-xl text-[#333] capitalize py-5'>
            No Internet Connection
          </div>
        ) : results === null ? (
          <div className='flex justify-center items-center font-bold text-lg md:text-xl text-[#333] capitalize py-5'>
            No Internet Connection
          </div>
        ) : (
          <div className='flex justify-center items-center font-bold text-lg md:text-xl text-[#333] capitalize py-5'>
            No result found!
          </div>
        )}
        <div>
          
        </div>
      </div>

      
    </div>
  );
};

export default Tables;
