import React from 'react'

const Pagination = (totalPosts, postsPerPage) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers?.map(number => {
          return <li key={number.id}>
            {number}
          </li>
        })}
      </ul>
    </nav>
  )
}

export default Pagination
