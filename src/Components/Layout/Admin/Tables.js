import React from "react";

const Tables = (data) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg px-12 my-14'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div className='flex flex-row justify-between'>
          <span className='capitalize text-2xl text-gray-900 py-3 font-extrabold '>
            Created polls
          </span>
          <button className='text-white bg-green-500 p-4 cursor-pointer w-fit rounded-lg py-3'>
            Create Polls
          </button>
        </div>
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
                Date Created
              </th>
              <th scope='col' className='table-head'>
                Poll Date
              </th>
              <th scope='col' className='table-head'>
                Status
              </th>
              <th scope='col' className='table-head'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-row'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
              >
                <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem]'>
                  PP
                </span>{" "}
                Presidential Poll
              </th>
              <td className='px-6 py-4'>Nationwide</td>
              <td className='px-6 py-4'>22/05/2022</td>
              <td className='px-6 py-4'>22/05/2022</td>
              <td className='px-6 py-4'>Concluded</td>
              <td className='flex flex-row px-6 py-4 space-x-2'>
                <div className='text-blue-500'>
                  <span className='material-symbols-outlined text-[1.5rem]'>
                    edit_note
                  </span>
                </div>
                <div className='text-black'>
                  <span class='material-symbols-outlined text-[1.3rem]'>
                    inventory_2
                  </span>
                </div>
                <div className='text-red-500'>
                  <span class='material-symbols-outlined text-[1.5rem]'>
                    delete
                  </span>
                </div>
              </td>
            </tr>
            <tr className='table-row'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
              >
                <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem]'>
                  PP
                </span>{" "}
                Presidential Poll
              </th>
              <td className='px-6 py-4'>Lagos State</td>
              <td className='px-6 py-4'>22/10/2022</td>
              <td className='px-6 py-4'>22/05/2022</td>
              <td className='px-6 py-4'>Upcoming</td>
              <td className='flex flex-row px-6 py-4 space-x-2'>
                <div className='text-blue-500'>
                  <span className='material-symbols-outlined text-[1.5rem]'>
                    edit_note
                  </span>
                </div>
                <div className='text-black'>
                  <span class='material-symbols-outlined text-[1.3rem]'>
                    inventory_2
                  </span>
                </div>
                <div className='text-red-500'>
                  <span class='material-symbols-outlined text-[1.5rem]'>
                    delete
                  </span>
                </div>
              </td>
            </tr>
            <tr className='table-row'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
              >
                <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem]'>
                  AC
                </span>{" "}
                Gubernational Poll
              </th>
              <td className='px-6 py-4 w-fit'>Abia State</td>
              <td className='px-6 py-4'>22/10/2022</td>
              <td className='px-6 py-4'>22/12/2022</td>
              <td className='px-6 py-4'>Ongoing</td>
              <td className='flex flex-row px-6 py-4 space-x-2'>
                <div className='text-blue-500'>
                  <span className='material-symbols-outlined text-[1.5rem]'>
                    edit_note
                  </span>
                </div>
                <div className='text-black'>
                  <span class='material-symbols-outlined text-[1.3rem]'>
                    inventory_2
                  </span>
                </div>
                <div className='text-red-500'>
                  <span class='material-symbols-outlined text-[1.5rem]'>
                    delete
                  </span>
                </div>
              </td>
            </tr>
            <tr className='table-row'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
              >
                <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem]'>
                  AC
                </span>{" "}
                Gubernational Poll
              </th>
              <td className='px-6 py-4 w-fit'>Nationwide</td>
              <td className='px-6 py-4'>22/10/2022</td>
              <td className='px-6 py-4'>February 25th, 2023</td>
              <td className='px-6 py-4'>Concluded</td>
              <td className='flex flex-row px-6 py-4 space-x-2'>
                <div className='text-blue-500'>
                  <span className='material-symbols-outlined text-[1.5rem]'>
                    edit_note
                  </span>
                </div>
                <div className='text-black'>
                  <span class='material-symbols-outlined text-[1.3rem]'>
                    inventory_2
                  </span>
                </div>
                <div className='text-red-500'>
                  <span class='material-symbols-outlined text-[1.5rem]'>
                    delete
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
