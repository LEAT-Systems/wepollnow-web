import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigateNext from "@mui/icons-material/NavigateNext";

const BlogContent = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col p-8 space-y-2">
          <h2 className="text-2xl font-bold">Blog Posts</h2>
          <div className="relative flex flex-row items-center justify-start px-2 space-x-2 border border-yellow-500 rounded">
            <Link to="/wepollnow/surveys">
              <p className="font-bold">All Blog Posts</p>
            </Link>
            <NavigateNext />
            <Link to="/wepollnow/surveys/manageSurvey">
              <p className="font-bold text-gray-300">Manage Blog Posts</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full p-8 mx-auto -mt-6 space-x-12"></div>

      {/* Data Table */}
      <div className="w-full px-8">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-green-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BlogContent;
