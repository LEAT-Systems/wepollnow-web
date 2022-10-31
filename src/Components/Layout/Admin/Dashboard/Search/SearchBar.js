/** @format */
import React, { useState } from "react";
import { Search } from "@mui/icons-material";

const SearchBar = ({ tableData, setSearchResult, placeholder }) => {

  const handleChange = (event) => {
    /* event target */
    const target = event.target.value
    if (!target) return setSearchResult(tableData)

    /* The new table data after search */
    const newTableData = tableData.filter.toLowerCase(tableData => tableData.poll.includes(target) || tableData.includes(target))

    /* Update search result with the new table data */
    setSearchResult(newTableData)
  }

  const handleSubmit = (event) => {
    /* Prevent form default function */
    event.preventDefault();
  }
  return (
    <header>
      <form className='searchInp' onSubmit={handleSubmit}>
        <button className='searchIcons'>
          <Search />
        </button>

        <input
          type='search'
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;

/* This could be used for global search and not filter search */
// export default function SearchBar({ placeholder, data }) {
//   const [filter, setFilter] = useState([]);

//   /* Handle change */
//   const handleChange = (event) => {
//     const inputData = event.target.value
//     /* Filter Data based onh the input */
//     const filterResults = data.filter((value) => {
//       return value.poll.toLowerCase().includes(inputData.toLowerCase());
//     });
//     setFilter(filterResults)
//   }
//   return (
//     <main>
//       <form className='searchInp'>
//         <div className='searchIcons'>
//           <Search />
//         </div>
//         <input type='search' placeholder={placeholder} onChange={handleChange} />
//       </form>
//       {filter.length !== 0 && (
//         <div className='searchResult'>
//           {data.map((value, key) => {
//             return (
//               <div
//                 key={key}
//                 className='text-[1.2rem] leading-5 flex items-center text-black font-semibold h-[2rem] w-full hover:bg-gray-300 px-10 py-8'
//               >
//                 {value.poll}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </main>
//   );
// }
