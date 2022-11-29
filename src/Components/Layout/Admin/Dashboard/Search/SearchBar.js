/** @format */
import React from "react";
import { Search } from "@mui/icons-material";

const SearchBar = ({ tableData, setSearchResult, placeholder }) => {
  const handleChange = (event) => {
    /* event target */
    const target = event.target.value.toLowerCase();
    if (!target) return setSearchResult(tableData);

    /* The new table data after search */
    const newTableData = tableData.filter((tableDataItem) => {
      let valuesOfItem = Object.values(tableDataItem);

      // If user's input is found in any of the values, add that to the new list to be rendered
      let isInObject = valuesOfItem.some((value) => {
        if (typeof value === "string") {
          // check if it's string, not filtering on ID cause user doesn't see this
          return value.toLowerCase().includes(target);
        }
      });

      return isInObject;
    });

    // console.log(`Target is ${target}`);
    // console.log("Is it in the newTableData?");
    // console.log(newTableData);

    /* Update search result with the new table data */
    setSearchResult(newTableData);
  };

  const handleSubmit = (event) => {
    /* Prevent form default function */
    event.preventDefault();
  };
  return (
    <header>
      <form className='searchInp' onSubmit={handleSubmit}>
        <button className='searchIcons'>
          <Search sx={{ paddingBottom: ".1rem", margin: "auto 0"}} />
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