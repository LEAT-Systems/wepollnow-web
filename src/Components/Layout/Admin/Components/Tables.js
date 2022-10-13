import React from "react";

const Tables = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-green-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Poll
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
              <th scope="col" className="px-6 py-3">
                Date Created
              </th>
              <th scope="col" className="px-6 py-3">
                Poll Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Presidential
              </th>
              <td className="px-6 py-4">Nationwide</td>
              <td className="px-6 py-4">September 13th , 2022</td>
              <td className="px-6 py-4">February 25th, 2023</td>
              <td className="px-6 py-4">Concluded</td>
              <td className="flex flex-row px-6 py-4 space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Presidential
              </th>
              <td className="px-6 py-4">Nationwide</td>
              <td className="px-6 py-4">September 13th , 2022</td>
              <td className="px-6 py-4">February 25th, 2023</td>
              <td className="px-6 py-4">Concluded</td>
              <td className="flex flex-row px-6 py-4 space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Presidential
              </th>
              <td className="px-6 py-4">Nationwide</td>
              <td className="px-6 py-4">September 13th , 2022</td>
              <td className="px-6 py-4">February 25th, 2023</td>
              <td className="px-6 py-4">Concluded</td>
              <td className="flex flex-row px-6 py-4 space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
