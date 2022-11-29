import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Edit from "../../assets/edit@2x.png";
import Archive from "../../assets/archive@2x.png";
import Delete from "../../assets/trash@2x.png";

const TableBody = ({ tableData }) => {
  // const getSymbol = () => {
  //   const string = tableData.poll_name;
  //   // const wordArray = string.split(" ", 2);
  //   const symbol = string.slice(0, 2);
  //   // + wordArray[1].slice(0, 1);
  //   return symbol;
  // };

  // console.log(tableData);
  // {
  //     "id": 1,
  //     "poll_category": {
  //         "id": 1,
  //         "title": "Presidential"
  //     },
  //     "poll_name": "Presidential Poll",
  //     "poll_state": null,
  //     "poll_date": "2022-11-14T18:38:42.065962Z",
  //     "poll_senatorial_district": null,
  //     "poll_startDate": "2022-12-03T00:00:00Z",
  //     "poll_endDate": "2022-12-04T00:00:00Z",
  //     "status": 1
  // },

  return (
    <tr className="table-row" onClick={(e) => console.log(e.currentTarget)}>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        <span className="text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem] cursor-pointer">
          {/* {getSymbol()} */}
          {tableData.symbol}
        </span>{" "}
        <NavLink to="/admin/polls/poll_result" activeClassName={null}>
          {/* {tableData.poll_name} */}
          {tableData.poll}
        </NavLink>
      </th>
      <td className="px-6 py-4 cursor-pointer">
        <NavLink to="/admin/polls/poll_result" activeClassName={null}>
          {/* {tableData.poll_state} */}
          {tableData.location}
        </NavLink>
      </td>
      <td className="px-6 py-4 cursor-pointer">
        <NavLink to="/admin/polls/poll_result" activeClassName={null}>
          {tableData.date__created}
        </NavLink>
      </td>
      <td className="px-6 py-4 cursor-pointer">
        <NavLink to="/admin/polls/poll_result" activeClassName={null}>
          {tableData.poll__date}
        </NavLink>
      </td>
      <td className="px-6 py-4 cursor-pointer">
        <NavLink to="/admin/polls/poll_result" activeClassName={null}>
          {/* {tableData.status === 1 ? "Active" : "Inactive"}
           */}
          {tableData.status}
        </NavLink>
      </td>
      <td className="flex flex-row px-6 py-4 space-x-2">
        <div className="text-blue-500 cursor-pointer">
          <img src={Edit} alt="Edit" className="w-[1.1rem] h-[1.1rem]" />
        </div>
        <div className="text-black cursor-pointer">
          <img src={Archive} alt="Archive" className="w-[1.1rem] h-[1.1rem]" />
        </div>
        <div className="text-red-500 cursor-pointer">
          <img src={Delete} alt="Trash" className="w-[1.1rem] h-[1.1rem]" />
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
