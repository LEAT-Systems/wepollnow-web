/** @format */
import React, { useState } from "react";
import { Search } from "@mui/icons-material";

export default function SearchBar({ placeholder, data }) {
  const [filter, setFilter] = useState([]);

  /* Handle change */
  const handleChange = (event) => {
    const inputData = event.target.value
    /* Filter Data based onh the input */
    const filterResults = data.filter((value) => {
      return value.poll.toLowerCase().includes(inputData.toLowerCase());
    });
    setFilter(filterResults)
  }
  return (
    <main>
      <form className='searchInp'>
        <div className='searchIcons'>
          <Search />
        </div>
        <input type='search' placeholder={placeholder} onChange={handleChange} />
      </form>
      {filter.length !== 0 && (
        <div className='searchResult'>
          {data.map((value, key) => {
            return (
              <div
                key={key}
                className='text-[1.2rem] leading-5 flex items-center text-black font-semibold h-[2rem] w-full hover:bg-gray-300 px-10 py-8'
              >
                {value.poll}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
