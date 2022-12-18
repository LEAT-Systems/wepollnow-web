import React from "react";
    // {
    //     "id": 4,
    //     "voteCount": 0,
    //     "partyCandidate": [],
    //     "votePercent": 0,
    //     "name": "All Progressives Grand Alliance",
    //     "logo": "/media/party_pictures/APGA_Nigeria_Logo_aeZzed2.png"
    // }
const TableResultBody = ({ tableData }) => {

    const getSymbol = () => {
      const string = tableData?.name;
      const wordArray = string.split(" ", 2);
      let symbol;
      if (wordArray.length === 1) {
        symbol = string.slice(0, 2);
      }
      if (wordArray.length === 2) {
        symbol = string.slice(0, 1) + wordArray[1].slice(0, 1);
      }
      return symbol;
    };
  return (
    <tr className='table-row' onClick={(e) => console.log(e.currentTarget.id)}>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '
      >
        <span className='text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem]'>
          {getSymbol()}
        </span>{" "}
        {tableData?.name}
      </th>
      <td className='px-6 py-4'>{tableData?.partyCandidate[0]}</td>
      <td className='px-6 py-4'>{tableData?.partyCandidate[1]}</td>
      <td className='px-6 py-4'>{tableData?.voteCount}</td>
      <td className='px-6 py-4'>{tableData?.votePercent}</td>
    </tr>
  );
};

export default TableResultBody;
